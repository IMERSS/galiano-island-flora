library(dplyr)
library(stringr)

source("scripts/utils.R")

# Apply the extirpation probabilities inferred by the Galiano Plant Extirpation Study ("Operationalising a protocol for
# the detection of species extirpation: a localised approach to a global problem", in review at Plants, People,
# Planet) to the taxa it targeted. The study's estimates combine the Solow prior with mapped search effort and habitat,
# and so supersede the Solow EP computed from the dates of records alone.
#
# Reads the study's island-wide estimates, named as studyEstimates in bioreportr.yaml (from the study's
# Analysis_outputs/extirpation_statistics.csv, Population = "all"), and writes the central estimate as the taxon's EP,
# solow_EP, in the prepared summary named as summary in bioreportr.yaml. Only that value on the taxon's own line is
# changed, so that the rest of the file is left as it was.
#
# Run after scripts/apply_record_annotations.R, which recalculates the EP of taxa with suspended records, so that the
# study's estimate is the one which stands for its taxa

config <- yaml::read_yaml("bioreportr.yaml")$data
estimates_file <- file.path("tabular_data", config$studyEstimates)
taxa_file <- file.path("tabular_data", config$summary)

estimates <- timedFread(estimates_file)
taxa <- timedFread(taxa_file)
lines <- readLines(taxa_file, encoding = "UTF-8")

# Replace the value of one field of a line of the CSV file as written, any quoted field before it being taken whole
set_field <- function (line, column, value) {
  pattern <- paste0("^((?:\"(?:[^\"]|\"\")*\"|[^,]*),){", column - 1, "}")
  prefix <- str_extract(line, pattern)
  rest <- substr(line, nchar(prefix) + 1, nchar(line))
  paste0(prefix, sub("^[^,]*", value, rest))
}

ep_column <- which(names(taxa) == "solow_EP")

for (i in seq_len(nrow(estimates))) {
  rows <- which(taxa$scientificName == estimates$taxon_name[i])
  if (length(rows) == 0) {
    warning("Taxon of the extirpation study not found in the summary: ", estimates$taxon_name[i])
  }
  for (r in rows) {
    ep <- as.character(round(estimates$EP_central[i], 3))
    lines[r + 1] <- set_field(lines[r + 1], ep_column, ep)
    message(estimates$taxon_name[i], ": EP ", taxa$solow_EP[r], " -> ", ep, " (extirpation study, ",
            estimates$EP_low[i], " - ", estimates$EP_high[i], ")")
  }
}

writeLines(lines, taxa_file, useBytes = TRUE)
