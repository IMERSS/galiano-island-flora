<fluid-import src="../../bioreportr/sfc/bioreportr-storyPage.vue"></fluid-import>
<!-- The Atlas's filters of records by time period - its filter by locality is a collector filter over another field -->
<fluid-import src="galiano-timePeriodFilter.vue"></fluid-import>
<!-- The iNaturalist panels of the Top Contributions pane -->
<script src="%@imerss/inat-components/dist/standalone.min.js" fluid-client data-fl-scope="global"></script>
<!-- The three panes of this story alone, each rendering its section from its own template - see paneComponent in
     the front matter of content/story/LostPlants.Rmd, Traces.Rmd and Remembering.Rmd -->
<fluid-import src="galiano-tracesPane.vue"></fluid-import>
<fluid-import src="galiano-lostPlantsPane.vue"></fluid-import>
<fluid-import src="galiano-rememberingPane.vue"></fluid-import>
<!-- The atlas's tiles, panel and tooltips and the rest particular to this story, which build on the story page's own
     summaries in story.js -->
<script src="../../bioreportr/js/story.js"></script>
<script src="../js/galiano.js"></script>
<script>
"use strict";

// The story page of Galiano Island vascular plant report, with its atlas - see static/local/js/galiano.js - and
// the three panes of this story alone, each defined by a Single File Component of its own beside this one: the opening
// timeline, In Memory of Plants, the gallery of lost plants, and the pane in memory of Harvey Janszen. Its paths are
// relative to the story page, served at /story/, whose panes are written by src/js/storyBuild.js into static/story

fluid.registerNamespace("galiano");

// The proportion of the maximum count shown by each cell of the map's grid is scaled by a Weibull distribution, so
// that the few cells with very many observations do not wash out the rest - see the legend
galiano.weibullCount = (x, maxCount) => maxCount < 200 ? x : 1 - Math.exp(-Math.pow(x / 0.012, 0.5));

galiano.inverseWeibullCount = (x, maxCount) => maxCount < 200 ? x : 0.012 * Math.pow(-Math.log(1 - x), 1 / 0.5);

fluid.def("galiano.story", {
    $layers: "bioreportr.storyPage",
    obsFile: "../local/data/tabular/Galiano_Tracheophyta_catalogue_2025-12-30-selected-labels.csv",
    obsPlaceholderFile: "../local/data/tabular/placeholder/Galiano_Tracheophyta_catalogue_2025-12-30-selected-labels.csv",
    taxaFile: "../local/data/tabular/Galiano_Tracheophyta_summary_2026-04-04-prepared-taxa.csv",
    taxaPlaceholderFile: "../local/data/tabular/placeholder/Galiano_Tracheophyta_summary_2026-04-04-prepared-taxa.csv",
    regionIndirectionFile: "../local/data/tabular/Galiano_Tracheophyta_catalogue_2025-12-30-selected-regionIndirection.csv",
    regionIndirectionPlaceholderFile: "../local/data/tabular/placeholder/Galiano_Tracheophyta_catalogue_2025-12-30-selected-regionIndirection.csv",
    gridResolution: 1000,
    regionFilterFieldNames: ["BEC"],
    // The period of the records, over which the extirpation risk analysis always runs
    recordPeriod: "$compute:galiano.recordPeriod({self}.obsRows)",
    solowParams: "$compute:galiano.solowParams({self}.recordPeriod)",
    taxonColumns: [
        {key: "scientificName", label: "Taxon name"},
        {key: "solow_EP", label: "EP"},
        {key: "n_obs", label: "obs"},
        {key: "n_unmapped", label: "No coords", formatter: "galiano.formatUnmapped"},
        {key: "taxon_rank", label: "Rank"},
        {key: "introduction_status", label: "Introduction"},
        {key: "provenance_status", label: "Has Voucher"},
        {key: "commonName", label: "Common Name"},
        {key: "reportingStatus", label: "Reporting status"},
        {key: "id", label: "ID"},
        {key: "iNaturalistTaxonName", label: "Link name"}
    ],
    // In the order in which a search is most often narrowed, each value with the label shown for it
    taxaFilterRecords: [
        {filterName: "Introduction", fieldName: "introduction_status", fieldValues: ["native", "exotic", "unknown"],
            fieldLabels: ["Native", "Exotic", "Unknown"]},
        {filterName: "Conservation", fieldName: "provincial_concern", fieldValues: ["concern", "secure"],
            fieldLabels: ["Of concern", "Secure"]},
        {filterName: "Provenance", fieldName: "provenance_status", fieldValues: ["voucher", "no_voucher", "unknown"],
            fieldLabels: ["Vouchered", "Not vouchered", "Unknown"]},
        {filterName: "Rank", fieldName: "infrataxon_status", fieldValues: ["non-infrataxon", "infrataxon"],
            fieldLabels: ["Species", "Subspecies or variety"]},
        {filterName: "Graminoid", fieldName: "graminoid", fieldValues: ["graminoid", "non-graminoid"], valueOf: "hortis.graminoidValue",
            fieldLabels: ["Graminoid", "Other"]}
    ],
    // Ordered to bring forward what helps in assessing a record and in targeting the plant
    recordColumns: [
        {key: "eventDate", label: "Date", formatter: "galiano.formatDate"},
        {key: "taxon_name", label: "Taxon"},
        {key: "locality", label: "Locality"},
        {key: "recordedBy", label: "Recorder"},
        {key: "basisOfRecord", label: "Record type"},
        {key: "institutionCode", label: "Institution"},
        {key: "catalogNumber", label: "Catalogue no."},
        {key: "decimalLatitude", label: "Latitude"},
        {key: "decimalLongitude", label: "Longitude"},
        {key: "coordinateUncertaintyInMetres", label: "Uncertainty (m)"},
        {key: "elevation", label: "Elevation"},
        {key: "individualCount", label: "Count"},
        {key: "establishmentMeans", label: "Establishment"},
        {key: "identifiedBy", label: "Identified by"},
        {key: "dateIdentified", label: "Date identified"},
        {key: "typeStatus", label: "Type status"},
        {key: "collectionCode", label: "Collection"},
        {key: "recordNumber", label: "Record no."},
        {key: "license", label: "Licence"},
        {key: "rightsHolder", label: "Rights holder"},
        {key: "occurrenceID", label: "Occurrence ID"},
        {key: "gbifID", label: "GBIF ID"}
    ],
    // Records indexed by taxon, and the taxa of the summary with their counts of records with and without coordinates
    byTaxon: "$compute:galiano.groupRecords({self}.obsRows)",
    summaryTaxa: "$compute:bioreportr.summaryTaxaRows({self}.taxa.allRows)",
    annotatedTaxa: "$compute:galiano.annotateGeoref({self}.summaryTaxa, {self}.obsRows)",
    solowTaxa: {
        $component: {
            taxaFilters: {
                $component: {
                    allInput: "{storyPage}.annotatedTaxa"
                }
            }
        }
    },
    // The gallery of "lost" plants shown beside the Lost Plants pane - see galiano-lostPlantsPane.vue
    lostPlants: {
        $component: {
            $layers: "galiano.lostPlants"
        }
    },
    paneMarkup: "$compute:galiano.paneMarkup({self}.lostPlants.markup)",
    // The Atlas's records may also be narrowed by the places named in them and by a span of years, filters placed by the
    // slots of the same names in the story page's filter panel
    // The species of the Community Science pane open on the Atlas - see galiano.inatSpecies
    inatSpeciesClick: "$effect:galiano.inatSpecies.bind({self}, {global})",
    // The checklist shows each species' reporting status by an icon - see galiano.checklistDecoration
    checklist: {
        $component: {
            decorate: "galiano.checklistDecoration"
        }
    },
    // The records come from collectors, observers and others alike, so the recorder filter does not call them volunteers
    collectorFilter: {
        $component: {
            placeholder: "Search recorders ..."
        }
    },
    localityFilter: {
        $component: {
            $layers: "hortis.collectorFilter",
            filterName: "Locality",
            fieldName: "locality",
            controlId: "fli-galiano-locality",
            placeholder: "Search localities ...",
            isActive: "{storyPage}.activePane.visibleFilters"
        }
    },
    timePeriodFilter: {
        $component: {
            $layers: "galiano.timePeriodFilter",
            isActive: "{storyPage}.activePane.visibleFilters"
        }
    },
    // Populations are aggregated at 1000 m by default, the third of the radius slider's snap values
    solowRadius: {
        $component: {
            defaultIndex: 2,
            selectedIndex: 2
        }
    },
    // The annotations of records, e.g. of planted populations, applied by scripts/apply_record_annotations.R
    recordAnnotationsFile: "../local/data/tabular/Galiano_Tracheophyta_record-annotations_2026-04-04.csv",
    // The history of the curatorial notes on each taxon, prepared by scripts/prepare_curation_history.R
    curationHistoryFile: "../local/data/tabular/Galiano_Tracheophyta_curation-history_2026-04-04.csv",
    // The tiles of the atlas's three groups of species, placed in its section
    atlasTiles: "$compute:galiano.atlas.tilesMarkup({self}.taxa.allRows, {self}.selectedStatus)",
    sectionInserts: "$compute:galiano.atlas.sectionInserts({self}.atlasTiles)",
    paneClick: "$method:galiano.paneClick({self}, {0}:event, Solow, {global})",
    // The atlas's panel of the plant or group chosen in the checklist
    checklistTaxon: "$compute:galiano.atlas.resolveTaxon({self}.taxa.rowById, {self}.checklist.search.filterState)",
    atlasRecords: "$compute:galiano.atlas.taxonRecords({self}.obsRows, {self}.taxa.rowById, {self}.checklistTaxon)",
    taxonPanel: {
        $component: {
            markup: `$compute:galiano.atlas.panelMarkup({storyPage}.checklistTaxon, {storyPage}.atlasRecords,
                {storyPage}.curation.historyById, {storyPage}.curation.byTaxon, {storyPage}.recordAnnotations)`
        }
    },
    taxonPanelVisible: "$compute:galiano.atlas.panelVisible({self}.taxonPanel.markup, {self}.activePaneKey, Status)",
    // The extirpation risk pane shows the same panel of its chosen plant, with its regional EP
    solowTaxonPanel: {
        $component: {
            markup: `$compute:galiano.atlas.panelMarkup({storyPage}.solowTaxa.selectedTaxon, {storyPage}.solowDatedObs,
                {storyPage}.curation.historyById, {storyPage}.curation.byTaxon, {storyPage}.recordAnnotations, solow)`
        }
    },
    solowDatedObs: "$compute:galiano.atlas.dated({self}.solowTaxonObs)",
    // Summaries of each group of species, shown when hovering over its tile in the atlas or its row of the map's legend
    statusTooltip: {
        $component: {
            $layers: "hortis.withTooltip",
            cache: "$compute:galiano.statusTooltip.makeCache({storyPage}.taxa.allRows)",
            renderTooltip: "$method:galiano.statusTooltip.render({storyPage}.taxa.allRows, {storyPage}.byTaxon, {self}.cache, {0}:status)",
            hover: {
                $bindable: {
                    bind: "galiano.statusTooltip.bind({self}, {global}.document)",
                    unbind: "galiano.statusTooltip.unbind({boundValue})"
                }
            }
        }
    },
    // The extirpation risk pane opens on whichever species is at the top of its list, with the map fitted to its records
    solowShown: "$compute:bioreportr.storyPage.isActive({self}.activePaneKey, Solow)",
    selectTopSpecies: "$effect:galiano.selectTopSpecies({self}, {self}.solowShown, {self}.loaded, {self}.solowTaxa.taxaTable.displayRows)",
    solowFitTaxon: null,
    fitToTaxon: "$effect:galiano.fitToTaxon({self}.map.readyMap, {self}.solowFitTaxon, {self}.obsRows, {self}.map.zoomDuration)",
    // The opening pane, in memory of plants: their key moments appear across the map as a timeline plays - see
    // galiano-tracesPane.vue
    traces: {
        $component: {
            $layers: "galiano.traces"
        }
    },
    // The final pane, in memory of Harvey Janszen, shows the areas of his checklists on the map, described on hover - see
    // galiano-rememberingPane.vue
    remembering: {
        $component: {
            $layers: "galiano.remembering"
        }
    },
    // A pane opened from one without a map is placed on its camera once the map has its size - see galiano.recentre
    // On a phone one finger scrolls the page past the map, and two move the map - see galiano.phoneGestures
    phoneGestures: "$effect:galiano.phoneGestures({self}.map.readyMap, {global})",
    recentre: "$effect:galiano.recentre({self}.map.readyMap, {self}.mapData, {self}.activePane)",
    leftPaneClass: "$compute:galiano.traces.leftPaneClass({self}.traces.active, {self}.traces.paused, {self}.traces.scrubbing, {self}.remembering.active)",
    paneOverrides: {
        Traces: {
            visibleMap: true
        },
        Remembering: {
            visibleMap: true
        },
        Solow: {
            layers: ["reknitr.solowPaneHandler"]
        },
        TopContributions: {
            iNatPanels: [{
                taxon: {
                    id: 211194,
                    str: "Vascular plants"
                },
                place: {
                    id: 94935,
                    str: "galiano"
                },
                features: [{ // recentObservations
                    desc: "Recent vascular plant observations on Galiano Island"
                }, { // commonTaxa
                    desc: "Most commonly reported vascular plants on Galiano Island"
                }, { // favourites
                    desc: "Most favourited vascular plant observations on Galiano Island"
                }, { // stats
                    desc: "Observation statistics for vascular plants on Galiano Island"
                }]
            }]
        }
    },
    map: {
        $component: {
            $layers: ["hortis.libreMap.withTiles", "hortis.libreMap.esriTiles"],
            countTransform: "galiano.weibullCount",
            // A selected record hides the grid only while few enough records are in view - see galiano.showMarkers
            showMarkers: "$compute:galiano.showMarkers({self}.gridVisible, {self}.viewportObs.inView, {self}.markerThreshold, {self}.selectedRecord)",
            inverseCountTransform: "galiano.inverseWeibullCount",
            // The grid counts records of every type of evidence, not only observations
            legendMarkup: `$compute:galiano.obsGridLegendMarkup({self}.obsQuantiser.grid, {self}.fillStops, {self}.legendStops,
                {self}.maxObsCountOverride, {self}.inverseCountTransform, {self}.obsQuantiser.longResolution, {self}.obsQuantiser.baseLatitude)`
        }
    }
});

/**
 * On a phone, where the map spans the screen and the page scrolls past it, let one finger scroll the page and two move
 * the map, as MapLibre's cooperative gestures do, so that the map can't trap the reader. Larger screens are unchanged.
 * @param {maplibregl.Map} map - The story's map, once ready
 * @param {Window} window - The window holding the story page
 */
galiano.phoneGestures = function (map, window) {
    if (map && map.cooperativeGestures) {
        const phone = window.matchMedia("(max-width: 767.98px)");
        const apply = () => phone.matches ? map.cooperativeGestures.enable() : map.cooperativeGestures.disable();
        apply();
        phone.addEventListener("change", apply);
    }
};
</script>

<style>
/* The atlas's panel of the chosen plant: its facts, and beside them a chart of the history of its observations, by
   decade or by month as chosen by the chart's tabs - see galiano.atlas.historyMarkup. The extirpation risk pane's panel,
   which shares its other styles, has no chart. On a narrow panel the chart falls beneath the facts */
/* The plant's name runs across the top of the panel's column, and beneath it its facts and the chart sit side by side,
   the chart filling the height left to it. Where the column is too narrow for both, the chart falls beneath the facts */
.galiano-atlas-taxon-pane .mxcw-taxon-info {
    display: grid;
    grid-template-columns: max-content minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr);
    gap: 4px 20px;
    padding-right: var(--story-gap);
}

.galiano-atlas-taxon-pane .mxcw-taxon-name {
    grid-column: 1 / -1;
    padding-bottom: 4px;
}

@container (max-width: 380px) {
    .galiano-atlas-taxon-pane .mxcw-taxon-info {
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: auto;
    }
}

/* On a phone the chart always falls beneath the facts, the panel's column scrolling to it */
@media (max-width: 767.98px) {
    .galiano-atlas-taxon-pane .mxcw-taxon-info {
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: auto;
    }

    .galiano-atlas-taxon-pane .galiano-history-chart,
    .galiano-atlas-taxon-pane .galiano-history-notes {
        min-height: 90px;
    }
}

/* The photo yields room to the chart, which it does not share in the extirpation risk pane's panel */
.galiano-atlas-taxon-pane .mxcw-taxon-image {
    max-width: 34%;
}

.galiano-atlas-facts {
    min-width: 0;
}

/* The column is as wide as the facts - a note beneath them wraps within it rather than widening it */
.galiano-atlas-facts > :not(dl) {
    contain: inline-size;
}

/* Dates and counts are kept whole */
.galiano-atlas-facts dd {
    white-space: nowrap;
}

.galiano-history {
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
}

.galiano-history-tabs {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 4px;
    margin-bottom: 8px;
}

.galiano-history-heading {
    flex: 0 0 100%;
    margin-bottom: 2px;
    color: #5a7680;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

/* The tabs are radio buttons, hidden behind their labels */
.galiano-history-tabs input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

.galiano-history-tabs label {
    padding: 1px 9px;
    border: 1px solid #c9d6dc;
    border-radius: 999px;
    color: #4b778f;
    font-size: 12px;
    cursor: pointer;
}

.galiano-history-tabs input:checked + label {
    border-color: #2f7f8f;
    background: #2f7f8f;
    color: #fff;
}

.galiano-history-tabs input:focus-visible + label {
    outline: 2px solid #4b778f;
    outline-offset: 1px;
}

.galiano-history:has(.galiano-history-decade-tab:checked) .galiano-history-months,
.galiano-history:has(.galiano-history-month-tab:checked) .galiano-history-decades,
.galiano-history:has(.galiano-history-notes-tab:checked) .galiano-history-chart,
.galiano-history:not(:has(.galiano-history-notes-tab:checked)) .galiano-history-notes {
    display: none;
}

/* The Notes tab's history of the plant's annotations, scrolling within the room the charts take */
.galiano-history-notes {
    flex: 1 1 auto;
    min-height: 70px;
    max-height: 150px;
    overflow-y: auto;
    padding-right: 4px;
    color: #1f2a30;
    font-size: 12px;
    line-height: 1.35;
}

.galiano-history-notes .mxcw-curation-history {
    margin: 0 0 0 6px;
    padding: 0 0 0 14px;
    border-left: 2px solid rgba(90, 118, 128, 0.35);
    list-style: none;
}

.galiano-history-notes .mxcw-curation-history-entry {
    position: relative;
    margin: 0 0 8px;
    list-style: none;
}

.galiano-history-notes .mxcw-curation-history-entry::marker {
    content: none;
}

.galiano-history-notes .mxcw-curation-history-entry::before {
    content: "";
    position: absolute;
    top: 0.45em;
    left: -19px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #5a7680;
}

.galiano-history-notes .mxcw-curation-history-site::before {
    background: #e8711a;
}

.galiano-history-notes .mxcw-curation-history-head span,
.galiano-history-notes .mxcw-curation-history-reviewed,
.galiano-history-notes .mxcw-curation-none {
    color: #5a7680;
}

.galiano-history-notes .mxcw-curation-history-reviewed {
    margin: 2px 0 0;
}

.galiano-history-notes .mxcw-curation-history-text a {
    color: #184e62;
}

.galiano-history-notes .mxcw-solow-annotation-note {
    margin: 0 0 6px;
}

.galiano-history-chart {
    display: flex;
    gap: 2px;
    flex: 1 1 auto;
    height: auto;
    min-height: 70px;
    max-height: 150px;
    margin-bottom: 16px;
    border-bottom: 1px solid rgba(90, 118, 128, 0.35);
}

.galiano-history-slot {
    position: relative;
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
}

.galiano-history-bar {
    display: block;
    width: 100%;
    min-height: 2px;
    border-radius: 3px 3px 0 0;
    background: #2f7f8f;
}

.galiano-history-bar.galiano-history-empty {
    min-height: 0;
}

.galiano-history-slot:hover .galiano-history-bar {
    background: #184e62;
}

/* The labels hang beneath the axis, outside the chart's height */
.galiano-history-label {
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    color: #5a7680;
    font-size: 10px;
    line-height: 1;
    white-space: nowrap;
}

/* The first label is aligned with the chart's edge, which would otherwise cut it off */
.galiano-history-slot:first-child .galiano-history-label {
    left: 0;
    transform: none;
}
</style>
