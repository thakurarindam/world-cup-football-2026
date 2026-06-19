// ===== WORLD CUP 2026 — DATA (last updated: 2026-06-19) =====
// All fixture times stored as UTC strings; JS appends 'Z' and converts to IST (+5:30)
// EDT (Eastern Daylight Time) = UTC-4 during June–July 2026
// IST = UTC+5:30 = EDT+9:30

"use strict";
const WC2026 = {
  lastUpdated: "2026-06-19",

  // ── COUNTRY MASTER DATA (48 teams) ─────────────────────────────
  // fifaRank = FIFA World Ranking as of June 11, 2026 (source: FIFA.com via wego.com)
  countries: {
    MEX:{ name:"Mexico",         flag:"🇲🇽", confederation:"CONCACAF", continent:"North America", capital:"Mexico City",     area:"1,964,375 km²",  population:"130 million",  fifaRank:14, landmark:"Chichen Itza",               landmarkDesc:"The magnificent Maya pyramid of El Castillo at Chichen Itza, a UNESCO World Heritage Site." },
    KOR:{ name:"South Korea",    flag:"🇰🇷", confederation:"AFC",      continent:"Asia",          capital:"Seoul",           area:"100,210 km²",    population:"52 million",   fifaRank:25, landmark:"Gyeongbokgung Palace",       landmarkDesc:"The grandest of the Five Grand Palaces built during the Joseon dynasty in Seoul." },
    RSA:{ name:"South Africa",   flag:"🇿🇦", confederation:"CAF",      continent:"Africa",        capital:"Pretoria",        area:"1,219,090 km²",  population:"60 million",   fifaRank:60, landmark:"Table Mountain",             landmarkDesc:"The iconic flat-topped mountain overlooking Cape Town, a UNESCO World Heritage Site." },
    CZE:{ name:"Czechia",        flag:"🇨🇿", confederation:"UEFA",     continent:"Europe",        capital:"Prague",          area:"78,866 km²",     population:"11 million",   fifaRank:40, landmark:"Prague Castle",              landmarkDesc:"The largest ancient castle in the world, perched above the Vltava River in Prague." },
    CAN:{ name:"Canada",         flag:"🇨🇦", confederation:"CONCACAF", continent:"North America", capital:"Ottawa",          area:"9,984,670 km²",  population:"38 million",   fifaRank:30, landmark:"Niagara Falls",              landmarkDesc:"One of the world's most famous waterfalls, straddling the border between Canada and the USA." },
    BIH:{ name:"Bosnia & Herz.", flag:"🇧🇦", confederation:"UEFA",     continent:"Europe",        capital:"Sarajevo",        area:"51,197 km²",     population:"3.3 million",  fifaRank:64, landmark:"Stari Most Bridge",          landmarkDesc:"The iconic 16th-century Ottoman bridge in Mostar, a UNESCO World Heritage Site." },
    QAT:{ name:"Qatar",          flag:"🇶🇦", confederation:"AFC",      continent:"Asia",          capital:"Doha",            area:"11,581 km²",     population:"3 million",    fifaRank:56, landmark:"Museum of Islamic Art",      landmarkDesc:"A stunning I.M. Pei-designed museum on Doha's corniche housing one of the world's most important Islamic art collections." },
    SUI:{ name:"Switzerland",    flag:"🇨🇭", confederation:"UEFA",     continent:"Europe",        capital:"Bern",            area:"41,285 km²",     population:"8.7 million",  fifaRank:19, landmark:"Matterhorn",                 landmarkDesc:"The legendary pyramid-shaped peak straddling the Swiss-Italian border at 4,478m." },
    BRA:{ name:"Brazil",         flag:"🇧🇷", confederation:"CONMEBOL", continent:"South America", capital:"Brasília",        area:"8,515,767 km²",  population:"215 million",  fifaRank:6,  landmark:"Christ the Redeemer",        landmarkDesc:"The world-famous 38m statue of Jesus Christ atop Mount Corcovado in Rio de Janeiro." },
    SCO:{ name:"Scotland",       flag:"🏴󠁧󠁢󠁳󠁣󠁴󠁿", confederation:"UEFA",     continent:"Europe",        capital:"Edinburgh",      area:"78,789 km²",     population:"5.5 million",  fifaRank:42, landmark:"Edinburgh Castle",           landmarkDesc:"A fortress built on an ancient volcanic rock dominating the Edinburgh skyline." },
    MAR:{ name:"Morocco",        flag:"🇲🇦", confederation:"CAF",      continent:"Africa",        capital:"Rabat",           area:"446,550 km²",    population:"37 million",   fifaRank:7,  landmark:"Hassan II Mosque",           landmarkDesc:"The largest mosque in Africa, rising on a promontory over the Atlantic Ocean in Casablanca." },
    HAI:{ name:"Haiti",          flag:"🇭🇹", confederation:"CONCACAF", continent:"Caribbean",     capital:"Port-au-Prince",  area:"27,750 km²",     population:"11 million",   fifaRank:83, landmark:"Citadelle Laferrière",       landmarkDesc:"A massive early-19th-century mountaintop fortress, the largest in the Americas and a UNESCO World Heritage Site." },
    USA:{ name:"United States",  flag:"🇺🇸", confederation:"CONCACAF", continent:"North America", capital:"Washington D.C.", area:"9,833,517 km²",  population:"335 million",  fifaRank:17, landmark:"Statue of Liberty",          landmarkDesc:"A gift from France, the copper statue on Liberty Island has welcomed immigrants to America since 1886." },
    PAR:{ name:"Paraguay",       flag:"🇵🇾", confederation:"CONMEBOL", continent:"South America", capital:"Asunción",        area:"406,752 km²",    population:"7.4 million",  fifaRank:41, landmark:"Jesuit Missions of Trinidad", landmarkDesc:"The UNESCO World Heritage ruins of the Jesuit reduction of Santísima Trinidad del Paraná." },
    AUS:{ name:"Australia",      flag:"🇦🇺", confederation:"AFC",      continent:"Oceania",       capital:"Canberra",        area:"7,692,024 km²",  population:"26 million",   fifaRank:27, landmark:"Sydney Opera House",         landmarkDesc:"Jørn Utzon's architectural masterpiece, opened in 1973 on Bennelong Point in Sydney Harbour." },
    TUR:{ name:"Türkiye",        flag:"🇹🇷", confederation:"UEFA",     continent:"Europe/Asia",   capital:"Ankara",          area:"783,562 km²",    population:"85 million",   fifaRank:22, landmark:"Hagia Sophia",               landmarkDesc:"The 1,500-year-old architectural wonder in Istanbul, serving as cathedral, mosque and museum across the ages." },
    GER:{ name:"Germany",        flag:"🇩🇪", confederation:"UEFA",     continent:"Europe",        capital:"Berlin",          area:"357,114 km²",    population:"84 million",   fifaRank:10, landmark:"Brandenburg Gate",           landmarkDesc:"The 18th-century neoclassical monument in central Berlin, symbol of German reunification." },
    ECU:{ name:"Ecuador",        flag:"🇪🇨", confederation:"CONMEBOL", continent:"South America", capital:"Quito",           area:"283,561 km²",    population:"18 million",   fifaRank:23, landmark:"Galápagos Islands",          landmarkDesc:"The volcanic archipelago 900km off Ecuador's coast that inspired Darwin's theory of evolution." },
    CIV:{ name:"Côte d'Ivoire",  flag:"🇨🇮", confederation:"CAF",      continent:"Africa",        capital:"Yamoussoukro",    area:"322,463 km²",    population:"28 million",   fifaRank:33, landmark:"Basilica of Our Lady of Peace", landmarkDesc:"The largest church in the world by area, located in Yamoussoukro." },
    CUW:{ name:"Curaçao",        flag:"🇨🇼", confederation:"CONCACAF", continent:"Caribbean",     capital:"Willemstad",      area:"444 km²",        population:"158,000",      fifaRank:82, landmark:"Willemstad Colorful Facades", landmarkDesc:"The pastel-colored Dutch colonial architecture of Willemstad's waterfront, a UNESCO World Heritage Site." },
    NED:{ name:"Netherlands",    flag:"🇳🇱", confederation:"UEFA",     continent:"Europe",        capital:"Amsterdam",       area:"41,543 km²",     population:"17.9 million", fifaRank:8,  landmark:"Keukenhof Gardens",          landmarkDesc:"The world's largest flower garden near Lisse, hosting 7 million flower bulbs across 32 hectares." },
    SWE:{ name:"Sweden",         flag:"🇸🇪", confederation:"UEFA",     continent:"Europe",        capital:"Stockholm",       area:"450,295 km²",    population:"10.5 million", fifaRank:38, landmark:"Vasa Museum (Stockholm)",    landmarkDesc:"Home to the world's only surviving 17th-century warship, the Vasa, almost perfectly preserved." },
    JPN:{ name:"Japan",          flag:"🇯🇵", confederation:"AFC",      continent:"Asia",          capital:"Tokyo",           area:"377,975 km²",    population:"125 million",  fifaRank:18, landmark:"Mount Fuji",                 landmarkDesc:"Japan's highest peak at 3,776m, sacred in Japanese culture and a UNESCO World Heritage Site." },
    TUN:{ name:"Tunisia",        flag:"🇹🇳", confederation:"CAF",      continent:"Africa",        capital:"Tunis",           area:"163,610 km²",    population:"12 million",   fifaRank:45, landmark:"Amphitheatre of El Jem",     landmarkDesc:"The third-largest Roman amphitheatre in the world, built in 238 AD, UNESCO listed." },
    BEL:{ name:"Belgium",        flag:"🇧🇪", confederation:"UEFA",     continent:"Europe",        capital:"Brussels",        area:"30,528 km²",     population:"11.6 million", fifaRank:9,  landmark:"Grand Place Brussels",       landmarkDesc:"Arguably the most beautiful square in Europe, ringed by opulent guildhalls and the magnificent Gothic Town Hall." },
    IRN:{ name:"Iran",           flag:"🇮🇷", confederation:"AFC",      continent:"Asia",          capital:"Tehran",          area:"1,648,195 km²",  population:"87 million",   fifaRank:20, landmark:"Persepolis",                 landmarkDesc:"The ceremonial capital of the Achaemenid Empire, founded by Darius I in 518 BC, a UNESCO World Heritage Site." },
    EGY:{ name:"Egypt",          flag:"🇪🇬", confederation:"CAF",      continent:"Africa",        capital:"Cairo",           area:"1,001,449 km²",  population:"105 million",  fifaRank:29, landmark:"Pyramids of Giza",           landmarkDesc:"The last remaining wonder of the ancient world — built over 4,500 years ago, they remain a marvel of engineering." },
    NZL:{ name:"New Zealand",    flag:"🇳🇿", confederation:"OFC",      continent:"Oceania",       capital:"Wellington",      area:"268,021 km²",    population:"5.1 million",  fifaRank:85, landmark:"Milford Sound",              landmarkDesc:"A fiord carved by glaciers in Fiordland National Park, rated by Rudyard Kipling as the eighth wonder of the world." },
    ESP:{ name:"Spain",          flag:"🇪🇸", confederation:"UEFA",     continent:"Europe",        capital:"Madrid",          area:"505,990 km²",    population:"47.4 million", fifaRank:2,  landmark:"Sagrada Família",            landmarkDesc:"Antoni Gaudí's extraordinary basilica in Barcelona, under continuous construction since 1882." },
    URU:{ name:"Uruguay",        flag:"🇺🇾", confederation:"CONMEBOL", continent:"South America", capital:"Montevideo",      area:"176,215 km²",    population:"3.5 million",  fifaRank:16, landmark:"Palacio Salvo",              landmarkDesc:"The distinctive 27-floor skyscraper on Montevideo's Plaza Independencia, completed in 1928." },
    KSA:{ name:"Saudi Arabia",   flag:"🇸🇦", confederation:"AFC",      continent:"Asia",          capital:"Riyadh",          area:"2,149,690 km²",  population:"35 million",   fifaRank:61, landmark:"Al-Ula / Hegra",             landmarkDesc:"Saudi Arabia's first UNESCO World Heritage Site — ancient Nabataean tombs at Hegra (Madain Salih)." },
    CPV:{ name:"Cabo Verde",     flag:"🇨🇻", confederation:"CAF",      continent:"Africa",        capital:"Praia",           area:"4,033 km²",      population:"561,000",      fifaRank:67, landmark:"Monte Verde (Mindelo)",      landmarkDesc:"The lush peak rising above the port city of Mindelo on São Vicente island, offering panoramic views across the Atlantic." },
    FRA:{ name:"France",         flag:"🇫🇷", confederation:"UEFA",     continent:"Europe",        capital:"Paris",           area:"551,695 km²",    population:"68 million",   fifaRank:3,  landmark:"Eiffel Tower",               landmarkDesc:"Gustave Eiffel's 330-meter iron lattice tower, the most visited paid monument in the world." },
    NOR:{ name:"Norway",         flag:"🇳🇴", confederation:"UEFA",     continent:"Europe",        capital:"Oslo",            area:"385,207 km²",    population:"5.4 million",  fifaRank:31, landmark:"Geirangerfjord",             landmarkDesc:"A UNESCO-listed fjord in western Norway, walled by towering cliffs and tumbling waterfalls." },
    SEN:{ name:"Senegal",        flag:"🇸🇳", confederation:"CAF",      continent:"Africa",        capital:"Dakar",           area:"196,722 km²",    population:"17 million",   fifaRank:15, landmark:"African Renaissance Monument", landmarkDesc:"A 49-meter bronze statue atop twin hills in Dakar, the tallest statue in Africa." },
    IRQ:{ name:"Iraq",           flag:"🇮🇶", confederation:"AFC",      continent:"Asia",          capital:"Baghdad",         area:"438,317 km²",    population:"42 million",   fifaRank:57, landmark:"Ziggurat of Ur",             landmarkDesc:"The remarkably preserved 4,000-year-old Sumerian stepped pyramid near Nasiriyah." },
    ARG:{ name:"Argentina",      flag:"🇦🇷", confederation:"CONMEBOL", continent:"South America", capital:"Buenos Aires",    area:"2,780,400 km²",  population:"46 million",   fifaRank:1,  landmark:"Obelisco de Buenos Aires",   landmarkDesc:"The 67-meter white obelisk at the intersection of Corrientes Avenue and 9 de Julio Avenue in Buenos Aires." },
    ALG:{ name:"Algeria",        flag:"🇩🇿", confederation:"CAF",      continent:"Africa",        capital:"Algiers",         area:"2,381,741 km²",  population:"45 million",   fifaRank:28, landmark:"Timgad Roman Ruins",         landmarkDesc:"UNESCO World Heritage Site in the Aurès Mountains — remarkably complete ruins of a Roman city founded in 100 AD." },
    AUT:{ name:"Austria",        flag:"🇦🇹", confederation:"UEFA",     continent:"Europe",        capital:"Vienna",          area:"83,871 km²",     population:"9.1 million",  fifaRank:24, landmark:"Schönbrunn Palace",          landmarkDesc:"The 1,441-room Baroque imperial summer residence of the Habsburg monarchs in Vienna, UNESCO listed." },
    JOR:{ name:"Jordan",         flag:"🇯🇴", confederation:"AFC",      continent:"Asia",          capital:"Amman",           area:"89,342 km²",     population:"10.2 million", fifaRank:63, landmark:"Petra",                      landmarkDesc:"The Rose City — a UNESCO-listed ancient Nabataean capital carved directly into rose-red cliffs in southern Jordan." },
    COL:{ name:"Colombia",       flag:"🇨🇴", confederation:"CONMEBOL", continent:"South America", capital:"Bogotá",          area:"1,141,748 km²",  population:"52 million",   fifaRank:13, landmark:"Cartagena Walled City",      landmarkDesc:"The UNESCO-listed historic centre of Cartagena, enclosed by 11km of 16th-century colonial walls." },
    POR:{ name:"Portugal",       flag:"🇵🇹", confederation:"UEFA",     continent:"Europe",        capital:"Lisbon",          area:"92,212 km²",     population:"10.3 million", fifaRank:5,  landmark:"Tower of Belém",             landmarkDesc:"The 16th-century fortified tower on the Tagus River in Lisbon, a UNESCO World Heritage Site." },
    COD:{ name:"DR Congo",       flag:"🇨🇩", confederation:"CAF",      continent:"Africa",        capital:"Kinshasa",        area:"2,344,858 km²",  population:"100 million",  fifaRank:46, landmark:"Congo River & Virunga",      landmarkDesc:"The Congo River — the world's deepest river — flows through equatorial rainforest. Adjacent Virunga Park houses mountain gorillas." },
    UZB:{ name:"Uzbekistan",     flag:"🇺🇿", confederation:"AFC",      continent:"Asia",          capital:"Tashkent",        area:"448,978 km²",    population:"36 million",   fifaRank:50, landmark:"Registan, Samarkand",        landmarkDesc:"Three magnificently tiled madrasas surrounding Samarkand's historic heart, one of Asia's most breathtaking sights." },
    ENG:{ name:"England",        flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", confederation:"UEFA",     continent:"Europe",        capital:"London",          area:"130,279 km²",    population:"56 million",   fifaRank:4,  landmark:"Stonehenge",                 landmarkDesc:"The prehistoric monument on Salisbury Plain whose massive standing stones have stood for 5,000 years." },
    GHA:{ name:"Ghana",          flag:"🇬🇭", confederation:"CAF",      continent:"Africa",        capital:"Accra",           area:"238,533 km²",    population:"33 million",   fifaRank:73, landmark:"Cape Coast Castle",          landmarkDesc:"A UNESCO World Heritage Site — one of the largest slave castles built by Europeans in West Africa." },
    CRO:{ name:"Croatia",        flag:"🇭🇷", confederation:"UEFA",     continent:"Europe",        capital:"Zagreb",          area:"56,594 km²",     population:"4 million",    fifaRank:11, landmark:"Dubrovnik Old Town",         landmarkDesc:"The perfectly preserved medieval walled city on the Adriatic, called the Pearl of the Adriatic." },
    PAN:{ name:"Panama",         flag:"🇵🇦", confederation:"CONCACAF", continent:"Central America",capital:"Panama City",    area:"75,417 km²",     population:"4.4 million",  fifaRank:34, landmark:"Panama Canal",               landmarkDesc:"The engineering marvel connecting the Atlantic and Pacific Oceans, completed in 1914." }
  },

  // ── GROUPS & STANDINGS ─────────────────────────────────────────
  // Updated after MD1 (Jun 11–17) and MD2 Jun 18 (Groups A & B only)
  // MD1 scores: A: MEX2-0RSA, KOR2-1CZE | B: CAN1-1BIH, QAT1-1SUI | C: BRA1-1MAR, HAI0-1SCO
  //             D: USA4-1PAR, AUS2-0TUR | E: GER7-1CUW, CIV1-0ECU | F: NED2-2JPN, SWE5-1TUN
  //             G: BEL1-1EGY, IRN2-2NZL | H: ESP0-0CPV, KSA1-1URU | I: FRA3-1SEN, IRQ1-4NOR
  //             J: ARG3-0ALG, AUT3-1JOR | K: POR1-1COD, UZB1-3COL | L: ENG4-2CRO, GHA1-0PAN
  // MD2 Jun 18: A: CZE1-1RSA, MEX1-0KOR | B: SUI4-1BIH, CAN6-0QAT
  groups: {
    A: { name:"Group A", teams:[
      { id:"MEX", P:2, W:2, D:0, L:0, GF:3, GA:0, GD:3,  Pts:6, form:["W","W"] },
      { id:"KOR", P:2, W:1, D:0, L:1, GF:2, GA:2, GD:0,  Pts:3, form:["W","L"] },
      { id:"CZE", P:2, W:0, D:1, L:1, GF:2, GA:3, GD:-1, Pts:1, form:["L","D"] },
      { id:"RSA", P:2, W:0, D:1, L:1, GF:1, GA:3, GD:-2, Pts:1, form:["L","D"] }
    ]},
    B: { name:"Group B", teams:[
      { id:"CAN", P:2, W:1, D:1, L:0, GF:7, GA:1, GD:6,  Pts:4, form:["D","W"] },
      { id:"SUI", P:2, W:1, D:1, L:0, GF:5, GA:2, GD:3,  Pts:4, form:["D","W"] },
      { id:"BIH", P:2, W:0, D:1, L:1, GF:2, GA:5, GD:-3, Pts:1, form:["D","L"] },
      { id:"QAT", P:2, W:0, D:1, L:1, GF:1, GA:7, GD:-6, Pts:1, form:["D","L"] }
    ]},
    C: { name:"Group C", teams:[
      { id:"SCO", P:1, W:1, D:0, L:0, GF:1, GA:0, GD:1,  Pts:3, form:["W"] },
      { id:"BRA", P:1, W:0, D:1, L:0, GF:1, GA:1, GD:0,  Pts:1, form:["D"] },
      { id:"MAR", P:1, W:0, D:1, L:0, GF:1, GA:1, GD:0,  Pts:1, form:["D"] },
      { id:"HAI", P:1, W:0, D:0, L:1, GF:0, GA:1, GD:-1, Pts:0, form:["L"] }
    ]},
    D: { name:"Group D", teams:[
      { id:"USA", P:1, W:1, D:0, L:0, GF:4, GA:1, GD:3,  Pts:3, form:["W"] },
      { id:"AUS", P:1, W:1, D:0, L:0, GF:2, GA:0, GD:2,  Pts:3, form:["W"] },
      { id:"TUR", P:1, W:0, D:0, L:1, GF:0, GA:2, GD:-2, Pts:0, form:["L"] },
      { id:"PAR", P:1, W:0, D:0, L:1, GF:1, GA:4, GD:-3, Pts:0, form:["L"] }
    ]},
    E: { name:"Group E", teams:[
      { id:"GER", P:1, W:1, D:0, L:0, GF:7, GA:1, GD:6,  Pts:3, form:["W"] },
      { id:"CIV", P:1, W:1, D:0, L:0, GF:1, GA:0, GD:1,  Pts:3, form:["W"] },
      { id:"ECU", P:1, W:0, D:0, L:1, GF:0, GA:1, GD:-1, Pts:0, form:["L"] },
      { id:"CUW", P:1, W:0, D:0, L:1, GF:1, GA:7, GD:-6, Pts:0, form:["L"] }
    ]},
    F: { name:"Group F", teams:[
      { id:"SWE", P:1, W:1, D:0, L:0, GF:5, GA:1, GD:4,  Pts:3, form:["W"] },
      { id:"NED", P:1, W:0, D:1, L:0, GF:2, GA:2, GD:0,  Pts:1, form:["D"] },
      { id:"JPN", P:1, W:0, D:1, L:0, GF:2, GA:2, GD:0,  Pts:1, form:["D"] },
      { id:"TUN", P:1, W:0, D:0, L:1, GF:1, GA:5, GD:-4, Pts:0, form:["L"] }
    ]},
    G: { name:"Group G", teams:[
      { id:"BEL", P:1, W:0, D:1, L:0, GF:1, GA:1, GD:0,  Pts:1, form:["D"] },
      { id:"EGY", P:1, W:0, D:1, L:0, GF:1, GA:1, GD:0,  Pts:1, form:["D"] },
      { id:"IRN", P:1, W:0, D:1, L:0, GF:2, GA:2, GD:0,  Pts:1, form:["D"] },
      { id:"NZL", P:1, W:0, D:1, L:0, GF:2, GA:2, GD:0,  Pts:1, form:["D"] }
    ]},
    H: { name:"Group H", teams:[
      { id:"ESP", P:1, W:0, D:1, L:0, GF:0, GA:0, GD:0,  Pts:1, form:["D"] },
      { id:"URU", P:1, W:0, D:1, L:0, GF:1, GA:1, GD:0,  Pts:1, form:["D"] },
      { id:"KSA", P:1, W:0, D:1, L:0, GF:1, GA:1, GD:0,  Pts:1, form:["D"] },
      { id:"CPV", P:1, W:0, D:1, L:0, GF:0, GA:0, GD:0,  Pts:1, form:["D"] }
    ]},
    I: { name:"Group I", teams:[
      { id:"NOR", P:1, W:1, D:0, L:0, GF:4, GA:1, GD:3,  Pts:3, form:["W"] },
      { id:"FRA", P:1, W:1, D:0, L:0, GF:3, GA:1, GD:2,  Pts:3, form:["W"] },
      { id:"SEN", P:1, W:0, D:0, L:1, GF:1, GA:3, GD:-2, Pts:0, form:["L"] },
      { id:"IRQ", P:1, W:0, D:0, L:1, GF:1, GA:4, GD:-3, Pts:0, form:["L"] }
    ]},
    J: { name:"Group J", teams:[
      { id:"ARG", P:1, W:1, D:0, L:0, GF:3, GA:0, GD:3,  Pts:3, form:["W"] },
      { id:"AUT", P:1, W:1, D:0, L:0, GF:3, GA:1, GD:2,  Pts:3, form:["W"] },
      { id:"ALG", P:1, W:0, D:0, L:1, GF:0, GA:3, GD:-3, Pts:0, form:["L"] },
      { id:"JOR", P:1, W:0, D:0, L:1, GF:1, GA:3, GD:-2, Pts:0, form:["L"] }
    ]},
    K: { name:"Group K", teams:[
      { id:"COL", P:1, W:1, D:0, L:0, GF:3, GA:1, GD:2,  Pts:3, form:["W"] },
      { id:"POR", P:1, W:0, D:1, L:0, GF:1, GA:1, GD:0,  Pts:1, form:["D"] },
      { id:"COD", P:1, W:0, D:1, L:0, GF:1, GA:1, GD:0,  Pts:1, form:["D"] },
      { id:"UZB", P:1, W:0, D:0, L:1, GF:1, GA:3, GD:-2, Pts:0, form:["L"] }
    ]},
    L: { name:"Group L", teams:[
      { id:"ENG", P:1, W:1, D:0, L:0, GF:4, GA:2, GD:2,  Pts:3, form:["W"] },
      { id:"GHA", P:1, W:1, D:0, L:0, GF:1, GA:0, GD:1,  Pts:3, form:["W"] },
      { id:"CRO", P:1, W:0, D:0, L:1, GF:2, GA:4, GD:-2, Pts:0, form:["L"] },
      { id:"PAN", P:1, W:0, D:0, L:1, GF:0, GA:1, GD:-1, Pts:0, form:["L"] }
    ]}
  },

  // ── FIXTURES ────────────────────────────────────────────────────
  // All times in UTC. IST = UTC + 5:30. EDT = UTC - 4.
  // status: "FT" = full time, "UP" = upcoming
  fixtures: [
    // ── GROUP A ─────────────────────────────────────────────────
    // MD1
    { id:1,  group:"A", home:"MEX", away:"RSA", utc:"2026-06-11T19:00", venue:"SoFi Stadium, Inglewood CA", status:"FT", score:{h:2,a:0},
      events:[{type:"goal",team:"MEX",player:"Hirving Lozano",min:23},{type:"goal",team:"MEX",player:"Henry Martin",min:67}] },
    { id:2,  group:"A", home:"KOR", away:"CZE", utc:"2026-06-12T02:00", venue:"AT&T Stadium, Dallas TX", status:"FT", score:{h:2,a:1},
      events:[{type:"goal",team:"KOR",player:"Son Heung-min",min:18},{type:"goal",team:"CZE",player:"Patrik Schick",min:45},{type:"goal",team:"KOR",player:"Hwang Hee-chan",min:71}] },
    // MD2
    { id:3,  group:"A", home:"CZE", away:"RSA", utc:"2026-06-18T16:00", venue:"Gillette Stadium, Boston MA", status:"FT", score:{h:1,a:1},
      events:[{type:"goal",team:"CZE",player:"Patrik Schick",min:34},{type:"goal",team:"RSA",player:"Teboho Mokoena",min:83}] },
    { id:4,  group:"A", home:"MEX", away:"KOR", utc:"2026-06-19T01:00", venue:"Levi's Stadium, Santa Clara CA", status:"FT", score:{h:1,a:0},
      events:[{type:"goal",team:"MEX",player:"Luis Romo",min:50}] },
    // MD3
    { id:5,  group:"A", home:"CZE", away:"MEX", utc:"2026-06-25T01:00", venue:"MetLife Stadium, East Rutherford NJ", status:"UP", score:null, events:[] },
    { id:6,  group:"A", home:"RSA", away:"KOR", utc:"2026-06-25T01:00", venue:"Rose Bowl, Pasadena CA", status:"UP", score:null, events:[] },

    // ── GROUP B ─────────────────────────────────────────────────
    // MD1
    { id:7,  group:"B", home:"CAN", away:"BIH", utc:"2026-06-12T19:00", venue:"BC Place, Vancouver", status:"FT", score:{h:1,a:1},
      events:[{type:"goal",team:"CAN",player:"Jonathan David",min:29},{type:"goal",team:"BIH",player:"Edin Džeko",min:61}] },
    { id:8,  group:"B", home:"QAT", away:"SUI", utc:"2026-06-13T19:00", venue:"BMO Field, Toronto", status:"FT", score:{h:1,a:1},
      events:[{type:"goal",team:"SUI",player:"Breel Embolo",min:44},{type:"goal",team:"QAT",player:"Almoez Ali",min:72}] },
    // MD2
    { id:9,  group:"B", home:"SUI", away:"BIH", utc:"2026-06-18T19:00", venue:"Levi's Stadium, Santa Clara CA", status:"FT", score:{h:4,a:1},
      events:[{type:"goal",team:"SUI",player:"Granit Xhaka",min:12},{type:"goal",team:"SUI",player:"Breel Embolo",min:27},{type:"goal",team:"SUI",player:"Xherdan Shaqiri",min:60},{type:"goal",team:"BIH",player:"Edin Džeko",min:71},{type:"goal",team:"SUI",player:"Dan Ndoye",min:88}] },
    { id:10, group:"B", home:"CAN", away:"QAT", utc:"2026-06-18T22:00", venue:"BMO Field, Toronto", status:"FT", score:{h:6,a:0},
      events:[{type:"goal",team:"CAN",player:"Jonathan David",min:9},{type:"goal",team:"CAN",player:"Jonathan David",min:34},{type:"goal",team:"CAN",player:"Cyle Larin",min:52},{type:"goal",team:"CAN",player:"Jonathan David",min:67},{type:"goal",team:"CAN",player:"Tajon Buchanan",min:78},{type:"goal",team:"CAN",player:"Alphonso Davies",min:84}] },
    // MD3
    { id:11, group:"B", home:"SUI", away:"CAN", utc:"2026-06-24T19:00", venue:"Rose Bowl, Pasadena CA", status:"UP", score:null, events:[] },
    { id:12, group:"B", home:"BIH", away:"QAT", utc:"2026-06-24T19:00", venue:"AT&T Stadium, Dallas TX", status:"UP", score:null, events:[] },

    // ── GROUP C ─────────────────────────────────────────────────
    // MD1
    { id:13, group:"C", home:"BRA", away:"MAR", utc:"2026-06-13T22:00", venue:"MetLife Stadium, East Rutherford NJ", status:"FT", score:{h:1,a:1}, events:[] },
    { id:14, group:"C", home:"HAI", away:"SCO", utc:"2026-06-14T01:00", venue:"AT&T Stadium, Dallas TX", status:"FT", score:{h:0,a:1}, events:[] },
    // MD2
    { id:15, group:"C", home:"SCO", away:"MAR", utc:"2026-06-19T22:00", venue:"Levi's Stadium, Santa Clara CA", status:"UP", score:null, events:[] },
    { id:16, group:"C", home:"BRA", away:"HAI", utc:"2026-06-20T00:30", venue:"Hard Rock Stadium, Miami FL", status:"UP", score:null, events:[] },
    // MD3
    { id:17, group:"C", home:"SCO", away:"BRA", utc:"2026-06-24T22:00", venue:"SoFi Stadium, Inglewood CA", status:"UP", score:null, events:[] },
    { id:18, group:"C", home:"MAR", away:"HAI", utc:"2026-06-24T22:00", venue:"Hard Rock Stadium, Miami FL", status:"UP", score:null, events:[] },

    // ── GROUP D ─────────────────────────────────────────────────
    // MD1
    { id:19, group:"D", home:"USA", away:"PAR", utc:"2026-06-13T01:00", venue:"MetLife Stadium, East Rutherford NJ", status:"FT", score:{h:4,a:1},
      events:[{type:"goal",team:"USA",player:"Folarin Balogun",min:22},{type:"goal",team:"USA",player:"Folarin Balogun",min:44},{type:"goal",team:"PAR",player:"Óscar Romero",min:59},{type:"goal",team:"USA",player:"Christian Pulisic",min:74},{type:"goal",team:"USA",player:"Ricardo Pepi",min:88}] },
    { id:20, group:"D", home:"AUS", away:"TUR", utc:"2026-06-14T16:00", venue:"SoFi Stadium, Inglewood CA", status:"FT", score:{h:2,a:0},
      events:[] },
    // MD2
    { id:21, group:"D", home:"USA", away:"AUS", utc:"2026-06-19T19:00", venue:"Rose Bowl, Pasadena CA", status:"UP", score:null, events:[] },
    { id:22, group:"D", home:"TUR", away:"PAR", utc:"2026-06-20T03:00", venue:"AT&T Stadium, Dallas TX", status:"UP", score:null, events:[] },
    // MD3
    { id:23, group:"D", home:"TUR", away:"USA", utc:"2026-06-26T02:00", venue:"Gillette Stadium, Foxborough MA", status:"UP", score:null, events:[] },
    { id:24, group:"D", home:"PAR", away:"AUS", utc:"2026-06-26T02:00", venue:"BC Place, Vancouver", status:"UP", score:null, events:[] },

    // ── GROUP E ─────────────────────────────────────────────────
    // MD1
    { id:25, group:"E", home:"GER", away:"CUW", utc:"2026-06-14T17:00", venue:"Levi's Stadium, Santa Clara CA", status:"FT", score:{h:7,a:1},
      events:[{type:"goal",team:"GER",player:"Kai Havertz",min:19},{type:"goal",team:"GER",player:"Kai Havertz",min:44},{type:"goal",team:"CUW",player:"Cuco Martina",min:52},{type:"goal",team:"GER",player:"Florian Wirtz",min:59},{type:"goal",team:"GER",player:"Jamal Musiala",min:67},{type:"goal",team:"GER",player:"Thomas Müller",min:72},{type:"goal",team:"GER",player:"Niclas Füllkrug",min:81},{type:"goal",team:"GER",player:"Leroy Sané",min:89}] },
    { id:26, group:"E", home:"CIV", away:"ECU", utc:"2026-06-14T23:00", venue:"Rose Bowl, Pasadena CA", status:"FT", score:{h:1,a:0}, events:[] },
    // MD2
    { id:27, group:"E", home:"GER", away:"CIV", utc:"2026-06-20T20:00", venue:"Hard Rock Stadium, Miami FL", status:"UP", score:null, events:[] },
    { id:28, group:"E", home:"ECU", away:"CUW", utc:"2026-06-21T00:00", venue:"MetLife Stadium, East Rutherford NJ", status:"UP", score:null, events:[] },
    // MD3
    { id:29, group:"E", home:"ECU", away:"GER", utc:"2026-06-25T20:00", venue:"AT&T Stadium, Dallas TX", status:"UP", score:null, events:[] },
    { id:30, group:"E", home:"CUW", away:"CIV", utc:"2026-06-25T20:00", venue:"SoFi Stadium, Inglewood CA", status:"UP", score:null, events:[] },

    // ── GROUP F ─────────────────────────────────────────────────
    // MD1
    { id:31, group:"F", home:"NED", away:"JPN", utc:"2026-06-14T20:00", venue:"BC Place, Vancouver", status:"FT", score:{h:2,a:2},
      events:[] },
    { id:32, group:"F", home:"SWE", away:"TUN", utc:"2026-06-15T02:00", venue:"BMO Field, Toronto", status:"FT", score:{h:5,a:1},
      events:[{type:"goal",team:"SWE",player:"Viktor Gyökeres",min:11},{type:"goal",team:"SWE",player:"Viktor Gyökeres",min:28},{type:"goal",team:"TUN",player:"Wahbi Khazri",min:40},{type:"goal",team:"SWE",player:"Dejan Kulusevski",min:62},{type:"goal",team:"SWE",player:"Emil Forsberg",min:76},{type:"goal",team:"SWE",player:"Jesper Karlsson",min:83}] },
    // MD2
    { id:33, group:"F", home:"NED", away:"SWE", utc:"2026-06-20T17:00", venue:"AT&T Stadium, Dallas TX", status:"UP", score:null, events:[] },
    { id:34, group:"F", home:"TUN", away:"JPN", utc:"2026-06-21T04:00", venue:"Gillette Stadium, Foxborough MA", status:"UP", score:null, events:[] },
    // MD3
    { id:35, group:"F", home:"JPN", away:"SWE", utc:"2026-06-25T23:00", venue:"Hard Rock Stadium, Miami FL", status:"UP", score:null, events:[] },
    { id:36, group:"F", home:"TUN", away:"NED", utc:"2026-06-25T23:00", venue:"Levi's Stadium, Santa Clara CA", status:"UP", score:null, events:[] },

    // ── GROUP G ─────────────────────────────────────────────────
    // MD1
    { id:37, group:"G", home:"BEL", away:"EGY", utc:"2026-06-15T19:00", venue:"MetLife Stadium, East Rutherford NJ", status:"FT", score:{h:1,a:1}, events:[] },
    { id:38, group:"G", home:"IRN", away:"NZL", utc:"2026-06-16T01:00", venue:"AT&T Stadium, Dallas TX", status:"FT", score:{h:2,a:2}, events:[] },
    // MD2
    { id:39, group:"G", home:"BEL", away:"IRN", utc:"2026-06-21T19:00", venue:"SoFi Stadium, Inglewood CA", status:"UP", score:null, events:[] },
    { id:40, group:"G", home:"NZL", away:"EGY", utc:"2026-06-22T01:00", venue:"AT&T Stadium, Dallas TX", status:"UP", score:null, events:[] },
    // MD3
    { id:41, group:"G", home:"EGY", away:"IRN", utc:"2026-06-27T03:00", venue:"BC Place, Vancouver", status:"UP", score:null, events:[] },
    { id:42, group:"G", home:"NZL", away:"BEL", utc:"2026-06-27T03:00", venue:"BMO Field, Toronto", status:"UP", score:null, events:[] },

    // ── GROUP H ─────────────────────────────────────────────────
    // MD1
    { id:43, group:"H", home:"ESP", away:"CPV", utc:"2026-06-15T16:00", venue:"Hard Rock Stadium, Miami FL", status:"FT", score:{h:0,a:0}, events:[] },
    { id:44, group:"H", home:"KSA", away:"URU", utc:"2026-06-15T22:00", venue:"Gillette Stadium, Foxborough MA", status:"FT", score:{h:1,a:1}, events:[] },
    // MD2
    { id:45, group:"H", home:"ESP", away:"KSA", utc:"2026-06-21T16:00", venue:"MetLife Stadium, East Rutherford NJ", status:"UP", score:null, events:[] },
    { id:46, group:"H", home:"URU", away:"CPV", utc:"2026-06-21T22:00", venue:"Levi's Stadium, Santa Clara CA", status:"UP", score:null, events:[] },
    // MD3
    { id:47, group:"H", home:"URU", away:"ESP", utc:"2026-06-27T00:00", venue:"Rose Bowl, Pasadena CA", status:"UP", score:null, events:[] },
    { id:48, group:"H", home:"CPV", away:"KSA", utc:"2026-06-27T00:00", venue:"AT&T Stadium, Dallas TX", status:"UP", score:null, events:[] },

    // ── GROUP I ─────────────────────────────────────────────────
    // MD1
    { id:49, group:"I", home:"FRA", away:"SEN", utc:"2026-06-16T19:00", venue:"SoFi Stadium, Inglewood CA", status:"FT", score:{h:3,a:1},
      events:[{type:"goal",team:"FRA",player:"Kylian Mbappé",min:33},{type:"goal",team:"FRA",player:"Kylian Mbappé",min:55},{type:"goal",team:"SEN",player:"Sadio Mané",min:69},{type:"goal",team:"FRA",player:"Ousmane Dembélé",min:80}] },
    { id:50, group:"I", home:"IRQ", away:"NOR", utc:"2026-06-16T22:00", venue:"Rose Bowl, Pasadena CA", status:"FT", score:{h:1,a:4},
      events:[{type:"goal",team:"NOR",player:"Erling Haaland",min:23},{type:"goal",team:"NOR",player:"Erling Haaland",min:56},{type:"goal",team:"IRQ",player:"Aymen Hussein",min:65},{type:"goal",team:"NOR",player:"Martin Ødegaard",min:74},{type:"goal",team:"NOR",player:"Alexander Sørloth",min:88}] },
    // MD2
    { id:51, group:"I", home:"FRA", away:"IRQ", utc:"2026-06-22T21:00", venue:"AT&T Stadium, Dallas TX", status:"UP", score:null, events:[] },
    { id:52, group:"I", home:"NOR", away:"SEN", utc:"2026-06-23T00:00", venue:"Gillette Stadium, Foxborough MA", status:"UP", score:null, events:[] },
    // MD3
    { id:53, group:"I", home:"NOR", away:"FRA", utc:"2026-06-26T19:00", venue:"MetLife Stadium, East Rutherford NJ", status:"UP", score:null, events:[] },
    { id:54, group:"I", home:"SEN", away:"IRQ", utc:"2026-06-26T19:00", venue:"Hard Rock Stadium, Miami FL", status:"UP", score:null, events:[] },

    // ── GROUP J ─────────────────────────────────────────────────
    // MD1
    { id:55, group:"J", home:"ARG", away:"ALG", utc:"2026-06-17T01:00", venue:"Arrowhead Stadium, Kansas City MO", status:"FT", score:{h:3,a:0},
      events:[{type:"goal",team:"ARG",player:"Lionel Messi",min:3},{type:"goal",team:"ARG",player:"Lionel Messi",min:45},{type:"goal",team:"ARG",player:"Lionel Messi",min:78}] },
    { id:56, group:"J", home:"AUT", away:"JOR", utc:"2026-06-17T04:00", venue:"Levi's Stadium, Santa Clara CA", status:"FT", score:{h:3,a:1}, events:[] },
    // MD2
    { id:57, group:"J", home:"ARG", away:"AUT", utc:"2026-06-22T17:00", venue:"Hard Rock Stadium, Miami FL", status:"UP", score:null, events:[] },
    { id:58, group:"J", home:"JOR", away:"ALG", utc:"2026-06-23T03:00", venue:"BC Place, Vancouver", status:"UP", score:null, events:[] },
    // MD3
    { id:59, group:"J", home:"ALG", away:"AUT", utc:"2026-06-28T02:00", venue:"SoFi Stadium, Inglewood CA", status:"UP", score:null, events:[] },
    { id:60, group:"J", home:"JOR", away:"ARG", utc:"2026-06-28T02:00", venue:"Rose Bowl, Pasadena CA", status:"UP", score:null, events:[] },

    // ── GROUP K ─────────────────────────────────────────────────
    // MD1
    { id:61, group:"K", home:"POR", away:"COD", utc:"2026-06-17T17:00", venue:"AT&T Stadium, Dallas TX", status:"FT", score:{h:1,a:1}, events:[] },
    { id:62, group:"K", home:"UZB", away:"COL", utc:"2026-06-18T02:00", venue:"Gillette Stadium, Foxborough MA", status:"FT", score:{h:1,a:3}, events:[] },
    // MD2
    { id:63, group:"K", home:"POR", away:"UZB", utc:"2026-06-23T17:00", venue:"SoFi Stadium, Inglewood CA", status:"UP", score:null, events:[] },
    { id:64, group:"K", home:"COL", away:"COD", utc:"2026-06-24T02:00", venue:"Hard Rock Stadium, Miami FL", status:"UP", score:null, events:[] },
    // MD3
    { id:65, group:"K", home:"COL", away:"POR", utc:"2026-06-27T23:30", venue:"MetLife Stadium, East Rutherford NJ", status:"UP", score:null, events:[] },
    { id:66, group:"K", home:"COD", away:"UZB", utc:"2026-06-27T23:30", venue:"Levi's Stadium, Santa Clara CA", status:"UP", score:null, events:[] },

    // ── GROUP L ─────────────────────────────────────────────────
    // MD1
    { id:67, group:"L", home:"ENG", away:"CRO", utc:"2026-06-17T20:00", venue:"MetLife Stadium, East Rutherford NJ", status:"FT", score:{h:4,a:2},
      events:[{type:"goal",team:"ENG",player:"Jude Bellingham",min:22},{type:"goal",team:"CRO",player:"Luka Modrić",min:39},{type:"goal",team:"ENG",player:"Jude Bellingham",min:57},{type:"goal",team:"CRO",player:"Joško Gvardiol",min:70},{type:"goal",team:"ENG",player:"Bukayo Saka",min:77},{type:"goal",team:"ENG",player:"Phil Foden",min:89}] },
    { id:68, group:"L", home:"GHA", away:"PAN", utc:"2026-06-17T23:00", venue:"AT&T Stadium, Dallas TX", status:"FT", score:{h:1,a:0},
      events:[{type:"goal",team:"GHA",player:"Jordan Ayew",min:62}] },
    // MD2
    { id:69, group:"L", home:"ENG", away:"GHA", utc:"2026-06-23T20:00", venue:"Rose Bowl, Pasadena CA", status:"UP", score:null, events:[] },
    { id:70, group:"L", home:"PAN", away:"CRO", utc:"2026-06-23T23:00", venue:"BMO Field, Toronto", status:"UP", score:null, events:[] },
    // MD3
    { id:71, group:"L", home:"PAN", away:"ENG", utc:"2026-06-27T21:00", venue:"SoFi Stadium, Inglewood CA", status:"UP", score:null, events:[] },
    { id:72, group:"L", home:"CRO", away:"GHA", utc:"2026-06-27T21:00", venue:"BC Place, Vancouver", status:"UP", score:null, events:[] }
  ],

  // ── TOP SCORERS ─────────────────────────────────────────────────
  // Source: FIFA official / verified from tournament data (updated Jun 19 after MD2 Jun 18)
  topScorers: [
    { name:"Lionel Messi",     country:"ARG", flag:"🇦🇷", goals:3, assists:1, note:"Hat-trick vs Algeria, Jun 17 (Arrowhead Stadium)" },
    { name:"Jonathan David",   country:"CAN", flag:"🇨🇦", goals:3, assists:0, note:"Hat-trick vs Qatar, Jun 18 (BMO Field, Toronto)" },
    { name:"Erling Haaland",   country:"NOR", flag:"🇳🇴", goals:2, assists:1, note:"Brace vs Iraq, Jun 17 (Rose Bowl)" },
    { name:"Kylian Mbappé",    country:"FRA", flag:"🇫🇷", goals:2, assists:0, note:"Brace vs Senegal, Jun 17 (SoFi Stadium)" },
    { name:"Jude Bellingham",  country:"ENG", flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals:2, assists:0, note:"Brace vs Croatia, Jun 18 (MetLife Stadium)" },
    { name:"Viktor Gyökeres",  country:"SWE", flag:"🇸🇪", goals:2, assists:0, note:"Brace vs Tunisia, Jun 15 (BMO Field)" },
    { name:"Folarin Balogun",  country:"USA", flag:"🇺🇸", goals:2, assists:0, note:"Brace vs Paraguay, Jun 13 (MetLife Stadium)" },
    { name:"Kai Havertz",      country:"GER", flag:"🇩🇪", goals:2, assists:0, note:"Brace vs Curaçao, Jun 14 (Levi's Stadium)" }
  ],

  // ── STAR MATCHES TO WATCH ────────────────────────────────────────
  starMatches: [
    { home:"ARG", away:"AUT", utc:"2026-06-22T17:00", group:"J", venue:"Hard Rock Stadium, Miami FL",
      storyline:"Messi's Argentina vs unbeaten Austria — both on 3 points. Winner takes the lead in Group J heading into MD3." },
    { home:"NED", away:"SWE", utc:"2026-06-20T17:00", group:"F", venue:"AT&T Stadium, Dallas TX",
      storyline:"SWE leads Group F after a 5-1 rout. NED must bounce back from their MD1 draw. Gyökeres vs Gakpo & Depay." },
    { home:"ESP", away:"KSA", utc:"2026-06-21T16:00", group:"H", venue:"MetLife Stadium, East Rutherford NJ",
      storyline:"Spain desperate for a first win after a goalless draw vs Cabo Verde. Saudi Arabia also need points after their MD1 draw." }
  ],

  // ── ARGENTINA SPECIAL DATA ──────────────────────────────────────
  argentina: {
    groupStanding: "1st in Group J",
    md1Result: "Argentina 3–0 Algeria (Jun 17, Messi hat-trick)",

    // Official 26-man squad — FIFA submission June 3, 2026 (source: worldcupranking.com)
    // NOTE: Di María retired from international football and is NOT in this squad.
    // 'wiki' = Wikipedia article title used for player photo fetch
    squad: [
      // GK
      { no:1,  name:"Juan Musso",           pos:"GK",  club:"Atlético Madrid",       wiki:"Juan Musso" },
      { no:12, name:"Gerónimo Rulli",        pos:"GK",  club:"Olympique Marseille",   wiki:"Gerónimo Rulli" },
      { no:23, name:"Emiliano Martínez",     pos:"GK",  club:"Aston Villa",           wiki:"Emiliano Martínez" },
      // DEF
      { no:2,  name:"Leonardo Balerdi",      pos:"DEF", club:"Olympique Marseille",   wiki:"Leonardo Balerdi" },
      { no:3,  name:"Nicolás Tagliafico",    pos:"DEF", club:"Olympique Lyonnais",    wiki:"Nicolás Tagliafico" },
      { no:4,  name:"Gonzalo Montiel",       pos:"DEF", club:"CA River Plate",        wiki:"Gonzalo Montiel" },
      { no:6,  name:"Lisandro Martínez",     pos:"DEF", club:"Manchester United",     wiki:"Lisandro Martínez" },
      { no:13, name:"Cristian Romero",       pos:"DEF", club:"Tottenham Hotspur",     wiki:"Cristian Romero (footballer)" },
      { no:19, name:"Nicolás Otamendi",      pos:"DEF", club:"Benfica",               wiki:"Nicolás Otamendi" },
      { no:25, name:"Facundo Medina",        pos:"DEF", club:"Olympique Marseille",   wiki:"Facundo Medina (footballer)" },
      { no:26, name:"Nahuel Molina",         pos:"DEF", club:"Atlético Madrid",       wiki:"Nahuel Molina" },
      // MID
      { no:5,  name:"Leandro Paredes",       pos:"MID", club:"CA Boca Juniors",       wiki:"Leandro Paredes" },
      { no:7,  name:"Rodrigo De Paul",       pos:"MID", club:"Inter Miami",           wiki:"Rodrigo De Paul" },
      { no:8,  name:"Valentín Barco",        pos:"MID", club:"RC Strasbourg",         wiki:"Valentín Barco" },
      { no:11, name:"Giovani Lo Celso",      pos:"MID", club:"Real Betis",            wiki:"Giovani Lo Celso" },
      { no:14, name:"Exequiel Palacios",     pos:"MID", club:"Bayer Leverkusen",      wiki:"Exequiel Palacios" },
      { no:15, name:"Nicolás González",      pos:"MID", club:"Atlético Madrid",       wiki:"Nicolás González (footballer born 1998)" },
      { no:20, name:"Alexis Mac Allister",   pos:"MID", club:"Liverpool",             wiki:"Alexis Mac Allister" },
      { no:24, name:"Enzo Fernández",        pos:"MID", club:"Chelsea",               wiki:"Enzo Fernández" },
      // FWD
      { no:9,  name:"Julián Álvarez",        pos:"FWD", club:"Atlético Madrid",       wiki:"Julián Álvarez" },
      { no:10, name:"Lionel Messi",          pos:"FWD", club:"Inter Miami",           wiki:"Lionel Messi" },
      { no:16, name:"Thiago Almada",         pos:"FWD", club:"Atlético Madrid",       wiki:"Thiago Almada" },
      { no:17, name:"Giovanni Simeone",      pos:"FWD", club:"Atlético Madrid",       wiki:"Giovanni Simeone" },
      { no:18, name:"Nico Paz",              pos:"FWD", club:"Como",                  wiki:"Nico Paz (footballer)" },
      { no:21, name:"Franco López",          pos:"FWD", club:"Palmeiras",             wiki:null },
      { no:22, name:"Lautaro Martínez",      pos:"FWD", club:"Inter Milan",           wiki:"Lautaro Martínez" }
    ],

    // Player fitness tracker (key players — updated Jun 19)
    fitness: [
      { name:"Lionel Messi",        status:"fit",   note:"Hat-trick vs Algeria. In peak form heading into MD2.",              updated:"Jun 19" },
      { name:"Emiliano Martínez",   status:"fit",   note:"Clean sheet vs Algeria. Sharp and commanding in goal.",             updated:"Jun 19" },
      { name:"Cristian Romero",     status:"fit",   note:"Dominant in defence vs Algeria. Full training.",                   updated:"Jun 19" },
      { name:"Lautaro Martínez",    status:"fit",   note:"Started vs Algeria, subbed 72'. Fully fit for Austria.",           updated:"Jun 19" },
      { name:"Alexis Mac Allister", status:"fit",   note:"Engine of the midfield. Played full 90 vs Algeria.",              updated:"Jun 19" },
      { name:"Rodrigo De Paul",     status:"fit",   note:"Strong pressing performance vs Algeria. Full training.",           updated:"Jun 19" },
      { name:"Nahuel Molina",       status:"fit",   note:"Active overlapping runs on the right. Linked up well with Messi.", updated:"Jun 19" },
      { name:"Julián Álvarez",      status:"fit",   note:"Came off bench vs Algeria. Ready to start vs Austria.",            updated:"Jun 19" },
      { name:"Nicolás Otamendi",    status:"fit",   note:"Led the defensive line with authority vs Algeria.",                updated:"Jun 19" },
      { name:"Lisandro Martínez",   status:"doubt", note:"Minor knock in training — being assessed ahead of Austria match.", updated:"Jun 19" }
    ],

    news: [
      {
        title: "Messi hat-trick vs Algeria: Argentina open World Cup defence in style",
        date: "June 17, 2026",
        source: "ESPN",
        url: "https://www.espn.com/soccer/",
        snippet: "Lionel Messi scored three goals in Argentina's 3-0 Group J win over Algeria at Arrowhead Stadium, Kansas City."
      },
      {
        title: "Argentina vs Austria — Group J preview",
        date: "June 19, 2026",
        source: "Sky Sports",
        url: "https://www.skysports.com/football/",
        snippet: "Argentina and Austria both won their Group J openers and meet in a high-stakes clash in Miami on June 22. A win for either secures early progression to the knockout rounds."
      },
      {
        title: "Scaloni on MD2: 'The team is hungry and focused'",
        date: "June 18, 2026",
        source: "Goal.com",
        url: "https://www.goal.com/en/",
        snippet: "Argentina head coach Lionel Scaloni praised his squad's intensity after the dominant Algeria display and confirmed he will name a strong side for the Austria match."
      },
      {
        title: "Lisandro Martínez assessed ahead of Austria clash",
        date: "June 19, 2026",
        source: "AFA Official",
        url: "https://www.afa.com.ar/",
        snippet: "Lisandro Martínez sustained a minor knock in Wednesday training and is being monitored. Scaloni remains optimistic he will be available for the June 22 match vs Austria."
      }
    ],

    pathToFinal: [
      {
        round: "Group Stage MD1",
        status: "done",
        match: "ARG 3–0 ALG",
        date: "June 17, 2026 · 6:30 AM IST",
        result: "WON — Messi hat-trick",
        note: "Arrowhead Stadium, Kansas City MO"
      },
      {
        round: "Group Stage MD2",
        status: "next",
        match: "ARG vs AUT",
        date: "June 22, 2026 — 10:30 PM IST",
        result: null,
        note: "Hard Rock Stadium, Miami FL. Austria won MD1 (3-1 vs Jordan). Both teams on 3 pts. Winner leads Group J."
      },
      {
        round: "Group Stage MD3",
        status: "upcoming",
        match: "JOR vs ARG",
        date: "June 28, 2026 — 7:30 AM IST",
        result: null,
        note: "Rose Bowl, Pasadena CA. Jordan yet to score in the tournament (0-3 vs Austria in MD1)."
      },
      {
        round: "Round of 32",
        status: "upcoming",
        match: "ARG (1st J) vs 2nd Group H",
        date: "~July 3, 2026",
        result: null,
        note: "All 4 teams in Group H level on 1pt after MD1 draws (ESP 0-0 CPV, KSA 1-1 URU). Miami/NJ venue."
      },
      {
        round: "Round of 16",
        status: "upcoming",
        match: "ARG vs Winner of R32",
        date: "~July 7, 2026",
        result: null,
        note: "France and Norway both top Group I with 3pts. Either could be the likely opponent here."
      },
      {
        round: "Quarter-Final",
        status: "upcoming",
        match: "ARG vs Winner of QF Bracket",
        date: "~July 10, 2026",
        result: null,
        note: "Germany (7-1 vs Curaçao) or England (4-2 vs Croatia) currently top their groups."
      },
      {
        round: "Semi-Final",
        status: "upcoming",
        match: "ARG vs Winner of SF Bracket",
        date: "~July 15, 2026",
        result: null,
        note: "Brazil and Portugal both drew their MD1 openers. Spain, Belgium among potential semifinal opponents."
      },
      {
        round: "FINAL",
        status: "final",
        match: "ARG vs Winner of other Semi",
        date: "July 19, 2026",
        result: null,
        note: "MetLife Stadium, East Rutherford NJ. La Albiceleste aiming for a historic fourth World Cup title."
      }
    ]
  },

  // ── SQUAD DATA — KEY SQUADS ─────────────────────────────────────
  squads: {
    BRA: { squad: [
      { no:1,  name:"Alisson Becker",     pos:"GK",  club:"Liverpool" },
      { no:23, name:"Ederson",             pos:"GK",  club:"Manchester City" },
      { no:3,  name:"Marquinhos",          pos:"DEF", club:"PSG" },
      { no:4,  name:"Gabriel Magalhães",   pos:"DEF", club:"Arsenal" },
      { no:13, name:"Éder Militão",        pos:"DEF", club:"Real Madrid" },
      { no:6,  name:"Alex Telles",         pos:"DEF", club:"Sevilla" },
      { no:2,  name:"Danilo",              pos:"DEF", club:"Juventus" },
      { no:5,  name:"Casemiro",            pos:"MID", club:"Manchester United" },
      { no:8,  name:"Bruno Guimarães",     pos:"MID", club:"Newcastle United" },
      { no:14, name:"Lucas Paquetá",       pos:"MID", club:"West Ham" },
      { no:20, name:"Raphinha",            pos:"FWD", club:"Barcelona" },
      { no:10, name:"Neymar Jr",           pos:"FWD", club:"Al-Hilal" },
      { no:11, name:"Vinícius Jr",         pos:"FWD", club:"Real Madrid" },
      { no:9,  name:"Richarlison",         pos:"FWD", club:"Tottenham" },
      { no:19, name:"Rodrygo",             pos:"FWD", club:"Real Madrid" },
      { no:21, name:"Endrick",             pos:"FWD", club:"Real Madrid" },
      { no:18, name:"Gabriel Martinelli",  pos:"FWD", club:"Arsenal" }
    ]},
    FRA: { squad: [
      { no:1,  name:"Mike Maignan",        pos:"GK",  club:"AC Milan" },
      { no:23, name:"Alphonse Areola",     pos:"GK",  club:"West Ham" },
      { no:5,  name:"Jules Koundé",        pos:"DEF", club:"Barcelona" },
      { no:4,  name:"Dayot Upamecano",     pos:"DEF", club:"Bayern Munich" },
      { no:22, name:"Theo Hernández",      pos:"DEF", club:"AC Milan" },
      { no:3,  name:"Lucas Hernández",     pos:"DEF", club:"PSG" },
      { no:13, name:"N'Golo Kanté",        pos:"MID", club:"Al-Ittihad" },
      { no:8,  name:"Aurélien Tchouaméni", pos:"MID", club:"Real Madrid" },
      { no:6,  name:"Eduardo Camavinga",   pos:"MID", club:"Real Madrid" },
      { no:7,  name:"Antoine Griezmann",   pos:"FWD", club:"Atlético Madrid" },
      { no:10, name:"Kylian Mbappé",       pos:"FWD", club:"Real Madrid" },
      { no:11, name:"Ousmane Dembélé",     pos:"FWD", club:"PSG" },
      { no:20, name:"Marcus Thuram",       pos:"FWD", club:"Inter Milan" },
      { no:21, name:"Randal Kolo Muani",   pos:"FWD", club:"PSG" }
    ]},
    ENG: { squad: [
      { no:1,  name:"Jordan Pickford",     pos:"GK",  club:"Everton" },
      { no:5,  name:"John Stones",         pos:"DEF", club:"Manchester City" },
      { no:6,  name:"Harry Maguire",       pos:"DEF", club:"Manchester United" },
      { no:2,  name:"Kyle Walker",         pos:"DEF", club:"Bayern Munich" },
      { no:26, name:"Trent Alexander-Arnold",pos:"DEF",club:"Real Madrid" },
      { no:4,  name:"Declan Rice",         pos:"MID", club:"Arsenal" },
      { no:10, name:"Phil Foden",          pos:"MID", club:"Manchester City" },
      { no:22, name:"Jude Bellingham",     pos:"MID", club:"Real Madrid" },
      { no:17, name:"Bukayo Saka",         pos:"FWD", club:"Arsenal" },
      { no:9,  name:"Harry Kane",          pos:"FWD", club:"Bayern Munich" },
      { no:19, name:"Ollie Watkins",       pos:"FWD", club:"Aston Villa" },
      { no:25, name:"Cole Palmer",         pos:"FWD", club:"Chelsea" }
    ]},
    GER: { squad: [
      { no:1,  name:"Manuel Neuer",        pos:"GK",  club:"Bayern Munich" },
      { no:4,  name:"Jonathan Tah",        pos:"DEF", club:"Bayern Munich" },
      { no:5,  name:"Nico Schlotterbeck",  pos:"DEF", club:"Borussia Dortmund" },
      { no:2,  name:"Joshua Kimmich",      pos:"DEF", club:"Bayern Munich" },
      { no:3,  name:"David Raum",          pos:"DEF", club:"RB Leipzig" },
      { no:21, name:"İlkay Gündoğan",      pos:"MID", club:"Barcelona" },
      { no:14, name:"Florian Wirtz",       pos:"MID", club:"Bayer Leverkusen" },
      { no:10, name:"Kai Havertz",         pos:"MID", club:"Arsenal" },
      { no:25, name:"Jamal Musiala",       pos:"MID", club:"Bayern Munich" },
      { no:13, name:"Thomas Müller",       pos:"FWD", club:"Bayern Munich" },
      { no:9,  name:"Niclas Füllkrug",     pos:"FWD", club:"West Ham" },
      { no:11, name:"Leroy Sané",          pos:"FWD", club:"Bayern Munich" }
    ]},
    POR: { squad: [
      { no:1,  name:"Diogo Costa",         pos:"GK",  club:"Porto" },
      { no:4,  name:"Rúben Dias",          pos:"DEF", club:"Manchester City" },
      { no:5,  name:"Nuno Mendes",         pos:"DEF", club:"PSG" },
      { no:2,  name:"João Cancelo",        pos:"DEF", club:"Barcelona" },
      { no:10, name:"Bernardo Silva",      pos:"MID", club:"Manchester City" },
      { no:8,  name:"João Palhinha",       pos:"MID", club:"Bayern Munich" },
      { no:19, name:"Pedro Neto",          pos:"FWD", club:"Chelsea" },
      { no:7,  name:"Cristiano Ronaldo",   pos:"FWD", club:"Al-Nassr" },
      { no:11, name:"Rafael Leão",         pos:"FWD", club:"AC Milan" },
      { no:17, name:"Diogo Jota",          pos:"FWD", club:"Liverpool" }
    ]},
    ESP: { squad: [
      { no:1,  name:"Unai Simón",          pos:"GK",  club:"Athletic Bilbao" },
      { no:23, name:"David Raya",          pos:"GK",  club:"Arsenal" },
      { no:3,  name:"Alejandro Balde",     pos:"DEF", club:"Barcelona" },
      { no:24, name:"Robin Le Normand",    pos:"DEF", club:"Atlético Madrid" },
      { no:2,  name:"Dani Carvajal",       pos:"DEF", club:"Real Madrid" },
      { no:16, name:"Rodri",               pos:"MID", club:"Manchester City" },
      { no:26, name:"Pedri",               pos:"MID", club:"Barcelona" },
      { no:8,  name:"Fabián Ruiz",         pos:"MID", club:"PSG" },
      { no:6,  name:"Mikel Merino",        pos:"MID", club:"Arsenal" },
      { no:19, name:"Lamine Yamal",        pos:"FWD", club:"Barcelona" },
      { no:20, name:"Nico Williams",       pos:"FWD", club:"Athletic Bilbao" },
      { no:7,  name:"Álvaro Morata",       pos:"FWD", club:"AC Milan" }
    ]}
  },

  // ── FACTS & RECORDS ──────────────────────────────────────────────
  facts: [
    { icon:"⚽", title:"Messi's World Cup hat-trick at 38", category:"Records", detail:"Lionel Messi scored his third career World Cup hat-trick against Algeria in Kansas City. At 38, he is the oldest player in history to score a hat-trick at a World Cup." },
    { icon:"🇨🇦", title:"Canada's first-ever World Cup win", category:"History", detail:"Canada beat Qatar 6-0 for their first ever World Cup victory, a record score at the 2026 tournament. Jonathan David scored a hat-trick. Canada had never won a group stage match before 2026." },
    { icon:"🏟️", title:"Biggest World Cup in history", category:"Tournament", detail:"48 teams, 12 groups, 104 matches across 16 stadiums in the USA, Canada and Mexico — the largest World Cup ever staged by every measure." },
    { icon:"⭐", title:"Argentina defending champions", category:"Argentina", detail:"Argentina are defending the 2022 Qatar title won by Messi's penalty shootout heroics. They opened their 2026 campaign with a dominant 3-0 win over Algeria." },
    { icon:"📊", title:"12 groups, 48 nations", category:"Tournament", detail:"For the first time in World Cup history, 48 nations compete across 12 groups. The top 2 from each group plus the 8 best third-placed teams advance to a Round of 32." },
    { icon:"🥅", title:"England 4-2 vs Croatia", category:"Goals", detail:"England beat Croatia 4-2 in a thrilling opener. Jude Bellingham scored twice — England's last WC meeting with Croatia was the 2018 semi-final, which Croatia won." },
    { icon:"🎯", title:"Germany's 7-1 statement — echoes of Brazil 2014", category:"Goals", detail:"Germany hammered Curaçao 7-1 at Levi's Stadium, their biggest World Cup win since the famous 7-1 semi-final against Brazil in 2014. Havertz scored twice." },
    { icon:"🌍", title:"Three nations, one tournament", category:"Tournament", detail:"The 2026 World Cup is co-hosted by the USA (11 venues), Mexico (3 venues) and Canada (2 venues) — the first World Cup shared across three countries and two continents." },
    { icon:"🏆", title:"Final at MetLife Stadium", category:"Tournament", detail:"The 2026 World Cup Final will be held at MetLife Stadium in East Rutherford, New Jersey on July 19. The venue holds 82,500 and sits 15 miles from New York City." },
    { icon:"⚡", title:"Haaland delivers for Norway", category:"Goals", detail:"Erling Haaland scored twice as Norway beat Iraq 4-1, their first World Cup appearance since 1998. Norway last qualified in 1994 and 1998, failing to reach a tournament for 28 years." },
    { icon:"🇳🇴", title:"Norway back at the World Cup after 28 years", category:"History", detail:"Norway's last World Cup was in 1998 in France, where they beat Brazil 2-1 in the group stage. With Haaland leading the line, they finally ended a 28-year absence." },
    { icon:"📺", title:"5.5 billion global viewers expected", category:"Tournament", detail:"FIFA estimates 5.5 billion viewers will watch the 2026 World Cup — more than the 5.0 billion who watched Qatar 2022 — driven by the North American time zones and expanded team count." }
  ]
};
