# The settings, beyond its data files named in bioreportr.yaml and bioreportr-prep.yaml, of the Galiano Island project read by the shared scripts of the bioReportR framework, such as
# scripts/intersectShapes.R and scripts/Protected_map_mapbox.R. This file is the project's own, and is not copied by
# copyFrameworkOut.sh

# The project's data files: those its story page reads, named in bioreportr.yaml, and those which only prepare them,
# named in bioreportr-prep.yaml
config <- c(yaml::read_yaml("bioreportr.yaml")$data, yaml::read_yaml("bioreportr-prep.yaml")$data)

project <- list(
  # The year from which a record counts as recent, shared with the story page through the settings of bioreportr.yaml
  recentYear = yaml::read_yaml("bioreportr.yaml")$settings$recentYear,
  # The source catalogue, whose records are labelled with the regions they fall in
  obsFile = file.path("tabular_data", config$catalogue),
  # The index of the shapes the records are intersected with - see spatial_data/vectors
  shapeIndexFile = file.path("tabular_data", config$shapeIndex),
  # The summary of the catalogue's taxa
  summaryFile = file.path("tabular_data", config$summary),
  # The settings of the curation history, read by scripts/prepare_curation_history.R from the Biodiversity Galiano summary,
  # named as the list in bioreportr-prep.yaml - its one source, the summary's Notes, given as the field "notes" as
  # curationHistorySources in galiano-story.vue names it, and the notes of the taxa kept off the checklist, from the
  # working list written by scripts/prepare_working_list.R
  # The columns of the checklist naming each taxon and giving its provincial and national statuses, read by
  # scripts/assign_conservation_status.R for any taxon which the BC CDC's rankings don't rank
  conservation = list(name = "Taxon", provincial = "Provincial.Status", national = "National.Status"),
  curation = list(
    nameColumn = "Taxon",
    idColumn = "ID",
    history = list(notes = "Notes"),
    # The notes' reviewers' signatures, e.g. "(QC)" or "-AS, HJ", are spelled out
    expandInitials = "notes",
    reviewedBy = NULL,
    # The reviewers who sign the notes with their initials - in citations, e.g. "HJ (2001)", initials are left as written
    reviewers = c(
      AS = "Andrew Simon",
      HJ = "Harvey Janszen",
      QC = "Quentin Cronk"
    ),
    automatic = c(),
    # The flags of the working list by which the curators exclude a taxon, each with the label shown for it - those of
    # the Saanich Peninsula, onto which scripts/prepare_working_list.R maps the Biodiversity Galiano decisions
    flags = c(is_doubtful = "doubtful", is_persisting_or_waif = "persisting or waif", is_planted = "planted")
  ),
  # The settings of the map of Harvey Janszen's checklists in the pane in memory of him, read by
  # scripts/Janszen_checklists_mapbox.R: the area picked out as the project's own - Galiano Island, which lies within
  # his Outer Gulf Islands checklist and so is drawn over it from the project's own boundary
  janszen = list(
    highlight = "Galiano",
    extraAreas = data.frame(folder = "Galiano", name = "Galiano Island", path = "spatial_data/vectors/Galiano.geojson")
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
