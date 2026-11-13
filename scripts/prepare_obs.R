library(dplyr)
library(stringr)
library(sf)

source("scripts/utils.R")

# Reduce columns in obs data for visualisation

rawObs <- timedFread("big_data/Galiano_Tracheophyta_catalogue_2025-12-30.csv")

# Columns of the source catalogue which the visualisation does not use, where present
unusedCols <- c("day", "month", "year", "quality_grade", "phylum", "kingdom", "class", "order", "family", "verbatimScientificName", "verbatimScientificNameAuthorship", "commonName", "elevationAccuracy", "image_url", "taxonRank", "taxonKey", "publishingOrgKey", "iNatObsID", "link_taxon_id", "link_name", "coordinatePrecision", "scientificNameAuthority", "countryCode", "stateProvince", "occurrenceStatus", "speciesKey", "lastInterpreted", "mediaType", "issue",
               # Grouping columns leaked by get_unique_obs() in checklist-catalogue-alignment-workflow
               "as.character(rounded_lat)", "as.character(rounded_lon)")

filtered <- rawObs %>% select(-any_of(unusedCols))

filtered$decimalLatitude[filtered$coordinates_obscured == TRUE] <- NA
filtered$decimalLongitude[filtered$coordinates_obscured == TRUE] <- NA

filtered <- filtered %>% select(-c(coordinates_obscured))

rawAssigned <- timedFread("tabular_data/Galiano_Tracheophyta_summary_2026-04-04-assigned.csv")

assigned <- rawAssigned %>% select(c(scientificName, iNaturalistTaxonId))

withId <- merge(filtered, assigned, by.x = "taxon_name", by.y = "scientificName")

withId <- withId %>% filter(!is.na(iNaturalistTaxonId) & iNaturalistTaxonId != 0)

timedWrite(withId, "tabular_data/Galiano_Tracheophyta_catalogue_2025-12-30-selected-orig.csv")



