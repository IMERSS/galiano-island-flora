# DRAFT - report to Antranig on the Galiano Island atlas (not yet final)

## What exists

- `IMERSS/galiano-island-flora`: a third bioReportR project beside saanich-peninsula-flora and
  howe-sound-mapping-2026, mirroring Saanich's eight panes for the Galiano Island vascular plant data of Biodiversity
  Galiano. Published on GitHub Pages at https://imerss.github.io/galiano-island-flora/story/.
- Conformed to aa3e0b1 / 36560ec: shared panes, `bioreportr.yaml`, `scripts/project.R`, imerss-bioinfo 1.21.0, and
  `static/vendor` copied from Saanich.

## Data pipeline (R, project-local)

- `scripts/prepare_sources.R`: catalogue = non-iNat records of the consolidated Galiano records (Nov 2024) + iNat union
  catalogue 2025-12-30; summary from `Tracheophyta_summary_2026-04-04.csv`; Solow EP as in `apply_record_annotations.R`.
- `scripts/prepare_provisional_taxa.R`: stand-in for `assignBNames.js` (negative ids for higher taxa, no images).
- `scripts/prepare_obs.R`: withholds positions far from the island (31) and more than 100 m offshore (131).

## Shared framework changes made here (carried to Saanich and Howe)

- Year-based pacing of the Traces timeline in `bioreportr-tracesPane.vue`, settings `traces.pacing` per story.
- `intersectShapes.R` skips a layer with no shapes.
- `Protected_map_mapbox.R` copes with no published KBA (`has.kbas`), and an optional `mappedOnly` setting, with its
  counterpart on `bioreportr.protectedAreas`.
- The Howe wording "known only from outside protected areas" (Howe's `project.R`).
- `scripts/Janszen_checklists_mapbox.R` shared, with `project$janszen` (highlighted area, extra areas, card class) in
  each project's `project.R`, and deeper colours so the checklist areas read on the pale basemap.

## Issues for Antranig

- `npm run vendor` (copyout) exits silently without copying, here and in a Saanich checkout without his
  `moduleOverrides.json5` - `static/vendor` must come from Saanich.
- `assignBNames.js` from the npm package lacks `data/ranks.json` and the taxon cache.
- SFC naming: a namespace named after an SFC's file is replaced by its lazy creator (hit while sharing the pacing).
- Rmds of both projects still name data files directly, against the new rule in AGENTS.md.

- `bioreportr-tracesPane.vue`: the map's dimming is CSS properties (`--mxcw-traces-brightness`, `--mxcw-traces-saturation`,
  defaults unchanged), lightened by Galiano; the "Seen again" card text follows the story's `recentYear`.

## Galiano-only refinements (project settings, not framework)

- `recentYear: 2004` in `galiano-story.vue` - the Biodiversity Galiano summary's "reported" taxa are largely last recorded
  in Janszen's 2003 Outer Gulf Islands checklist, so 2000 described them wrongly.

- `recordColumns` in `galiano-story.vue` trimmed to what helps find a plant again (date, taxon, locality, position,
  uncertainty, elevation, recorder, evidence, establishment, occurrence id); the CSV download keeps every field.
- Community Science wording in `TopContributions.Rmd` ("the island", iNaturalist placed up front).
- The same record columns set in Saanich's driver. Howe sets no record columns.
- Data refreshed 14 Nov from the Biodiversity Galiano consolidated records (new digitized sources, UBC georeferences):
  24,737 records (from 22,348), 23,927 of them mapped.

## Living data curation from the Biodiversity Galiano workflow

- `scripts/prepare_working_list.R` (Galiano's own) writes the inputs of the shared `prepare_excluded_taxa.R` and
  `prepare_curation_history.R` in the alignment workflow's shapes, from the Biodiversity Galiano curation:
  - working list (`bioreportr-prep.yaml` workingList): the checklist's 812 taxa, with the 379 synonyms the curators
    resolved (SYNONYM rules, consolidation key matches) in `verbatim_taxon_name`; 68 excluded (standing DELETE rules -
    mapped onto Saanich's annotations: 50 persisting or waif, 10 reviewed not carried to the list, 8 doubtful); 50 review remaining
  - penultimate catalogue (big_data): every iNaturalist observation, for the 78 names never reviewed
- `project$curation$flags` and review_status as Saanich's (doubtful, persisting or waif, planted; complete, in progress, remaining). History: 305 entries.
- A stand-in until the whole Biodiversity Galiano workflow (aggregation, synthesis, summary, taxonomy, curation) is
  brought into the repository.

- Logical typing: only taxa are set aside, not records. A name counts as excluded only if the checklist recognizes its
  taxon under no name - same name, an infrataxon of its species, a curator-resolved synonym, or iNaturalist's taxonomy
  (cached in `nameResolutions`). 19 record-level decisions are left out, e.g. "unresolved infrataxon" on Plectritis
  congesta, or a rejected report of Triteleia howellii (= T. grandiflora). Now 56 excluded; Galiano has no Under review tab - its queued and never-reviewed names were mostly garden plants from single records - and no penultimate catalogue.
  The upstream review pipeline should eventually emit this distinction itself; the adapter's rule is the spec.

## Still open (to settle before sending)

- Whether `recordColumns` should become a shared default on the story page, rather than set alike in each driver.
- The consolidated Galiano records were rebuilt on 14 Nov but not yet committed upstream - refresh again once final.
