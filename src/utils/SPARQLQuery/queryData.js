const queryData = {
  endpointUrl: "https://query.wikidata.org/sparql",
  charts: [
    "Network Diagram",
    "Tree Chart",
    "Table",
  ],
  topics: [
    "Computer Science",
    "Artificial intelligence",
    "Software Engineering",
    "Mathematics",
    "Physics",
    "Philosophy",
    "Medicine",
    "Neuroscience",
    "Psychology",
    "Biology",
    "Chemistry",
    "Geography",
    "History",
    "Literature",
    "Music",
    "Politics",
    "Religion",
    "Sociology",
    "Sports",
    "Art",
    "Film",
    "Business",
    "Economics",
    "Engineering",
    "Law",
    "Astronomy",
    "Geology",
  ],
  wikidataItems: {
    "Computer Science": "Q21198",
    "Artificial intelligence": "Q11660",
    "Software Engineering": "Q80993",
    Mathematics: "Q395",
    Physics: "Q413",
    Philosophy: "Q5891",
    Medicine: "Q11190",
    Neuroscience: "Q207011",
    Psychology: "Q9418",
    Biology: "Q420",
    Chemistry: "Q2329",
    Geography: "Q1071",
    History: "Q309",
    Literature: "Q8242",
    Music: "Q638",
    Politics: "Q7163",
    Religion: "Q9174",
    Sociology: "Q21201",
    Sports: "Q349",
    Art: "Q735",
    Film: "Q11424",
    Business: "Q4830453",
    Economics: "Q8134",
    Engineering: "Q11023",
    Law: "Q7748",
    Astronomy: "Q333",
    Geology: "Q1069",
  },
  properties: ["Subclass of", "Part of"],
  wikidataProperties: {
    "Subclass of": "P279",
    "Part of": "P361",
    "Has part(s)": "P527"
  },
  propertyDescription: {
    "Subclass of":
      "Example: K2 is an instance of mountain; volcano is a subclass of mountain (and an instance of volcanic landform).",
    "Part of":
      "Example: K2 is a part of the Himalayas; the Himalayas is a part of the Himalaya mountain range.",
  },
  sparqlQueryComputerScience: `SELECT ?item ?itemLabel WHERE {
    ?item wdt:P31/wdt:P279* wd:Q21198 .
    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en,en"  }  
  }
  LIMIT 1000`,
  sparqlQueryMathematics: `SELECT ?item ?itemLabel WHERE {
    ?item wdt:P31/wdt:P279* wd:Q395 .
    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en,en"  }  
  }
  LIMIT 1000`,
  sparqlQueryPhysics: `SELECT ?item ?itemLabel WHERE {
    ?item wdt:P31/wdt:P279* wd:Q413 .
    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en,en"  }  
  }
  LIMIT 1000`,

};

export default queryData;
