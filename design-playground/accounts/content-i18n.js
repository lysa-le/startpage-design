/* ============================================================
   Accounts prototype — SERP content translations
   ------------------------------------------------------------
   English is the source language and lives in the HTML files.
   Only the 9 non-English languages are stored here.

   Usage:  AccountsContentI18n.get('ch-organic-0', 'Français')
           → { title, description } | null
   ============================================================ */
(function (global) {
  const LANGS = ['Deutsch', 'Nederlands', 'Español', 'Français', 'Italiano', 'Português', 'Svenska', 'Dansk', 'Norsk'];

  /* Shared relative-time patterns. {n} is substituted by the caller. */
  const TIME = {
    Deutsch:    { minutesAgo: 'vor {n} Minuten', hoursAgo: 'vor {n} Stunden', hourAgo: 'vor 1 Stunde', daysAgo: 'vor {n} Tagen', dayAgo: 'vor 1 Tag', monthsAgo: 'vor {n} Monaten', yearsAgo: 'vor {n} Jahren', yearAgo: 'vor 1 Jahr', views: '{n} Aufrufe' },
    Nederlands: { minutesAgo: '{n} minuten geleden', hoursAgo: '{n} uur geleden', hourAgo: '1 uur geleden', daysAgo: '{n} dagen geleden', dayAgo: '1 dag geleden', monthsAgo: '{n} maanden geleden', yearsAgo: '{n} jaar geleden', yearAgo: '1 jaar geleden', views: '{n} weergaven' },
    Español:    { minutesAgo: 'hace {n} minutos', hoursAgo: 'hace {n} horas', hourAgo: 'hace 1 hora', daysAgo: 'hace {n} días', dayAgo: 'hace 1 día', monthsAgo: 'hace {n} meses', yearsAgo: 'hace {n} años', yearAgo: 'hace 1 año', views: '{n} visualizaciones' },
    Français:   { minutesAgo: 'il y a {n} minutes', hoursAgo: 'il y a {n} heures', hourAgo: 'il y a 1 heure', daysAgo: 'il y a {n} jours', dayAgo: 'il y a 1 jour', monthsAgo: 'il y a {n} mois', yearsAgo: 'il y a {n} ans', yearAgo: 'il y a 1 an', views: '{n} vues' },
    Italiano:   { minutesAgo: '{n} minuti fa', hoursAgo: '{n} ore fa', hourAgo: "1 ora fa", daysAgo: '{n} giorni fa', dayAgo: '1 giorno fa', monthsAgo: '{n} mesi fa', yearsAgo: '{n} anni fa', yearAgo: '1 anno fa', views: '{n} visualizzazioni' },
    Português:  { minutesAgo: 'há {n} minutos', hoursAgo: 'há {n} horas', hourAgo: 'há 1 hora', daysAgo: 'há {n} dias', dayAgo: 'há 1 dia', monthsAgo: 'há {n} meses', yearsAgo: 'há {n} anos', yearAgo: 'há 1 ano', views: '{n} visualizações' },
    Svenska:    { minutesAgo: '{n} minuter sedan', hoursAgo: '{n} timmar sedan', hourAgo: '1 timme sedan', daysAgo: '{n} dagar sedan', dayAgo: '1 dag sedan', monthsAgo: '{n} månader sedan', yearsAgo: '{n} år sedan', yearAgo: '1 år sedan', views: '{n} visningar' },
    Dansk:      { minutesAgo: '{n} minutter siden', hoursAgo: '{n} timer siden', hourAgo: '1 time siden', daysAgo: '{n} dage siden', dayAgo: '1 dag siden', monthsAgo: '{n} måneder siden', yearsAgo: '{n} år siden', yearAgo: '1 år siden', views: '{n} visninger' },
    Norsk:      { minutesAgo: '{n} minutter siden', hoursAgo: '{n} timer siden', hourAgo: '1 time siden', daysAgo: '{n} dager siden', dayAgo: '1 dag siden', monthsAgo: '{n} måneder siden', yearsAgo: '{n} år siden', yearAgo: '1 år siden', views: '{n} visninger' },
  };

  const C = {

    /* ══════════════════════════════════════════════════════════
       CHEESE SERP — top ads
       ══════════════════════════════════════════════════════════ */

    'ch-ad-top-0': {
      Deutsch: {
        title: 'Cabot Käse — Preisgekrönter Cheddar seit 1919',
        description: 'Cabot Käse online kaufen. Sharp Cheddar, Pepper Jack und mehr von Genossenschaftsbauern aus Vermont. Kostenloser Versand ab 50 $. Schmecken Sie den Unterschied in jedem Bissen.',
        sitelinks: ['Sharp Cheddar', 'Farmhouse', 'Snack-Packs', 'Rezepte'],
      },
      Nederlands: {
        title: 'Cabot Cheese — Bekroonde cheddar sinds 1919',
        description: 'Koop Cabot kaas online. Sharp cheddar, pepper jack en meer van coöperatieve boeren uit Vermont. Gratis verzending bij bestellingen boven 50 $. Ontdek het verschil in elke hap.',
        sitelinks: ['Sharp cheddar', 'Farmhouse', 'Snackpakketten', 'Recepten'],
      },
      Español: {
        title: 'Cabot Cheese — Cheddar galardonado desde 1919',
        description: 'Compra queso Cabot en línea. Cheddar curado, pepper jack y mucho más de los granjeros cooperativistas de Vermont. Envío gratis en pedidos superiores a 50 $. Nota la diferencia en cada bocado.',
        sitelinks: ['Cheddar curado', 'Farmhouse', 'Packs de snacks', 'Recetas'],
      },
      Français: {
        title: 'Cabot Cheese — Un cheddar primé depuis 1919',
        description: 'Achetez le fromage Cabot en ligne. Cheddar affiné, pepper jack et bien plus, produits par les agriculteurs de la coopérative du Vermont. Livraison gratuite dès 50 $. Goûtez la différence à chaque bouchée.',
        sitelinks: ['Cheddar affiné', 'Farmhouse', 'Packs à grignoter', 'Recettes'],
      },
      Italiano: {
        title: 'Cabot Cheese — Cheddar premiato dal 1919',
        description: 'Acquista il formaggio Cabot online. Cheddar stagionato, pepper jack e molto altro dai contadini della cooperativa del Vermont. Spedizione gratuita per ordini superiori a 50 $. Senti la differenza in ogni morso.',
        sitelinks: ['Cheddar stagionato', 'Farmhouse', 'Snack pack', 'Ricette'],
      },
      Português: {
        title: 'Cabot Cheese — Cheddar premiado desde 1919',
        description: 'Compre queijo Cabot online. Cheddar curado, pepper jack e muito mais dos produtores da cooperativa de Vermont. Frete grátis em pedidos acima de US$ 50. Sinta a diferença em cada mordida.',
        sitelinks: ['Cheddar curado', 'Farmhouse', 'Pacotes de snacks', 'Receitas'],
      },
      Svenska: {
        title: 'Cabot Cheese — Prisbelönt cheddar sedan 1919',
        description: 'Köp Cabot-ost online. Lagrad cheddar, pepper jack och mycket mer från kooperativets bönder i Vermont. Fri frakt vid köp över 50 $. Smaka skillnaden i varje tugga.',
        sitelinks: ['Lagrad cheddar', 'Farmhouse', 'Snackpaket', 'Recept'],
      },
      Dansk: {
        title: 'Cabot Cheese — Prisvindende cheddar siden 1919',
        description: 'Køb Cabot-ost online. Lagret cheddar, pepper jack og meget mere fra andelslandmændene i Vermont. Gratis levering ved køb over 50 $. Smag forskellen i hver mundfuld.',
        sitelinks: ['Lagret cheddar', 'Farmhouse', 'Snackpakker', 'Opskrifter'],
      },
      Norsk: {
        title: 'Cabot Cheese — Prisbelønt cheddar siden 1919',
        description: 'Kjøp Cabot-ost på nett. Lagret cheddar, pepper jack og mye mer fra samvirkebøndene i Vermont. Gratis frakt på ordrer over 50 $. Kjenn forskjellen i hver bit.',
        sitelinks: ['Lagret cheddar', 'Farmhouse', 'Snackpakker', 'Oppskrifter'],
      },
    },

    'ch-ad-top-1': {
      Deutsch: {
        title: 'Tillamook Käse — Extra Sharp Cheddar und mehr',
        description: 'Mit Sorgfalt hergestellt im Tillamook County, Oregon. Entdecken Sie unsere Käseblöcke, Scheiben und geriebenen Käse. Finden Sie Geschäfte in Ihrer Nähe oder kaufen Sie online mit Lieferung.',
        sitelinks: ['Extra Sharp', 'Medium Cheddar', 'Pepper Jack', 'Händlersuche'],
      },
      Nederlands: {
        title: 'Tillamook Cheese — Extra sharp cheddar en meer',
        description: 'Met zorg gemaakt in Tillamook County, Oregon. Ontdek onze kaasblokken, sneetjes en geraspte kaas. Vind winkels in de buurt of bestel online met bezorging.',
        sitelinks: ['Extra sharp', 'Medium cheddar', 'Pepper jack', 'Winkelzoeker'],
      },
      Español: {
        title: 'Tillamook Cheese — Cheddar extra curado y mucho más',
        description: 'Elaborado con esmero en el condado de Tillamook, Oregón. Descubre nuestros bloques, lonchas y queso rallado. Encuentra tiendas cerca de ti o compra en línea con entrega a domicilio.',
        sitelinks: ['Extra curado', 'Cheddar semicurado', 'Pepper jack', 'Buscar tiendas'],
      },
      Français: {
        title: 'Tillamook Cheese — Cheddar extra affiné et plus encore',
        description: 'Fabriqué avec soin dans le comté de Tillamook, en Oregon. Découvrez nos blocs, tranches et fromages râpés. Trouvez un magasin près de chez vous ou commandez en ligne avec livraison.',
        sitelinks: ['Extra affiné', 'Cheddar mi-affiné', 'Pepper jack', 'Trouver un magasin'],
      },
      Italiano: {
        title: 'Tillamook Cheese — Cheddar extra stagionato e molto altro',
        description: 'Prodotto con cura nella contea di Tillamook, in Oregon. Scopri i nostri panetti, le fette e il formaggio grattugiato. Trova i negozi vicino a te o acquista online con consegna a domicilio.',
        sitelinks: ['Extra stagionato', 'Cheddar medio', 'Pepper jack', 'Trova negozio'],
      },
      Português: {
        title: 'Tillamook Cheese — Cheddar extracurado e muito mais',
        description: 'Feito com cuidado no condado de Tillamook, Oregon. Conheça nossas barras, fatias e queijo ralado. Encontre lojas perto de você ou compre online com entrega.',
        sitelinks: ['Extracurado', 'Cheddar médio', 'Pepper jack', 'Buscar lojas'],
      },
      Svenska: {
        title: 'Tillamook Cheese — Extra lagrad cheddar och mycket mer',
        description: 'Tillverkad med omsorg i Tillamook County, Oregon. Utforska våra ostbitar, skivor och riven ost. Hitta butiker nära dig eller handla online med hemleverans.',
        sitelinks: ['Extra lagrad', 'Mellanlagrad cheddar', 'Pepper jack', 'Butikssök'],
      },
      Dansk: {
        title: 'Tillamook Cheese — Ekstra lagret cheddar og meget mere',
        description: 'Fremstillet med omhu i Tillamook County, Oregon. Udforsk vores osteblokke, skiver og revet ost. Find butikker i nærheden, eller køb online med levering.',
        sitelinks: ['Ekstra lagret', 'Mellemlagret cheddar', 'Pepper jack', 'Butiksfinder'],
      },
      Norsk: {
        title: 'Tillamook Cheese — Ekstra lagret cheddar og mer',
        description: 'Laget med omhu i Tillamook County i Oregon. Utforsk ostebitene, skivene og den revne osten vår. Finn butikker i nærheten, eller handle på nett med levering.',
        sitelinks: ['Ekstra lagret', 'Mellomlagret cheddar', 'Pepper jack', 'Butikksøk'],
      },
    },

    'ch-ad-top-2': {
      Deutsch: {
        title: 'Cheese.com — Lexikon der Käsesorten und Pairings',
        description: 'Durchsuchen Sie über 1.800 Käsesorten nach Land, Milchart und Textur. Pairing-Ratgeber, Rezepte und Geschmacksnotizen zu Cheddar, Brie, Gouda, Blauschimmelkäse und mehr.',
        sitelinks: ['Nach Land', 'Nach Milchart', 'Weichkäse', 'Hartkäse'],
      },
      Nederlands: {
        title: 'Cheese.com — Encyclopedie van kaassoorten en combinaties',
        description: 'Blader door meer dan 1.800 kazen op land, melksoort en textuur. Combinatiegidsen, recepten en smaaknotities voor cheddar, brie, gouda, blauwe kaas en meer.',
        sitelinks: ['Op land', 'Op melksoort', 'Zachte kaas', 'Harde kaas'],
      },
      Español: {
        title: 'Cheese.com — Enciclopedia de tipos de queso y maridajes',
        description: 'Explora más de 1.800 quesos por país, tipo de leche y textura. Guías de maridaje, recetas y notas de cata para cheddar, brie, gouda, queso azul y muchos más.',
        sitelinks: ['Por país', 'Por leche', 'Queso blando', 'Queso curado'],
      },
      Français: {
        title: 'Cheese.com — Encyclopédie des fromages et des accords',
        description: 'Parcourez plus de 1 800 fromages par pays, type de lait et texture. Guides d’accords, recettes et notes de dégustation pour le cheddar, le brie, le gouda, le bleu et bien d’autres.',
        sitelinks: ['Par pays', 'Par lait', 'Pâte molle', 'Pâte dure'],
      },
      Italiano: {
        title: 'Cheese.com — Enciclopedia dei formaggi e degli abbinamenti',
        description: 'Sfoglia oltre 1.800 formaggi per paese, tipo di latte e consistenza. Guide agli abbinamenti, ricette e note di degustazione per cheddar, brie, gouda, formaggi erborinati e molto altro.',
        sitelinks: ['Per paese', 'Per latte', 'Formaggi molli', 'Formaggi duri'],
      },
      Português: {
        title: 'Cheese.com — Enciclopédia de tipos de queijo e harmonizações',
        description: 'Explore mais de 1.800 queijos por país, tipo de leite e textura. Guias de harmonização, receitas e notas de degustação para cheddar, brie, gouda, queijo azul e muito mais.',
        sitelinks: ['Por país', 'Por leite', 'Queijo mole', 'Queijo duro'],
      },
      Svenska: {
        title: 'Cheese.com — Uppslagsverket för ostsorter och kombinationer',
        description: 'Bläddra bland över 1 800 ostar efter land, mjölksort och konsistens. Guider till kombinationer, recept och smaknoter för cheddar, brie, gouda, blåmögelost och mycket mer.',
        sitelinks: ['Efter land', 'Efter mjölk', 'Mjuk ost', 'Hård ost'],
      },
      Dansk: {
        title: 'Cheese.com — Leksikon over ostetyper og kombinationer',
        description: 'Gennemse over 1.800 oste efter land, mælketype og konsistens. Guider til kombinationer, opskrifter og smagsnoter for cheddar, brie, gouda, blåskimmelost og meget mere.',
        sitelinks: ['Efter land', 'Efter mælk', 'Bløde oste', 'Hårde oste'],
      },
      Norsk: {
        title: 'Cheese.com — Oppslagsverket for ostetyper og kombinasjoner',
        description: 'Bla gjennom over 1800 oster etter land, melketype og konsistens. Guider til kombinasjoner, oppskrifter og smaksnoter for cheddar, brie, gouda, blåmuggost og mye mer.',
        sitelinks: ['Etter land', 'Etter melk', 'Myk ost', 'Hard ost'],
      },
    },

    'ch-ad-top-3': {
      Deutsch: {
        title: 'Sargento Käsesnacks — Echter Käse, echt gut',
        description: 'Natürliche Käsesnacks, Scheiben und geriebener Käse für den Alltag. Ohne künstliche Aromen. Finden Sie Sargento Käse in Ihrer Nähe.',
        sitelinks: ['Snack-Käse', 'In Scheiben', 'Gerieben', 'Rezepte'],
      },
      Nederlands: {
        title: 'Sargento kaassnacks — Echte kaas, echt lekker',
        description: 'Natuurlijke kaassnacks, sneetjes en geraspte kaas voor alledaagse maaltijden. Zonder kunstmatige aroma’s. Vind Sargento kaas in de buurt.',
        sitelinks: ['Snackkaas', 'Gesneden', 'Geraspt', 'Recepten'],
      },
      Español: {
        title: 'Snacks de queso Sargento — Queso de verdad, buenísimo',
        description: 'Snacks de queso natural, lonchas y queso rallado para el día a día. Sin aromas artificiales. Encuentra queso Sargento cerca de ti.',
        sitelinks: ['Queso para picar', 'En lonchas', 'Rallado', 'Recetas'],
      },
      Français: {
        title: 'Snacks au fromage Sargento — Du vrai fromage, vraiment bon',
        description: 'Snacks au fromage naturel, tranches et fromage râpé pour tous les jours. Sans arômes artificiels. Trouvez le fromage Sargento près de chez vous.',
        sitelinks: ['Fromage à grignoter', 'En tranches', 'Râpé', 'Recettes'],
      },
      Italiano: {
        title: 'Snack al formaggio Sargento — Formaggio vero, davvero buono',
        description: 'Snack di formaggio naturale, fette e formaggio grattugiato per i pasti di ogni giorno. Senza aromi artificiali. Trova il formaggio Sargento vicino a te.',
        sitelinks: ['Formaggio snack', 'A fette', 'Grattugiato', 'Ricette'],
      },
      Português: {
        title: 'Snacks de queijo Sargento — Queijo de verdade, muito bom',
        description: 'Snacks de queijo natural, fatias e queijo ralado para as refeições do dia a dia. Sem aromas artificiais. Encontre queijo Sargento perto de você.',
        sitelinks: ['Queijo para petiscar', 'Fatiado', 'Ralado', 'Receitas'],
      },
      Svenska: {
        title: 'Sargento ostsnacks — Riktig ost, riktigt gott',
        description: 'Naturliga ostsnacks, skivor och riven ost till vardagens måltider. Utan artificiella aromer. Hitta Sargento-ost nära dig.',
        sitelinks: ['Snackost', 'Skivad', 'Riven', 'Recept'],
      },
      Dansk: {
        title: 'Sargento ostesnacks — Rigtig ost, rigtig god',
        description: 'Naturlige ostesnacks, skiver og revet ost til hverdagens måltider. Uden kunstige aromaer. Find Sargento-ost i nærheden af dig.',
        sitelinks: ['Snackost', 'I skiver', 'Revet', 'Opskrifter'],
      },
      Norsk: {
        title: 'Sargento ostesnacks — Ekte ost, ekte godt',
        description: 'Naturlige ostesnacks, skiver og revet ost til hverdagens måltider. Uten kunstige aromaer. Finn Sargento-ost i nærheten av deg.',
        sitelinks: ['Snacksost', 'I skiver', 'Revet', 'Oppskrifter'],
      },
    },
