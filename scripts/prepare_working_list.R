library(dplyr)
library(stringr)

source("scripts/utils.R")

# Gather the taxa which the Biodiversity Galiano curation excluded from the checklist, with the curators' decisions and
# notes, into the working list which the shared scripts/prepare_excluded_taxa.R and scripts/prepare_curation_history.R
# read for the Lost Plants gallery's Excluded tab - in the shape of the working list of
# checklist-catalogue-alignment-workflow, from which the Saanich Peninsula's comes. This takes the place of
# that workflow for Galiano Island, as scripts/prepare_sources.R does for its catalogue and summary, until the whole
# Biodiversity Galiano workflow is brought into the project.
#
# The working list, named as workingList in bioreportr-prep.yaml, holds a row for each taxon of the checklist, reviewed
# and carried to it - as the workflow's working list does, so that the shared script knows the species under which the
# catalogue may name the checklist's infrataxa - and one for each species-level name kept off the checklist, with its
# curators' flags, its review status and its note:
#   - the standing rules of the review cycle (review/.../outputs/Galiano_Tracheophyta_taxon_rule_log.csv) deleting a
#     taxon as non-established - flagged persisting or waif - or as an unresolved infrataxon - reviewed, not carried
#     to the list
#   - the names rejected while the historical and digitized records were consolidated
#     (consolidate_records/.../keys/review_key.csv, a Critical.Note beginning "DELETE"), e.g. names misapplied or
#     misidentified - flagged doubtful
# Galiano Island has no taxa under review: the names of its current review cycle not yet decided, and those catalogued
# but never reviewed, are mostly garden plants known from a single record, which a gallery of taxa awaiting review
# would only confuse - so neither is gathered, there is no penultimate catalogue, and the gallery has no Under review
# tab.
# Their annotations are those of the Saanich Peninsula's working list - the flags is_doubtful, is_persisting_or_waif and
# is_planted, and the review_status complete, in progress or remaining - so that the shared scripts and the gallery
# describe both projects' taxa alike. A note holds only a curator's own annotation, as the Saanich Peninsula's do, e.g.
# "unresolved infrataxon" or "Rejected; name misapplied to S. aucuparia".
# Genus-level names, and those dropped automatically for their rank (the exclusion change log), are left out, since no
# plant can be looked for under them.
#
# Only taxa are set aside, not records: a name is kept off the checklist as a taxon only if its taxon is recognized on
# the checklist under no name at all - not under the same name, nor as an infrataxon of its species, nor as a synonym
# the curators resolved, nor under the name to which iNaturalist's taxonomy resolves it. A decision on a name whose
# taxon is recognized - e.g. "unresolved infrataxon" on Plectritis congesta, listed as its subspecies, or a report of
# Triteleia howellii rejected, which iNaturalist treats as Triteleia grandiflora, on the checklist - was a decision on
# its records, and is left out. The names resolved by iNaturalist are kept in a lookup, named as nameResolutions in
# bioreportr-prep.yaml, which is consulted first, so that the project rebuilds without the network once it is filled.

galiano_root <- Sys.getenv("BIODIVERSITY_GALIANO", "../adfsimon-bioinfo/Biodiversity_Galiano")
review_dir <- file.path(galiano_root, "review/Plantae_et_Chromista/vascular_plants/outputs")
rule_log_file <- file.path(review_dir, "Galiano_Tracheophyta_taxon_rule_log.csv")
key_file <- file.path(galiano_root, "consolidate_records/Plantae_et_Chromista/vascular_plants/keys/review_key.csv")
consolidated_file <- file.path(galiano_root, "consolidate_records/Plantae_et_Chromista/vascular_plants/synthesized/Galiano_Island_vascular_plant_records_consolidated.csv")
inat_file <- file.path(galiano_root, "parse_records/iNat_records/Galiano_Union_Catalogue_2025_12_30-assigned.csv")

prep <- yaml::read_yaml("bioreportr-prep.yaml")$data
summary <- timedFread(file.path("tabular_data", prep$list))
working_list_file <- file.path("tabular_data", prep$workingList)
resolutions_file <- file.path("tabular_data", prep$nameResolutions)

blank <- function (x) is.na(x) | x == ""
species_level <- function (name) str_detect(name, " ") & !str_detect(name, " sp\\.?$")

# ── The records under each name, from both sources ──────────────────────────────────────────────────────────────────

inat <- timedFread(inat_file) %>% filter(phylum == "Tracheophyta")
historical <- timedFread(consolidated_file) %>% filter(datasetName != "iNaturalist")

records <- bind_rows(
  inat %>% transmute(name = scientific_name, date = as.character(observed_on), research = quality_grade == "research",
                     id = as.character(taxon_id), common = common_name, family = family),
  historical %>% transmute(name = scientificName, date = as.character(eventDate), research = FALSE, id = NA_character_,
                           common = NA_character_, family = family)
) %>% mutate(date = ifelse(blank(date), NA, substr(date, 1, 10)))

record_stats <- records %>%
  group_by(name) %>%
  summarise(
    inat_id = as.character(first(na.omit(id))),
    inat_common = first(na.omit(common[!blank(common)])),
    inat_family = first(na.omit(family[!blank(family)])),
    n_total = n(),
    n_research_grade = sum(research, na.rm = TRUE),
    first_record_date = suppressWarnings(min(date, na.rm = TRUE)),
    last_record_date = suppressWarnings(max(date, na.rm = TRUE)),
    .groups = "drop"
  ) %>%
  mutate(across(c(first_record_date, last_record_date), ~ ifelse(is.infinite(.x), NA, .x)))

# ── The names kept off the checklist ─────────────────────────────────────────────────────────────────────────────────

rules <- timedFread(rule_log_file) %>%
  filter(Curator.Decision == "DELETE", species_level(Taxon)) %>%
  transmute(Taxon, ID = NA_character_, common_name = NA_character_, family = NA_character_, introduction_status = NA_character_,
            is_doubtful = "", is_persisting_or_waif = ifelse(Curator.Notes == "non-established", "yes", ""),
            is_planted = "", review_status = "complete",
            # The curators' annotation of the rule, e.g. "unresolved infrataxon"
            Notes = Curator.Notes)

kept <- intersect(rules$Taxon, summary$Taxon)
if (length(kept) > 0) {
  wg("Warning: taxa with a standing DELETE rule which are still in the summary, left on the checklist: {paste(kept, collapse = ', ')}")
}

rejected <- timedFread(key_file) %>%
  filter(str_detect(Critical.Note, "^DELETE"), species_level(Taxon)) %>%
  transmute(Taxon, ID = NA_character_, common_name = NA_character_, family = NA_character_, introduction_status = NA_character_,
            is_doubtful = ifelse(str_detect(Critical.Note, "(?i)non-established"), "", "yes"),
            is_persisting_or_waif = ifelse(str_detect(Critical.Note, "(?i)non-established"), "yes", ""),
            is_planted = "", review_status = "complete",
            # The curators' annotation itself, e.g. "Rejected; name misapplied to S. aucuparia"
            Notes = str_remove(Critical.Note, "^DELETE: "))

# The names the curators have resolved to each taxon of the checklist - the SYNONYM rules of the review cycle, e.g.
# "Syn. Achillea millefolium complex", and the names matched in consolidation - held, as the workflow's working list
# holds them, in verbatim_taxon_name, separated by "; ", so that the shared script doesn't list them as never reviewed
synonyms <- bind_rows(
  timedFread(rule_log_file) %>% filter(Curator.Decision == "SYNONYM") %>%
    transmute(name = Taxon, accepted = str_trim(str_remove(Curator.Notes, "^Syn\\.\\s*"))),
  timedFread(key_file) %>% filter(!blank(Matched.Taxon), Matched.Taxon != Taxon) %>%
    transmute(name = Taxon, accepted = Matched.Taxon)
) %>%
  filter(!blank(name), !blank(accepted)) %>%
  distinct() %>%
  group_by(accepted) %>%
  summarise(verbatim_taxon_name = paste(name, collapse = "; "), .groups = "drop")

# The checklist's own taxa, reviewed and carried to it
listed <- summary %>%
  left_join(synonyms, by = c("Taxon" = "accepted")) %>%
  transmute(Taxon, verbatim_taxon_name, ID = as.character(ID), common_name = Common.Name, family = Family,
            introduction_status = ifelse(Origin %in% c("native", "exotic"), Origin, NA_character_),
            is_doubtful = "", is_persisting_or_waif = "", is_planted = "", review_status = "complete",
            Notes = "")

# ── Which names' taxa the checklist recognizes ────────────────────────────────────────────────────────────────────────

species_of <- function (name) str_extract(name, "^\\S+ (× )?\\S+")

# The name and id under which iNaturalist's taxonomy places each name, from the lookup, or else from iNaturalist's taxa
# API, observing its requested limit of a request a second
resolve_names <- function (names) {
  cache <- if (file.exists(resolutions_file)) timedFread(resolutions_file) %>% mutate(across(everything(), as.character)) else
    data.frame(name = character(), resolvedName = character(), resolvedId = character(), resolvedRank = character())
  missing <- setdiff(names, cache$name)
  if (length(missing) > 0) {
    found <- bind_rows(lapply(missing, function (name) {
      Sys.sleep(1)
      url <- paste0("https://api.inaturalist.org/v1/taxa?per_page=5&q=", utils::URLencode(name, reserved = TRUE))
      results <- tryCatch(jsonlite::fromJSON(url)$results, error = function (e) NULL)
      match <- if (is.null(results) || length(results) == 0) NULL else {
        exact <- which(tolower(results$matched_term) == tolower(name))
        if (length(exact) > 0) results[exact[1], ] else NULL
      }
      data.frame(name = name, resolvedName = if (is.null(match)) NA_character_ else match$name,
                 resolvedId = if (is.null(match)) NA_character_ else as.character(match$id),
                 resolvedRank = if (is.null(match)) NA_character_ else match$rank)
    }))
    cache <- bind_rows(cache, found)
    timedWrite(cache, resolutions_file)
  }
  cache %>% filter(name %in% names)
}

listed_species <- unique(species_of(summary$Taxon))
listed_synonyms <- unique(str_trim(unlist(str_split(synonyms$verbatim_taxon_name[synonyms$accepted %in% summary$Taxon], ";"))))

# Why each name's taxon counts as recognized on the checklist, or "" if it doesn't
recognized_as <- function (names) {
  resolved <- resolve_names(unique(names))
  r <- resolved[match(names, resolved$name), ]
  case_when(
    names %in% summary$Taxon ~ "listed",
    species_of(names) %in% listed_species ~ "species listed",
    names %in% listed_synonyms ~ "synonym listed",
    !is.na(r$resolvedId) & r$resolvedId %in% as.character(summary$ID) ~ paste("listed as", r$resolvedName),
    !is.na(r$resolvedName) & species_of(r$resolvedName) %in% listed_species ~ paste("listed as", r$resolvedName),
    TRUE ~ ""
  )
}

# A name decided by a standing rule or rejected stands as excluded, wherever else it appears off the checklist
setAside <- bind_rows(rules, rejected) %>%
  distinct(Taxon, .keep_all = TRUE) %>%
  mutate(recognized = recognized_as(Taxon))
recordLevel <- setAside %>% filter(recognized != "")
if (nrow(recordLevel) > 0) {
  wg("Left out as decisions on records, their taxa being recognized on the checklist: ",
     "{paste0(recordLevel$Taxon, ' (', recordLevel$recognized, ')', collapse = '; ')}")
}

workingList <- setAside %>%
  filter(recognized == "") %>%
  select(-recognized) %>%
  bind_rows(listed) %>%
  left_join(record_stats, by = c("Taxon" = "name")) %>%
  mutate(ID = coalesce(ifelse(blank(ID), NA, ID), inat_id),
         common_name = coalesce(ifelse(blank(common_name), NA, common_name), inat_common),
         family = coalesce(ifelse(blank(family), NA, family), inat_family),
         n_total = coalesce(n_total, 0L), n_research_grade = coalesce(n_research_grade, 0L),
         confidence = NA_character_) %>%
  select(Taxon, ID, verbatim_taxon_name, common_name, family, introduction_status, confidence, n_total, n_research_grade,
         first_record_date, last_record_date, is_doubtful, is_persisting_or_waif, is_planted, review_status,
         Notes)

offList <- workingList %>% filter(!(Taxon %in% summary$Taxon))
wg("Working list: {nrow(listed)} on the checklist, {nrow(offList)} excluded")
timedWrite(workingList, working_list_file)
