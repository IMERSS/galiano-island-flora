# The settings, beyond its data files named in bioreportr.yaml, of the Galiano Island project read by the shared scripts of the bioReportR framework, such as
# scripts/intersectShapes.R and scripts/Protected_map_mapbox.R. This file is the project's own, and is not copied by
# copyFrameworkOut.sh

# The project's data files are named in bioreportr.yaml, which the story page reads too
config <- yaml::read_yaml("bioreportr.yaml")$data

project <- list(
  # The source catalogue, whose records are labelled with the regions they fall in
  obsFile = file.path("tabular_data", config$catalogue),
  # The index of the shapes the records are intersected with - see spatial_data/vectors
  shapeIndexFile = file.path("tabular_data", config$shapeIndex),
  # The summary of the catalogue's taxa
  summaryFile = file.path("tabular_data", config$summary),
  # The settings of the map of Harvey Janszen's checklists in the pane in memory of him, read by
  # scripts/Janszen_checklists_mapbox.R: the area picked out as the project's own - Galiano Island, which lies within
  # his Outer Gulf Islands checklist and so is drawn over it from the project's own boundary - and the class of the
  # hover cards, styled by galiano-rememberingPane.vue
  janszen = list(
    highlight = "Galiano",
    extraAreas = data.frame(folder = "Galiano", name = "Galiano Island", path = "spatial_data/vectors/Galiano.geojson"),
    labelClass = "galiano-checklist-name"
  ),
  # The settings of the Protected Areas pane's map and summaries, read by scripts/Protected_map_mapbox.R
  protected = list(
    # The categories of protected area, in order of precedence, coloured from the site's own: its blue, sand and
    # purple, softened greens and teal, set on the dark satellite base
    # set on the dark satellite base - those of the Saanich Peninsula, of which Galiano Island has four
    palette = data.frame(
      category = c("National park reserve", "Ecological reserve", "Provincial park", "Migratory bird sanctuary",
                   "Regional park", "Water supply area", "Private conservation land"),
      color = c("#5a96d2", "#decb90", "#8cc084", "#9fd0e0", "#4fae98", "#7c86c9", "#a593d8")
    ),
    # Each category in the plural, as it opens a sentence - or in the singular, for a category of a single area, as
    # Galiano Island's one ecological reserve and one regional park
    categoryPlural = c("National park reserve" = "The national park reserve", "Ecological reserve" = "The ecological reserve",
      "Provincial park" = "Provincial parks", "Migratory bird sanctuary" = "Migratory bird sanctuaries",
      "Regional park" = "The regional park", "Water supply area" = "Water supply areas",
      "Private conservation land" = "Private conservation lands"),
    # The island's shore, framing the study area
    boundary = function () sf::st_read("spatial_data/vectors/Galiano.geojson", quiet = TRUE),
    view = list(lon = -123.42, lat = 48.925, zoom = 10.4),
    # The story keeps only the records which can be mapped on this pane, since many native species are known only from
    # list records without a position, which would leave the map nothing to fit - see mappedOnly in
    # bioreportr-protectedPane.vue and galiano-story.vue
    mappedOnly = TRUE,
    # The wording of the summaries - see default.text in scripts/Protected_map_mapbox.R for the figures each is given
    text = list(
      overview = function (v) str_glue("Based on our current knowledge, {v$stats$protected.percent} percent of the ",
        "{v$stats$species} native vascular plant species known to the island have been reported within its ",
        "protected and conserved areas, from provincial parks and its ecological reserve to the lands held by the Galiano ",
        "Conservancy Association, the Islands Trust Conservancy, the Galiano Club and other conservancies. The other ",
        "{v$stats$unprotected} have so far been recorded only outside them."),
      category = function (v) str_glue("{v$plural(v$category)} {ifelse(v$n == 1, 'holds', 'hold')} {v$percent(length(v$ids))} percent ",
        "of the native plant diversity known to the island: {length(v$ids)} of its {v$stats$species} native ",
        "vascular plant species have been reported within {ifelse(v$n == 1, 'it', 'them')}."),
      # Its rank among the areas of its category, e.g. ", the 3rd richest of its 16 regional parks"
      standing = function (v) `if`(v$peers > 1, str_glue(", the {`if`(v$rank == 1, '', paste0(v$ordinal(v$rank), ' '))}richest of its ",
        "{v$peers} {tolower(v$plural(v$category))}"), ""),
      area = function (v) `if`(length(v$ids) == 0, str_glue("No native species have yet been reported within {v$name}."),
        str_glue("{length(v$ids)} native species, {v$percent(length(v$ids))} percent of the native plant diversity known to ",
          "the island, have been reported within {v$name}{v$standing}.")),
      unprotected = function (v) str_glue("{v$stats$unprotected} native species, {v$percent(v$stats$unprotected)} percent of ",
        "the native plant diversity known to the island, have so far been reported only outside its protected and ",
        "conserved areas. The map's grid shows where their records lie - the places where protection does not yet reach ",
        "this part of the flora, or where it has yet to be looked for within the protected areas."),
      # Shown only once the island has a published KBA - see has.kbas in scripts/Protected_map_mapbox.R
      kbas = function (v) str_glue("Key Biodiversity Areas mark the places that matter most for the persistence of species and ",
        "ecosystems. The island holds {v$published} published Key Biodiversity Areas, and {v$proposed} more are proposed. ",
        "Together the published KBAs hold {v$percent(v$stats$kba)} percent of the native plant diversity known to the ",
        "island: {v$stats$kba} of its {v$stats$species} native vascular plant species have been ",
        "reported within them."),
      kba = function (v) `if`(length(v$ids) == 0, str_glue("No native species have yet been reported within {v$name}."),
        str_glue("{length(v$ids)} native species, {v$percent(length(v$ids))} percent of the native plant diversity known to ",
          "the island, have been reported within {v$name}.")),
      records = "records of native species",
      unique = "species reported in no other category",
      unprotectedKba = "reported within a Key Biodiversity Area"
    )
  )
)
