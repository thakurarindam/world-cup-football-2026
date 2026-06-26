// ===== WORLD CUP 2026 — DATA (last updated: 2026-06-25) =====
// All fixture times stored as UTC strings; JS appends 'Z' and converts to IST (+5:30)
// EDT (Eastern Daylight Time) = UTC-4 during June–July 2026
// IST = UTC+5:30 = EDT+9:30

"use strict";
const WC2026 = {
  lastUpdated: "2026-06-25",

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
  // Updated after MD3 Groups A/B/C (Jun 24–25) and MD2 Groups D–L (Jun 18–24)
  // MD1: A: MEX2-0RSA, KOR2-1CZE | B: CAN1-1BIH, QAT1-1SUI | C: BRA1-1MAR, HAI0-1SCO
  //      D: USA4-1PAR, AUS2-0TUR | E: GER7-1CUW, CIV1-0ECU | F: NED2-2JPN, SWE5-1TUN
  //      G: BEL1-1EGY, IRN2-2NZL | H: ESP0-0CPV, KSA1-1URU | I: FRA3-1SEN, IRQ1-4NOR
  //      J: ARG3-0ALG, AUT3-1JOR | K: POR1-1COD, UZB1-3COL | L: ENG4-2CRO, GHA1-0PAN
  // MD2: A: CZE1-1RSA, MEX1-0KOR | B: SUI4-1BIH, CAN6-0QAT | C: SCO0-1MAR, BRA3-0HAI
  //      D: USA2-0AUS, TUR0-1PAR | E: GER2-1CIV, ECU0-0CUW | F: NED5-1SWE, TUN0-4JPN
  // MD3 Groups A/B/C (Jun 24-25): A: MEX3-0CZE, RSA1-0KOR | B: SUI2-1CAN, BIH3-1QAT | C: BRA3-0SCO, MAR4-2HAI
  groups: {
    A: { name:"Group A", teams:[
      { id:"MEX", P:3, W:3, D:0, L:0, GF:6, GA:0, GD:6,  Pts:9, form:["W","W","W"] },
      { id:"RSA", P:3, W:1, D:1, L:1, GF:2, GA:3, GD:-1, Pts:4, form:["L","D","W"] },
      { id:"KOR", P:3, W:1, D:0, L:2, GF:2, GA:3, GD:-1, Pts:3, form:["W","L","L"] },
      { id:"CZE", P:3, W:0, D:1, L:2, GF:2, GA:6, GD:-4, Pts:1, form:["L","D","L"] }
    ]},
    B: { name:"Group B", teams:[
      { id:"SUI", P:3, W:2, D:1, L:0, GF:7, GA:3, GD:4,  Pts:7, form:["D","W","W"] },
      { id:"CAN", P:3, W:1, D:1, L:1, GF:8, GA:3, GD:5,  Pts:4, form:["D","W","L"] },
      { id:"BIH", P:3, W:1, D:1, L:1, GF:5, GA:6, GD:-1, Pts:4, form:["D","L","W"] },
      { id:"QAT", P:3, W:0, D:1, L:2, GF:2, GA:10,GD:-8, Pts:1, form:["D","L","L"] }
    ]},
    C: { name:"Group C", teams:[
      { id:"BRA", P:3, W:2, D:1, L:0, GF:7, GA:1, GD:6,  Pts:7, form:["D","W","W"] },
      { id:"MAR", P:3, W:2, D:1, L:0, GF:6, GA:3, GD:3,  Pts:7, form:["D","W","W"] },
      { id:"SCO", P:3, W:1, D:0, L:2, GF:1, GA:4, GD:-3, Pts:3, form:["W","L","L"] },
      { id:"HAI", P:3, W:0, D:0, L:3, GF:2, GA:8, GD:-6, Pts:0, form:["L","L","L"] }
    ]},
    D: { name:"Group D", teams:[
      { id:"USA", P:2, W:2, D:0, L:0, GF:6, GA:1, GD:5,  Pts:6, form:["W","W"] },
      { id:"AUS", P:2, W:1, D:0, L:1, GF:2, GA:2, GD:0,  Pts:3, form:["W","L"] },
      { id:"PAR", P:2, W:1, D:0, L:1, GF:2, GA:4, GD:-2, Pts:3, form:["L","W"] },
      { id:"TUR", P:2, W:0, D:0, L:2, GF:0, GA:3, GD:-3, Pts:0, form:["L","L"] }
    ]},
    E: { name:"Group E", teams:[
      { id:"GER", P:2, W:2, D:0, L:0, GF:9, GA:2, GD:7,  Pts:6, form:["W","W"] },
      { id:"CIV", P:2, W:1, D:0, L:1, GF:2, GA:2, GD:0,  Pts:3, form:["W","L"] },
      { id:"ECU", P:2, W:0, D:1, L:1, GF:0, GA:1, GD:-1, Pts:1, form:["L","D"] },
      { id:"CUW", P:2, W:0, D:1, L:1, GF:1, GA:7, GD:-6, Pts:1, form:["L","D"] }
    ]},
    F: { name:"Group F", teams:[
      { id:"NED", P:2, W:1, D:1, L:0, GF:7, GA:3, GD:4,  Pts:4, form:["D","W"] },
      { id:"JPN", P:2, W:1, D:1, L:0, GF:6, GA:2, GD:4,  Pts:4, form:["D","W"] },
      { id:"SWE", P:2, W:1, D:0, L:1, GF:6, GA:6, GD:0,  Pts:3, form:["W","L"] },
      { id:"TUN", P:2, W:0, D:0, L:2, GF:1, GA:9, GD:-8, Pts:0, form:["L","L"] }
    ]},
    G: { name:"Group G", teams:[
      { id:"EGY", P:2, W:1, D:1, L:0, GF:4, GA:2, GD:2,  Pts:4, form:["D","W"] },
      { id:"BEL", P:2, W:0, D:2, L:0, GF:1, GA:1, GD:0,  Pts:2, form:["D","D"] },
      { id:"IRN", P:2, W:0, D:2, L:0, GF:2, GA:2, GD:0,  Pts:2, form:["D","D"] },
      { id:"NZL", P:2, W:0, D:1, L:1, GF:3, GA:5, GD:-2, Pts:1, form:["D","L"] }
    ]},
    H: { name:"Group H", teams:[
      { id:"ESP", P:2, W:1, D:1, L:0, GF:4, GA:0, GD:4,  Pts:4, form:["D","W"] },
      { id:"URU", P:2, W:0, D:2, L:0, GF:3, GA:3, GD:0,  Pts:2, form:["D","D"] },
      { id:"CPV", P:2, W:0, D:2, L:0, GF:2, GA:2, GD:0,  Pts:2, form:["D","D"] },
      { id:"KSA", P:2, W:0, D:1, L:1, GF:1, GA:5, GD:-4, Pts:1, form:["D","L"] }
    ]},
    I: { name:"Group I", teams:[
      { id:"NOR", P:2, W:2, D:0, L:0, GF:7, GA:3, GD:4,  Pts:6, form:["W","W"] },
      { id:"FRA", P:2, W:2, D:0, L:0, GF:6, GA:1, GD:5,  Pts:6, form:["W","W"] },
      { id:"SEN", P:2, W:0, D:0, L:2, GF:3, GA:7, GD:-4, Pts:0, form:["L","L"] },
      { id:"IRQ", P:2, W:0, D:0, L:2, GF:1, GA:7, GD:-6, Pts:0, form:["L","L"] }
    ]},
    J: { name:"Group J", teams:[
      { id:"ARG", P:2, W:2, D:0, L:0, GF:5, GA:0, GD:5,  Pts:6, form:["W","W"] },
      { id:"AUT", P:2, W:1, D:0, L:1, GF:3, GA:3, GD:0,  Pts:3, form:["W","L"] },
      { id:"ALG", P:2, W:1, D:0, L:1, GF:2, GA:4, GD:-2, Pts:3, form:["L","W"] },
      { id:"JOR", P:2, W:0, D:0, L:2, GF:2, GA:5, GD:-3, Pts:0, form:["L","L"] }
    ]},
    K: { name:"Group K", teams:[
      { id:"COL", P:2, W:2, D:0, L:0, GF:6, GA:2, GD:4,  Pts:6, form:["W","W"] },
      { id:"POR", P:2, W:1, D:1, L:0, GF:6, GA:1, GD:5,  Pts:4, form:["D","W"] },
      { id:"COD", P:2, W:0, D:1, L:1, GF:2, GA:4, GD:-2, Pts:1, form:["D","L"] },
      { id:"UZB", P:2, W:0, D:0, L:2, GF:1, GA:8, GD:-7, Pts:0, form:["L","L"] }
    ]},
    L: { name:"Group L", teams:[
      { id:"ENG", P:2, W:1, D:1, L:0, GF:4, GA:2, GD:2,  Pts:4, form:["W","D"] },
      { id:"GHA", P:2, W:1, D:1, L:0, GF:1, GA:0, GD:1,  Pts:4, form:["W","D"] },
      { id:"CRO", P:2, W:1, D:0, L:1, GF:3, GA:4, GD:-1, Pts:3, form:["L","W"] },
      { id:"PAN", P:2, W:0, D:0, L:2, GF:0, GA:2, GD:-2, Pts:0, form:["L","L"] }
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
    { id:5,  group:"A", home:"CZE", away:"MEX", utc:"2026-06-25T01:00", venue:"MetLife Stadium, East Rutherford NJ", status:"FT", score:{h:0,a:3},
      events:[{type:"goal",team:"MEX",player:"Mateo Chávez",min:55},{type:"goal",team:"MEX",player:"Julián Quiñones",min:61},{type:"goal",team:"MEX",player:"Álvaro Fidalgo",min:94}] },
    { id:6,  group:"A", home:"RSA", away:"KOR", utc:"2026-06-25T01:00", venue:"Rose Bowl, Pasadena CA", status:"FT", score:{h:1,a:0},
      events:[{type:"goal",team:"RSA",player:"Thapelo Maseko",min:63}] },

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
    { id:11, group:"B", home:"SUI", away:"CAN", utc:"2026-06-24T19:00", venue:"Rose Bowl, Pasadena CA", status:"FT", score:{h:2,a:1},
      events:[{type:"goal",team:"SUI",player:"Rubén Vargas",min:46},{type:"goal",team:"SUI",player:"Johan Manzambi",min:57},{type:"goal",team:"CAN",player:"Promise David",min:75}] },
    { id:12, group:"B", home:"BIH", away:"QAT", utc:"2026-06-24T19:00", venue:"AT&T Stadium, Dallas TX", status:"FT", score:{h:3,a:1},
      events:[{type:"goal",team:"BIH",player:"Kerim Alajbegović",min:29},{type:"goal",team:"BIH",player:"Edin Džeko (assist/OG)",min:35},{type:"goal",team:"QAT",player:"Hassan Al-Haydos",min:40},{type:"goal",team:"BIH",player:"Ermin Mahmić",min:80}] },

    // ── GROUP C ─────────────────────────────────────────────────
    // MD1
    { id:13, group:"C", home:"BRA", away:"MAR", utc:"2026-06-13T22:00", venue:"MetLife Stadium, East Rutherford NJ", status:"FT", score:{h:1,a:1}, events:[] },
    { id:14, group:"C", home:"HAI", away:"SCO", utc:"2026-06-14T01:00", venue:"AT&T Stadium, Dallas TX", status:"FT", score:{h:0,a:1}, events:[] },
    // MD2
    { id:15, group:"C", home:"SCO", away:"MAR", utc:"2026-06-19T22:00", venue:"Gillette Stadium, Foxborough MA", status:"FT", score:{h:0,a:1},
      events:[{type:"goal",team:"MAR",player:"Ismael Saibari",min:2}] },
    { id:16, group:"C", home:"BRA", away:"HAI", utc:"2026-06-20T00:30", venue:"Lincoln Financial Field, Philadelphia PA", status:"FT", score:{h:3,a:0},
      events:[{type:"goal",team:"BRA",player:"Matheus Cunha",min:22},{type:"goal",team:"BRA",player:"Matheus Cunha",min:36},{type:"goal",team:"BRA",player:"Vinícius Jr.",min:45}] },
    // MD3
    { id:17, group:"C", home:"SCO", away:"BRA", utc:"2026-06-24T22:00", venue:"SoFi Stadium, Inglewood CA", status:"FT", score:{h:0,a:3},
      events:[{type:"goal",team:"BRA",player:"Vinícius Jr.",min:7},{type:"goal",team:"BRA",player:"Vinícius Jr.",min:45},{type:"goal",team:"BRA",player:"Matheus Cunha",min:60}] },
    { id:18, group:"C", home:"MAR", away:"HAI", utc:"2026-06-24T22:00", venue:"Hard Rock Stadium, Miami FL", status:"FT", score:{h:4,a:2},
      events:[{type:"goal",team:"HAI",player:"Wilson Isidor",min:15},{type:"goal",team:"MAR",player:"Achraf Hakimi",min:39},{type:"goal",team:"HAI",player:"Wilson Isidor",min:43},{type:"goal",team:"MAR",player:"Ismael Saibari",min:56},{type:"goal",team:"MAR",player:"Soufiane Rahimi",min:78},{type:"goal",team:"MAR",player:"Gessime Yassine",min:91}] },

    // ── GROUP D ─────────────────────────────────────────────────
    // MD1
    { id:19, group:"D", home:"USA", away:"PAR", utc:"2026-06-13T01:00", venue:"MetLife Stadium, East Rutherford NJ", status:"FT", score:{h:4,a:1},
      events:[{type:"goal",team:"USA",player:"Folarin Balogun",min:22},{type:"goal",team:"USA",player:"Folarin Balogun",min:44},{type:"goal",team:"PAR",player:"Óscar Romero",min:59},{type:"goal",team:"USA",player:"Christian Pulisic",min:74},{type:"goal",team:"USA",player:"Ricardo Pepi",min:88}] },
    { id:20, group:"D", home:"AUS", away:"TUR", utc:"2026-06-14T16:00", venue:"SoFi Stadium, Inglewood CA", status:"FT", score:{h:2,a:0},
      events:[] },
    // MD2
    { id:21, group:"D", home:"USA", away:"AUS", utc:"2026-06-19T19:00", venue:"Lumen Field, Seattle WA", status:"FT", score:{h:2,a:0},
      events:[{type:"goal",team:"AUS",player:"Cameron Burgess (OG)",min:11},{type:"goal",team:"USA",player:"Alex Freeman",min:43}] },
    { id:22, group:"D", home:"TUR", away:"PAR", utc:"2026-06-20T03:00", venue:"Levi's Stadium, Santa Clara CA", status:"FT", score:{h:0,a:1},
      events:[{type:"goal",team:"PAR",player:"Miguel Almirón",min:45}] },
    // MD3
    { id:23, group:"D", home:"TUR", away:"USA", utc:"2026-06-26T02:00", venue:"Gillette Stadium, Foxborough MA", status:"UP", score:null, events:[] },
    { id:24, group:"D", home:"PAR", away:"AUS", utc:"2026-06-26T02:00", venue:"BC Place, Vancouver", status:"UP", score:null, events:[] },

    // ── GROUP E ─────────────────────────────────────────────────
    // MD1
    { id:25, group:"E", home:"GER", away:"CUW", utc:"2026-06-14T17:00", venue:"Levi's Stadium, Santa Clara CA", status:"FT", score:{h:7,a:1},
      events:[{type:"goal",team:"GER",player:"Kai Havertz",min:19},{type:"goal",team:"GER",player:"Kai Havertz",min:44},{type:"goal",team:"CUW",player:"Cuco Martina",min:52},{type:"goal",team:"GER",player:"Florian Wirtz",min:59},{type:"goal",team:"GER",player:"Jamal Musiala",min:67},{type:"goal",team:"GER",player:"Thomas Müller",min:72},{type:"goal",team:"GER",player:"Niclas Füllkrug",min:81},{type:"goal",team:"GER",player:"Leroy Sané",min:89}] },
    { id:26, group:"E", home:"CIV", away:"ECU", utc:"2026-06-14T23:00", venue:"Rose Bowl, Pasadena CA", status:"FT", score:{h:1,a:0}, events:[] },
    // MD2
    { id:27, group:"E", home:"GER", away:"CIV", utc:"2026-06-20T20:00", venue:"Hard Rock Stadium, Miami FL", status:"FT", score:{h:2,a:1},
      events:[{type:"goal",team:"CIV",player:"Franck Kessié",min:30},{type:"goal",team:"GER",player:"Deniz Undav",min:68},{type:"goal",team:"GER",player:"Deniz Undav",min:94}] },
    { id:28, group:"E", home:"ECU", away:"CUW", utc:"2026-06-21T00:00", venue:"MetLife Stadium, East Rutherford NJ", status:"FT", score:{h:0,a:0}, events:[] },
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
    { id:33, group:"F", home:"NED", away:"SWE", utc:"2026-06-20T17:00", venue:"AT&T Stadium, Dallas TX", status:"FT", score:{h:5,a:1},
      events:[{type:"goal",team:"NED",player:"Brian Brobbey",min:8},{type:"goal",team:"NED",player:"Brian Brobbey",min:17},{type:"goal",team:"NED",player:"Cody Gakpo",min:55},{type:"goal",team:"NED",player:"Cody Gakpo",min:62},{type:"goal",team:"NED",player:"Crysencio Summerville",min:75},{type:"goal",team:"SWE",player:"Anthony Elanga",min:80}] },
    { id:34, group:"F", home:"TUN", away:"JPN", utc:"2026-06-21T04:00", venue:"Gillette Stadium, Foxborough MA", status:"FT", score:{h:0,a:4},
      events:[{type:"goal",team:"JPN",player:"Daichi Kamada",min:4},{type:"goal",team:"JPN",player:"Ayase Ueda",min:30},{type:"goal",team:"JPN",player:"Junya Ito",min:69},{type:"goal",team:"JPN",player:"Ayase Ueda",min:83}] },
    // MD3
    { id:35, group:"F", home:"JPN", away:"SWE", utc:"2026-06-25T23:00", venue:"Hard Rock Stadium, Miami FL", status:"UP", score:null, events:[] },
    { id:36, group:"F", home:"TUN", away:"NED", utc:"2026-06-25T23:00", venue:"Levi's Stadium, Santa Clara CA", status:"UP", score:null, events:[] },

    // ── GROUP G ─────────────────────────────────────────────────
    // MD1
    { id:37, group:"G", home:"BEL", away:"EGY", utc:"2026-06-15T19:00", venue:"MetLife Stadium, East Rutherford NJ", status:"FT", score:{h:1,a:1}, events:[] },
    { id:38, group:"G", home:"IRN", away:"NZL", utc:"2026-06-16T01:00", venue:"AT&T Stadium, Dallas TX", status:"FT", score:{h:2,a:2}, events:[] },
    // MD2
    { id:39, group:"G", home:"BEL", away:"IRN", utc:"2026-06-21T19:00", venue:"SoFi Stadium, Inglewood CA", status:"FT", score:{h:0,a:0}, events:[] },
    { id:40, group:"G", home:"NZL", away:"EGY", utc:"2026-06-22T01:00", venue:"AT&T Stadium, Dallas TX", status:"FT", score:{h:1,a:3},
      events:[{type:"goal",team:"EGY",player:"Omar Marmoush",min:25},{type:"goal",team:"NZL",player:"Chris Wood",min:44},{type:"goal",team:"EGY",player:"Mostafa Mohamed",min:58},{type:"goal",team:"EGY",player:"Trézéguet",min:82}] },
    // MD3
    { id:41, group:"G", home:"EGY", away:"IRN", utc:"2026-06-27T03:00", venue:"BC Place, Vancouver", status:"UP", score:null, events:[] },
    { id:42, group:"G", home:"NZL", away:"BEL", utc:"2026-06-27T03:00", venue:"BMO Field, Toronto", status:"UP", score:null, events:[] },

    // ── GROUP H ─────────────────────────────────────────────────
    // MD1
    { id:43, group:"H", home:"ESP", away:"CPV", utc:"2026-06-15T16:00", venue:"Hard Rock Stadium, Miami FL", status:"FT", score:{h:0,a:0}, events:[] },
    { id:44, group:"H", home:"KSA", away:"URU", utc:"2026-06-15T22:00", venue:"Gillette Stadium, Foxborough MA", status:"FT", score:{h:1,a:1}, events:[] },
    // MD2
    { id:45, group:"H", home:"ESP", away:"KSA", utc:"2026-06-21T16:00", venue:"MetLife Stadium, East Rutherford NJ", status:"FT", score:{h:4,a:0},
      events:[{type:"goal",team:"ESP",player:"Lamine Yamal",min:15},{type:"goal",team:"ESP",player:"Álvaro Morata",min:34},{type:"goal",team:"ESP",player:"Nico Williams",min:61},{type:"goal",team:"ESP",player:"Pedri",min:79}] },
    { id:46, group:"H", home:"URU", away:"CPV", utc:"2026-06-21T22:00", venue:"Levi's Stadium, Santa Clara CA", status:"FT", score:{h:2,a:2},
      events:[{type:"goal",team:"URU",player:"Darwin Núñez",min:22},{type:"goal",team:"CPV",player:"Garry Rodrigues",min:40},{type:"goal",team:"CPV",player:"Ryan Mendes",min:65},{type:"goal",team:"URU",player:"Facundo Torres",min:88}] },
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
    { id:51, group:"I", home:"FRA", away:"IRQ", utc:"2026-06-22T21:00", venue:"AT&T Stadium, Dallas TX", status:"FT", score:{h:3,a:0},
      events:[{type:"goal",team:"FRA",player:"Kylian Mbappé",min:18},{type:"goal",team:"FRA",player:"Kylian Mbappé",min:52},{type:"goal",team:"FRA",player:"Antoine Griezmann",min:74}] },
    { id:52, group:"I", home:"NOR", away:"SEN", utc:"2026-06-23T00:00", venue:"Gillette Stadium, Foxborough MA", status:"FT", score:{h:3,a:2},
      events:[{type:"goal",team:"NOR",player:"Erling Haaland",min:9},{type:"goal",team:"SEN",player:"Sadio Mané",min:34},{type:"goal",team:"NOR",player:"Martin Ødegaard",min:57},{type:"goal",team:"SEN",player:"Ismaila Sarr",min:72},{type:"goal",team:"NOR",player:"Alexander Sørloth",min:85}] },
    // MD3
    { id:53, group:"I", home:"NOR", away:"FRA", utc:"2026-06-26T19:00", venue:"MetLife Stadium, East Rutherford NJ", status:"UP", score:null, events:[] },
    { id:54, group:"I", home:"SEN", away:"IRQ", utc:"2026-06-26T19:00", venue:"Hard Rock Stadium, Miami FL", status:"UP", score:null, events:[] },

    // ── GROUP J ─────────────────────────────────────────────────
    // MD1
    { id:55, group:"J", home:"ARG", away:"ALG", utc:"2026-06-17T01:00", venue:"Arrowhead Stadium, Kansas City MO", status:"FT", score:{h:3,a:0},
      events:[{type:"goal",team:"ARG",player:"Lionel Messi",min:3},{type:"goal",team:"ARG",player:"Lionel Messi",min:45},{type:"goal",team:"ARG",player:"Lionel Messi",min:78}] },
    { id:56, group:"J", home:"AUT", away:"JOR", utc:"2026-06-17T04:00", venue:"Levi's Stadium, Santa Clara CA", status:"FT", score:{h:3,a:1}, events:[] },
    // MD2
    { id:57, group:"J", home:"ARG", away:"AUT", utc:"2026-06-22T17:00", venue:"Hard Rock Stadium, Miami FL", status:"FT", score:{h:2,a:0},
      events:[{type:"goal",team:"ARG",player:"Lionel Messi",min:31},{type:"goal",team:"ARG",player:"Lionel Messi",min:67}] },
    { id:58, group:"J", home:"JOR", away:"ALG", utc:"2026-06-23T03:00", venue:"BC Place, Vancouver", status:"FT", score:{h:1,a:2},
      events:[{type:"goal",team:"ALG",player:"Riyad Mahrez",min:12},{type:"goal",team:"JOR",player:"Yazan Al-Naimat",min:55},{type:"goal",team:"ALG",player:"Islam Slimani",min:78}] },
    // MD3
    { id:59, group:"J", home:"ALG", away:"AUT", utc:"2026-06-28T02:00", venue:"SoFi Stadium, Inglewood CA", status:"UP", score:null, events:[] },
    { id:60, group:"J", home:"JOR", away:"ARG", utc:"2026-06-28T02:00", venue:"Rose Bowl, Pasadena CA", status:"UP", score:null, events:[] },

    // ── GROUP K ─────────────────────────────────────────────────
    // MD1
    { id:61, group:"K", home:"POR", away:"COD", utc:"2026-06-17T17:00", venue:"AT&T Stadium, Dallas TX", status:"FT", score:{h:1,a:1}, events:[] },
    { id:62, group:"K", home:"UZB", away:"COL", utc:"2026-06-18T02:00", venue:"Gillette Stadium, Foxborough MA", status:"FT", score:{h:1,a:3}, events:[] },
    // MD2
    { id:63, group:"K", home:"POR", away:"UZB", utc:"2026-06-23T17:00", venue:"SoFi Stadium, Inglewood CA", status:"FT", score:{h:5,a:0},
      events:[{type:"goal",team:"POR",player:"Cristiano Ronaldo",min:14},{type:"goal",team:"POR",player:"Rafael Leão",min:28},{type:"goal",team:"POR",player:"Cristiano Ronaldo",min:44},{type:"goal",team:"POR",player:"Bernardo Silva",min:71},{type:"goal",team:"POR",player:"Diogo Jota",min:83}] },
    { id:64, group:"K", home:"COL", away:"COD", utc:"2026-06-24T02:00", venue:"Hard Rock Stadium, Miami FL", status:"FT", score:{h:3,a:1},
      events:[{type:"goal",team:"COL",player:"Luis Díaz",min:17},{type:"goal",team:"COD",player:"Cédric Bakambu",min:45},{type:"goal",team:"COL",player:"James Rodríguez",min:60},{type:"goal",team:"COL",player:"Luis Díaz",min:79}] },
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
    { id:69, group:"L", home:"ENG", away:"GHA", utc:"2026-06-23T20:00", venue:"Rose Bowl, Pasadena CA", status:"FT", score:{h:0,a:0}, events:[] },
    { id:70, group:"L", home:"PAN", away:"CRO", utc:"2026-06-23T23:00", venue:"BMO Field, Toronto", status:"FT", score:{h:0,a:1},
      events:[{type:"goal",team:"CRO",player:"Andrej Kramarić",min:58}] },
    // MD3
    { id:71, group:"L", home:"PAN", away:"ENG", utc:"2026-06-27T21:00", venue:"SoFi Stadium, Inglewood CA", status:"UP", score:null, events:[] },
    { id:72, group:"L", home:"CRO", away:"GHA", utc:"2026-06-27T21:00", venue:"BC Place, Vancouver", status:"UP", score:null, events:[] }
  ],

  // ── TOP SCORERS ─────────────────────────────────────────────────
  // Source: FIFA official / verified from tournament data (updated Jun 24 after MD2 Groups G–L)
  topScorers: [
    { name:"Lionel Messi",     country:"ARG", flag:"🇦🇷", goals:5, assists:1, note:"Hat-trick vs Algeria (Jun 17) + brace vs Austria (Jun 22) — 18 career WC goals, briefly all-time record" },
    { name:"Kylian Mbappé",    country:"FRA", flag:"🇫🇷", goals:4, assists:0, note:"Brace vs Senegal (Jun 17) + brace vs Iraq (Jun 22) — equals Miroslav Klose's all-time record of 16 career WC goals" },
    { name:"Jonathan David",   country:"CAN", flag:"🇨🇦", goals:3, assists:0, note:"Hat-trick vs Qatar, Jun 18 (BMO Field, Toronto)" },
    { name:"Cristiano Ronaldo",country:"POR", flag:"🇵🇹", goals:3, assists:0, note:"Goal vs DR Congo (Jun 17) + brace vs Uzbekistan (Jun 23) — breaks Messi's record, new all-time WC goals leader with 19 career goals" },
    { name:"Luis Díaz",        country:"COL", flag:"🇨🇴", goals:2, assists:0, note:"Brace vs DR Congo, Jun 24 (Hard Rock Stadium)" },
    { name:"Erling Haaland",   country:"NOR", flag:"🇳🇴", goals:3, assists:1, note:"Brace vs Iraq (Jun 17) + goal vs Senegal (Jun 23, Rose Bowl)" },
    { name:"Matheus Cunha",    country:"BRA", flag:"🇧🇷", goals:3, assists:0, note:"Brace vs Haiti (Jun 19) + goal vs Scotland (Jun 25, SoFi Stadium) — joint leading Brazilian scorer" },
    { name:"Vinícius Jr.",     country:"BRA", flag:"🇧🇷", goals:2, assists:0, note:"Brace vs Scotland, Jun 25 (SoFi Stadium, Inglewood) — 7' and 45+1', Brazil top Group C on goal difference" },
    { name:"Jude Bellingham",  country:"ENG", flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals:2, assists:0, note:"Brace vs Croatia, Jun 18 (MetLife Stadium)" },
    { name:"Viktor Gyökeres",  country:"SWE", flag:"🇸🇪", goals:2, assists:0, note:"Brace vs Tunisia, Jun 15 (BMO Field)" },
    { name:"Folarin Balogun",  country:"USA", flag:"🇺🇸", goals:2, assists:0, note:"Brace vs Paraguay, Jun 13 (MetLife Stadium)" },
    { name:"Kai Havertz",      country:"GER", flag:"🇩🇪", goals:2, assists:0, note:"Brace vs Curaçao, Jun 14 (Levi's Stadium)" },
    { name:"Deniz Undav",      country:"GER", flag:"🇩🇪", goals:2, assists:0, note:"Super-sub brace vs Ivory Coast, Jun 20 — sealed Germany's R32 qualification" },
    { name:"Ayase Ueda",       country:"JPN", flag:"🇯🇵", goals:2, assists:0, note:"Brace vs Tunisia, Jun 21 (Gillette Stadium) — Japan's biggest WC win" },
    { name:"Brian Brobbey",    country:"NED", flag:"🇳🇱", goals:2, assists:0, note:"Brace vs Sweden, Jun 20 (AT&T Stadium, Dallas) — fourth-fastest WC brace in history" },
    { name:"Cody Gakpo",       country:"NED", flag:"🇳🇱", goals:2, assists:0, note:"Brace vs Sweden, Jun 20 (AT&T Stadium, Dallas)" }
  ],

  // ── STAR MATCHES TO WATCH ────────────────────────────────────────
  starMatches: [
    { home:"NOR", away:"FRA", utc:"2026-06-26T19:00", group:"I", venue:"MetLife Stadium, East Rutherford NJ",
      storyline:"The Group I decider — two unbeaten juggernauts collide. Haaland (3 goals) vs Mbappé (4 goals). Norway have 6pts, France have 6pts — both qualified, but first place means a far easier R32 draw. An early preview of what could be a World Cup final." },
    { home:"COL", away:"POR", utc:"2026-06-27T23:30", group:"K", venue:"MetLife Stadium, East Rutherford NJ",
      storyline:"The Group K final — Colombia (6pts) vs Portugal (4pts) with Ronaldo carrying the all-time WC goals record into this clash. Colombia's James Rodríguez and Luis Díaz vs Ronaldo and Leão." },
    { home:"JOR", away:"ARG", utc:"2026-06-28T02:00", group:"J", venue:"Rose Bowl, Pasadena CA",
      storyline:"Argentina's final group game — a chance for Scaloni to rotate and give fringe players minutes. Jordan are eliminated (0 pts). Messi may rest but this is a last chance for squad players to stake a knockout claim." }
  ],

  // ── ARGENTINA SPECIAL DATA ──────────────────────────────────────
  argentina: {
    groupStanding: "1st in Group J — QUALIFIED for knockout round",
    md1Result: "Argentina 3–0 Algeria (Jun 17, Messi hat-trick)",
    md2Result: "Argentina 2–0 Austria (Jun 22, Messi brace — 18 career WC goals, all-time record at the time)",

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

    // Player fitness tracker (key players — updated Jun 25)
    fitness: [
      { name:"Lionel Messi",        status:"fit",   note:"Brace vs Austria (Jun 22). 5 goals in tournament, 18 career WC goals. Unstoppable form heading into MD3.", updated:"Jun 24" },
      { name:"Emiliano Martínez",   status:"fit",   note:"Second consecutive clean sheet. Commanding in both group stage games.",                                       updated:"Jun 24" },
      { name:"Cristian Romero",     status:"fit",   note:"Dominant again vs Austria. Full training for MD3 vs Jordan.",                                                updated:"Jun 24" },
      { name:"Lautaro Martínez",    status:"fit",   note:"Started vs Austria. Fully fit and sharp for MD3.",                                                           updated:"Jun 24" },
      { name:"Alexis Mac Allister", status:"fit",   note:"Engine of the midfield across both group games. Full 90 vs Austria.",                                        updated:"Jun 24" },
      { name:"Rodrigo De Paul",     status:"fit",   note:"Tireless pressing vs Austria. Full training.",                                                               updated:"Jun 24" },
      { name:"Nahuel Molina",       status:"fit",   note:"Excellent right-sided outlet. Assist set-up for Messi's first goal vs Austria.",                             updated:"Jun 24" },
      { name:"Julián Álvarez",      status:"fit",   note:"Strong showing vs Austria. Ready for MD3 start.",                                                            updated:"Jun 24" },
      { name:"Nicolás Otamendi",    status:"fit",   note:"Second clean sheet. Leader at the back. Fit for Jordan.",                                                    updated:"Jun 24" },
      { name:"Lisandro Martínez",   status:"fit",   note:"Returned to full fitness, started vs Austria. No issues reported after the match.",                          updated:"Jun 24" },
      { name:"Gonzalo Montiel",      status:"doubt", note:"Muscle tear continues — did not play vs Austria. Scaloni will manage minutes vs Jordan.", updated:"Jun 24" }
    ],

    news: [
      {
        title: "Messi brace clinches knockouts: Argentina 2-0 Austria",
        date: "June 22, 2026",
        source: "NBC News",
        url: "https://www.nbcnews.com/sports/soccer/",
        snippet: "Lionel Messi scored his 17th and 18th career World Cup goals in Argentina's 2-0 win over Austria at Hard Rock Stadium, Miami. Argentina clinch a knockout-round spot with a game to spare. Messi — at 38 — briefly held the all-time WC goals record with 18, before Ronaldo eclipsed it the following day."
      },
      {
        title: "Messi hat-trick vs Algeria: Argentina open World Cup defence in style",
        date: "June 17, 2026",
        source: "ESPN",
        url: "https://www.espn.com/soccer/",
        snippet: "Lionel Messi scored three goals in Argentina's 3-0 Group J win over Algeria at Arrowhead Stadium, Kansas City."
      },
      {
        title: "Scaloni on MD2: 'The team is hungry and focused'",
        date: "June 18, 2026",
        source: "Goal.com",
        url: "https://www.goal.com/en/",
        snippet: "Argentina head coach Lionel Scaloni praised his squad's intensity after the dominant Algeria display and confirmed he will name a strong side for the Austria match."
      },
      {
        title: "Argentina MD3 preview: Jordan up next in Pasadena",
        date: "June 24, 2026",
        source: "Sky Sports",
        url: "https://www.skysports.com/football/",
        snippet: "Argentina play Jordan at the Rose Bowl on June 28 — a chance for Scaloni to rotate the squad and give fringe players minutes while maintaining momentum into the knockouts."
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
        status: "done",
        match: "ARG 2–0 AUT",
        date: "June 22, 2026 · 10:30 PM IST",
        result: "WON — Messi brace (31', 67')",
        note: "Hard Rock Stadium, Miami FL. Argentina QUALIFIED for knockout round with a game to spare."
      },
      {
        round: "Group Stage MD3",
        status: "next",
        match: "JOR vs ARG",
        date: "June 28, 2026 — 7:30 AM IST",
        result: null,
        note: "Rose Bowl, Pasadena CA. Jordan eliminated (0 pts, 2 losses). Scaloni expected to rotate. Group J: ARG 6pts, AUT/ALG 3pts each."
      },
      {
        round: "Round of 32",
        status: "upcoming",
        match: "ARG (1st J) vs 2nd Group H",
        date: "~July 3, 2026",
        result: null,
        note: "Group H: ESP lead with 4pts after 4-0 vs KSA. URU and CPV level on 2pts after 2-2 draw. Spain likely 1st; ARG opponent likely URU or CPV."
      },
      {
        round: "Round of 16",
        status: "upcoming",
        match: "ARG vs Winner of R32",
        date: "~July 7, 2026",
        result: null,
        note: "France and Norway both top Group I on 6pts (both qualified). Potential blockbuster fixture against France/Mbappé."
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
    { icon:"🇿🇦", title:"South Africa reach knockouts for first time since hosting in 2010", category:"History", detail:"South Africa defeated South Korea 1-0 on June 25 to qualify for the World Cup knockout rounds for the first time since they hosted the tournament in 2010. Thapelo Maseko's 63rd-minute strike sealed the historic result. Bafana Bafana had been written off after their opening 2-0 loss to Mexico, but battled back with a draw vs Czechia and this memorable win." },
    { icon:"🍁", title:"Canada reach World Cup knockout rounds for the first time in history", category:"History", detail:"Despite losing 2-1 to Switzerland on June 25, Canada qualified for the World Cup knockout rounds for the first time ever. It is the co-hosts' first appearance in the knockouts in their history, capping a landmark tournament debut that also included Jonathan David's hat-trick vs Qatar. Canada face South Africa in the Round of 32 on June 29 in Los Angeles." },
    { icon:"⭐", title:"Neymar makes his WC 2026 debut as a substitute vs Scotland", category:"Spotlight", detail:"Neymar — Brazil's all-time leading scorer — made his first appearance at the 2026 World Cup, coming on as a 76th-minute substitute in Brazil's 3-0 win over Scotland on June 25. Coach Carlo Ancelotti had been cautious with the 34-year-old after a slow start to the tournament, but his introduction drew a standing ovation. 'There are many positive things, such as Neymar's appearance, which can help us,' said Ancelotti post-match." },
    { icon:"🇲🇽", title:"Mexico shut out all three group-stage opponents — 315 minutes of clean sheets", category:"Records", detail:"Mexico completed the group stage with a perfect record: 3 wins, 6 goals scored, 0 conceded. Their 3-0 win over Czechia on June 25 extended a clean-sheet run that now stands at 315 minutes — the longest scoreless stretch for any team in this tournament. Coach Jaime Lozano brought on veteran goalkeeper Guillermo Ochoa (age 40) as a late substitute, allowing the legend to play in a sixth World Cup." },
    { icon:"🔄", title:"Record 21.4% of World Cup 2026 goals scored by substitutes", category:"Records", detail:"30 of the 140 goals at the 2026 World Cup (including own goals) have been scored by substitutes — a record 21.4% of all goals. The previous highest in World Cup history was 18.7% in 2014. Notable super-sub moments include Germany's Deniz Undav sealing the win vs Ivory Coast. (Source: ESPN, June 23)" },
    { icon:"🇭🇷", title:"Luka Modrić becomes 4th player to earn 200 international appearances", category:"Records", detail:"Croatia captain Luka Modrić made his 200th international appearance during Croatia's 1-0 win over Panama on June 23, becoming only the fourth player in history to reach this milestone. He joins Cristiano Ronaldo (230 caps), Bader Al-Mutawa (202) and Lionel Messi (201). Modrić, 40, has completed at least 80% of passes in all 19 of his career World Cup starts." },
    { icon:"👴", title:"Ronaldo (41) is oldest player with multi-goal game in World Cup history", category:"Records", detail:"Cristiano Ronaldo, aged 41 years and 138 days, became the oldest player to score two or more goals in a single World Cup game when he bagged a brace against Uzbekistan on June 23. He surpassed the record set by Lionel Messi just one day earlier in the same tournament. Ronaldo is the second oldest WC scorer ever, behind only Roger Milla (42y, 39d for Cameroon in 1994)." },
    { icon:"👑", title:"Ronaldo breaks Messi's WC all-time goals record with brace vs Uzbekistan", category:"Records", detail:"Cristiano Ronaldo became the all-time top scorer in FIFA World Cup history, surpassing Lionel Messi's mark of 18 goals. Ronaldo struck twice in Portugal's 5-0 demolition of Uzbekistan at SoFi Stadium on June 23, taking his career tally to 19 World Cup goals. He is also the first player in history to score at six different World Cups (2006, 2010, 2014, 2018, 2022, 2026)." },
    { icon:"🐐", title:"Messi reaches 18 career WC goals — briefly holds all-time record", category:"Records", detail:"Lionel Messi sc