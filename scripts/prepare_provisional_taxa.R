library(dplyr)
library(stringr)

source("scripts/utils.R")

# PROVISIONAL stand-in for imerss-bioinfo's assignBNames.js, which assigns each taxon of the summary to iNaturalist's
# taxonomy, writing the summary's "-assigned.csv" and its tree of taxa "-assigned-taxa.csv", with each taxon's common
# name and image, from iNaturalist's API. Until that is run:
#
#   node node_modules/imerss-bioinfo/src/assignBNames.js tabular_data/Galiano_Tracheophyta_summary_2026-04-04-orig.csv --DwCA --swaps tabular_data/taxon-swaps.csv
#
# this script writes files of the same shape from the hierarchy held in the Biodiversity Galiano summary itself. Each
# species takes its iNaturalist taxon id from the summary's ID column; the higher taxa, whose iNaturalist ids are not
# known here, are given negative ids of their own, and no taxon has an image. Once assignBNames.js has run, its output
# overwrites both files and this script should not be run again.

galiano_root <- Sys.getenv("BIODIVERSITY_GALIANO", "../adfsimon-bioinfo/Biodiversity_Galiano")
summary_file <- file.path(galiano_root, "review/Plantae_et_Chromista/vascular_plants/summaries/Tracheophyta_summary_2026-04-04.csv")

orig_file <- "tabular_data/Galiano_Tracheophyta_summary_2026-04-04-orig.csv"
assigned_file <- "tabular_data/Galiano_Tracheophyta_summary_2026-04-04-assigned.csv"
taxa_file <- "tabular_data/Galiano_Tracheophyta_summary_2026-04-04-assigned-taxa.csv"

orig <- timedFread(orig_file)
summary <- timedFread(summary_file) %>% filter(Phylum == "Tracheophyta") %>% distinct(Taxon, .keep_all = TRUE)

blankToNA <- function (x) ifelse(is.na(x) | x == "", NA, x)

hier <- summary %>% transmute(
  scientificName = Taxon,
  iNaturalistTaxonId = ID,
  commonName = Common.Name,
  subphylum = blankToNA(Subphylum),
  class = blankToNA(Class),
  subclass = blankToNA(Subclass),
  superorder = blankToNA(Superorder),
  order = blankToNA(Order),
  family = blankToNA(Family),
  subfamily = blankToNA(Subfamily),
  tribe = blankToNA(Tribe),
  genus = blankToNA(Genus),
  species = blankToNA(Species),
  subspecies = blankToNA(Subspecies),
  variety = blankToNA(Variety)
)

# The root of the tree, with iNaturalist's own ids
root <- data.frame(
  id = c(48460, 47126, 211194),
  parentId = c(NA, 48460, 47126),
  iNaturalistTaxonName = c("Life", "Plantae", "Tracheophyta"),
  commonName = c("life", "Plants", "Vascular Plants"),
  rank = c("stateofmatter", "kingdom", "phylum"),
  iNaturalistTaxonImage = NA
)

treeRanks <- c("subphylum", "class", "order", "family", "genus")

# Allocate a negative id to each distinct higher taxon, keyed by its rank and name
higher <- bind_rows(lapply(treeRanks, function (rank) {
  data.frame(rank = rank, name = sort(unique(na.omit(hier[[rank]]))))
}))
higher$id <- -seq_len(nrow(higher))
higherId <- function (rank, name) higher$id[match(paste(rank, name), paste(higher$rank, higher$name))]

# The parent of a taxon at a given rank is its nearest named ancestor
parentOf <- function (row, upTo) {
  ranks <- rev(treeRanks[seq_len(upTo - 1)])
  for (rank in ranks) {
    if (!is.na(row[[rank]])) {
      return(higherId(rank, row[[rank]]))
    }
  }
  211194
}

higherRows <- bind_rows(lapply(seq_len(nrow(higher)), function (i) {
  h <- higher[i, ]
  example <- hier[which(hier[[h$rank]] == h$name)[1], ]
  data.frame(id = h$id, parentId = parentOf(example, match(h$rank, treeRanks)), iNaturalistTaxonName = h$name,
             commonName = NA, rank = h$rank, iNaturalistTaxonImage = NA)
}))

leafRank <- function (row) {
  if (!is.na(row$variety)) "variety" else if (!is.na(row$subspecies)) "subspecies" else if (str_detect(row$scientificName, "×")) "hybrid" else "species"
}

leafRows <- bind_rows(lapply(seq_len(nrow(hier)), function (i) {
  row <- hier[i, ]
  data.frame(id = row$iNaturalistTaxonId, parentId = parentOf(row, length(treeRanks) + 1),
             iNaturalistTaxonName = row$scientificName, commonName = row$commonName, rank = leafRank(row),
             iNaturalistTaxonImage = NA)
})) %>% filter(!is.na(id)) %>% distinct(id, .keep_all = TRUE)

taxa <- bind_rows(root, higherRows, leafRows)

assigned <- orig %>%
  left_join(hier, by = "scientificName") %>%
  mutate(iNaturalistTaxonName = scientificName, kingdom = "Plantae", infraorder = NA, superfamily = NA,
         nameStatus = "provisional") %>%
  select(all_of(names(orig)), iNaturalistTaxonId, iNaturalistTaxonName, kingdom, subphylum, class, subclass, superorder,
         order, infraorder, superfamily, family, subfamily, tribe, genus, species, subspecies, variety, nameStatus)

timedWrite(assigned, assigned_file)
timedWrite(taxa, taxa_file)
