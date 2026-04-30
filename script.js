const regions = {
  "77": {
    label: "77 — Seine-et-Marne",
    title: "⚔️ Carte Fantasy du 77 - Seine-et-Marne",
    h1: "⚔️ Carte Fantasy du 77 ⚔️",
    headerP: "Seine-et-Marne — « Une terre remplie de contes et légendes »",
    legendH3: "Peuples du 77",
    intro: "On va dans le 77, une terre souvent citée par les parisiens comme étant remplie de contes et légendes.",
    center: [48.72, 2.72],
    zoom: 10,
    cities: [
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
    ]
  },
  "33": {
    label: "33 — Gironde",
    title: "⚔️ Carte Fantasy du 33 - Gironde",
    h1: "⚔️ Carte Fantasy du 33 ⚔️",
    headerP: "Gironde — « Entre dunes, vignes et brume de l'estuaire »",
    legendH3: "Peuples du 33",
    intro: "On part dans le 33, une terre de contrastes entre l'océan, les forêts sans fin et les vieux bastions oubliés.",
    center: [44.78, -0.7],
    zoom: 9,
    cities: [
      {
        name: "Mérignac",
        lat: 44.8334, lng: -0.6448,
        icon: "🏰", race: "Hub des aventuriers",
        description: "Mérignac c'est le point de départ de toutes les aventures. T'es nouveau dans le coin, tu débarques là. Toutes les guildes y ont leur antenne et tous les contrats partent d'ici.",
        population: 71000
      },
      {
        name: "Arcachon",
        lat: 44.6562, lng: -1.1681,
        icon: "⚰️", race: "Nécropole des seigneurs millénaires",
        description: "Ça c'est la nécropole des seigneurs millénaires. Qui ils étaient, on sait pas. Mais on dérange pas leur sommeil, sinon ça finit très mal pour toi.",
        population: 10800
      },
      {
        name: "La Teste-de-Buch",
        lat: 44.6308, lng: -1.1465,
        icon: "🏜️", race: "Bâtisseurs de la grande dune",
        description: "La Teste-de-Buch, je sais même pas comment on dit. Ce qui est sûr, c'est qu'ils ont érigé une immense dune pour cacher quelque chose. Personne sait quoi, et personne va creuser pour vérifier.",
        population: 26200
      },
      {
        name: "Gujan-Mestras",
        lat: 44.6378, lng: -1.0707,
        icon: "🦀", race: "Nains huîtriers",
        description: "Ça c'est des nains ramasseurs d'huîtres. Ne critique surtout pas la fraîcheur de leur marée basse, et ne négocie pas les prix avec eux. Sinon tu finis dans le bassin pour nourrir les crabes.",
        population: 22000
      },
      {
        name: "Floirac",
        lat: 44.8344, lng: -0.5239,
        icon: "🧝", race: "Elfes sylvestres",
        description: "Floirac c'est des elfes sylvestres, des elfes des bois. Ils vivent dans les collines et descendent en ville pour vendre leur cueillette. Polis, mais touche jamais à leurs paniers.",
        population: 17500
      },
      {
        name: "Cestas-Pierroton",
        lat: 44.7430, lng: -0.6779,
        icon: "🌲", race: "Forêt sans fin des rôdeurs",
        description: "Cestas c'est la forêt sans fin des rôdeurs. Tu peux y errer des jours sans croiser âme qui vive et sans tomber sur le moindre trésor. On dirait presque un bug de la map.",
        population: 18000
      },
      {
        name: "Saint-Médard-en-Jalles",
        lat: 44.8964, lng: -0.7197,
        icon: "🔥", race: "Pyromanciens",
        description: "Saint-Médard-en-Jalles, c'est les pyromanciens. Ils passent leurs journées à préparer des explosifs. Une torche mal placée et toute la ville part en fumée. Frappe avant d'entrer.",
        population: 32000
      },
      {
        name: "Cénon",
        lat: 44.8595, lng: -0.5246,
        icon: "🧙", race: "Gnomes peu hostiles",
        description: "Cénon c'est des gnomes, mais ça va, ils sont pas trop hostiles. Tu peux passer chez eux sans te faire arnaquer. Enfin, pas trop.",
        population: 25000
      },
      {
        name: "Libourne",
        lat: 44.9134, lng: -0.2418,
        icon: "🛡️", race: "Vieux bastion",
        description: "Libourne c'est le vieux bastion qui tient face au trouble qui monte dans les terres. Ils sont pas accueillants, mais derrière leurs murs, t'es à l'abri pour la nuit.",
        population: 25000
      },
      {
        name: "Gradignan",
        lat: 44.7740, lng: -0.6109,
        icon: "👹", race: "Orques",
        description: "Gradignan, ça c'est des orques. Territoire ultra hostile : si tu t'égares là-bas le soir, tu vas servir de repas. Pas de négociation, pas de passage.",
        population: 26000
      },
      {
        name: "Lormont",
        lat: 44.8784, lng: -0.5274,
        icon: "🪨", race: "Mercenaires de la falaise",
        description: "Lormont, ça c'est la falaise des mercenaires de pont. Tu peux louer leurs services si tu veux protéger tes convois sur le pont par-dessus la Garonne. C'est cher, mais c'est efficace.",
        population: 22000
      },
      {
        name: "Eysines",
        lat: 44.8867, lng: -0.6510,
        icon: "🧪", race: "Alchimistes-maraîchers",
        description: "Eysines c'est des alchimistes et des maraîchers. C'est le dernier endroit où tu peux trouver des potions de légumes. Aide-les à protéger leur champ de patates et leur champ de salades le soir, et ils te filent des fioles.",
        population: 24000
      },
      {
        name: "Le Bouscat",
        lat: 44.8645, lng: -0.5963,
        icon: "🦇", race: "Vampires bourgeois",
        description: "Le Bouscat c'est des vampires bourgeois. Tout en lin, très polis, ils te sucent ton or directement dans la poche avant que t'aies le temps de t'en rendre compte.",
        population: 24000
      }
    ]
  },
  "13": {
    label: "13 — Bouches-du-Rhône",
    title: "⚔️ Carte Fantasy du 13 - Bouches-du-Rhône",
    h1: "⚔️ Carte Fantasy du 13 ⚔️",
    headerP: "Bouches-du-Rhône — « Sous le mistral, les peuples de Provence règlent leurs comptes en vers et en feu »",
    legendH3: "Peuples du 13",
    intro: "On part dans le 13, entre garrigue, étangs et calanques, croiser orques forgerons, hauts-elfes provençaux et skavens marseillais.",
    center: [43.55, 5.15],
    zoom: 9,
    cities: [
      {
        name: "Châteaurenard",
        lat: 43.8806, lng: 4.8550,
        icon: "🏰", race: "Humains de la plaine",
        description: "Châteaurenard c'est une ville humaine plutôt tranquille en surface. Par contre, dès que tu sors des remparts, les alentours grouillent de créatures pas claires — vaut mieux pas traîner sur les chemins une fois la nuit tombée.",
        population: 16000
      },
      {
        name: "Fos-sur-Mer",
        lat: 43.4419, lng: 4.9447,
        icon: "⚒️", race: "Orques forgerons",
        description: "Ça c'est carrément pas une ville, c'est un immense atelier d'orques qui forgent jour et nuit dans la zone industrielle. Ça tape, ça crache de la fumée, et si t'as l'oreille fine t'entends les enclumes à des lieues à la ronde.",
        population: 16000
      },
      {
        name: "Tarascon",
        lat: 43.8067, lng: 4.6603,
        icon: "🐉", race: "Dresseurs de Tarasque",
        description: "Tarascon, Tarascon, là c'est des dresseurs de Tarasque pur jus. Chaque année il s'y tient un grand festival où ils sortent la bête pour parader dans les rues — t'as intérêt à pas être devant quand elle a faim.",
        population: 15000
      },
      {
        name: "Marignane",
        lat: 43.4156, lng: 5.2128,
        icon: "🌃", race: "Humains (le jour)",
        description: "Marignane c'est une ville humaine bien rangée le jour. Bon, le soir, il y a des trucs qui rôdent dans le coin et les gens sortent pas jusqu'au lever du soleil — pas par flemme, par instinct de survie.",
        population: 39000
      },
      {
        name: "Port-de-Bouc",
        lat: 43.4053, lng: 4.9858,
        icon: "🧜", race: "Sirènes pacifiques",
        description: "Port-de-Bouc c'est un petit peuple très pacifique posé entre deux étangs. Leur spécialité, les chants de sirènes — ils t'endorment gentiment, te piquent rien, et te raccompagnent même jusqu'au port.",
        population: 16000
      },
      {
        name: "Bouc-Bel-Air",
        lat: 43.4506, lng: 5.4136,
        icon: "🌳", race: "Hobbits provençaux",
        description: "Bouc Bel Air c'est carrément le deuxième village Hobbit du département. Spécialité maison : l'élevage de moutons et des petits groupes de flûtistes qui jouent toute la soirée sous les oliviers.",
        population: 14000
      },
      {
        name: "Les Pennes-Mirabeau",
        lat: 43.4097, lng: 5.3147,
        icon: "🛡️", race: "Gardes-frontière",
        description: "Pennes-Mirabeau, ça c'est le poste frontière. Ils font payer un droit de passage à tous ceux qui passent — pas méchants, mais si t'as pas la pièce ils te font bien sentir que t'es à la frontière.",
        population: 21000
      },
      {
        name: "Martigues",
        lat: 43.4053, lng: 5.0481,
        icon: "🍺", race: "Pirates festifs",
        description: "Martigues c'est les pirates des canaux, sympas mais bruyants comme pas possible. T'es accepté sans souci si t'es alcoolisé — sobre par contre, ils te regardent un peu de travers, ça les met mal à l'aise.",
        population: 49000
      },
      {
        name: "Salon-de-Provence",
        lat: 43.6406, lng: 5.0975,
        icon: "🧝", race: "Hauts-elfes",
        description: "Ça c'est la ville des hauts elfes bien sûr, le panneau est même écrit en elfique en plus du provençal. Ils ont des magiciens qui font péter des sortilèges en pleine rue, c'est un spectacle permanent.",
        population: 46000
      },
      {
        name: "Aubagne",
        lat: 43.2925, lng: 5.5706,
        icon: "🔫", race: "Nains arquebusiers",
        description: "Aubagne, bah pour moi c'est des nains qui ont des énormes fusils. Moins violents que les Marseillais d'à côté, mais encore plus têtus voilà — t'essaies de les faire changer d'avis tu perds ton après-midi.",
        population: 47000
      },
      {
        name: "Marseille",
        lat: 43.2965, lng: 5.3698,
        icon: "🐀", race: "Skavens",
        description: "Marseille, tout le monde sait qu'elle est tenue par les skavens. Elle est tentaculaire, ça grouille dans les souterrains et dans les calanques, et t'as jamais vraiment le compte exact d'habitants — y'en a toujours plus en bas.",
        population: 870000
      }
    ]
  },
  "38": {
    label: "38 — Isère",
    title: "⚔️ Carte Fantasy du 38 - Isère",
    h1: "⚔️ Carte Fantasy du 38 ⚔️",
    headerP: "Isère — « Une cuvette maudite cernée de sommets, de guildes et de brigands »",
    legendH3: "Peuples du 38",
    intro: "On part dans le 38, l'Isère, une terre de montagnes et de cuvettes où chaque vallée cache sa propre guilde, sa propre malédiction et son propre patois.",
    center: [45.30, 5.55],
    zoom: 9,
    cities: [
      {
        name: "Voiron",
        lat: 45.3656, lng: 5.5928,
        icon: "👺", race: "Hobgobelins",
        description: "Voiron c'est des hobgobelins. Aucune diplomatie, aucune politesse, ils te tombent dessus pour te piquer ta bourse avant même que t'aies dit bonjour.",
        population: 20000
      },
      {
        name: "Saint-Égrève",
        lat: 45.2333, lng: 5.6833,
        icon: "💀", race: "Chevaliers décapités",
        description: "Ça c'est le repaire des chevaliers qui ont perdu la tête au combat. Ils errent encore en armure dans les rues, ils ont juste oublié pourquoi.",
        population: 16000
      },
      {
        name: "Bourgoin-Jallieu",
        lat: 45.5853, lng: 5.2747,
        icon: "🛡️", race: "Bastion des Territoriaux",
        description: "Bourgoin-Jallieu ça c'est un bastion. Aucune diplomatie là-bas, ils règlent leurs conflits territoriaux en faisant des mêlées et celui qui reste debout a raison.",
        population: 28000
      },
      {
        name: "Villefontaine",
        lat: 45.6147, lng: 5.1497,
        icon: "🏪", race: "Cité marchande",
        description: "Villefontaine c'est une cité commerçante. À part pour faire du commerce t'as pas grand-chose à y faire, sauf si tu veux passer dans le coin pour refaire ton stock.",
        population: 19000
      },
      {
        name: "Fontaine",
        lat: 45.1939, lng: 5.6856,
        icon: "🏹", race: "Elfes hostiles",
        description: "Fontaine, attention, ça fait Elfe mais en fait c'est des elfes de la pire espèce. Ils sont pas gentils, ils font des embuscades dès que tu poses un pied dans leur forêt.",
        population: 23000
      },
      {
        name: "L'Isle-d'Abeau",
        lat: 45.6206, lng: 5.2275,
        icon: "🌀", race: "Labyrinthe maudit",
        description: "L'Isle-d'Abeau c'est une malédiction. Un ancien mage a créé 5000 fois la même rue, c'est devenu un labyrinthe où beaucoup d'aventuriers se sont perdus pour de bon.",
        population: 17000
      },
      {
        name: "La Tour-du-Pin",
        lat: 45.5650, lng: 5.4453,
        icon: "🌲", race: "Tour fantôme",
        description: "La Tour du Pin, tu te dis ce que te dit le nom, t'arrives là-bas, y'a pas de tour. Juste des pins qui se foutent de ta gueule en silence.",
        population: 8000
      },
      {
        name: "Meylan",
        lat: 45.2069, lng: 5.7794,
        icon: "🧝", race: "Hauts-Elfes",
        description: "Meylan c'est forcément les hauts-elfes. Attention, le prix d'entrée dans le village est monté, c'est passé à 2000 pièces d'or — si t'as pas la bourse pleine, tu restes dehors.",
        population: 18000
      },
      {
        name: "Échirolles",
        lat: 45.1467, lng: 5.7172,
        icon: "🏴", race: "Guilde ouvrière anarchiste",
        description: "Échirolles c'est un immense repère d'anarchistes où tout est permis, une vraie guilde ouvrière. Chaos total, mais au moins tout le monde est logé à la même enseigne.",
        population: 36000
      },
      {
        name: "Saint-Martin-d'Hères",
        lat: 45.1697, lng: 5.7611,
        icon: "📜", race: "Académie des mages en galère",
        description: "Saint-Martin-d'Hères c'est l'académie des mages en galère. Il y a 30 000 novices qui essaient de transmuter du cuivre par jour, et ils dorment tous dans des piaules d'isolement.",
        population: 39000
      },
      {
        name: "Pont-de-Claix",
        lat: 45.1147, lng: 5.7019,
        icon: "⚗️", race: "Alchimistes",
        description: "Pont-de-Claix c'est les alchimistes. Ça passe, mais attention, un jour c'est tout le quartier qui te pète à la gueule à cause d'une fiole mal bouchée.",
        population: 12000
      },
      {
        name: "Seyssinet-Pariset",
        lat: 45.1822, lng: 5.6822,
        icon: "⚔️", race: "Chevaliers à la retraite",
        description: "Seyssinet-Pariset c'est comme Seyssins, c'est des chevaliers à la retraite. Il y a beaucoup de trésors enfouis dans les parcs ou dans les bois, je te conseille d'amener une pelle.",
        population: 12000
      },
      {
        name: "Eybens",
        lat: 45.1483, lng: 5.7553,
        icon: "🍃", race: "Village hobbit",
        description: "Eybens c'est le village de hobbits pacifique. Tu risques rien là-bas, à part une bonne indigestion après avoir enchaîné les seconds petits-déjeuners.",
        population: 10000
      },
      {
        name: "La Mure",
        lat: 44.9036, lng: 5.7869,
        icon: "⛏️", race: "Nains",
        description: "La Mure, c'est les nains. Ils creusent, ils râlent, ils boivent, et ils refusent de te dire bonjour tant que t'as pas la barbe assez longue.",
        population: 5000
      },
      {
        name: "Grenoble",
        lat: 45.1885, lng: 5.7245,
        icon: "🏔️", race: "Capitale de la cuvette",
        description: "Et enfin, Grenoble, la capitale de la cuvette, maudite par un épais brouillard. C'est un immense chaudron où cohabitent des rôdeurs bourgeois en armure de montagne avec des brigands. Attention, ne laisse pas traîner ton destrier la nuit ou il disparaîtra. Également, t'as un malus de moins 5 en endurance tout l'été.",
        population: 158000
      }
    ]
  },
  "59": {
    label: "59 — Nord",
    title: "⚔️ Carte Fantasy du 59 - Nord",
    h1: "⚔️ Carte Fantasy du 59 ⚔️",
    headerP: "Nord — « Là où le brouillard de la mer rencontre la fumée des forges »",
    legendH3: "Peuples du 59",
    intro: "On part dans le 59, ok je classe les villes du Nord en médiéval fantastique, c'est parti.",
    center: [50.65, 3.15],
    zoom: 9,
    cities: [
      {
        name: "Dunkerque",
        lat: 51.0341, lng: 2.3770,
        icon: "🪓", race: "Barbares vikings",
        description: "Ça c'est une ville d'humains, mais pas n'importe lesquels — des barbares vikings qui sentent la mer et le sang séché. Tu débarques, tu paies ton tribut en bière, sinon t'es jeté à la marée.",
        population: 87000
      },
      {
        name: "Grande-Synthe",
        lat: 51.0167, lng: 2.2972,
        icon: "🧛", race: "Vampires souterrains",
        description: "Grande-Synthe ça fait un peu ville d'humains en surface, mais genre les souterrains sont complètement infestés de vampires. Le jour ça va, mais à la tombée de la nuit faut pas traîner près des bouches d'égout.",
        population: 22000
      },
      {
        name: "Hazebrouck",
        lat: 50.7239, lng: 2.5400,
        icon: "🏚️", race: "Marchands",
        description: "Hazebrouck c'est une bonne ville de marchand. Tu pousses la porte de l'auberge, t'as direct trois quêtes à choisir et un type louche qui te paie une bière pour t'écouter.",
        population: 22000
      },
      {
        name: "Villeneuve-d'Ascq",
        lat: 50.6189, lng: 3.1675,
        icon: "🧙", race: "Gnomes inventeurs",
        description: "Villeneuve-d'Ascq ça sent bien la ville de gnome. Ça invente des trucs improbables à la chaîne, et y a des fous du bus partout qui foncent à toute allure entre les ateliers.",
        population: 63000
      },
      {
        name: "La Madeleine",
        lat: 50.6553, lng: 3.0747,
        icon: "🍞", race: "Hobbits",
        description: "La Madeleine bon bah ça c'est carrément un village de hobbits. Trois petits déjeuners le matin, gros gourmands, des maisons mignonnes au bord des rivières — t'as juste envie de t'asseoir et manger.",
        population: 22000
      },
      {
        name: "Douai",
        lat: 50.3714, lng: 3.0800,
        icon: "🕰️", race: "Mages du temps",
        description: "Bon, en tout cas, Douai ça sent bien la ville de mages. Genre, le temps s'y écoule différemment, quoi — tu rentres prendre un café, tu ressors trois heures plus tard sans comprendre.",
        population: 40000
      },
      {
        name: "Saint-Amand-les-Eaux",
        lat: 50.4458, lng: 3.4286,
        icon: "🧝", race: "Elfes mystiques",
        description: "Saint-Amand-les-Eaux ça c'est un peu les elfes mystiques chelous qui font des bails bizarres dans les marais. T'entends des chants la nuit, tu vois des lumières flotter — pose pas trop de questions.",
        population: 16000
      },
      {
        name: "Douchy-les-Mines",
        lat: 50.3447, lng: 3.4117,
        icon: "⛏️", race: "Nains",
        description: "Douchy-les-Mines bon bah ça c'est une ville de nains, c'est dans le nom. Quand ça creuse pas, ça boit de la bière, et quand ça boit de la bière, ça creuse encore mieux. Cycle parfait.",
        population: 10000
      },
      {
        name: "Maubeuge",
        lat: 50.2783, lng: 3.9710,
        icon: "👹", race: "Orcs",
        description: "Attention, à Maubeuge le PVP est activé en permanence. C'est une ville d'orcs, faut pas y aller si t'es un barbare viking ou un elfe trop bien coiffé. Très dangereux, tu sors ton épée avant de descendre du char.",
        population: 30000
      }
    ]
  },
  "62": {
    label: "62 — Pas-de-Calais",
    title: "⚔️ Carte Fantasy du 62 - Pas-de-Calais",
    h1: "⚔️ Carte Fantasy du 62 ⚔️",
    headerP: "Pas-de-Calais — « Entre brume du Nord, mines profondes et bastions oubliés »",
    legendH3: "Peuples du 62",
    intro: "On part dans le 62, une terre balayée par le vent du Nord, où les nécropoles côtoient les bastions de paladins et les galeries des nains.",
    center: [50.6, 2.3],
    zoom: 9,
    cities: [
      {
        name: "Longuenesse",
        lat: 50.7383, lng: 2.2333,
        icon: "💀", race: "Nécromanciens",
        description: "Longuenesse c'est une nécropole, une ville de morts. T'as que des âmes errantes qui tournent en rond entre les tombes, et si tu t'arrêtes trop longtemps t'as un nécromancien qui te tend un contrat pour rejoindre la troupe.",
        population: 12000
      },
      {
        name: "Berck-sur-Mer",
        lat: 50.4067, lng: 1.5722,
        icon: "🧌", race: "Ogres bonhommes",
        description: "Ça c'est des ogres pas très brillants, mais gentils comme tout. Voilà, faut pas trop les chercher pour discuter, tu peux y passer la journée — mais si t'es perdu sur la côte, ils te ramèneront jusqu'au village les bras chargés de coquillages.",
        population: 14000
      },
      {
        name: "Lens",
        lat: 50.4297, lng: 2.8311,
        icon: "⚔️", race: "Paladins",
        description: "Lens c'est les paladins, en armure sang et or, absolus, prêts à mourir pour leur bannière. Tu les croises un soir de match, tu comprends direct que la foi se hurle plus fort qu'elle se prie.",
        population: 31000
      },
      {
        name: "Liévin",
        lat: 50.4222, lng: 2.7775,
        icon: "🕳️", race: "Humains des galeries",
        description: "Liévin c'est la ville des humains, mais avec, là-dessous, il y a plein de galeries qui filent dans tous les sens. Si tu vois un mec faire demi-tour sans raison sur ton chemin, c'est qu'il a entendu quelque chose remonter d'en bas.",
        population: 31000
      },
      {
        name: "Avion",
        lat: 50.4150, lng: 2.8275,
        icon: "🧙", race: "Gnomes",
        description: "Avion c'est des gnomes qui essaient depuis des siècles de faire décoller quelque chose, à grand renfort de plans pliés et de mécaniques bricolées. Faut le croire ou pas, mais eux y croient dur comme fer, et un jour ça finira par voler.",
        population: 17000
      },
      {
        name: "Béthune",
        lat: 50.5306, lng: 2.6406,
        icon: "⛪", race: "Clercs",
        description: "Béthune c'est le bastion des clercs. On y soigne les maladies, on y bénit les épées, mais toujours en échange d'une belle somme posée sur l'autel. Pas de bourse, pas de miracle.",
        population: 25000
      },
      {
        name: "Boulogne-sur-Mer",
        lat: 50.7264, lng: 1.6147,
        icon: "🐟", race: "Hommes-poissons",
        description: "Boulogne-sur-mer c'est des hommes-poissons. Ça sent la marée à 5 km, ils s'y baignent dès l'aube et causent un patois où chaque mot finit en bulles. T'es invité à manger, t'es servi cru.",
        population: 40000
      },
      {
        name: "Bully-les-Mines",
        lat: 50.4453, lng: 2.7250,
        icon: "⛏️", race: "Nains des profondeurs",
        description: "Bully-les-Mines c'est les nains des profondeurs. Certains d'entre eux n'ont jamais vu le soleil de leur vie, et s'ils le voient un jour, ils se protègent avec du cuir, du tissu, tout ce qu'ils trouvent. Le fond du puits, c'est leur chez-eux.",
        population: 12000
      },
      {
        name: "Bruay-la-Buissière",
        lat: 50.4858, lng: 2.5444,
        icon: "🌿", race: "Elfes des buissons",
        description: "Bruay-la-Buissière, ça c'est carrément des elfes des buissons. Y'a pas plus inoffensif que ces elfes-là, t'as rien à craindre d'eux — ils te laissent passer en silence et te glissent une fleur dans la poche sans que tu t'en rendes compte.",
        population: 22000
      },
      {
        name: "Méricourt",
        lat: 50.4022, lng: 2.8736,
        icon: "🎭", race: "Fous du roi",
        description: "Méricourt, c'est des fous, simplement. C'est un très grande fête en permanence, mais bon, faut pas s'attarder trop longtemps si t'as la tête fragile, parce que leurs blagues te suivent jusque dans tes rêves.",
        population: 12000
      },
      {
        name: "Calais",
        lat: 50.9481, lng: 1.8564,
        icon: "🐉", race: "Drakéides",
        description: "Calais, stylé, c'est les drakéides — rien à dire, ils peuvent se permettre. Moyenne d'âge 240 ans, écailles polies et regard qui te jauge en deux secondes. Tu négocies pas avec un drakéide, tu écoutes.",
        population: 73000
      },
      {
        name: "Arras",
        lat: 50.2911, lng: 2.7775,
        icon: "🐎", race: "Cavaliers",
        description: "Arras, c'est des cavaliers, tout simplement. Il y a plus de chevaux que d'habitants, les pavés résonnent du matin au soir et personne ne marche jamais — si t'arrives à pied, t'es repéré direct comme étranger.",
        population: 42000
      },
      {
        name: "La Comté",
        lat: 50.4136, lng: 2.4794,
        icon: "🍃", race: "Hobbits",
        description: "Et la Comté, bien sûr, j'oublie pas les hobbits du Pas-de-Calais. 800 âmes à peine, mais ça valait vraiment le détour — petites portes rondes, pipes au coin du feu et second petit-déjeuner servi sans qu'on le demande.",
        population: 800
      }
    ]
  },
  "69": {
    label: "69 — Rhône",
    title: "⚔️ Carte Fantasy du 69 - Rhône",
    h1: "⚔️ Carte Fantasy du 69 ⚔️",
    headerP: "Rhône — « Là où le fleuve gronde et les bardes désaccordent leurs luths »",
    legendH3: "Peuples du 69",
    intro: "On part dans le 69, allez on fait les voisins.",
    center: [45.74, 4.85],
    zoom: 11,
    cities: [
      {
        name: "Sainte-Foy-lès-Lyon",
        lat: 45.7378, lng: 4.8000,
        icon: "👑", race: "Haute noblesse",
        description: "Sainte-Foy-lès-Lyon ça c'est la haute noblesse. Ils vivent perchés dans une montagne à l'abri des gueux, et ils se rient de la plèbe depuis leurs balcons en sirotant un vin de garde.",
        population: 22000
      },
      {
        name: "Caluire-et-Cuire",
        lat: 45.7951, lng: 4.8479,
        icon: "🌾", race: "Hobbits",
        description: "Caluire-et-Cuire ça c'est des hobbits qui vivent au bord du fleuve. Ils aiment surtout se moquer des voyageurs qui passent, planqués dans leurs petites maisons fleuries trois étoiles au concours national.",
        population: 43000
      },
      {
        name: "Écully",
        lat: 45.7747, lng: 4.7700,
        icon: "🧙", race: "Mages",
        description: "Écully c'est l'académie des mages. Ils ont caché leur école dans une forêt, et il faut s'endetter sur six ans pour pouvoir y apprendre des sorts de troisième cercle.",
        population: 18000
      },
      {
        name: "Oullins",
        lat: 45.7158, lng: 4.8081,
        icon: "⛏️", race: "Nains",
        description: "Oullins c'est des nains des tunnels. Ils creusent sans relâche pour trouver la prospérité à leur peuple, et t'as intérêt à pas marcher sur leurs galeries si tu tiens à tes chevilles.",
        population: 26000
      },
      {
        name: "Tassin-la-Demi-Lune",
        lat: 45.7647, lng: 4.7700,
        icon: "🌙", race: "Elfes de la nuit",
        description: "Tassin-la-Demi-Lune ça forcément c'est des elfes de la nuit. Tous les mois ils font une grande cérémonie au grand maître du temps, et si t'es pas invité, t'as plutôt intérêt à pas traîner dans le coin.",
        population: 22000
      },
      {
        name: "Francheville",
        lat: 45.7350, lng: 4.7600,
        icon: "🌿", race: "Druides",
        description: "Francheville ça c'est une ville tranquille, par contre il commence à y avoir du druidisme et du chamanisme qui pointe le bout de son nez. Les vieux parlent aux arbres et personne trouve ça bizarre.",
        population: 14000
      },
      {
        name: "Vénissieux",
        lat: 45.6975, lng: 4.8853,
        icon: "🦎", race: "Hommes-lézards",
        description: "Vénissieux c'est les hommes lézards. C'est un ancien peuple qui a muté pour pouvoir s'adapter et vivre dans une forêt de béton, et franchement ils s'en sortent pas trop mal.",
        population: 65000
      },
      {
        name: "Bron",
        lat: 45.7333, lng: 4.9114,
        icon: "🪓", race: "Nains fous",
        description: "Bron c'est la ville des nains fous. Ils sont remontés à la surface trop vite et l'esprit a pris cher dans le voyage, du coup maintenant ils marmonnent tout seuls en regardant les voitures passer.",
        population: 42000
      },
      {
        name: "Vaulx-en-Velin",
        lat: 45.7767, lng: 4.9189,
        icon: "👺", race: "Gobelins",
        description: "Vaulx-en-Velin ça fait Gobelin forcément. Ils se rassemblent pour organiser le Grand Bal Gobelin, où ils sacrifient des humains entre deux danses, ambiance garantie.",
        population: 53000
      },
      {
        name: "Saint-Priest",
        lat: 45.6975, lng: 4.9425,
        icon: "📜", race: "Clercs",
        description: "Saint-Priest bon ça c'est forcément une ville de clercs. Mais ils utilisent régulièrement la magie, ils sont pas du genre à faire que prier en silence dans leur coin.",
        population: 47000
      },
      {
        name: "Meyzieu",
        lat: 45.7681, lng: 5.0014,
        icon: "🐗", race: "Hommes-bêtes",
        description: "Meyzieu ça c'est des hommes et des bêtes. Ils sont relativement pacifiques, sauf pendant la période d'accouplement, et quand il faut, ben t'évites de passer dans le coin si tu veux pas finir piétiné.",
        population: 33000
      },
      {
        name: "Givors",
        lat: 45.5908, lng: 4.7711,
        icon: "🔮", race: "Mages canalisateurs",
        description: "Givors ça c'est une ville de puissants mages qui essayent de canaliser leur mana dans la vallée. Le fleuve passe en bas, l'énergie aussi, et eux ils tendent les mains pour pas que ça déborde.",
        population: 20000
      },
      {
        name: "Villeurbanne",
        lat: 45.7667, lng: 4.8800,
        icon: "🎻", race: "Bardes maudits",
        description: "Villeurbanne c'est la grande ville maudite des bardes. C'est une immense cité chaotique où tu ne peux pas faire 10 mètres sans qu'un troubadour vienne t'accoster et jouer du luth désaccordé à côté de ton oreille.",
        population: 156000
      },
      {
        name: "Rillieux-la-Pape",
        lat: 45.8186, lng: 4.8983,
        icon: "🏰", race: "Donjon labyrinthe",
        description: "Rillieux-la-Pape c'est pas une ville c'est un donjon. C'est une espèce de grand labyrinthe rempli de bestioles, et si tu y rentres sans une boussole et une bonne épée tu ressors pas.",
        population: 30000
      },
      {
        name: "Décines-Charpieu",
        lat: 45.7686, lng: 4.9586,
        icon: "🦁", race: "Arène",
        description: "Décines-Charpieu c'est pareil, ce n'est pas une ville c'est une immense arène où tu peux affronter des lions pour gagner gloire et honneur. Ou perdre tes tripes, c'est selon.",
        population: 27000
      },
      {
        name: "Lyon",
        lat: 45.7640, lng: 4.8357,
        icon: "🍷", race: "Cité impériale",
        description: "Lyon c'est la cité impériale des Gaules. C'est une capitale régie par la secte de la gastronomie qui t'oblige à manger des abats de porc dans des bouchons sombres. La nuit méfie-toi, reste dans la lumière : des templiers et des chamanes rôdent.",
        population: 522000
      }
    ]
  }
};

const map = L.map('map', {
  center: [46.8, 2.5],
  zoom: 6,
  zoomControl: false
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: ''
}).addTo(map);

const legendEl = document.getElementById('legend');
const transcriptEl = document.getElementById('transcript-panel');
const headerP = document.querySelector('#header > p');
const legendH3 = legendEl.querySelector('h3');

const ZOOM_THRESHOLD = 9;
const FRANCE_BOUNDS = L.latLngBounds([[43.0, -1.5], [51.5, 6.5]]);

const cityMarkers = [];
const regionMarkers = [];
let cityLayer, regionLayer;
let currentDominant = undefined; // sentinel: forces first render

function buildAllMarkers() {
  Object.entries(regions).forEach(([key, region]) => {
    // --- Region marker (shown when zoomed out) ---
    const rIconHtml = `
      <div class="region-marker">
        <div class="region-icon">${key}</div>
      </div>
    `;
    const rIcon = L.divIcon({
      html: rIconHtml,
      className: '',
      iconSize: [56, 56],
      iconAnchor: [28, 28],
      popupAnchor: [0, -28]
    });
    const rMarker = L.marker(region.center, { icon: rIcon });
    const rPopup = `
      <div class="popup-inner">
        <div class="city-name">${region.h1.replace(/⚔️/g, '').trim()}</div>
        <div class="city-race"><span class="race-icon">🗺️</span> ${region.label}</div>
        <div class="divider"></div>
        <div class="description">« ${region.intro} »</div>
        <div class="divider"></div>
        <div class="pop-badge">
          🏘️ <span class="pop-number">${region.cities.length}</span> <span>villes</span>
        </div>
      </div>
    `;
    rMarker.bindPopup(rPopup, { maxWidth: 320, autoPan: false });
    rMarker.on('click', () => {
      map.flyTo(region.center, region.zoom, { duration: 1.0 });
    });
    regionMarkers.push(rMarker);

    // --- City markers ---
    region.cities.forEach((city) => {
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
      const marker = L.marker([city.lat, city.lng], { icon: customIcon });
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
      marker.bindPopup(popupContent, { maxWidth: 320, autoPan: false });
      marker._city = city;
      marker._regionKey = key;
      cityMarkers.push(marker);
    });
  });

  cityLayer = L.layerGroup(cityMarkers);
  regionLayer = L.layerGroup(regionMarkers);
}

function updateMarkerLayers() {
  const z = map.getZoom();
  if (z >= ZOOM_THRESHOLD) {
    if (map.hasLayer(regionLayer)) map.removeLayer(regionLayer);
    if (!map.hasLayer(cityLayer)) cityLayer.addTo(map);
  } else {
    if (map.hasLayer(cityLayer)) map.removeLayer(cityLayer);
    if (!map.hasLayer(regionLayer)) regionLayer.addTo(map);
  }
}

function computeDominantRegion() {
  if (map.getZoom() < ZOOM_THRESHOLD) return null;
  const c = map.getCenter();
  let best = null, bestDist = Infinity;
  Object.entries(regions).forEach(([key, region]) => {
    const dLat = c.lat - region.center[0];
    const dLng = c.lng - region.center[1];
    const d = dLat * dLat + dLng * dLng;
    if (d < bestDist) { bestDist = d; best = key; }
  });
  return best;
}

function renderListPanels(domKey) {
  // Cleanup
  legendEl.querySelectorAll('.legend-item').forEach(n => n.remove());
  transcriptEl.querySelectorAll('.transcript-block').forEach(n => n.remove());

  if (domKey === null) {
    // ----- Vue France -----
    document.title = '⚔️ Carte Fantasy de France';
    headerP.textContent = 'Sept terres, sept peuples — choisis ta destination';
    legendH3.textContent = 'Régions de France';

    const intro = document.createElement('div');
    intro.className = 'transcript-block';
    intro.style.borderLeftColor = '#c9a84c';
    intro.style.marginBottom = '20px';
    intro.innerHTML = `
      <div class="tb-city">🗺️ Introduction</div>
      <div class="tb-text">« Bienvenue sur la carte fantasy de France. Sept départements, chacun avec ses peuples, ses légendes et ses dangers. Clique sur une région pour explorer ses villes. »</div>
    `;
    transcriptEl.appendChild(intro);

    Object.entries(regions).forEach(([key, region]) => {
      const li = document.createElement('div');
      li.className = 'legend-item';
      li.innerHTML = `<span class="li-icon">${key}</span><span class="li-name">${region.label.replace(/^\d+ — /, '')}</span>`;
      li.onclick = () => map.flyTo(region.center, region.zoom, { duration: 1.0 });
      legendEl.appendChild(li);

      const tb = document.createElement('div');
      tb.className = 'transcript-block';
      tb.innerHTML = `
        <div class="tb-city">🗺️ ${region.label} <span style="color:#a0896a;font-weight:400;font-size:0.8rem;">(${region.cities.length} villes)</span></div>
        <div class="tb-text">« ${region.intro} »</div>
      `;
      tb.onclick = () => {
        map.flyTo(region.center, region.zoom, { duration: 1.0 });
        if (window.innerWidth <= 600) toggleTranscript();
      };
      transcriptEl.appendChild(tb);
    });
  } else {
    // ----- Vue département -----
    const region = regions[domKey];
    document.title = region.title;
    headerP.textContent = region.headerP;
    legendH3.textContent = region.legendH3;

    const intro = document.createElement('div');
    intro.className = 'transcript-block';
    intro.style.borderLeftColor = '#c9a84c';
    intro.style.marginBottom = '20px';
    intro.innerHTML = `
      <div class="tb-city">🗺️ Introduction</div>
      <div class="tb-text">« ${region.intro} »</div>
    `;
    transcriptEl.appendChild(intro);

    region.cities.forEach((city) => {
      const cityMarker = cityMarkers.find(m => m._city === city);

      const li = document.createElement('div');
      li.className = 'legend-item';
      li.innerHTML = `<span class="li-icon">${city.icon}</span><span class="li-name">${city.name}</span>`;
      li.onclick = () => {
        map.flyTo([city.lat, city.lng], 13, { duration: 0.8 });
        setTimeout(() => cityMarker && cityMarker.openPopup(), 800);
      };
      legendEl.appendChild(li);

      const tb = document.createElement('div');
      tb.className = 'transcript-block';
      tb.innerHTML = `
        <div class="tb-city">${city.icon} ${city.name} <span style="color:#a0896a;font-weight:400;font-size:0.8rem;">(${city.population.toLocaleString('fr-FR')} hab.)</span></div>
        <div class="tb-text">« ${city.description} »</div>
      `;
      tb.onclick = () => {
        map.flyTo([city.lat, city.lng], 13, { duration: 0.8 });
        setTimeout(() => cityMarker && cityMarker.openPopup(), 800);
        if (window.innerWidth <= 600) toggleTranscript();
      };
      transcriptEl.appendChild(tb);
    });
  }

  // Active dropdown state + trigger label
  const activeKey = domKey === null ? 'france' : domKey;
  let activeLabel = '🗺️ Vue France';
  document.querySelectorAll('.region-dropdown-item').forEach(item => {
    const isActive = item.dataset.region === activeKey;
    item.classList.toggle('active', isActive);
    if (isActive) activeLabel = item.textContent.trim();
  });
  const ddLabel = document.querySelector('.region-dropdown-trigger .dd-label');
  if (ddLabel) ddLabel.textContent = activeLabel;
}

function syncFromMap() {
  updateMarkerLayers();
  const newDom = computeDominantRegion();
  if (newDom !== currentDominant) {
    currentDominant = newDom;
    renderListPanels(newDom);
    updateHashFromDominant(newDom);
  }
}

// URL hash sync: `#33` for Gironde, no hash for Vue France.
// replaceState (not pushState) keeps history clean as the user pans across regions.
function updateHashFromDominant(domKey) {
  const targetHash = domKey === null ? '' : '#' + domKey;
  if (window.location.hash === targetHash) return;
  const url = window.location.pathname + window.location.search + targetHash;
  history.replaceState(null, '', url);
}

function applyHashToMap() {
  const key = window.location.hash.replace('#', '');
  if (key && regions[key]) {
    map.flyTo(regions[key].center, regions[key].zoom, { duration: 1.0 });
  } else {
    map.flyToBounds(FRANCE_BOUNDS, { duration: 1.0 });
  }
}

window.addEventListener('hashchange', applyHashToMap);

// Transcript toggle
function toggleTranscript() {
  document.getElementById('transcript-panel').classList.toggle('open');
}

// Swipe-right to close the transcript panel (mobile / touch).
// Locks direction on first few pixels so vertical scrolling stays untouched.
(function setupTranscriptSwipe() {
  const panel = document.getElementById('transcript-panel');
  const SWIPE_CLOSE_THRESHOLD = 80; // px traveled right to commit close
  const DIRECTION_LOCK_PX = 10;     // px before deciding swipe vs scroll

  let startX = 0, startY = 0, currentDX = 0;
  let pending = false;  // touch active, direction not yet decided
  let dragging = false; // actively translating the panel

  panel.addEventListener('touchstart', (e) => {
    if (!panel.classList.contains('open') || e.touches.length !== 1) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    currentDX = 0;
    pending = true;
    dragging = false;
  }, { passive: true });

  panel.addEventListener('touchmove', (e) => {
    if (!pending && !dragging) return;
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;

    if (pending) {
      if (Math.abs(dx) < DIRECTION_LOCK_PX && Math.abs(dy) < DIRECTION_LOCK_PX) return;
      if (Math.abs(dx) > Math.abs(dy) && dx > 0) {
        dragging = true;
        pending = false;
        panel.style.transition = 'none';
      } else {
        pending = false; // vertical scroll or left swipe: let the browser handle it
        return;
      }
    }

    currentDX = Math.max(0, dx);
    panel.style.transform = `translateX(${currentDX}px)`;
    e.preventDefault();
  }, { passive: false });

  function endDrag() {
    if (!dragging) { pending = false; return; }
    dragging = false;
    pending = false;

    if (currentDX > SWIPE_CLOSE_THRESHOLD) {
      panel.style.transition = 'transform 0.25s ease-out';
      panel.style.transform = `translateX(${panel.offsetWidth}px)`;
      setTimeout(() => {
        // Swap to closed state silently: kill transitions, drop .open + transform,
        // force reflow, then restore CSS transitions. Otherwise removing .open
        // re-animates `right` and the panel briefly reappears.
        panel.style.transition = 'none';
        panel.classList.remove('open');
        panel.style.transform = '';
        void panel.offsetWidth;
        panel.style.transition = '';
      }, 250);
    } else {
      panel.style.transition = 'transform 0.2s ease-out';
      panel.style.transform = '';
      setTimeout(() => { panel.style.transition = ''; }, 200);
    }
    currentDX = 0;
  }

  panel.addEventListener('touchend', endDrag, { passive: true });
  panel.addEventListener('touchcancel', endDrag, { passive: true });
})();

// On popup open: stop the close button from triggering page navigation,
// and flip the popup below the marker if its top would land behind the
// fixed header (autoPan is off, so we never shift the marker around).
map.on('popupopen', function(e) {
  const popup = e.popup;
  const popupEl = popup.getElement();
  if (!popupEl) return;

  const closeBtn = popupEl.querySelector('.leaflet-popup-close-button');
  if (closeBtn) {
    closeBtn.setAttribute('href', 'javascript:void(0)');
    closeBtn.addEventListener('click', function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      map.closePopup();
    });
  }

  popupEl.classList.remove('popup-flipped');
  popupEl.style.removeProperty('--popup-flip-distance');
  popupEl.style.removeProperty('--popup-flip-tip-distance');

  const marker = popup._source;
  if (!marker || !marker.getElement) return;
  const markerEl = marker.getElement();
  if (!markerEl) return;

  requestAnimationFrame(() => {
    const wrapperEl = popupEl.querySelector('.leaflet-popup-content-wrapper');
    const tipEl = popupEl.querySelector('.leaflet-popup-tip-container');
    if (!wrapperEl || !tipEl) return;

    const wrapperRect = wrapperEl.getBoundingClientRect();
    const tipRect = tipEl.getBoundingClientRect();
    const markerRect = markerEl.getBoundingClientRect();
    const headerEl = document.getElementById('header');
    const headerBottom = headerEl ? headerEl.getBoundingClientRect().bottom : 0;

    if (wrapperRect.top < headerBottom + 4) {
      const newWrapperTop = markerRect.bottom + 24;
      const newTipTop = markerRect.bottom + 4;
      popupEl.style.setProperty('--popup-flip-distance', (newWrapperTop - wrapperRect.top) + 'px');
      popupEl.style.setProperty('--popup-flip-tip-distance', (newTipTop - tipRect.top) + 'px');
      popupEl.classList.add('popup-flipped');
    }
  });
});

map.on('zoomend', syncFromMap);
map.on('moveend', syncFromMap);

// Region dropdown wiring
const regionDropdown = document.getElementById('region-dropdown');
const regionTrigger = regionDropdown.querySelector('.region-dropdown-trigger');

function setDropdownOpen(open) {
  regionDropdown.classList.toggle('open', open);
  regionTrigger.setAttribute('aria-expanded', open ? 'true' : 'false');
}

regionTrigger.addEventListener('click', (e) => {
  e.stopPropagation();
  setDropdownOpen(!regionDropdown.classList.contains('open'));
});

document.querySelectorAll('.region-dropdown-item').forEach(item => {
  item.addEventListener('click', () => {
    if (item.dataset.region === 'france') {
      map.flyToBounds(FRANCE_BOUNDS, { duration: 1.0 });
    } else {
      const r = regions[item.dataset.region];
      map.flyTo(r.center, r.zoom, { duration: 1.0 });
    }
    setDropdownOpen(false);
  });
});

document.addEventListener('click', (e) => {
  if (!regionDropdown.contains(e.target)) setDropdownOpen(false);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setDropdownOpen(false);
});

// Initial render — honor #region in the URL, otherwise fit France.
buildAllMarkers();
const initialKey = window.location.hash.replace('#', '');
if (initialKey && regions[initialKey]) {
  map.setView(regions[initialKey].center, regions[initialKey].zoom);
} else {
  map.fitBounds(FRANCE_BOUNDS);
}
syncFromMap();

// Dynamic dropdown positioning based on header height
const headerElement = document.getElementById('header');
if (headerElement && regionDropdown) {
  const headerObserver = new ResizeObserver(() => {
    const headerBottom = headerElement.getBoundingClientRect().bottom;
    regionDropdown.style.top = (headerBottom + 16) + 'px';
  });
  headerObserver.observe(headerElement);
}
