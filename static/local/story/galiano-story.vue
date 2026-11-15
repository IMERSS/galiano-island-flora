<fluid-import src="../../bioreportr/sfc/bioreportr-storyPage.vue"></fluid-import>
<!-- The story's data files, as its bioreportr.yaml names them - written by src/js/storyBuild.js -->
<fluid-import src="../../story/bioreportr-storyData.vue"></fluid-import>
<!-- The Atlas's filters of records by time period - its filter by locality is a collector filter over another field -->
<fluid-import src="galiano-timePeriodFilter.vue"></fluid-import>
<!-- The iNaturalist panels of the Top Contributions pane -->
<script src="%@imerss/inat-components/dist/standalone.min.js" fluid-client data-fl-scope="global"></script>
<!-- The atlas's panel, tiles and tooltips, and the panes shared with the other bioReportR stories, each rendering its
     section from its own template - see paneComponent in the front matter of content/story/Traces.Rmd, LostPlants.Rmd
     and Protected.Rmd -->
<fluid-import src="../../bioreportr/sfc/bioreportr-atlasPanel.vue"></fluid-import>
<fluid-import src="../../bioreportr/sfc/bioreportr-storyPageTraces.vue"></fluid-import>
<fluid-import src="../../bioreportr/sfc/bioreportr-storyPageLostPlants.vue"></fluid-import>
<fluid-import src="../../bioreportr/sfc/bioreportr-storyPageProtectedAreas.vue"></fluid-import>
<!-- The pane of this story alone, in memory of Harvey Janszen - see content/story/Remembering.Rmd -->
<fluid-import src="galiano-rememberingPane.vue"></fluid-import>
<!-- The rest particular to this story, which builds on the story page's own summaries in story.js -->
<script src="../../bioreportr/js/story.js"></script>
<script src="../js/galiano.js"></script>
<script>
"use strict";

// The story page of the Galiano Island vascular plant report. Its atlas and the panes it shares with the other
// bioReportR stories are layers of the story page defined in static/bioreportr/sfc, given this story's settings here;
// the pane in memory of Harvey Janszen is this story's alone, defined beside this file. Its paths are relative to the
// story page, served at /story/, whose panes are written by src/js/storyBuild.js into static/story

fluid.registerNamespace("galiano");

// The proportion of the maximum count shown by each cell of the map's grid is scaled by a Weibull distribution, so
// that the few cells with very many observations do not wash out the rest - see the legend
galiano.weibullCount = (x, maxCount) => maxCount < 200 ? x : 1 - Math.exp(-Math.pow(x / 0.012, 0.5));

galiano.inverseWeibullCount = (x, maxCount) => maxCount < 200 ? x : 0.012 * Math.pow(-Math.log(1 - x), 1 / 0.5);

fluid.def("galiano.story", {
    $layers: ["bioreportr.storyPage", "bioreportr.storyData", "bioreportr.atlasPanel", "bioreportr.storyPageTraces", "bioreportr.storyPageLostPlants",
        "bioreportr.storyPageProtectedAreas"],
    gridResolution: 1000,
    // The regions which may filter the records - a category of protected area, or all the KBAs, is matched through rows
    // of the region index giving each area or KBA the label of its group, see GroupField in scripts/intersectShapes.R
    regionFilterFieldNames: ["BEC", "ProtectedArea", "KBA"],
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
    // The columns of the table of records, ordered to bring forward what helps in finding the plant again and in assessing
    // the record - the rest of each record's fields, e.g. its licence, are in the download of the records
    recordColumns: [
        {key: "eventDate", label: "Date", formatter: "galiano.formatDate"},
        {key: "taxon_name", label: "Taxon"},
        // Where to look: the place named, its position and how far from it the plant may be, and the elevation
        {key: "locality", label: "Locality"},
        {key: "decimalLatitude", label: "Latitude"},
        {key: "decimalLongitude", label: "Longitude"},
        {key: "coordinateUncertaintyInMetres", label: "Uncertainty (m)"},
        {key: "elevation", label: "Elevation"},
        // Who found it, and the evidence for it - a specimen, an observation or a list - by which it may be checked
        {key: "recordedBy", label: "Recorder"},
        {key: "basisOfRecord", label: "Record type"},
        {key: "collectionCode", label: "Source"},
        {key: "institutionCode", label: "Institution"},
        {key: "catalogNumber", label: "Catalogue no."},
        // Whether it was planted or escaped, by which a find may be weighed
        {key: "establishmentMeans", label: "Establishment"},
        {key: "occurrenceID", label: "Occurrence ID"}
    ],
    // The taxa of the summary with their counts of records with and without coordinates
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
    // The Atlas's records may also be narrowed by the places named in them and by a span of years, filters placed by the
    // slots of the same names in the story page's filter panel
    // The species of the Community Science pane, which open on the Atlas, are those of the iNaturalist project of its
    // panels - see paneOverrides below
    // Biodiversity Galiano Island holds every kingdom, so its species are narrowed to the vascular plants
    inatSpeciesQuery: {project_id: 5799, taxon_id: 211194},
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
    // A record counts as recent from 2004, just after Harvey Janszen's Outer Gulf Islands checklist of 2003, from whose
    // lists many of the Biodiversity Galiano summary's "reported" (historical) taxa were last recorded - so that the
    // historical taxa are, for the most part, those not recorded since, as the atlas describes them
    recentYear: 2004,
    // Galiano Island's record is sparse until the 1970s and then crowded into a few years, e.g. 107 key moments in 2016
    // alone, so the opening timeline's pass is brisk, and opens on Harvey Janszen's first collections on the island -
    // see bioreportr.traces.pacingDefaults in bioreportr-tracesPane.vue
    traces: {
        $component: {
            pacing: {
                targetMs: 160000,
                startYear: 1973
            }
        }
    },
    // Many of Galiano Island's native species are known only from list records without a position, so the Protected Areas
    // pane keeps only the records which can be mapped, as its summaries do - see mappedOnly in scripts/project.R
    protectedAreas: {
        $component: {
            mappedOnly: true
        }
    },
    // Populations are aggregated at 1000 m by default, the third of the radius slider's snap values
    solowRadius: {
        $component: {
            defaultIndex: 2,
            selectedIndex: 2
        }
    },
    // The sources of that history, by the column of the file holding each, oldest first - for Galiano Island, only the
    // notes of the Biodiversity Galiano review of the checklist
    curationHistorySources: [
        {field: "notes", source: "Biodiversity Galiano", label: "Review notes"}
    ],
    // The extirpation risk pane opens on whichever species is at the top of its list, with the map fitted to its records
    solowShown: "$compute:bioreportr.storyPage.isActive({self}.activePaneKey, Solow)",
    selectTopSpecies: "$effect:galiano.selectTopSpecies({self}, {self}.solowShown, {self}.loaded, {self}.solowTaxa.taxaTable.displayRows)",
    // The final pane, in memory of Harvey Janszen, shows the areas of his checklists on the map, described on hover - see
    // galiano-rememberingPane.vue
    remembering: {
        $component: {
            $layers: "galiano.remembering"
        }
    },
    // The classes of the left pane - those of the opening timeline, and while Harvey's pane is shown, its own
    leftPaneClass: "$compute:galiano.leftPaneClass({self}.traces.leftPaneClass, {self}.remembering.active)",
    paneOverrides: {
        Traces: {
            visibleMap: true
        },
        Remembering: {
            visibleMap: true,
            // Harvey's pane frames the areas of his checklists itself - see galiano.remembering.frame
            framesItself: true
        },
        Solow: {
            layers: ["reknitr.solowPaneHandler"]
        },
        TopContributions: {
            iNatPanels: [{
                // The vascular plants of the iNaturalist project Biodiversity Galiano Island - the project holds every
                // kingdom, so its observations are narrowed to the taxon
                taxon: {
                    id: 211194,
                    str: "Vascular plants"
                },
                project: {
                    id: 5799,
                    str: "biodiversitygaliano"
                },
                features: [{ // recentObservations
                    desc: "Recent vascular plant observations of Biodiversity Galiano"
                }, { // commonTaxa
                    desc: "The vascular plants most often reported to Biodiversity Galiano"
                }, { // favourites
                    desc: "The most favourited vascular plant observations of Biodiversity Galiano"
                }, { // stats
                    desc: "Statistics of the vascular plant observations of Biodiversity Galiano"
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
</script>
