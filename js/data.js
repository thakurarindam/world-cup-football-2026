// ===== WORLD CUP 2026 — STATIC DATA (last updated: 2026-06-19) =====
// IST = UTC + 5:30  →  add 330 minutes to UTC kickoff times

const WC2026 = {
  lastUpdated: "2026-06-19",

  groups: {
    A: {
      name: "Group A",
      teams: [
        { id:"MEX", name:"Mexico",      flag:"🇲🇽", host:true,  coach:"Javier Aguirre",    played:1, won:1, drawn:0, lost:0, gf:2, ga:0, pts:3 },
        { id:"KOR", name:"South Korea", flag:"🇰🇷", host:false, coach:"Hong Myung-bo",     played:1, won:1, drawn:0, lost:0, gf:2, ga:1, pts:3 },
        { id:"CZE", name:"Czechia",     flag:"🇨🇿", host:false, coach:"Ivan Hasek",        played:1, won:0, drawn:0, lost:1, gf:1, ga:2, pts:0 },
        { id:"RSA", name:"South Africa",flag:"🇿🇦", host:false, coach:"Hugo Broos",        played:1, won:0, drawn:0, lost:1, gf:0, ga:2, pts:0 }
      ]
    },
    B: {
      name: "Group B",
      teams: [
        { id:"CAN", name:"Canada",      flag:"🇨🇦", host:true,  coach:"Jesse Marsch",     played:1, won:0, drawn:1, lost:0, gf:1, ga:1, pts:1 },
        { id:"BIH", name:"Bosnia & Herz",flag:"🇧🇦",host:false, coach:"Sergej Barbarez",  played:1, won:0, drawn:1, lost:0, gf:1, ga:1, pts:1 },
        { id:"QAT", name:"Qatar",       flag:"🇶🇦", host:false, coach:"Marquez Lopez",    played:0, won:0, drawn:0, lost:0, gf:0, ga:0, pts:0 },
        { id:"SUI", name:"Switzerland", flag:"🇨🇭", host:false, coach:"Murat Yakin",      played:0, won:0, drawn:0, lost:0, gf:0, ga:0, pts:0 }
      ]
    },
    C: {
      name: "Group C",
      teams: [
        { id:"BRA", name:"Brazil",      flag:"🇧🇷", host:false, coach:"Dorival Júnior",   played:1, won:1, drawn:0, lost:0, gf:3, ga:0, pts:3 },
        { id:"SCO", name:"Scotland",    flag:"🏴󠁧󠁢󠁳󠁣󠁴󠁿", host:false, coach:"Steve Clarke",    played:1, won:0, drawn:1, lost:0, gf:1, ga:1, pts:1 },
        { id:"MAR", name:"Morocco",     flag:"🇲🇦", host:false, coach:"Walid Regragui",   played:1, won:0, drawn:1, lost:0, gf:1, ga:1, pts:1 },
        { id:"HAI", name:"Haiti",       flag:"🇭🇹", host:false, coach:"Marc Collat",      played:1, won:0, drawn:0, lost:1, gf:0, ga:3, pts:0 }
      ]
    },
    D: {
      name: "Group D",
      teams: [
        { id:"USA", name:"United States",flag:"🇺🇸", host:true, coach:"Mauricio Pochettino",played:1, won:1, drawn:0, lost:0, gf:2, ga:0, pts:3 },
        { id:"PAR", name:"Paraguay",    flag:"🇵🇾", host:false, coach:"Gustavo Alfaro",   played:1, won:0, drawn:1, lost:0, gf:0, ga:0, pts:1 },
        { id:"AUS", name:"Australia",   flag:"🇦🇺", host:false, coach:"Tony Popovic",     played:1, won:0, drawn:0, lost:1, gf:0, ga:2, pts:0 },
        { id:"TUR", name:"Türkiye",     flag:"🇹🇷", host:false, coach:"Vincenzo Montella",played:1, won:0, drawn:1, lost:0, gf:0, ga:0, pts:1 }
      ]
    },
    E: {
      name: "Group E",
      teams: [
        { id:"GER", name:"Germany",     flag:"🇩🇪", host:false, coach:"Julian Nagelsmann",played:1, won:1, drawn:0, lost:0, gf:3, ga:1, pts:3 },
        { id:"ECU", name:"Ecuador",     flag:"🇪🇨", host:false, coach:"Sebastián Beccacece",played:1, won:1, drawn:0, lost:0, gf:1, ga:0, pts:3 },
        { id:"CIV", name:"Côte d'Ivoire",flag:"🇨🇮",host:false, coach:"Emerse Faé",       played:1, won:0, drawn:0, lost:1, gf:0, ga:1, pts:0 },
        { id:"CUW", name:"Curaçao",     flag:"🇨🇼", host:false, coach:"Leon Sleegers",    played:1, won:0, drawn:0, lost:1, gf:1, ga:3, pts:0 }
      ]
    },
    F: {
      name: "Group F",
      teams: [
        { id:"NED", name:"Netherlands", flag:"🇳🇱", host:false, coach:"Ronald Koeman",    played:1, won:0, drawn:1, lost:0, gf:2, ga:2, pts:1 },
        { id:"SWE", name:"Sweden",      flag:"🇸🇪", host:false, coach:"Jon Dahl Tomasson",played:1, won:1, drawn:0, lost:0, gf:5, ga:1, pts:3 },
        { id:"JPN", name:"Japan",       flag:"🇯🇵", host:false, coach:"Hajime Moriyasu",  played:1, won:0, drawn:1, lost:0, gf:2, ga:2, pts:1 },
        { id:"TUN", name:"Tunisia",     flag:"🇹🇳", host:false, coach:"Jalel Kadri",      played:1, won:0, drawn:0, lost:1, gf:1, ga:5, pts:0 }
      ]
    },
    G: {
      name: "Group G",
      teams: [
        { id:"BEL", name:"Belgium",     flag:"🇧🇪", host:false, coach:"Domenico Tedesco",played:1, won:0, drawn:1, lost:0, gf:1, ga:1, pts:1 },
        { id:"IRN", name:"Iran",        flag:"🇮🇷", host:false, coach:"Amir Ghalenoei",  played:1, won:0, drawn:1, lost:0, gf:2, ga:2, pts:1 },
        { id:"EGY", name:"Egypt",       flag:"🇪🇬", host:false, coach:"Emad El-Neny",    played:1, won:0, drawn:1, lost:0, gf:1, ga:1, pts:1 },
        { id:"NZL", name:"New Zealand", flag:"🇳🇿", host:false, coach:"Darren Bazeley",  played:1, won:0, drawn:1, lost:0, gf:2, ga:2, pts:1 }
      ]
    },
    H: {
      name: "Group H",
      teams: [
        { id:"ESP", name:"Spain",       flag:"🇪🇸", host:false, coach:"Luis de la Fuente",played:1, won:0, drawn:1, lost:0, gf:0, ga:0, pts:1 },
        { id:"URU", name:"Uruguay",     flag:"🇺🇾", host:false, coach:"Marcelo Bielsa",  played:1, won:0, drawn:1, lost:0, gf:1, ga:1, pts:1 },
        { id:"SAU", name:"Saudi Arabia",flag:"🇸🇦", host:false, coach:"Roberto Mancini", played:1, won:0, drawn:1, lost:0, gf:1, ga:1, pts:1 },
        { id:"CPV", name:"Cabo Verde",  flag:"🇨🇻", host:false, coach:"Bubista",         played:1, won:0, drawn:1, lost:0, gf:0, ga:0, pts:1 }
      ]
    },
    I: {
      name: "Group I",
      teams: [
        { id:"FRA", name:"France",      flag:"🇫🇷", host:false, coach:"Didier Deschamps",played:1, won:1, drawn:0, lost:0, gf:3, ga:1, pts:3 },
        { id:"NOR", name:"Norway",      flag:"🇳🇴", host:false, coach:"Ståle Solbakken",played:1, won:1, drawn:0, lost:0, gf:4, ga:1, pts:3 },
        { id:"SEN", name:"Senegal",     flag:"🇸🇳", host:false, coach:"Aliou Cissé",     played:1, won:0, drawn:0, lost:1, gf:1, ga:3, pts:0 },
        { id:"IRQ", name:"Iraq",        flag:"🇮🇶", host:false, coach:"Jesus Casas",     played:1, won:0, drawn:0, lost:1, gf:1, ga:4, pts:0 }
      ]
    },
    J: {
      name: "Group J",
      teams: [
        { id:"ARG", name:"Argentina",   flag:"🇦🇷", host:false, coach:"Lionel Scaloni",  played:1, won:1, drawn:0, lost:0, gf:3, ga:0, pts:3 },
        { id:"AUT", name:"Austria",     flag:"🇦🇹", host:false, coach:"Ralf Rangnick",   played:1, won:1, drawn:0, lost:0, gf:3, ga:1, pts:3 },
        { id:"JOR", name:"Jordan",      flag:"🇯🇴", host:false, coach:"Hussein Ammouta", played:1, won:0, drawn:0, lost:1, gf:1, ga:3, pts:0 },
        { id:"ALG", name:"Algeria",     flag:"🇩🇿", host:false, coach:"Vladimir Petrović",played:1, won:0, drawn:0, lost:1, gf:0, ga:3, pts:0 }
      ]
    },
    K: {
      name: "Group K",
      teams: [
        { id:"COL", name:"Colombia",    flag:"🇨🇴", host:false, coach:"Néstor Lorenzo",  played:1, won:1, drawn:0, lost:0, gf:3, ga:1, pts:3 },
        { id:"POR", name:"Portugal",    flag:"🇵🇹", host:false, coach:"Roberto Martínez",played:1, won:0, drawn:1, lost:0, gf:1, ga:1, pts:1 },
        { id:"COD", name:"DR Congo",    flag:"🇨🇩", host:false, coach:"Sébastien Desabre",played:1, won:0, drawn:1, lost:0, gf:1, ga:1, pts:1 },
        { id:"UZB", name:"Uzbekistan",  flag:"🇺🇿", host:false, coach:"Srecko Katanec",  played:1, won:0, drawn:0, lost:1, gf:1, ga:3, pts:0 }
      ]
    },
    L: {
      name: "Group L",
      teams: [
        { id:"ENG", name:"England",     flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", host:false, coach:"Gareth Southgate",played:1, won:1, drawn:0, lost:0, gf:4, ga:2, pts:3 },
        { id:"GHA", name:"Ghana",       flag:"🇬🇭", host:false, coach:"Otto Addo",       played:1, won:1, drawn:0, lost:0, gf:1, ga:0, pts:3 },
        { id:"CRO", name:"Croatia",     flag:"🇭🇷", host:false, coach:"Zlatko Dalić",    played:1, won:0, drawn:0, lost:1, gf:2, ga:4, pts:0 },
        { id:"PAN", name:"Panama",      flag:"🇵🇦", host:false, coach:"Thomas Christiansen",played:1, won:0, drawn:0, lost:1, gf:0, ga:1, pts:0 }
      ]
    }
  },

  // All fixtures — kickoffUTC in "YYYY-MM-DDTHH:mm" format
  // status: "FT" | "scheduled" | "live"
  matches: [
    // Group A — MD1
    { id:1, group:"A", home:"MEX", away:"RSA", homeScore:2, awayScore:0, kickoffUTC:"2026-06-11T19:00", status:"FT", venue:"SoFi Stadium, LA" },
    { id:2, group:"A", home:"KOR", away:"CZE", homeScore:2, awayScore:1, kickoffUTC:"2026-06-11T22:00", status:"FT", venue:"Levi's Stadium, SF" },
    // Group B — MD1
    { id:3, group:"B", home:"CAN", away:"BIH", homeScore:1, awayScore:1, kickoffUTC:"2026-06-12T19:00", status:"FT", venue:"BC Place, Vancouver" },
    // Group C — MD1
    { id:4, group:"C", home:"SCO", away:"MAR", homeScore:1, awayScore:1, kickoffUTC:"2026-06-13T22:00", status:"FT", venue:"Gillette Stadium, Boston" },
    { id:5, group:"C", home:"BRA", away:"HAI", homeScore:3, awayScore:0, kickoffUTC:"2026-06-14T01:00", status:"FT", venue:"Lincoln Financial Field, Philadelphia" },
    // Group F — MD1
    { id:6, group:"F", home:"NED", away:"JPN", homeScore:2, awayScore:2, kickoffUTC:"2026-06-14T19:00", status:"FT", venue:"AT&T Stadium, Dallas" },
    { id:7, group:"F", home:"SWE", away:"TUN", homeScore:5, awayScore:1, kickoffUTC:"2026-06-14T22:00", status:"FT", venue:"MetLife Stadium, NY" },
    // Group G — MD1
    { id:8, group:"G", home:"BEL", away:"EGY", homeScore:1, awayScore:1, kickoffUTC:"2026-06-15T19:00", status:"FT", venue:"Rose Bowl, LA" },
    { id:9, group:"G", home:"IRN", away:"NZL", homeScore:2, awayScore:2, kickoffUTC:"2026-06-15T22:00", status:"FT", venue:"NRG Stadium, Houston" },
    // Group H — MD1
    { id:10, group:"H", home:"ESP", away:"CPV", homeScore:0, awayScore:0, kickoffUTC:"2026-06-15T01:00", status:"FT", venue:"Estadio Azteca, Mexico City" },
    { id:11, group:"H", home:"SAU", away:"URU", homeScore:1, awayScore:1, kickoffUTC:"2026-06-15T22:00", status:"FT", venue:"Estadio BBVA, Monterrey" },
    // Group I — MD1
    { id:12, group:"I", home:"FRA", away:"SEN", homeScore:3, awayScore:1, kickoffUTC:"2026-06-16T19:00", status:"FT", venue:"Arrowhead Stadium, Kansas City" },
    { id:13, group:"I", home:"NOR", away:"IRQ", homeScore:4, awayScore:1, kickoffUTC:"2026-06-16T22:00", status:"FT", venue:"Lumen Field, Seattle" },
    // Group J — MD1
    { id:14, group:"J", home:"ARG", away:"ALG", homeScore:3, awayScore:0, kickoffUTC:"2026-06-16T22:00", status:"FT", venue:"Arrowhead Stadium, Kansas City" },
    { id:15, group:"J", home:"AUT", away:"JOR", homeScore:3, awayScore:1, kickoffUTC:"2026-06-16T19:00", status:"FT", venue:"MetLife Stadium, NY" },
    // Group L — MD1
    { id:16, group:"L", home:"ENG", away:"CRO", homeScore:4, awayScore:2, kickoffUTC:"2026-06-17T22:00", status:"FT", venue:"Levi's Stadium, SF" },
    { id:17, group:"L", home:"GHA", away:"PAN", homeScore:1, awayScore:0, kickoffUTC:"2026-06-17T19:00", status:"FT", venue:"Hard Rock Stadium, Miami" },
    // Group E — MD1
    { id:18, group:"E", home:"GER", away:"CUW", homeScore:3, awayScore:1, kickoffUTC:"2026-06-13T19:00", status:"FT", venue:"Estadio Akron, Guadalajara" },
    { id:19, group:"E", home:"ECU", away:"CIV", homeScore:1, awayScore:0, kickoffUTC:"2026-06-13T22:00", status:"FT", venue:"BMO Field, Toronto" },
    // Group D — MD1
    { id:20, group:"D", home:"USA", away:"AUS", homeScore:2, awayScore:0, kickoffUTC:"2026-06-19T19:00", status:"FT", venue:"Lumen Field, Seattle" },
    { id:21, group:"D", home:"PAR", away:"TUR", homeScore:0, awayScore:0, kickoffUTC:"2026-06-19T22:00", status:"FT", venue:"AT&T Stadium, Dallas" },
    // Group A — MD2
    { id:22, group:"A", home:"MEX", away:"KOR", homeScore:null, awayScore:null, kickoffUTC:"2026-06-20T22:00", status:"scheduled", venue:"SoFi Stadium, LA" },
    { id:23, group:"A", home:"RSA", away:"CZE", homeScore:null, awayScore:null, kickoffUTC:"2026-06-20T19:00", status:"scheduled", venue:"Estadio Akron, Guadalajara" },
    // Group B — MD2
    { id:24, group:"B", home:"QAT", away:"SUI", homeScore:null, awayScore:null, kickoffUTC:"2026-06-21T19:00", status:"scheduled", venue:"Rose Bowl, LA" },
    { id:25, group:"B", home:"CAN", away:"QAT", homeScore:null, awayScore:null, kickoffUTC:"2026-06-21T22:00", status:"scheduled", venue:"BC Place, Vancouver" },
    // Group C — MD2
    { id:26, group:"C", home:"BRA", away:"SCO", homeScore:null, awayScore:null, kickoffUTC:"2026-06-21T22:00", status:"scheduled", venue:"Lincoln Financial, Philadelphia" },
    { id:27, group:"C", home:"HAI", away:"MAR", homeScore:null, awayScore:null, kickoffUTC:"2026-06-21T19:00", status:"scheduled", venue:"Gillette Stadium, Boston" },
    // Group J — MD2
    { id:28, group:"J", home:"ARG", away:"AUT", homeScore:null, awayScore:null, kickoffUTC:"2026-06-22T22:00", status:"scheduled", venue:"MetLife Stadium, NY" },
    { id:29, group:"J", home:"JOR", away:"ALG", homeScore:null, awayScore:null, kickoffUTC:"2026-06-22T19:00", status:"scheduled", venue:"Hard Rock Stadium, Miami" },
    // Group J — MD3
    { id:30, group:"J", home:"ALG", away:"AUT", homeScore:null, awayScore:null, kickoffUTC:"2026-06-27T22:00", status:"scheduled", venue:"NRG Stadium, Houston" },
    { id:31, group:"J", home:"JOR", away:"ARG", homeScore:null, awayScore:null, kickoffUTC:"2026-06-27T22:00", status:"scheduled", venue:"Arrowhead Stadium, Kansas City" },
    // Group K — MD1
    { id:32, group:"K", home:"COL", away:"UZB", homeScore:3, awayScore:1, kickoffUTC:"2026-06-18T22:00", status:"FT", venue:"Estadio BBVA, Monterrey" },
    { id:33, group:"K", home:"POR", away:"COD", homeScore:1, awayScore:1, kickoffUTC:"2026-06-18T19:00", status:"FT", venue:"BMO Field, Toronto" },
    // Group F — MD2
    { id:34, group:"F", home:"NED", away:"SWE", homeScore:null, awayScore:null, kickoffUTC:"2026-06-22T19:00", status:"scheduled", venue:"AT&T Stadium, Dallas" },
    { id:35, group:"F", home:"JPN", away:"TUN", homeScore:null, awayScore:null, kickoffUTC:"2026-06-22T22:00", status:"scheduled", venue:"MetLife Stadium, NY" },
    // Group I — MD2
    { id:36, group:"I", home:"FRA", away:"NOR", homeScore:null, awayScore:null, kickoffUTC:"2026-06-23T22:00", status:"scheduled", venue:"Rose Bowl, LA" },
    { id:37, group:"I", home:"SEN", away:"IRQ", homeScore:null, awayScore:null, kickoffUTC:"2026-06-23T19:00", status:"scheduled", venue:"SoFi Stadium, LA" }
  ],

  teams: {
    ARG: {
      name:"Argentina", flag:"🇦🇷", group:"J", confederation:"CONMEBOL",
      worldCupTitles:3, lastTitle:2022,
      coach:{ name:"Lionel Scaloni", age:48, nationality:"Argentine" },
      trivia:[
        "Defending World Cup champions (2022 Qatar)",
        "Lionel Messi plays in his 6th and likely final World Cup",
        "Messi scored a hat-trick vs Algeria — 16 World Cup goals, tying Klose's all-time record",
        "Argentina have won the Copa America a record 16 times",
        "The 'Albiceleste' have never lost a World Cup group stage game with Messi in it"
      ],
      squad:[
        { name:"Emiliano Martínez", pos:"GK", club:"Aston Villa",  age:34, caps:50 },
        { name:"Franco Armani",     pos:"GK", club:"River Plate",   age:38, caps:22 },
        { name:"Geronimo Rulli",    pos:"GK", club:"Ajax",          age:32, caps:12 },
        { name:"Nicolás Otamendi", pos:"DEF",club:"Benfica",        age:36, caps:118 },
        { name:"Cristian Romero",  pos:"DEF",club:"Tottenham",      age:26, caps:40 },
        { name:"Lisandro Martínez",pos:"DEF",club:"Man United",     age:26, caps:28 },
        { name:"Nicolás Tagliafico",pos:"DEF",club:"Lyon",          age:32, caps:62 },
        { name:"Gonzalo Montiel",  pos:"DEF",club:"Nottm Forest",   age:27, caps:34 },
        { name:"Leonardo Balerdi", pos:"DEF",club:"Marseille",      age:25, caps:18 },
        { name:"Facundo Medina",   pos:"DEF",club:"Lens",           age:25, caps:12 },
        { name:"Rodrigo De Paul",  pos:"MID",club:"Atletico Madrid",age:30, caps:83 },
        { name:"Leandro Paredes",  pos:"MID",club:"Roma",           age:30, caps:79 },
        { name:"Alexis Mac Allister",pos:"MID",club:"Liverpool",    age:25, caps:45 },
        { name:"Enzo Fernández",   pos:"MID",club:"Chelsea",        age:23, caps:38 },
        { name:"Giovani Lo Celso", pos:"MID",club:"Villarreal",     age:28, caps:52 },
        { name:"Exequiel Palacios",pos:"MID",club:"Bayer Leverkusen",age:25, caps:33 },
        { name:"Valentín Barco",   pos:"MID",club:"Brighton",       age:20, caps:8  },
        { name:"Thiago Almada",    pos:"MID",club:"Botafogo",       age:23, caps:15 },
        { name:"Lionel Messi",     pos:"FWD",club:"Inter Miami",    age:38, caps:195 },
        { name:"Julián Álvarez",   pos:"FWD",club:"Atletico Madrid",age:24, caps:52 },
        { name:"Lautaro Martínez", pos:"FWD",club:"Inter Milan",    age:26, caps:78 },
        { name:"Nicolás González", pos:"FWD",club:"Juventus",       age:26, caps:30 },
        { name:"Giuliano Simeone", pos:"FWD",club:"Atletico Madrid",age:22, caps:10 },
        { name:"Nicolás Paz",      pos:"MID",club:"Como",           age:20, caps:8  },
        { name:"José Manuel López",pos:"FWD",club:"River Plate",    age:24, caps:5  },
        { name:"Gerónimo Rulli",   pos:"GK", club:"Ajax",           age:32, caps:12 }
      ]
    },
    BRA: {
      name:"Brazil", flag:"🇧🇷", group:"C", confederation:"CONMEBOL",
      worldCupTitles:5, lastTitle:2002,
      coach:{ name:"Dorival Júnior", age:62, nationality:"Brazilian" },
      trivia:[
        "Brazil hold the record for most World Cup titles (5)",
        "Only nation to have played in every single World Cup (22 editions)",
        "Vinicius Jr. & Rodrygo headline the Seleção attack",
        "Brazil beat Haiti 3-0 in their opener with Vinicius scoring",
        "Aiming to end a 24-year title drought"
      ],
      squad:[
        { name:"Alisson Becker",   pos:"GK", club:"Liverpool",      age:32, caps:90 },
        { name:"Ederson",          pos:"GK", club:"Man City",        age:31, caps:32 },
        { name:"Marquinhos",       pos:"DEF",club:"PSG",             age:30, caps:93 },
        { name:"Gabriel Magalhães",pos:"DEF",club:"Arsenal",         age:27, caps:22 },
        { name:"Danilo",           pos:"DEF",club:"Juventus",        age:33, caps:60 },
        { name:"Renan Lodi",       pos:"DEF",club:"Al-Hilal",        age:26, caps:20 },
        { name:"Casemiro",         pos:"MID",club:"Man United",      age:32, caps:82 },
        { name:"Bruno Guimarães",  pos:"MID",club:"Newcastle",       age:27, caps:45 },
        { name:"Lucas Paquetá",    pos:"MID",club:"West Ham",        age:27, caps:62 },
        { name:"Vinicius Jr.",     pos:"FWD",club:"Real Madrid",     age:24, caps:38 },
        { name:"Rodrygo",          pos:"FWD",club:"Real Madrid",     age:23, caps:30 },
        { name:"Endrick",          pos:"FWD",club:"Real Madrid",     age:18, caps:18 },
        { name:"Gabriel Martinelli",pos:"FWD",club:"Arsenal",        age:23, caps:20 }
      ]
    },
    FRA: {
      name:"France", flag:"🇫🇷", group:"I", confederation:"UEFA",
      worldCupTitles:2, lastTitle:2018,
      coach:{ name:"Didier Deschamps", age:55, nationality:"French" },
      trivia:[
        "Kylian Mbappé broke France's all-time World Cup scoring record (14 goals)",
        "France beat Senegal 3-1 in opener — Mbappé with 2 goals",
        "Deschamps chasing a third World Cup title as player & manager combined",
        "Antoine Griezmann provides vision and creativity in midfield",
        "France have now scored in 25 consecutive World Cup matches"
      ],
      squad:[
        { name:"Mike Maignan",    pos:"GK", club:"AC Milan",         age:29, caps:25 },
        { name:"Alphonse Areola", pos:"GK", club:"West Ham",         age:30, caps:10 },
        { name:"Jules Koundé",    pos:"DEF",club:"Barcelona",        age:25, caps:42 },
        { name:"Dayot Upamecano",pos:"DEF",club:"Bayern Munich",    age:26, caps:38 },
        { name:"William Saliba", pos:"DEF",club:"Arsenal",          age:23, caps:20 },
        { name:"Theo Hernández", pos:"DEF",club:"AC Milan",         age:27, caps:30 },
        { name:"N'Golo Kanté",   pos:"MID",club:"Al-Ittihad",       age:33, caps:55 },
        { name:"Aurélien Tchouaméni",pos:"MID",club:"Real Madrid",  age:24, caps:28 },
        { name:"Antoine Griezmann",pos:"MID",club:"Atletico Madrid",age:35, caps:135 },
        { name:"Kylian Mbappé",  pos:"FWD",club:"Real Madrid",      age:27, caps:88 },
        { name:"Ousmane Dembélé",pos:"FWD",club:"PSG",              age:28, caps:55 },
        { name:"Randal Kolo Muani",pos:"FWD",club:"Juventus",       age:26, caps:22 }
      ]
    },
    ENG: {
      name:"England", flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", group:"L", confederation:"UEFA",
      worldCupTitles:1, lastTitle:1966,
      coach:{ name:"Gareth Southgate", age:55, nationality:"English" },
      trivia:[
        "Jude Bellingham scored twice in the 4-2 win over Croatia",
        "England last won the World Cup 60 years ago in 1966",
        "Harry Kane leads the attack with Bellingham pulling strings in midfield",
        "England's youngest squad average age in a World Cup since 1966",
        "Phil Foden named in starting XI for the tournament opener"
      ],
      squad:[
        { name:"Jordan Pickford",  pos:"GK", club:"Everton",         age:32, caps:68 },
        { name:"Kyle Walker",      pos:"DEF",club:"Man City",         age:36, caps:85 },
        { name:"John Stones",      pos:"DEF",club:"Man City",         age:32, caps:70 },
        { name:"Marc Guéhi",       pos:"DEF",club:"Crystal Palace",   age:24, caps:20 },
        { name:"Trent Alexander-Arnold",pos:"MID",club:"Real Madrid", age:27, caps:40 },
        { name:"Declan Rice",      pos:"MID",club:"Arsenal",          age:26, caps:50 },
        { name:"Jude Bellingham",  pos:"MID",club:"Real Madrid",      age:22, caps:45 },
        { name:"Phil Foden",       pos:"MID",club:"Man City",         age:26, caps:40 },
        { name:"Bukayo Saka",      pos:"FWD",club:"Arsenal",          age:24, caps:42 },
        { name:"Harry Kane",       pos:"FWD",club:"Bayern Munich",    age:32, caps:100 },
        { name:"Ollie Watkins",    pos:"FWD",club:"Aston Villa",      age:30, caps:22 }
      ]
    },
    GER: {
      name:"Germany", flag:"🇩🇪", group:"E", confederation:"UEFA",
      worldCupTitles:4, lastTitle:2014,
      coach:{ name:"Julian Nagelsmann", age:38, nationality:"German" },
      trivia:[
        "Youngest coach in World Cup 2026 at 38 years old",
        "Florian Wirtz is the creative heartbeat of Die Mannschaft",
        "Germany beat Curaçao 3-1 in an efficient opener",
        "4-time world champions aiming to add a 5th star",
        "Jamal Musiala and Wirtz form one of the most exciting midfield duos"
      ],
      squad:[
        { name:"Manuel Neuer",     pos:"GK", club:"Bayern Munich",   age:40, caps:120 },
        { name:"Marc-André ter Stegen",pos:"GK",club:"Barcelona",    age:34, caps:45 },
        { name:"Antonio Rüdiger",  pos:"DEF",club:"Real Madrid",     age:31, caps:80 },
        { name:"Jonathan Tah",     pos:"DEF",club:"Bayern Munich",   age:29, caps:32 },
        { name:"Joshua Kimmich",   pos:"MID",club:"Bayern Munich",   age:31, caps:88 },
        { name:"Leon Goretzka",    pos:"MID",club:"Bayern Munich",   age:30, caps:60 },
        { name:"Florian Wirtz",    pos:"MID",club:"Bayern Munich",   age:21, caps:30 },
        { name:"Jamal Musiala",    pos:"MID",club:"Bayern Munich",   age:21, caps:40 },
        { name:"Thomas Müller",    pos:"FWD",club:"Bayern Munich",   age:36, caps:130 },
        { name:"Kai Havertz",      pos:"FWD",club:"Arsenal",         age:26, caps:52 },
        { name:"Leroy Sané",       pos:"FWD",club:"Bayern Munich",   age:30, caps:62 }
      ]
    },
    POR: {
      name:"Portugal", flag:"🇵🇹", group:"K", confederation:"UEFA",
      worldCupTitles:0, lastTitle:null,
      coach:{ name:"Roberto Martínez", age:51, nationality:"Spanish" },
      trivia:[
        "Cristiano Ronaldo's farewell World Cup at age 41",
        "Ronaldo played all 90 minutes vs DR Congo but failed to score",
        "Bernardo Silva is Portugal's creative engine in 2026",
        "Portugal finished 3rd at the 1966 World Cup — their best ever finish",
        "João Felix and Gonçalo Ramos lead the new generation"
      ],
      squad:[
        { name:"Diogo Costa",      pos:"GK", club:"Porto",           age:25, caps:20 },
        { name:"Rui Patrício",     pos:"GK", club:"Roma",            age:36, caps:120 },
        { name:"Rúben Dias",       pos:"DEF",club:"Man City",        age:27, caps:70 },
        { name:"Pepe",             pos:"DEF",club:"Porto",           age:43, caps:145 },
        { name:"João Cancelo",     pos:"DEF",club:"Barcelona",       age:31, caps:55 },
        { name:"Bernardo Silva",   pos:"MID",club:"Man City",        age:30, caps:80 },
        { name:"Vitinha",          pos:"MID",club:"PSG",             age:24, caps:28 },
        { name:"Bruno Fernandes",  pos:"MID",club:"Man United",      age:29, caps:88 },
        { name:"Cristiano Ronaldo",pos:"FWD",club:"Al-Nassr",        age:41, caps:219 },
        { name:"João Felix",       pos:"FWD",club:"Chelsea",         age:24, caps:38 },
        { name:"Gonçalo Ramos",    pos:"FWD",club:"PSG",             age:23, caps:22 }
      ]
    },
    ESP: {
      name:"Spain", flag:"🇪🇸", group:"H", confederation:"UEFA",
      worldCupTitles:1, lastTitle:2010,
      coach:{ name:"Luis de la Fuente", age:63, nationality:"Spanish" },
      trivia:[
        "Lamine Yamal (18) is the tournament's most exciting young prospect",
        "Spain are 2024 Euros champions — arriving in form",
        "Pedri and Gavi form Spain's technically superior midfield",
        "Spain drew 0-0 with Cabo Verde in a shock Group H opener",
        "La Roja's tiki-taka identity has evolved into a more direct, dynamic style"
      ],
      squad:[
        { name:"Unai Simón",       pos:"GK", club:"Ath Bilbao",      age:27, caps:35 },
        { name:"Alejandro Balde",  pos:"DEF",club:"Barcelona",       age:21, caps:20 },
        { name:"Robin Le Normand", pos:"DEF",club:"Atletico Madrid", age:27, caps:18 },
        { name:"Aymeric Laporte",  pos:"DEF",club:"Al-Nassr",        age:30, caps:42 },
        { name:"Dani Carvajal",    pos:"DEF",club:"Real Madrid",     age:32, caps:68 },
        { name:"Rodri",            pos:"MID",club:"Man City",         age:28, caps:52 },
        { name:"Pedri",            pos:"MID",club:"Barcelona",       age:22, caps:38 },
        { name:"Gavi",             pos:"MID",club:"Barcelona",       age:21, caps:40 },
        { name:"Lamine Yamal",     pos:"FWD",club:"Barcelona",       age:18, caps:22 },
        { name:"Nico Williams",    pos:"FWD",club:"Ath Bilbao",      age:22, caps:20 },
        { name:"Álvaro Morata",    pos:"FWD",club:"Atletico Madrid", age:33, caps:82 }
      ]
    }
  },

  facts: [
    { icon:"⚽", category:"Goals", title:"Messi's Record Hat-Trick", detail:"Lionel Messi scored a hat-trick vs Algeria at age 38 years 357 days — the oldest player ever to score a World Cup hat-trick, surpassing Cristiano Ronaldo's record. His 16 WC goals ties Miroslav Klose's all-time record." },
    { icon:"👑", category:"Records", title:"Mbappé Breaks France Record", detail:"Kylian Mbappé scored his 14th World Cup goal vs Senegal, breaking Just Fontaine's 68-year-old French record. He now has the most multi-goal WC games (5) in history." },
    { icon:"🌍", category:"History", title:"First 48-Team World Cup", detail:"2026 is the first FIFA World Cup featuring 48 teams across 12 groups and 104 matches — up from 32 teams and 64 matches in previous editions." },
    { icon:"🏟️", category:"Venues", title:"Three Host Nations", detail:"For the first time, three nations co-host: USA (11 venues), Canada (2 venues), Mexico (3 venues). MetLife Stadium in New Jersey hosts the Final on July 19." },
    { icon:"🧒", category:"Records", title:"Youngest African WC Scorer", detail:"Senegal's Ibrahim Mbaye became the youngest African scorer at a FIFA World Cup at just 18 years and 143 days old." },
    { icon:"👴", category:"Records", title:"Ronaldo's Record 219 Caps", detail:"Cristiano Ronaldo holds the record for most international caps (219) and most international goals (133) — appearing in his 6th World Cup." },
    { icon:"🇳🇴", category:"Debut", title:"Norway & Haaland's First WC", detail:"Erling Haaland scored 2 goals in Norway's 4-1 win over Iraq — Norway's first-ever World Cup goals in their tournament debut." },
    { icon:"🎯", category:"Tournament", title:"104 Matches, 16 Venues", detail:"The expanded 2026 tournament runs from June 11 to July 19 — 39 days, the longest World Cup ever. Matches span 16 stadiums across 3 countries." },
    { icon:"🇦🇷", category:"Argentina", title:"Defending Champions", detail:"Argentina are defending champions (2022 Qatar). A second consecutive World Cup win would be their third title overall, matching Italy's record." },
    { icon:"🇧🇷", category:"Brazil", title:"Record 22 World Cups", detail:"Brazil are the only nation to have appeared in every single FIFA World Cup (22 editions). Their last title was in 2002 — they're chasing #6." },
    { icon:"⭐", category:"Germany", title:"Most Combined Titles", detail:"Germany (4) and Brazil (5) share 9 of the 22 World Cup titles ever contested — almost half of all trophies between just two nations." },
    { icon:"🇬🇧", category:"England", title:"Kane Hits 100 Caps", detail:"Harry Kane became the first England player to appear in 4 different World Cups. He reached 100 England caps during the 2026 campaign." }
  ],

  argentinaPath: {
    groupResults: [
      { opponent:"Algeria", result:"W", score:"3-0", date:"June 16" }
    ],
    groupRemaining: [
      { opponent:"Austria", date:"June 22", venue:"MetLife Stadium, NY" },
      { opponent:"Jordan",  date:"June 27", venue:"Arrowhead Stadium, KC" }
    ],
    projectedPath: [
      { round:"Round of 32", projectedOpponent:"Best 3rd Place (TBD)", likelihood:"Very Likely" },
      { round:"Round of 16", projectedOpponent:"Winner Group K (Portugal/Colombia)", likelihood:"Likely" },
      { round:"Quarter-Final", projectedOpponent:"Winner Group F (Netherlands/Sweden)", likelihood:"Possible" },
      { round:"Semi-Final", projectedOpponent:"Winner Group I (France/Norway)", likelihood:"Possible" },
      { round:"Final", projectedOpponent:"Winner of opposite bracket", likelihood:"Contenders" }
    ],
    injuryUpdates: [
      { player:"Lionel Messi", status:"Available", detail:"Mild hamstring strain — Scaloni confirmed fit for full campaign" },
      { player:"Emiliano Martínez", status:"Available", detail:"No fitness concerns — started vs Algeria" },
      { player:"Julián Álvarez", status:"Available", detail:"Previous ankle issue — fully recovered and started" },
      { player:"Cristian Romero", status:"Available", detail:"Started vs Algeria" },
      { player:"Enzo Fernández", status:"Available", detail:"Full fitness — excellent in opener" }
    ]
  }
};

// ── UTILITIES ──
function toIST(utcStr) {
  const d = new Date(utcStr + ":00Z");
  const options = { timeZone:"Asia/Kolkata", hour:"2-digit", minute:"2-digit", hour12:true };
  return d.toLocaleTimeString("en-IN", options).toUpperCase();
}
function toISTDate(utcStr) {
  const d = new Date(utcStr + ":00Z");
  return d.toLocaleDateString("en-IN", { timeZone:"Asia/Kolkata", weekday:"short", day:"numeric", month:"short" });
}
function sortStandings(teams) {
  return [...teams].sort((a,b)=>{
    if(b.pts !== a.pts) return b.pts - a.pts;
    const gdA = a.gf - a.ga, gdB = b.gf - b.ga;
    if(gdB !== gdA) return gdB - gdA;
    return b.gf - a.gf;
  });
}
function getTeamById(id) {
  // search all groups
  for(const g of Object.values(WC2026.groups)) {
    const t = g.teams.find(t=>t.id===id);
    if(t) return t;
  }
  return null;
}
