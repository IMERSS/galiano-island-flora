# For the Saanich Peninsula, this script reduced the "ultimate list" of checklist-catalogue-alignment-workflow to the
# summary read by assignBNames.js. For Galiano Island, scripts/prepare_sources.R writes that reduced summary,
# tabular_data/Galiano_Tracheophyta_summary_2026-04-04-orig.csv, directly from the Biodiversity Galiano outputs.
#
# Pipeline, from the project's root:
#   Rscript scripts/prepare_sources.R
#   node node_modules/imerss-bioinfo/src/assignBNames.js tabular_data/Galiano_Tracheophyta_summary_2026-04-04-orig.csv --DwCA --swaps tabular_data/taxon-swaps.csv
#     (until that can be run, Rscript scripts/prepare_provisional_taxa.R writes provisional files of the same shape)
#   Rscript scripts/prepare_summary_final.R
#   Rscript scripts/prepare_obs.R
#   Rscript scripts/intersectShapes.R
#   Rscript scripts/apply_record_annotations.R
#   Rscript scripts/prepare_curation_history.R
