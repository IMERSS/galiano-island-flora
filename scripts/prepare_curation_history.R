library(dplyr)
library(stringr)

source("scripts/utils.R")

# Prepare the history of the curatorial notes on each taxon, shown by the History tab of the curation pane. For the
# Saanich Peninsula these are drawn from the accounts of Szczawinski & Harrison, Harvey Janszen and the Flora of the
# Pacific Northwest. For Galiano Island, which has no such accounts, the only notes are those of the Biodiversity Galiano
# summary's Notes column, shown as the reviewers' critical notes. Each taxon is given the id by which the site knows it,
# matched on its scientific name in the prepared summary, which must be prepared first - see scripts/prepare_summary.R.
# The output is copied into the site by R/build.R

galiano_root <- Sys.getenv("BIODIVERSITY_GALIANO", "../adfsimon-bioinfo/Biodiversity_Galiano")
summary_file <- file.path(galiano_root, "review/Plantae_et_Chromista/vascular_plants/summaries/Tracheophyta_summary_2026-04-04.csv")
taxa_file <- "tabular_data/Galiano_Tracheophyta_summary_2026-04-04-prepared-taxa.csv"
history_file <- "tabular_data/Galiano_Tracheophyta_curation-history_2026-04-04.csv"

# A note's text, or "" if it has none
clean <- function (text) {
  text <- ifelse(is.na(text) | text == "NA", "", text)
  str_trim(text)
}

summary <- timedFread(summary_file) %>% filter(Phylum == "Tracheophyta")
taxa <- timedFread(taxa_file) %>%
  filter(!is.na(scientificName) & scientificName != "") %>%
  select(id, scientificName) %>%
  distinct(scientificName, .keep_all = TRUE)

history <- summary %>%
  transmute(scientificName = Taxon, original = "", harvey = "", fpnw = "", critical = clean(Notes), reviewedBy = "") %>%
  distinct(scientificName, .keep_all = TRUE) %>%
  inner_join(taxa, by = "scientificName") %>%
  filter(critical != "") %>%
  select(id, scientificName, original, harvey, fpnw, critical, reviewedBy)

timedWrite(history, history_file)
