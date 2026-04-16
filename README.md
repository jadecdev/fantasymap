# ⚔️ Carte Fantasy du 77

Une carte interactive de la Seine-et-Marne réimaginée en univers fantasy. Chaque commune devient un lieu peuplé d'elfes, de nains, de trolls, de hobbits, de centaures… avec sa propre petite légende.

> « On va dans le 77, une terre souvent citée par les parisiens comme étant remplie de contes et légendes. »

**🌐 Démo en ligne :** https://jadecdev.github.io/fantasymap/

## Aperçu

- 🗺️ Carte Leaflet centrée sur le département 77
- 🧝 18 villes transformées en lieux fantasy (Fontainebleau = capitale des Hauts-Elfes, Melun = forteresse des trolls, Coulommiers = clan de nains fromagers, etc.)
- 📜 Panneau « transcript » latéral listant toutes les légendes
- 🏰 Légende cliquable qui recentre la carte sur la ville choisie
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

Toutes les données vivent dans le tableau `cities` en haut de `script.js` :

```js
{
  name: "Fontainebleau",
  lat: 48.4010, lng: 2.7017,
  icon: "🧝",
  race: "Capitale des Hauts-Elfes",
  description: "Ça c'est carrément la capitale des hauts-elfes...",
  population: 15583
}
```

Ajouter une entrée met automatiquement à jour les marqueurs de la carte, la légende et le transcript — tout est généré à partir de ce tableau.

## Technologies

- [Leaflet 1.9.4](https://leafletjs.com/) pour la cartographie
- Tuiles OpenStreetMap, stylisées via un filtre CSS pour le rendu sombre/sépia
- Polices : Cinzel, MedievalSharp, Crimson Text (Google Fonts)
- Aucune dépendance à installer, aucun bundler
