const wikidata = {
  charts: ["Network Diagram", "Tree Chart", "Table"],
  topics: [
    {
      id: "Q333",
      label: "Astronomy",
      value: "Astronomy",
      description: "study of celestial objects and phenomena",
    },
    {
      id: "Q735",
      label: "Art",
      value: "Art",
      description: "expression of creative skill and imagination",
    },
    {
      id: "Q11660",
      label: "Artificial intelligence",
      value: "Artificial intelligence",
      description: "intelligence demonstrated by machines",
    },
    {
      id: "Q420",
      label: "Biology",
      value: "Biology",
      description: "study of living organisms",
    },
    {
      id: "Q4830453",
      label: "Business",
      value: "Business",
      description:
        "activity of making one's living or making money by producing or buying and selling products",
    },
    {
      id: "Q2329",
      label: "Chemistry",
      value: "Chemistry",
      description: "study of matter and its properties",
    },
    {
      id: "Q21198",
      label: "Computer Science",
      value: "Computer Science",
      description:
        "study of the theoretical foundations of information and computation",
    },
    {
      id: "Q8134",
      label: "Economics",
      value: "Economics",
      description:
        "social science concerned with the production, distribution, and consumption of goods and services",
    },
    {
      id: "Q11023",
      label: "Engineering",
      value: "Engineering",
      description:
        "application of scientific, economic, social, and practical knowledge in order to invent, design, build, maintain, research, and improve structures, machines, tools, systems, components, materials, and processes",
    },
    {
      id: "Q11424",
      label: "Film",
      value: "Film",
      description: "motion pictures",
    },
    {
      id: "Q1071",
      label: "Geography",
      value: "Geography",
      description:
        "study of the lands, the features, the inhabitants, and the phenomena of Earth",
    },
    {
      id: "Q1069",
      label: "Geology",
      value: "Geology",
      description: "study of the solid Earth",
    },
    {
      id: "Q309",
      label: "History",
      value: "History",
      description: "study of the past",
    },
    {
      id: "Q7748",
      label: "Law",
      value: "Law",
      description:
        "system of rules that are created and enforced through social or governmental institutions to regulate behavior",
    },
    {
      id: "Q8242",
      label: "Literature",
      value: "Literature",
      description:
        "written works, especially those considered of superior or lasting artistic merit",
    },
    {
      id: "Q395",
      label: "Mathematics",
      value: "Mathematics",
      description: "study of quantity, structure, space, and change",
    },
    {
      id: "Q11190",
      label: "Medicine",
      value: "Medicine",
      description:
        "application of knowledge for the diagnosis, treatment, and prevention of disease",
    },
    {
      id: "Q638",
      label: "Music",
      value: "Music",
      description:
        "art of sound in time that expresses ideas and emotions in significant forms through the elements of rhythm, melody, harmony, and color",
    },
    {
      id: "Q207011",
      label: "Neuroscience",
      value: "Neuroscience",
      description: "study of the nervous system",
    },
    {
      id: "Q5891",
      label: "Philosophy",
      value: "Philosophy",
      description:
        "study of general and fundamental problems concerning matters such as existence, knowledge, values, reason, mind, and language",
    },
    {
      id: "Q413",
      label: "Physics",
      value: "Physics",
      description:
        "natural science that involves the study of matter and its motion through space and time, along with related concepts such as energy and force",
    },
    {
      id: "Q7163",
      label: "Politics",
      value: "Politics",
      description: "activities associated with making decisions in groups",
    },
    {
      id: "Q9418",
      label: "Psychology",
      value: "Psychology",
      description: "study of the human mind and its functions",
    },
    {
      id: "Q9174",
      label: "Religion",
      value: "Religion",
      description:
        "belief in and reverence for a supernatural power or powers regarded as creator and governor of the universe",
    },
    {
      id: "Q21201",
      label: "Sociology",
      value: "Sociology",
      description: "study of human social relationships and institutions",
    },
    {
      id: "Q80993",
      label: "Software Engineering",
      value: "Software Engineering",
      description:
        "application of engineering to the development of software in a systematic method",
    },
    {
      id: "Q349",
      label: "Sports",
      value: "Sports",
      description:
        "physical activities generally involving skill of dexterity and requiring physical exertion",
    },
  ],
  properties: [
    {
      id: "P279",
      label: "Subclass of",
      description:
        "Example: K2 is an instance of mountain; volcano is a subclass of mountain (and an instance of volcanic landform).",
    },
    {
      id: "P361",
      label: "Part of",
    },
    {
      id: "P527",
      label: "Has part(s)",
      description:
        "Example: K2 is a part of the Himalayas; the Himalayas is a part of the Himalaya mountain range.",
    },
  ],
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

export default wikidata;
