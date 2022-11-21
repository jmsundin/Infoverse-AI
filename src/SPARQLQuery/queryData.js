const queryData = {
  endpointUrl: "https://query.wikidata.org/sparql",
  charts: ["Graph (Network Diagram)", "Tree (Hierarchical Diagram)", "Table"],
  topics: ["Computer Science", "Mathematics", "Physics"],
  wikidataItems: {
    "Computer Science": "Q21198",
    "Mathematics": "Q395",
    "Physics": "Q413"
  },
  properties: ["Subclass of", "Instance of", "Part of"],
  wikidataProperties: {
    "Subclass of": "P279",
    "Instance of": "P31",
    "Part of": "P361"
  },
  propertyDescription: {
    "Subclass of":
      "Example: K2 is an instance of mountain; volcano is a subclass of mountain (and an instance of volcanic landform).",
    "Instance of":
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

  response: {
    "head" : {
      "vars" : [ "item", "itemLabel", "child1", "child1Label", "child2", "child2Label" ]
    },
    "results" : {
      "bindings" : [ {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24862"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q193977"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1147986"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "short film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "music video"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "Lip dub"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24862"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q193977"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2006167"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "short film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "music video"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "vingle"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24862"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q193977"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2023874"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "short film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "music video"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "one-shot music video"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24862"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q193977"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q20871935"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "short film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "music video"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "lyric video"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24862"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q193977"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q55960075"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "short film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "music video"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "official music video"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24862"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q193977"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q63208582"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "short film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "music video"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "gaming music video"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24862"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q193977"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q64100970"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "short film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "music video"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated music video"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24862"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q193977"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q73403617"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "short film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "music video"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "music video directed by this person"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24862"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q193977"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q78331840"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "short film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "music video"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "television performance"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24862"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q193977"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q87000729"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "short film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "music video"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "remix video"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24862"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q193977"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q93376240"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "short film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "music video"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "upcoming music video"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24862"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q193977"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q98406740"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "short film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "music video"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "audio video"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24862"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q193977"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q102133820"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "short film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "music video"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "unofficial music video"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24862"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q193977"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q102222054"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "short film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "music video"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "music video by this artist"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24862"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q193977"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q108387267"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "short film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "music video"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "fictional music video"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q202866"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q332564"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q16824564"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "abstract film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "absolute film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q130232"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q542475"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q222639"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "drama film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "costume drama"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "swashbuckler film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q157443"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q622548"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q459435"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "comedy film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "parody film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "mockumentary"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q157443"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q622548"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q16254232"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "comedy film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "parody film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "porn parody"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24862"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q735478"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q423504"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "short film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "newsreel"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "news cinema"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q157443"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q860626"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q5151497"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "comedy film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "romantic comedy"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "comedy of remarriage"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q157443"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q860626"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q18398246"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "comedy film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "romantic comedy"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "bromantic comedy"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q202866"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q987831"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q67414381"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "donghua"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "donghua feature film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q188473"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1033891"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q169672"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "action film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "martial arts film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "samurai cinema"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q188473"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1033891"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q580013"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "action film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "martial arts film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "Bruceploitation"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q188473"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1033891"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q622310"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "action film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "martial arts film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "heroic bloodshed"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q188473"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1033891"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q3072042"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "action film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "martial arts film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "kung fu film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q188473"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1033891"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q3745429"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "action film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "martial arts film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "ninja film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q188473"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1033891"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q5104880"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "action film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "martial arts film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "Chopsocky"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q188473"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1033891"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q104176285"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "action film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "martial arts film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "martial arts anime"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q188473"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1033891"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q111306560"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "action film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "martial arts film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "eskrima film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q202866"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1047299"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q113671041"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "original net animation"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "original net animation series"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q157443"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1115187"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2991565"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "comedy film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "Commedia all'italiana"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "Commedia sexy all'italiana"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q188473"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1776156"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q4840473"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "action film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "girls with guns"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "bad girl movie"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q157443"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1788980"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q6729489"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "comedy film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "crime-comedy film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "mafia comedy film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q188473"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2297927"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q3677202"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "action film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "spy film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "eurospy film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24862"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2757149"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q16927904"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "short film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "Mashup"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "YouTube Poop"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q157443"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2991560"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2991565"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "comedy film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "sex comedy"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "Commedia sexy all'italiana"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q157443"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2991560"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q4047254"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "comedy film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "sex comedy"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "Pornochanchada"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q157443"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2991560"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q30900100"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "comedy film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "sex comedy"
        },
        "child2Label" : {
          "type" : "literal",
          "value" : "Q30900100"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q202866"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q3249257"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1324620"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "adult animation"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "The Haunted World of El Superbeasto"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q185529"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q4373044"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q172067"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "pornographic film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "cartoon pornography"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "hentai"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q202866"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q4373044"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q172067"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "cartoon pornography"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "hentai"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q130232"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q7168625"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q542475"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "drama film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "historical drama"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "costume drama"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q202866"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q18089587"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q849666"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "stop-motion animated film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "brickfilm"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q202866"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q18089587"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q18089617"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "stop-motion animated film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "clay animation film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q202866"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q20089346"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q103925569"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "science fiction animation"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "science fiction anime"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q202866"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q20650540"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q220898"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "anime film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "original video animation"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q202866"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q28968511"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q3454252"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "traditionally animated film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "Peg bar"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q202866"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q28968511"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q17175676"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "traditionally animated film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated cartoon"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24869"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q29168811"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q26196748"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "feature film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated feature film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "DreamWorks Animation feature films"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q202866"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q29168811"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q26196748"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated feature film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "DreamWorks Animation feature films"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q24869"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q29168811"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q67414381"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "feature film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated feature film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "donghua feature film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q202866"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q29168811"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q67414381"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "animated feature film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "donghua feature film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q185529"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q97016664"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q931552"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "pornographic film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "sex tape"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "Celebrity sex tape"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q157394"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1957385"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "fantasy film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "cinematic fairy tale"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q157394"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q5769663"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "fantasy film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "gothic film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q157394"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q5855976"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "fantasy film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror fantasy film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q157394"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q31086090"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "fantasy film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "Barbarian film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q157394"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q63860397"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "fantasy film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "steampunk film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q157394"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q95440291"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "fantasy film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "fantasy comedy film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q157394"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q98802676"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "fantasy film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "fantasy television film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q157394"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q104536896"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "fantasy film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "fantasy anime"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q798555"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "backwoods film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q853630"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "slasher film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q909586"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "splatter film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1723850"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "cannibal film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2445146"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "torture porn"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2600159"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "type" : "literal",
          "value" : "Q2600159"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q4925568"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "blaxploitation horror film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q5551875"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "German underground horror"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q5855976"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror fantasy film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q7256286"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "psycho-biddy"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q10674355"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "Spanish horror movie"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q12049743"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "romantic horror film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q16247268"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "Bollywood horror film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q18355406"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "Satanic film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q23044991"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "Finnish horror film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q43911809"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "supernatural horror film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q60791959"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "British horror cinema"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q97191621"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "art horror"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q102260466"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "body horror film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q104902646"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "folk horror film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q108466999"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "comedy horror film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q109626272"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "natural horror film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q109628205"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "found footage horror"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q109628222"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "cosmic horror film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q109629396"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "psychological horror film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q109653382"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "science fiction horror film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q109653402"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "sex horror film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q109653422"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "costume horror film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q200092"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q114413232"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "horror film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "gothic horror film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1320115"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q223770"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q4836991"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "low-budget film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "B movie"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "B western"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q471839"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q1341051"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "science fiction film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "post-apocalyptic film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q471839"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q20656232"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "science fiction film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "science fiction action film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q471839"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q47009776"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "science fiction film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "apocalyptic film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q471839"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q63860397"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "science fiction film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "steampunk film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q471839"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q64705787"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "science fiction film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "spacesuit film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q471839"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q66914288"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "science fiction film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "space adventure film"
        }
      }, {
        "item" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q2973181"
        },
        "child1" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q471839"
        },
        "child2" : {
          "type" : "uri",
          "value" : "http://www.wikidata.org/entity/Q103925569"
        },
        "itemLabel" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "speculative fiction film"
        },
        "child1Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "science fiction film"
        },
        "child2Label" : {
          "xml:lang" : "en",
          "type" : "literal",
          "value" : "science fiction anime"
        }
      } ]
    }
  }
};

export default queryData;
