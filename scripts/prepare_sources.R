library(dplyr)
library(stringr)

source("scripts/utils.R")

# Assemble the Galiano Island vascular plant catalogue and summary from the outputs of the Biodiversity Galiano
# workflow (https://github.com/adfsimon/adfsimon-bioinfo, Biodiversity_Galiano), in the shapes which the Saanich
# Peninsula Flora pipeline expects. This takes the place of checklist-catalogue-alignment-workflow, which produces the
# Saanich catalogue and list:
#
#   - big_data/Galiano_Tracheophyta_catalogue_2025-12-30.csv - every record, read next by scripts/prepare_obs.R
#   - tabular_data/Galiano_Tracheophyta_summary_2026-04-04-orig.csv - the reduced summary, ready for assignBNames.js
#
# The catalogue unites the historical (non-iNaturalist) records of the consolidated Galiano vascular plant records with
# the iNaturalist observations of the Galiano union catalogue of 2025-12-30, which supersede the older iNaturalist
# records of the consolidated file.
#
# Each taxon's extirpation probability, solow_EP, is computed here by Solow's (1993) method from the years of its
# records - a stand-in for the EP which the Saanich alignment workflow supplies.

galiano_root <- Sys.getenv("BIODIVERSITY_GALIANO", "../adfsimon-bioinfo/Biodiversity_Galiano")

summary_file <- file.path(galiano_root, "review/Plantae_et_Chromista/vascular_plants/summaries/Tracheophyta_summary_2026-04-04.csv")
consolidated_file <- file.path(galiano_root, "consolidate_records/Plantae_et_Chromista/vascular_plants/synthesized/Galiano_Island_vascular_plant_records_consolidated.csv")
inat_file <- file.path(galiano_root, "parse_records/iNat_records/Galiano_Union_Catalogue_2025_12_30-assigned.csv")

catalogue_file <- "big_data/Galiano_Tracheophyta_catalogue_2025-12-30.csv"
summary_orig_file <- "tabular_data/Galiano_Tracheophyta_summary_2026-04-04-orig.csv"

catalogueColumns <- c("taxon_name", "eventDate", "occurrenceID", "gbifID", "basisOfRecord", "recordedBy", "decimalLatitude",
                      "decimalLongitude", "coordinateUncertaintyInMetres", "elevation", "locality", "individualCount",
                      "institutionCode", "collectionCode", "catalogNumber", "recordNumber", "identifiedBy", "dateIdentified",
                      "license", "rightsHolder", "typeStatus", "establishmentMeans", "coordinates_obscured")

# --- The summary --------------------------------------------------------------------------------------------------

summary <- timedFread(summary_file) %>% filter(Phylum == "Tracheophyta")

# --- The historical records ---------------------------------------------------------------------------------------

blank <- function (x) is.na(x) | x == ""

consolidated <- timedFread(consolidated_file)

historical <- consolidated %>%
  filter(datasetName != "iNaturalist") %>%
  mutate(basisOfRecord = case_when(
    basisOfRecord == "PreservedSpecimen" ~ "PRESERVED_SPECIMEN",
    basisOfRecord == "HumanObservation" ~ "HUMAN_OBSERVATION",
    basisOfRecord == "MaterialCitation" ~ "MATERIAL_CITATION",
    TRUE ~ "OCCURRENCE"
  )) %>%
  transmute(
    taxon_name = scientificName,
    eventDate = as.character(eventDate),
    occurrenceID = ifelse(blank(occurrenceID), ifelse(blank(catalogNumber), NA, catalogNumber), occurrenceID),
    gbifID = NA,
    basisOfRecord,
    recordedBy,
    decimalLatitude,
    decimalLongitude,
    coordinateUncertaintyInMetres = coordinateUncertaintyInMeters,
    elevation = verbatimElevation,
    locality,
    individualCount,
    institutionCode,
    # The source of a list record is named by its dataset, e.g. Janszen's Outer Gulf Islands checklist
    collectionCode = ifelse(blank(collectionCode), datasetName, collectionCode),
    catalogNumber,
    recordNumber,
    identifiedBy,
    dateIdentified = NA,
    license = NA,
    rightsHolder = NA,
    typeStatus = NA,
    establishmentMeans,
    coordinates_obscured = FALSE
  )

# --- The iNaturalist observations ---------------------------------------------------------------------------------

inat <- timedFread(inat_file) %>% filter(phylum == "Tracheophyta")

# Name each observation as its taxon is named in the summary, matching by iNaturalist taxon id, else by name
summaryById <- summary %>% filter(!is.na(ID)) %>% distinct(ID, .keep_all = TRUE) %>% select(ID, Taxon)

inatRecords <- inat %>%
  left_join(summaryById, by = c("taxon_id" = "ID")) %>%
  transmute(
    taxon_name = ifelse(blank(Taxon), scientific_name, Taxon),
    eventDate = as.character(observed_on),
    occurrenceID = paste0("https://www.inaturalist.org/observations/", id),
    gbifID = NA,
    basisOfRecord = "HUMAN_OBSERVATION",
    recordedBy = ifelse(blank(user_name), user_login, user_name),
    # The private position of an obscured observation is used where the catalogue holds one
    decimalLatitude = ifelse(is.na(private_latitude), latitude, private_latitude),
    decimalLongitude = ifelse(is.na(private_longitude), longitude, private_longitude),
    coordinateUncertaintyInMetres = positional_accuracy,
    elevation = NA,
    locality = NA,
    individualCount = NA,
    institutionCode = "iNaturalist",
    collectionCode = "Observations",
    catalogNumber = id,
    recordNumber = NA,
    identifiedBy = NA,
    dateIdentified = NA,
    license = NA,
    rightsHolder = NA,
    typeStatus = NA,
    establishmentMeans = ifelse(captive %in% c(TRUE, "true"), "cultivated", NA),
    # Obscured positions without a private position are generalised, and so withheld by prepare_obs.R
    coordinates_obscured = coordinates_obscured %in% c(TRUE, "true") & is.na(private_latitude)
  )

# Reconcile the remaining iNaturalist names with the summary's: a trinomial, written by iNaturalist without its "ssp."
# or "var.", takes the summary's name of that infrataxon, and a species which the summary lists only as a single
# infrataxon, e.g. Pseudotsuga menziesii as Pseudotsuga menziesii var. menziesii, takes that infrataxon's name
bareName <- function (name) str_squish(str_replace_all(name, "\\b(ssp|subsp|var)\\. ", ""))
summaryBare <- data.frame(Taxon = summary$Taxon, bare = bareName(summary$Taxon))
soleInfrataxon <- summaryBare %>%
  mutate(species = word(Taxon, 1, 2)) %>%
  filter(str_count(bare, " ") == 2) %>%
  group_by(species) %>%
  filter(n() == 1, !species %in% summary$Taxon) %>%
  ungroup()

reconcile <- function (name) {
  ifelse(name %in% summary$Taxon, name,
         coalesce(summaryBare$Taxon[match(bareName(name), summaryBare$bare)],
                  soleInfrataxon$Taxon[match(name, soleInfrataxon$species)],
                  name))
}

inatRecords$taxon_name <- reconcile(inatRecords$taxon_name)
historical$taxon_name <- reconcile(historical$taxon_name)

catalogue <- bind_rows(
  historical %>% mutate(across(everything(), as.character)),
  inatRecords %>% mutate(across(everything(), as.character))
) %>% select(all_of(catalogueColumns))

dir.create("big_data", showWarnings = FALSE)
timedWrite(catalogue, catalogue_file)

# --- Solow's extirpation probability ------------------------------------------------------------------------------

# The probability that a taxon is extirpated, from the years of its records, by Solow's (1993) method, over the period
# of all the dated records - as scripts/apply_record_annotations.R computes it, which recalculates it for any taxon with
# records suspended, and as the site computes it for a population, see bioreportr.solowBayesFactor in
# static/bioreportr/js/solow.js
solow_ep <- function (years, baseline_year, analysis_year) {
  years <- sort(years)
  T <- analysis_year - baseline_year
  n <- length(years)
  tn <- years[n] - baseline_year
  B <- if (n == 0 || tn <= 0) {
    0
  } else if (n == 1) {
    ln_ratio <- log(T / tn)
    if (ln_ratio <= 0) 0 else 1 / ln_ratio
  } else {
    denominator <- (T / tn) ^ (n - 1) - 1
    if (denominator <= 0) Inf else (n - 1) / denominator
  }
  pp <- if (is.infinite(B)) 1 else B / (1 + B)
  1 - pp
}

years <- suppressWarnings(as.integer(substr(catalogue$eventDate, 1, 4)))
firstYear <- min(years, na.rm = TRUE)
lastYear <- max(years, na.rm = TRUE)

solow <- data.frame(taxon_name = catalogue$taxon_name, year = years) %>%
  filter(!is.na(year)) %>%
  group_by(taxon_name) %>%
  summarise(solow_EP = round(solow_ep(year, firstYear, lastYear), 3), .groups = "drop")

# --- The reduced summary ------------------------------------------------------------------------------------------

vouchered <- unique(catalogue$taxon_name[catalogue$basisOfRecord == "PRESERVED_SPECIMEN"])

provincialConcern <- function (status) {
  case_when(
    str_detect(status, "S[123]") ~ "concern",
    str_detect(status, "S[45]") ~ "secure",
    TRUE ~ "unknown"
  )
}

reducedList <- summary %>%
  left_join(solow, by = c("Taxon" = "taxon_name")) %>%
  transmute(
    scientificName = Taxon,
    link_name = Taxon,
    link_taxon_id = ID,
    taxon_rank = case_when(
      !blank(Hybrid) | str_detect(Taxon, "×") ~ "hybrid",
      !blank(Variety) ~ "variety",
      !blank(Subspecies) ~ "subspecies",
      TRUE ~ "species"
    ),
    infrataxon_status = ifelse(!blank(Variety) | !blank(Subspecies), "infrataxon", "non-infrataxon"),
    provenance_status = ifelse(Taxon %in% vouchered, "voucher", "no_voucher"),
    provincial_concern = provincialConcern(Provincial.Status),
    introduction_status = ifelse(Origin %in% c("native", "exotic"), Origin, "unknown"),
    reportingStatus = case_when(
      Reporting.Status == "confirmed" ~ "confirmed",
      str_detect(Reporting.Status, "^new") ~ "new",
      Reporting.Status == "reported" ~ "unconfirmed",
      TRUE ~ "unknown"
    ),
    solow_EP = solow_EP,
    phylum = "Tracheophyta"
  )

timedWrite(reducedList, summary_orig_file)

# Next: node node_modules/imerss-bioinfo/src/assignBNames.js tabular_data/Galiano_Tracheophyta_summary_2026-04-04-orig.csv --DwCA
