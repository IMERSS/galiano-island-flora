# Fetch the protected and conserved areas, and the Key Biodiversity Areas, of Galiano Island, and write them as the
# shapes from which the Protected Areas pane is drawn and against which intersectShapes.R labels each record. After
# the script of the same name in saanich-peninsula-flora.
#
# Sources, each queried for the island's bounding box and clipped to its shore buffered by 500 m, which keeps the
# reserves of its islets, such as Retreat Island:
#   - Canadian Protected and Conserved Areas Database (CPCAD), Environment and Climate Change Canada,
#     Open Government Licence - Canada
#   - KBA Canada published and candidate (proposed) Key Biodiversity Areas, served by NatureServe Canada,
#     CC BY-NC-SA 4.0
#
# Run by hand when the sources are to be refreshed - never as a step of the build. It writes
#   spatial_data/vectors/Protected_Areas/Protected_Areas.geojson - one polygon per area, without overlaps, with its
#     name, its owner and its category, which gives the "Protected" region of intersectShapes.R
#   spatial_data/vectors/KBA/KBA.geojson - one polygon per published KBA, with its name, code and criteria, and the
#     label of all of them together
#   spatial_data/vectors/KBA/KBA_proposed.geojson - one point per proposed KBA, with its name and stage of review
#
# Galiano Island has as yet no published KBA, so KBA.geojson holds no features. Two proposed KBAs meet the island -
# Mount Sutil & Mount Galiano Bluffs, and Active Pass, whose point lies offshore - so a proposed KBA is chosen by whether
# its extent, which KBA Canada's full coverage service gives as a minimum bounding circle, meets the island, rather than
# by its point alone

library(dplyr)
library(sf)
library(stringr)

source("scripts/utils.R")

sf::sf_use_s2(FALSE)

# The island's shore buffered by 500 m, measured in BC Albers
boundary <- st_union(st_read("spatial_data/vectors/Galiano.geojson", quiet = TRUE)) %>%
  st_transform(3005) %>% st_buffer(500) %>% st_transform(4326)
bbox <- st_bbox(boundary)
envelope <- paste(bbox[c("xmin", "ymin", "xmax", "ymax")], collapse = ",")

# Query a layer for the island's bounding box, or another envelope given as "xmin,ymin,xmax,ymax"
arcgis_query <- function (service, envelope = get("envelope", envir = globalenv())) {
  url <- str_glue("{service}/query?where=1%3D1&geometry={envelope}&geometryType=esriGeometryEnvelope&inSR=4326",
                  "&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=4326&f=geojson")
  wg("Fetching {service}")
  st_make_valid(st_read(url, quiet = TRUE))
}

clip <- function (shapes) {
  clipped <- suppressWarnings(st_intersection(shapes, boundary))
  clipped <- clipped[!st_is_empty(clipped), ]
  st_collection_extract(clipped, "POLYGON")
}

# ── Protected and conserved areas ─────────────────────────────────────────

cpcad <- arcgis_query("https://maps-cartes.ec.gc.ca/arcgis/rest/services/CWS_SCF/CPCAD/MapServer/0")

# The categories shown on the map, in order of precedence: where areas overlap, the earlier category keeps the ground
categories <- c(
  "National park reserve",
  "Ecological reserve",
  "Provincial park",
  "Migratory bird sanctuary",
  "Regional park",
  "Water supply area",
  "Private conservation land"
)

categorise <- function (type, owner) {
  case_when(
    type == "National Park Reserve" ~ "National park reserve",
    owner == "Parks Canada Agency" ~ "National park reserve",
    type == "Ecological Reserve" ~ "Ecological reserve",
    str_detect(type, "Park$") & str_detect(owner, "British Columbia") ~ "Provincial park",
    type == "Migratory Bird Sanctuary" ~ "Migratory bird sanctuary",
    type == "Regional Park" ~ "Regional park",
    type == "Water Supply Area" ~ "Water supply area",
    str_detect(type, "Private") ~ "Private conservation land",
    TRUE ~ NA_character_
  )
}

areas <- cpcad %>%
  transmute(name = NAME_E, owner = str_remove(OWNER_E, " \\(Lead Organization\\)$"), type = TYPE_E,
            category = categorise(TYPE_E, OWNER_E)) %>%
  filter(!is.na(category)) %>%
  clip()

unknown <- setdiff(unique(cpcad$TYPE_E), unique(cpcad$TYPE_E[!is.na(categorise(cpcad$TYPE_E, cpcad$OWNER_E))]))
if (length(unknown) > 0) {
  wg("Warning: CPCAD types not given a category: {paste(unknown, collapse = ', ')}")
}

# Remove overlaps so that each point of ground falls in one area, the first in order of precedence, and the
# intersection of each record with the areas is unambiguous
# Within a category, larger areas first - measured in BC Albers, since st_area of longitude/latitude needs lwgeom
areas <- areas[order(match(areas$category, categories), -as.numeric(st_area(st_transform(areas, 3005)))), ]
claimed <- NULL
pieces <- list()
for (i in seq_len(nrow(areas))) {
  area <- areas[i, ]
  if (!is.null(claimed)) {
    area <- suppressWarnings(st_difference(area, claimed))
  }
  if (nrow(area) > 0 && !all(st_is_empty(area))) {
    area <- st_collection_extract(area, "POLYGON")
    pieces[[length(pieces) + 1]] <- area
    claimed <- `if`(is.null(claimed), st_union(area), st_union(c(claimed, st_union(area))))
  }
}
areas <- do.call(rbind, pieces)

# Each area's name is its label on the map and in the records' "ProtectedArea" region, so it must be unique and
# readable: names in capitals are put in title case (keeping any word with letters outside A-Z, such as SENĆOŦEN
# names, as written), and generic names are told apart by their owners
title_case <- function (name) {
  words <- str_split(name, " ")[[1]]
  plain <- str_detect(words, "^[A-Z(),'/.-]+$")
  words[plain] <- str_to_title(words[plain])
  words <- str_replace_all(words, c("^Of$" = "of", "^And$" = "and"))
  paste(words, collapse = " ")
}
areas <- areas %>%
  mutate(name = ifelse(str_detect(name, "[a-z]"), name, vapply(name, title_case, character(1))),
         name = str_replace(name, " Of Canada$", " of Canada"),
         name = str_replace(name, "/JOHN Dean", "/John Dean"),
         name = ifelse(str_detect(name, "^Privately Protected Area"), str_glue("{owner} protected area"), name)) %>%
  group_by(name) %>%
  mutate(owner = paste(unique(owner), collapse = "; "), type = first(type), category = first(category)) %>%
  group_by(name, owner, type, category) %>% summarise(.groups = "drop")
if (any(duplicated(areas$name))) {
  wg("Warning: protected area names are not unique: {paste(areas$name[duplicated(areas$name)], collapse = ', ')}")
}
wg("Writing {nrow(areas)} protected and conserved areas")

dir.create("spatial_data/vectors/Protected_Areas", showWarnings = FALSE)
st_write(areas, "spatial_data/vectors/Protected_Areas/Protected_Areas.geojson", delete_dsn = TRUE, quiet = TRUE)

# ── Key Biodiversity Areas ────────────────────────────────────────────────

kba.service <- "https://gis.natureserve.ca/arcgis/rest/services/EBAR-KBA"

# A query meeting no published KBA, as for Galiano Island as yet, returns no attributes at all, so an empty layer of
# the same shape is made for it
published.raw <- arcgis_query(str_glue("{kba.service}/KBA_Accepted_Sites/FeatureServer/0"))
published <- `if`(nrow(published.raw) == 0,
  st_sf(name = character(), code = character(), status = character(), stage = character(), criteria = character(),
        geometry = st_sfc(crs = 4326)),
  published.raw %>% transmute(name = nationalname, code = sitecode, status = "Published", stage = "Published",
                              criteria = criteriasummary_en))

# Each KBA also carries the label of all the published KBAs together, the "KBAs" region of intersectShapes.R
kbas <- published %>% clip() %>%
  group_by(name, code, status, stage, criteria) %>% summarise(.groups = "drop") %>%
  mutate(all = "Published Key Biodiversity Areas")
wg("Writing {nrow(kbas)} published Key Biodiversity Areas")

dir.create("spatial_data/vectors/KBA", showWarnings = FALSE)
st_write(kbas, "spatial_data/vectors/KBA/KBA.geojson", delete_dsn = TRUE, quiet = TRUE)

# The boundaries of proposed KBAs are not public until they are published - KBA Canada gives only a point for each,
# and in its full coverage service a minimum bounding circle, by which those meeting the island are chosen
coverage <- arcgis_query(str_glue("{kba.service}/KBA_FullCoverage_Canada/FeatureServer/1"))
meeting <- coverage[lengths(suppressMessages(st_intersects(coverage, boundary))) > 0, ]
# The point of a proposed KBA meeting the island may lie outside the island's bounding box, as Active Pass's does, so
# the points are sought within the extent of the circles meeting it
candidate <- arcgis_query(str_glue("{kba.service}/KBA_InProgress_Sites/FeatureServer/0"),
                          paste(st_bbox(meeting)[c("xmin", "ymin", "xmax", "ymax")], collapse = ",")) %>%
  transmute(name = nationalname, code = sitecode, status = "Proposed", stage = sitestatus_en, criteria = NA_character_)
proposed <- candidate %>% filter(name %in% meeting$name)
wg("Writing {nrow(proposed)} proposed Key Biodiversity Areas, as points")
st_write(proposed, "spatial_data/vectors/KBA/KBA_proposed.geojson", delete_dsn = TRUE, quiet = TRUE)
