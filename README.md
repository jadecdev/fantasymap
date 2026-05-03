# ⚔️ Carte Fantasy

Une carte interactive de départements français réimaginés en univers fantasy. Chaque commune devient un lieu peuplé d'elfes, de nains, de trolls, de hobbits, de vampires bourgeois, de skavens marseillais… avec sa propre petite légende.

> « On va dans le 77, une terre souvent citée par les parisiens comme étant remplie de contes et légendes. »

**🌐 Démo en ligne :** https://jadecdev.github.io/fantasymap/

## Aperçu

- 🗺️ Vue France au démarrage : 9 marqueurs régionaux (un par département) sur la carte de France
- 🔍 Au zoom ≥ 9, les marqueurs régionaux laissent place aux 123 marqueurs villes individuels — la carte « explose » dans le détail d'un département
- 🎯 Bouton « Vue France » + 9 boutons départements (13, 33, 38, 59, 62, 69, 73, 74, 77) comme raccourcis de zoom
- 🧝 123 villes transformées en lieux fantasy (Fontainebleau = capitale des Hauts-Elfes, Marseille = skavens, Lyon = cité impériale, Le Bouscat = vampires bourgeois, Gujan-Mestras = nains huîtriers, Calais = drakéides, Annecy = satyres, etc.)
- 📜 Panneau « transcript » latéral filtré automatiquement par département visible
- 🏰 Légende cliquable qui recentre la carte (sur une ville en mode département, sur une région en vue France)
- 📱 Mise en page responsive

## Utilisation

Le site est hébergé sur **[GitHub Pages](https://jadecdev.github.io/fantasymap/)** — rien à installer.

Pour le faire tourner en local, aucun build non plus. Ouvrez simplement le fichier dans un navigateur :

```bash
open index.html
```

Leaflet et les polices Google sont chargés depuis des CDN — une connexion internet est nécessaire au premier chargement.

## Structure

Le projet est découpé en trois fichiers, chacun avec une responsabilité claire :

```
fantasymap/
├── index.html              # Balisage HTML
├── styles.css              # Styles (thème fantasy, carte, légende, transcript)
└── script.js               # Données des villes + logique Leaflet
```

## Ajouter ou modifier une ville

Toutes les données vivent dans l'objet `regions` en haut de `script.js`, keyé par code département. Chaque région contient ses textes (titre, intro), son viewport (`center`, `zoom`) et son tableau `cities` :

```js
const regions = {
  "77": {
    label: "77 — Seine-et-Marne",
    title: "⚔️ Carte Fantasy du 77 - Seine-et-Marne",
    h1: "⚔️ Carte Fantasy du 77 ⚔️",
    headerP: "Seine-et-Marne — « Une terre remplie de contes et légendes »",
    legendH3: "Peuples du 77",
    intro: "On va dans le 77...",
    center: [48.72, 2.72],
    zoom: 10,
    cities: [
      {
        name: "Fontainebleau",
        lat: 48.4010, lng: 2.7017,
        icon: "🧝",
        race: "Capitale des Hauts-Elfes",
        description: "Ça c'est carrément la capitale des hauts-elfes...",
        population: 15583
      },
      // ...
    ]
  },
  // … autres départements
};
```

Ajouter une entrée à un `cities[]` met automatiquement à jour les marqueurs, la légende et le transcript de la région concernée — tout est généré par `buildAllMarkers()` et `renderListPanels()`.

## Ajouter un nouveau département

1. Ajouter une entrée dans `regions` (`script.js`) avec son code, ses textes, son `center` / `zoom` et ses villes.
2. Ajouter un `<button class="region-dropdown-item" data-region="XX" role="option">` dans `.region-dropdown-menu` (`index.html`).

Aucune autre modification nécessaire — `buildAllMarkers()` lit dynamiquement la liste des régions.

## Technologies

- [Leaflet 1.9.4](https://leafletjs.com/) pour la cartographie
- Tuiles OpenStreetMap, stylisées via un filtre CSS pour le rendu sombre/sépia
- Polices : Cinzel, MedievalSharp, Crimson Text (Google Fonts)
- Aucune dépendance à installer, aucun bundler
