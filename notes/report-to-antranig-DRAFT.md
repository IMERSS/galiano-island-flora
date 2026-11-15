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

## Galiano-only refinements (project settings, not framework)

- `recordColumns` in `galiano-story.vue` trimmed to what helps find a plant again (date, taxon, locality, position,
  uncertainty, elevation, recorder, evidence, establishment, occurrence id); the CSV download keeps every field.
- Community Science wording in `TopContributions.Rmd` ("the island", iNaturalist placed up front).
- The same record columns set in Saanich's driver. Howe sets no record columns.
- Data refreshed 14 Nov from the Biodiversity Galiano consolidated records (new digitized sources, UBC georeferences):
  24,737 records (from 22,348), 23,927 of them mapped.

## Still open (to settle before sending)

- Whether `recordColumns` should become a shared default on the story page, rather than set alike in each driver.
- The consolidated Galiano records were rebuilt on 14 Nov but not yet committed upstream - refresh again once final.
