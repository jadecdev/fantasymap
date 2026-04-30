# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page interactive fantasy-themed map of French departments. Currently covers seven departments — 13 (Bouches-du-Rhône), 33 (Gironde), 38 (Isère), 59 (Nord), 62 (Pas-de-Calais), 69 (Rhône), 77 (Seine-et-Marne) — for a total of 92 cities. The map opens in a France-wide view with one marker per department; zooming past threshold 9 swaps in that department's individual city markers. Each commune is reimagined as a fantasy location (elves, dwarves, trolls, hobbits, vampires bourgeois, skavens marseillais, drakéides calaisiens, etc.) with a short in-character French description. UI text is in French. Processed source videos live in `sources/done/`; videos still to integrate land directly in `sources/`.

The project is split into three files: `index.html` (markup), `styles.css` (styles), `script.js` (data + behavior).

## Running

Open `index.html` directly in a browser. No build, no dependencies to install, no server required — Leaflet and Google Fonts are loaded from CDNs.

Note: because `script.js` and `styles.css` are loaded as sibling files, `file://` works in most browsers; if one blocks local script loading, serve the directory with any static server (e.g. `python3 -m http.server`).

## Architecture

Three files, each with a single responsibility:

- `index.html` — markup only (`#header` with `#region-selector`, `#map`, `#legend`, `#transcript-panel`) plus CDN links for Leaflet + Google Fonts and references to `styles.css` and `script.js`.
- `styles.css` — all styles, including the `.leaflet-tile-pane` filter that gives the dark/sepia fantasy look, marker styling (`.fantasy-marker` + `.region-marker`), region selector buttons, popup theme, legend, and transcript panel.
- `script.js` — the `regions` data object plus runtime logic.

### Data and rendering

- **Data source of truth**: the `regions` object at the top of `script.js`, keyed by department code (`"13"`, `"33"`, `"38"`, `"59"`, `"62"`, `"69"`, `"77"`). Each region carries its own header text (`title`, `h1`, `headerP`, `legendH3`, `intro`), its viewport (`center`, `zoom`), and a `cities[]` array. Each city entry has `name`, `lat`, `lng`, `icon` (emoji), `race` (fantasy label), `description` (in-character French blurb), `population`.
- **Two-tier marker model**:
  - At boot, `buildAllMarkers()` builds 7 **region markers** (one per department, displayed at `region.center`, big circular badge with the dept code) and 92 **city markers** (one per `region.cities[]` entry). They live in two `L.layerGroup`s: `regionLayer` and `cityLayer`.
  - `updateMarkerLayers()` listens to `zoomend` and swaps the active layer based on `ZOOM_THRESHOLD = 9`: zoom < 9 → region markers, zoom ≥ 9 → city markers.
  - Click on a region marker = `map.flyTo(region.center, region.zoom)` (zooms past threshold → expansion).
- **Dominant region detection**: `computeDominantRegion()` returns `null` when zoom < 9 (Vue France), otherwise the dept whose `region.center` is euclidean-closest to `map.getCenter()`. Recomputed on every `moveend`.
- **`renderListPanels(domKey)`**: rebuilds legend + transcript + header texts based on the dominant region. `domKey === null` → "Régions de France" with 7 region rows. `domKey === "33"` → "Peuples du 33" with 13 city rows. Called only when `currentDominant` actually changes (guard against pan spam).
- **Selector**: 8 `.region-btn` buttons. `data-region="france"` calls `flyToBounds(FRANCE_BOUNDS)`. Department buttons call `flyTo(region.center, region.zoom)`. The `.active` class is set by `renderListPanels` based on the current dominant region — never persisted.
- **No persistence**: every reload starts in Vue France via `map.fitBounds(FRANCE_BOUNDS)`.
- **Map**: Leaflet 1.9.4, OpenStreetMap tiles, styled via a CSS filter on `.leaflet-tile-pane` to give the dark/sepia fantasy look (there is no separate tile provider).
- **Markers**: `L.divIcon` for both tiers. City markers use `.fantasy-marker` / `.marker-icon`; region markers use `.region-marker` / `.region-icon` (bigger circle with the dept code in Cinzel).
- **`popupopen` handler**: registered once at boot, outside any render function, to avoid stacking listeners.

## Editing notes

- Keep the French tone and tutoiement ("t'es", "t'as") in `description` fields — it is a deliberate narrative voice, not a typo.
- When adding a city, include all seven fields (`name`, `lat`, `lng`, `icon`, `race`, `description`, `population`); the loop assumes they are all present and will fail silently / render oddly otherwise.
- When adding a new region, add a `<button class="region-btn" data-region="XX">` in `#region-selector` (in `index.html`) and a matching entry in `regions` (in `script.js`). `buildAllMarkers()` will pick it up automatically — no other code change needed. If the new region falls outside the current `FRANCE_BOUNDS`, widen those bounds too.
- Responsive breakpoint is `600px`: below it the `#legend` is hidden and the transcript panel becomes full-width; region buttons shrink slightly to fit the header.

## Adding a region from a source video

The project is fed by Instagram Reels from `@maxime_penet` (one video per French department, ~90–100s, burned-in French subtitles, narrator says each city name in front of its city-limit sign). New videos land in `sources/`. Workflow that has worked:

1. **Inspect the video**: `ffprobe -show_entries format=duration "sources/<file>.mp4"` for length; the filename hashtags usually leak the department (e.g. `#33 #bordeaux` → Gironde).
2. **Extract frames every 2 s** to a temp directory (the burned-in subtitles + visible road signs are how we identify each city — Whisper is not needed and may not be installed):
   ```bash
   mkdir -p /tmp/fantasymap_frames
   ffmpeg -y -i "sources/<file>.mp4" -vf "fps=1/2,scale=720:-1" -q:v 5 /tmp/fantasymap_frames/frame_%03d.jpg
   ```
   `0.5 fps` is enough to catch every subtitle line for these videos. A 96 s clip yields ~48 frames.
3. **Read frames with the multimodal Read tool**, batched in parallel. Each frame typically shows the city sign in the background and a one-line subtitle (e.g. *« Floirac c'est des elfes sylvestres »*). Stitch the subtitle fragments together across consecutive frames to get the full description for each city.
4. **Look up coordinates and population** for each commune (Wikipedia / OpenStreetMap). The video itself never gives these.
5. **Write descriptions in tutoiement** matching the existing voice — typically opening with *« Ça c'est… »* / *« <Ville> c'est… »*, short and conversational, expanding on the narrator's punchline rather than transcribing it verbatim.
6. **Pick `center` / `zoom`** so all cities fit the viewport on first load; for departments wider than ~0.5° of longitude, `zoom: 9` is usually right (Gironde uses `[44.78, -0.7] @ 9`).
7. **Clean up** `/tmp/fantasymap_frames/` when done, then move the processed video from `sources/` to `sources/done/`. The video files themselves are kept committed.

Useful priors when reading frames: each video opens with a title card stating the department; the narrator usually closes by teasing the next "partie" (part) — that's the cue that another video will eventually drop in `sources/`.
