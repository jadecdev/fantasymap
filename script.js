const cities = [
  {
    name: "Lagny-sur-Marne",
    lat: 48.8725, lng: 2.7125,
    icon: "⚓", race: "Port des contrebandiers",
    description: "Ça c'est le port des contrebandiers fluviaux. Il y a toute une guilde de marchands qui contrôle la rivière.",
    population: 21461
  },
  {
    name: "Fontainebleau",
    lat: 48.4010, lng: 2.7017,
    icon: "🧝", race: "Capitale des Hauts-Elfes",
    description: "Ça c'est carrément la capitale des hauts-elfes. Si t'as pas la bourse pleine, tu es repoussé à la lisière du bois par les gardes elfiques.",
    population: 15583
  },
  {
    name: "Coulommiers",
    lat: 48.8130, lng: 3.0872,
    icon: "⛏️", race: "Clan de Nains",
    description: "C'est un clan de nains. Mais par contre dans leur cave, ils ont pas des minerais, ils font du fromage.",
    population: 16374
  },
  {
    name: "Torcy",
    lat: 48.8500, lng: 2.6536,
    icon: "⚔️", race: "Cité des Guerriers",
    description: "C'est une ville de guerriers. Que des cliquetis dans la rue et il y a un puissant sortilège qui les protège.",
    population: 22810
  },
  {
    name: "Brie-Comte-Robert",
    lat: 48.6914, lng: 2.6119,
    icon: "🍃", race: "Hobbits aristocrates",
    description: "C'est des hobbits un peu aristocrates. L'herbe à pipe y est très bonne.",
    population: 19003
  },
  {
    name: "Savigny-le-Temple",
    lat: 48.5844, lng: 2.5833,
    icon: "🛡️", race: "Templiers",
    description: "Bon bah ça c'est dans le nom, c'est des templiers. Tout le reste de la ville est à leur service.",
    population: 31148
  },
  {
    name: "Melun",
    lat: 48.5422, lng: 2.6553,
    icon: "👹", race: "Forteresse des Trolls",
    description: "Melun c'est la forteresse des trolls. Mais les gros trolls là, genre Seigneur des Anneaux.",
    population: 45995
  },
  {
    name: "Dammarie-les-Lys",
    lat: 48.5178, lng: 2.6342,
    icon: "🎵", race: "Ville des Bardes",
    description: "Ça c'est la ville des bardes. Chaque année on y organise un grand concours de musique et le gagnant repart avec un luth d'or.",
    population: 23559
  },
  {
    name: "Pontault-Combault",
    lat: 48.7697, lng: 2.6053,
    icon: "🏰", race: "Donjon de haut niveau",
    description: "Ça c'est un donjon de haut niveau. Le boss c'est un gros golem. Et tous les habitants c'est des créatures du donjon.",
    population: 39096
  },
  {
    name: "Roissy-en-Brie",
    lat: 48.7917, lng: 2.6503,
    icon: "🌳", race: "Ents",
    description: "C'est des Ents, tout simplement. Donc ne dérange pas les arbres sur place. Et si tu vois un mec parler à un arbre, c'est normal.",
    population: 23229
  },
  {
    name: "Bussy-Saint-Georges",
    lat: 48.8414, lng: 2.6986,
    icon: "🔮", race: "Secte mystérieuse",
    description: "C'est une secte. Ça a l'air calme et accueillant, mais en fait, il s'y passe des trucs. On sait pas bien ce qu'il s'y passe, d'ailleurs.",
    population: 27498
  },
  {
    name: "Mitry-Mory",
    lat: 48.9833, lng: 2.6167,
    icon: "🐴", race: "Centaures",
    description: "C'est une ville de centaures. Ils sont pas agressifs, tant que t'es respectueux de la nature. Y a un bon business d'écurie à faire, là-bas.",
    population: 20456
  },
  {
    name: "Ozoir-la-Ferrière",
    lat: 48.7681, lng: 2.6650,
    icon: "🐺", race: "Clairière des Loups-Garous",
    description: "Ça c'est la clairière des loups-garous. Mais c'est connu, donc si t'es là-bas au mauvais moment, c'est de ta faute.",
    population: 21238
  },
  {
    name: "Meaux",
    lat: 48.9603, lng: 2.8786,
    icon: "👤", race: "Capitale Humaine",
    description: "Mo, c'est la capitale humaine du coin. On y mange très bien, les gens sont très accueillants. Il y a une guilde de tanneurs aussi.",
    population: 56905
  },
  {
    name: "Chelles",
    lat: 48.8828, lng: 2.5958,
    icon: "⚔️", race: "Poste Frontière",
    description: "C'est le poste frontière avant d'aller dans des territoires et des contrées inconnues. Tous ceux qui y vivent sont des gardes qui ont tout abandonné, tout sacrifié pour protéger les autres.",
    population: 54620
  }
];

// Init map
const map = L.map('map', {
  center: [48.72, 2.72],
  zoom: 10,
  zoomControl: true
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: ''
}).addTo(map);

// Add markers
const markers = {};
const legendEl = document.getElementById('legend');
const transcriptEl = document.getElementById('transcript-panel');

cities.forEach((city, i) => {
  // Create custom icon
  const iconHtml = `
    <div class="fantasy-marker">
      <div class="marker-icon">${city.icon}</div>
    </div>
  `;
  const customIcon = L.divIcon({
    html: iconHtml,
    className: '',
    iconSize: [38, 46],
    iconAnchor: [19, 46],
    popupAnchor: [0, -42]
  });

  const marker = L.marker([city.lat, city.lng], { icon: customIcon }).addTo(map);

  const popupContent = `
    <div class="popup-inner">
      <div class="city-name">${city.name}</div>
      <div class="city-race"><span class="race-icon">${city.icon}</span> ${city.race}</div>
      <div class="divider"></div>
      <div class="description">« ${city.description} »</div>
      <div class="divider"></div>
      <div class="pop-badge">
        🏘️ <span class="pop-number">${city.population.toLocaleString('fr-FR')}</span> <span>âmes</span>
      </div>
    </div>
  `;
  marker.bindPopup(popupContent, { maxWidth: 320 });
  markers[city.name] = marker;

  // Legend item
  const li = document.createElement('div');
  li.className = 'legend-item';
  li.innerHTML = `<span class="li-icon">${city.icon}</span><span class="li-name">${city.name}</span>`;
  li.onclick = () => {
    map.flyTo([city.lat, city.lng], 13, { duration: 0.8 });
    setTimeout(() => marker.openPopup(), 800);
  };
  legendEl.appendChild(li);

  // Transcript block
  const tb = document.createElement('div');
  tb.className = 'transcript-block';
  tb.innerHTML = `
    <div class="tb-city">${city.icon} ${city.name} <span style="color:#a0896a;font-weight:400;font-size:0.8rem;">(${city.population.toLocaleString('fr-FR')} hab.)</span></div>
    <div class="tb-text">« ${city.description} »</div>
  `;
  tb.onclick = () => {
    map.flyTo([city.lat, city.lng], 13, { duration: 0.8 });
    setTimeout(() => marker.openPopup(), 800);
    if (window.innerWidth <= 600) toggleTranscript();
  };
  transcriptEl.appendChild(tb);
});

// Transcript toggle
function toggleTranscript() {
  document.getElementById('transcript-panel').classList.toggle('open');
}

// Intro text as transcript header
const introBlock = document.createElement('div');
introBlock.className = 'transcript-block';
introBlock.style.borderLeftColor = '#c9a84c';
introBlock.style.marginBottom = '20px';
introBlock.innerHTML = `
  <div class="tb-city">🗺️ Introduction</div>
  <div class="tb-text">« On va dans le 77, une terre souvent citée par les parisiens comme étant remplie de contes et légendes. »</div>
`;
transcriptEl.insertBefore(introBlock, transcriptEl.children[2]);

// Fix: prevent Leaflet popup close button from causing page navigation
map.on('popupopen', function() {
  const closeButtons = document.querySelectorAll('.leaflet-popup-close-button');
  closeButtons.forEach(btn => {
    btn.setAttribute('href', 'javascript:void(0)');
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      map.closePopup();
    });
  });
});
