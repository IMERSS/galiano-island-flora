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

# Positions far from Galiano Island are errors in the source - e.g. latitude 8.87 for 48.87, or longitude -122.38 for
# -123.38 - which would stretch any fit of the map to the records across the continent. They are withheld, leaving the
# record unmapped, and listed in tabular_data/Galiano_Tracheophyta_bad-coordinates.csv to be corrected at the source
outside <- !is.na(filtered$decimalLatitude) &
  (filtered$decimalLatitude < 48.80 | filtered$decimalLatitude > 49.08 |
   filtered$decimalLongitude < -123.70 | filtered$decimalLongitude > -123.20)
timedWrite(filtered[outside, ] %>% select(taxon_name, eventDate, recordedBy, occurrenceID, catalogNumber, decimalLatitude,
                                          decimalLongitude), "tabular_data/Galiano_Tracheophyta_bad-coordinates.csv")
filtered$decimalLatitude[outside] <- NA
filtered$decimalLongitude[outside] <- NA

# Positions in the water more than 100 m from any shore - of Galiano Island, its islets or its neighbours, from
# spatial_data/vectors/Land.geojson, clipped from the Salish Sea islands layer of janszen-legacy-storymap - are noise,
# e.g. a generalised or mistyped position, and are likewise withheld, leaving the record unmapped, and listed in
# tabular_data/Galiano_Tracheophyta_offshore-coordinates.csv. Positions within 100 m of a shore are kept, since the
# shoreline is drawn coarsely and plants of the beaches and bluffs are recorded at its edge
sf::sf_use_s2(FALSE)
land <- st_read("spatial_data/vectors/Land.geojson", quiet = TRUE) %>% st_transform(3005) %>% st_union()
located <- which(!is.na(filtered$decimalLatitude))
points <- st_transform(st_as_sf(filtered[located, ], coords = c("decimalLongitude", "decimalLatitude"), crs = 4326), 3005)
offshore <- located[as.numeric(st_distance(points, land)) > 100]
wg("Withholding the positions of {length(offshore)} records more than 100 m from a shore")
timedWrite(filtered[offshore, ] %>% select(taxon_name, eventDate, recordedBy, occurrenceID, catalogNumber, decimalLatitude,
                                           decimalLongitude), "tabular_data/Galiano_Tracheophyta_offshore-coordinates.csv")
filtered$decimalLatitude[offshore] <- NA
filtered$decimalLongitude[offshore] <- NA

rawAssigned <- timedFread("tabular_data/Galiano_Tracheophyta_summary_2026-04-04-assigned.csv")

assigned <- rawAssigned %>% select(c(scientificName, iNaturalistTaxonId))

withId <- merge(filtered, assigned, by.x = "taxon_name", by.y = "scientificName")

withId <- withId %>% filter(!is.na(iNaturalistTaxonId) & iNaturalistTaxonId != 0)

timedWrite(withId, "tabular_data/Galiano_Tracheophyta_catalogue_2025-12-30-selected-orig.csv")



