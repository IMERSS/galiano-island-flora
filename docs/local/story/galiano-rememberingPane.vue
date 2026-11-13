<script src="../../bioreportr/js/story.js"></script>
<script src="../js/galiano.js"></script>
<script>
"use strict";

// The final pane of the Galiano story, Harvey's footsteps, in memory of Harvey Janszen - its section, knitted from
// content/story/Remembering.Rmd, and the map beside it framing the areas of his checklists, each described on hover.
// The map's behaviour is configured onto the story page by galiano-story.vue as its member remembering

// noinspection ES6ConvertVarToLetConst // otherwise this is a duplicate on minifying
var galiano = fluid.registerNamespace("galiano");
// noinspection ES6ConvertVarToLetConst // otherwise this is a duplicate on minifying
var hortis = fluid.registerNamespace("hortis");
fluid.registerNamespace("galiano.remembering");

// The map of Harvey's pane, which frames the areas of his checklists and describes each on hover
fluid.def("galiano.remembering", {
    $layers: "fluid.component",
    active: "$compute:bioreportr.storyPage.isActive({storyPage}.activePaneKey, Remembering)",
    hover: "$effect:galiano.remembering.bindHover({storyPage}.map.readyMap, {storyPage}.mapData, {global})",
    frame: "$effect:galiano.remembering.frame({storyPage}.map.readyMap, {storyPage}.mapData, {self}.active, {storyPage}.map.zoomDuration)"
});

// The pane's section, rendered from the template below
fluid.def("galiano.rememberingPane", {
    $layers: "fluid.component"
});

/** The pane in memory of Harvey Janszen, whose map shows the areas of his checklists **/

/**
 * Find the bounds of the checklist areas in a story's map data.
 * @param {Object} mapData - The story's map data, whose style holds the areas' sources
 * @return {Array|null} The bounds as [[west, south], [east, north]], or null if there are no areas
 */
galiano.remembering.bounds = function (mapData) {
    let west = Infinity, south = Infinity, east = -Infinity, north = -Infinity;
    const visit = coords => {
        if (typeof coords[0] === "number") {
            west = Math.min(west, coords[0]);
            east = Math.max(east, coords[0]);
            south = Math.min(south, coords[1]);
            north = Math.max(north, coords[1]);
        } else {
            coords.forEach(visit);
        }
    };
    Object.entries(mapData?.style?.sources || {}).filter(([id]) => id.startsWith("Checklist.")).forEach(([, source]) => visit(source.data.coordinates));
    return Number.isFinite(west) ? [[west, south], [east, north]] : null;
};

/**
 * Frame the checklist areas whenever Harvey's pane is shown. The pane's camera alone is a fixed centre and zoom, placed as
 * the pane opens - when the map may still be changing size, e.g. from nothing when arriving from a pane without a map - so
 * the areas are fitted once the map is still and laid out at its full size, whatever the size of the window. Every other
 * pane keeps its own camera.
 * @param {maplibregl.Map} map - The story's map, once ready
 * @param {Object} mapData - The story's map data
 * @param {Boolean} active - Whether Harvey's pane is shown
 * @param {Number} duration - The duration in milliseconds of the move
 */
galiano.remembering.frame = function (map, mapData, active, duration) {
    const bounds = active && map && galiano.remembering.bounds(mapData);
    if (bounds) {
        hortis.libreMap.whenStill(map, () => {
            // Only if Harvey's pane is still shown: having waited for the map to be still, the fit would otherwise land on
            // whichever pane was opened meanwhile, overriding that pane's own camera
            if (map.getContainer().ownerDocument.querySelector(".mxcw-leftPane.galiano-remembering-active")) {
                map.resize();
                map.fitBounds(bounds, {padding: 40, duration, essential: true});
            }
        });
    }
};

// The maps whose checklist areas already show their cards on hover
galiano.remembering.boundMaps = new WeakSet();

/**
 * Show a card describing each checklist area as the pointer passes over it while Harvey's pane is shown, outlining that
 * area more strongly. The markup of each card is the label given to the area's layer by scripts/Janszen_checklists_mapbox.R
 * @param {maplibregl.Map} map - The story's map, once ready
 * @param {Object} mapData - The story's map data, whose style holds the layers' labels
 * @param {Window} window - The window holding the story page
 */
galiano.remembering.bindHover = function (map, mapData, window) {
    if (!map || !mapData || galiano.remembering.boundMaps.has(map)) {
        return;
    }
    galiano.remembering.boundMaps.add(map);
    const layers = mapData.style.layers.filter(layer => layer.type === "fill" && layer.id.startsWith("Checklist."));
    const labels = Object.fromEntries(layers.map(layer => [layer.id, layer.label]));
    // Each area's own outline width, to which it returns once the pointer leaves it
    const widths = Object.fromEntries(mapData.style.layers.filter(layer => layer.id.endsWith("-outline")).map(layer => [layer.id, layer.paint?.["line-width"] ?? 1]));
    const card = window.document.createElement("div");
    card.className = "galiano-checklist-card";
    card.hidden = true;
    map.getContainer().appendChild(card);
    let hovered = null;
    const setHovered = id => {
        if (id !== hovered) {
            if (hovered) {
                map.setPaintProperty(hovered + "-outline", "line-width", widths[hovered + "-outline"]);
            }
            if (id) {
                map.setPaintProperty(id + "-outline", "line-width", widths[id + "-outline"] + 2);
                card.innerHTML = labels[id] || "";
            }
            hovered = id;
        }
        card.hidden = !id;
    };
    map.on("mousemove", event => {
        const active = window.document.querySelector(".mxcw-leftPane.galiano-remembering-active");
        const feature = active && map.queryRenderedFeatures(event.point, {layers: layers.map(layer => layer.id)})[0];
        setHovered(feature ? feature.layer.id : null);
        if (feature) {
            const {width, height} = map.getContainer().getBoundingClientRect();
            card.style.left = Math.min(event.point.x + 16, width - card.offsetWidth - 8) + "px";
            card.style.top = Math.min(event.point.y + 16, height - card.offsetHeight - 8) + "px";
        }
    });
    map.getCanvas().addEventListener("mouseleave", () => setHovered(null));
};
</script>

<style>
@media (min-width: 768px) {
    .mxcw-paneKey-Remembering .mxcw-sectionInner {
        flex: none;
    }
}

.mxcw-paneKey-Remembering h2 {
    color: #a8c8d0;
    font-size: var(--story-small);
    font-weight: 400;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    margin: 1.25rem 0 clamp(12px, 2.4vh, 26px);
}

.mxcw-paneKey-Remembering .mxcw-sectionColumn > p {
    max-width: 31em;
    margin: 0 auto clamp(10px, 2.2vh, 22px);
    padding: 0;
    color: #d6e8ee;
    font-size: var(--story-reading-text);
    line-height: 1.5;
    text-align: center;
    text-wrap: pretty;
}

/* Harvey's footsteps: the map fills the left of the page, and his portrait sits to the right of the text */

.mxcw-leftPane.galiano-remembering-active .mxcw-map {
    height: 100% !important;
}

.mxcw-leftPane.galiano-remembering-active > .mxcw-data,
.mxcw-leftPane.galiano-remembering-active > .resize-bar {
    display: none !important;
}

.mxcw-leftPane.galiano-remembering-active .maplibregl-canvas {
    filter: brightness(0.85) saturate(0.8);
}

.galiano-harvey-portrait {
    float: right;
    width: min(38%, 200px);
    margin: 4px 0 10px 18px;
}

.galiano-harvey-portrait img {
    display: block;
    width: 100%;
    border-radius: var(--data-table-radius);
}

.galiano-harvey-portrait figcaption {
    margin-top: 4px;
    color: #a8c8d0;
    font-size: var(--story-small);
    line-height: 1.3;
}

.mxcw-paneKey-Remembering .mxcw-sectionColumn > p {
    max-width: none;
    text-align: left;
}

/* The card describing a checklist area on hover */

.galiano-checklist-card {
    position: absolute;
    z-index: 3;
    pointer-events: none;
    max-width: 260px;
    padding: 6px 10px;
    color: #eefaff;
    font-size: var(--story-data);
    line-height: 1.4;
    background: #0d3040;
    border-top: 3px solid #FFD36B;
    border-radius: var(--data-table-radius);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.mxcw-leftPane:not(.galiano-remembering-active) .galiano-checklist-card {
    display: none;
}

.galiano-checklist-name {
    color: #FDF2CE;
    font-size: var(--story-body);
    font-weight: 700;
}

/* Phones: the map of the checklist areas leaves room for the text beneath it */
@media (max-width: 767.98px) {
    .mxcw-leftPane.galiano-remembering-active {
        height: max(360px, 62vh);
    }
}

/* The thanks to the project's supporters close the pane quietly, set apart by a rule, their names run together in one line */
.galiano-supporters {
    clear: both;
    margin: clamp(18px, 3vh, 30px) 0 0;
    padding-top: 14px;
    border-top: 1px solid rgba(168, 200, 208, 0.3);
    text-align: center;
}

.mxcw-paneKey-Remembering .galiano-supporters-title {
    margin: 0 0 8px;
    color: #a8c8d0;
    font-size: var(--story-small);
    letter-spacing: 0.2em;
    text-align: center;
    text-transform: uppercase;
}

.galiano-supporters-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 14px 26px;
    margin: 0 auto;
    padding: 14px 20px;
    max-width: 760px;
    list-style: none;
    background: #f4f1e8;
    border-radius: 6px;
}

/* The logos sit on a soft paper card, their white grounds dissolved into it, greyed until hovered */
.galiano-supporters-list li {
    margin: 0;
    line-height: 0;
}

.galiano-supporters-list img {
    display: block;
    height: 34px;
    width: auto;
    max-width: 210px;
    object-fit: contain;
    mix-blend-mode: multiply;
    filter: grayscale(1) contrast(1.1);
    opacity: 0.75;
    transition: filter 0.3s, opacity 0.3s;
}

.galiano-supporters-list li:hover img {
    filter: none;
    opacity: 1;
}

.galiano-supporters-list .galiano-supporter-sitka-foundation img,
.galiano-supporters-list .galiano-supporter-keefer-ecological-services img {
    height: 46px;
}

@media (max-width: 767.98px) {
    .galiano-supporters-list { gap: 12px 18px; padding: 12px; }
    .galiano-supporters-list img { height: 26px; max-width: 150px; }
    .galiano-supporters-list .galiano-supporter-sitka-foundation img,
    .galiano-supporters-list .galiano-supporter-keefer-ecological-services img { height: 36px; }
}
</style>

<!-- The <template> block below is written by src/js/storyBuild.js and must not be edited here: it holds the section
     knitted from content/story/Remembering.Rmd, whose front matter names galiano.rememberingPane as its paneComponent. Edit the
     R Markdown and knit it, then run "npm run story", which replaces everything between <template> and </template>
     and nothing else in this file. The markup is a template, which may bind members of galiano.rememberingPane with
     @{...} - written in the R Markdown as raw HTML, e.g. `<span>@{count}</span>`{=html}, which pandoc leaves as it is -->
<template>
<div id="harveys-footsteps" class="section level2 mxcw-paneKey-Remembering"><h2>Harvey’s footsteps</h2><div class="mxcw-sectionInner"><div class="mxcw-sectionColumn">

<figure class="galiano-harvey-portrait">
<img src="img/HJ.png" alt="Harvey Janszen, Galiano Island, May 3, 2019">
</figure>
<p>This project is dedicated to the memory of Harvey Janszen (July 11,
1946–May 10, 2021) and other fellow naturalists, including Hans Roemer,
who have passed away in recent years. Harvey spent decades getting to
know the plants of the Salish Sea—collecting more than 3000 plant
specimens, keeping field journals from 1973 to 2017, and compiling
species checklists for the southern Gulf Islands, the Saanich Peninsula,
and the San Juan Islands.</p>
<p>Galiano Island was part of Harvey’s botanical life from his very
first journal, which records collections from Galiano alongside those of
Saturna and the neighbouring islands, through to his later inventories
of the island’s rock bluffs and meadows. His <em>Outer Gulf Islands
Vascular Plant Checklist</em> (2003) remains a cornerstone of this
flora: together with his specimens, it accounts for 700 of the records
in this atlas, documenting 539 of Galiano’s plants between 1973 and
2003. The photograph above was taken on Galiano Island on May 3,
2019.</p>
<p>Through the <a href="https://imerss.github.io/janszen-legacy-storymap/Janszen_Legacy_Project.html">Janszen
Legacy Project</a> we continue to digitize Harvey’s journals and
collections, and through this atlas we invite you to help carry his work
forward, by sharing your local plant knowledge and contributing to the
co-creation of a living <em>Flora of Galiano Island.</em></p>
<!-- TODO: the Galiano project's supporters - their logos go in static/local/images/supporters/, listed as for Saanich:
<div class="galiano-supporters">
<p class="galiano-supporters-title">With thanks to our supporters</p>
<ul class="galiano-supporters-list">
<li class="galiano-supporter-NAME"><img src="../local/images/supporters/NAME.png" alt="NAME" title="NAME"></li>
</ul>
</div>
-->


</div></div></div>
</template>
