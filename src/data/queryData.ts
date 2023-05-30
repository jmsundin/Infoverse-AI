export const wikidata = {
  generalQuery: `PREFIX wd: <http://www.wikidata.org/entity/>
    PREFIX wdt: <http://www.wikidata.org/prop/direct/>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    
    SELECT DISTINCT ?subject ?subjectLabel ?subjectDescription ?predicateLabel ?predicateEntity ?predicateEntityIriLabel ?object ?objectLabel
    WHERE {
      VALUES ?object { wd:Q21198 }
      VALUES ?predicate { 
        wdt:P31 wdt:P279 # subclass of
                wdt:P361 # part of
                wdt:P527 # has parts
                wdt:P460 # said to be the same
                wdt:P1382 # partially coincident with
                wdt:P1889 # different from
                wdt:P2184 # history of topic
                wdt:P1344 # partipant in
                wdt:P2283 # uses
                wdt:P1542 # has effect
                wdt:P3095 # practiced by 
      }
      
      { ?subject ?predicate ?object. }
      OPTIONAL {
        ?object ?predicate ?subject.
      }

      BIND( REPLACE( STR(?predicate), "prop/direct/", "entity/" ) AS ?predicateEntity ).
      BIND( IRI(STR(?predicateEntity)) AS ?predicateEntityIri ).


      SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
    }
    ORDER BY ?subject
    LIMIT 50`,
  apiCallForWikipediaSiteLinkForTopic: `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q21198&props=sitelinks&sitefilter=enwiki&format=json`,
  suggestedTopics: [
    {
      id: "Q333",
      value: "Astronomy",
      label: "Astronomy",
      description: "study of celestial objects and phenomena",
      url: "https://www.wikidata.org/wiki/Q333",
      pageId: 333,
    },
    {
      id: "Q735",
      value: "Art",
      label: "Art",
      description: "expression of creative skill and imagination",
      url: "https://www.wikidata.org/wiki/Q735",
      pageId: 735,
    },
    {
      id: "Q11660",
      value: "Artificial intelligence",
      label: "Artificial intelligence",
      description: "intelligence demonstrated by machines",
      url: "https://www.wikidata.org/wiki/Q11660",
      pageId: 11660,
    },
    {
      id: "Q420",
      value: "Biology",
      label: "Biology",
      description: "study of living organisms",
      url: "https://www.wikidata.org/wiki/Q420",
      pageId: 420,
    },
    {
      id: "Q4830453",
      value: "Business",
      label: "Business",
      description:
        "activity of making one's living or making money by producing or buying and selling products",
      url: "https://www.wikidata.org/wiki/Q4830453",
      pageId: 4830453,
    },
    {
      id: "Q2329",
      value: "Chemistry",
      label: "Chemistry",
      description: "study of matter and its properties",
      url: "https://www.wikidata.org/wiki/Q2329",
      pageId: 2329,
    },
    {
      id: "Q21198",
      value: "Computer Science",
      label: "Computer Science",
      description:
        "study of the theoretical foundations of information and computation",
      url: "https://www.wikidata.org/wiki/Q21198",
      pageId: 21198,
    },
    {
      id: "Q8134",
      value: "Economics",
      label: "Economics",
      description:
        "social science concerned with the production, distribution, and consumption of goods and services",
      url: "https://www.wikidata.org/wiki/Q8134",
      pageId: 8134,
    },
    {
      id: "Q11023",
      value: "Engineering",
      label: "Engineering",
      description:
        "application of scientific, economic, social, and practical knowledge in order to invent, design, build, maintain, research, and improve structures, machines, tools, systems, components, materials, and processes",
      url: "https://www.wikidata.org/wiki/Q11023",
      pageId: 11023,
    },
    {
      id: "Q11424",
      value: "Film",
      label: "Film",
      description: "motion pictures",
      url: "https://www.wikidata.org/wiki/Q11424",
      pageId: 11424,
    },
    {
      id: "Q1071",
      value: "Geography",
      label: "Geography",
      description:
        "study of the lands, the features, the inhabitants, and the phenomena of Earth",
      url: "https://www.wikidata.org/wiki/Q1071",
      pageId: 1071,
    },
    {
      id: "Q1069",
      value: "Geology",
      label: "Geology",
      description: "study of the solid Earth",
      url: "https://www.wikidata.org/wiki/Q1069",
      pageId: 1069,
    },
    {
      id: "Q309",
      value: "History",
      label: "History",
      description: "study of the past",
      url: "https://www.wikidata.org/wiki/Q309",
      pageId: 309,
    },
    {
      id: "Q7748",
      value: "Law",
      label: "Law",
      description:
        "system of rules that are created and enforced through social or governmental institutions to regulate behavior",
      url: "https://www.wikidata.org/wiki/Q7748",
      pageId: 7748,
    },
    {
      id: "Q8242",
      value: "Literature",
      label: "Literature",
      description:
        "written works, especially those considered of superior or lasting artistic merit",
      url: "https://www.wikidata.org/wiki/Q8242",
      pageId: 8242,
    },
    {
      id: "Q395",
      value: "Mathematics",
      label: "Mathematics",
      description: "study of quantity, structure, space, and change",
      url: "https://www.wikidata.org/wiki/Q395",
      pageId: 395,
    },
    {
      id: "Q11190",
      value: null,
      label: "Medicine",
      description:
        "application of knowledge for the diagnosis, treatment, and prevention of disease",
      url: "https://www.wikidata.org/wiki/Q11190",
      pageId: 11190,
    },
    {
      id: "Q188451",
      value: null,
      label: "music genre",
      description:
        "category that identifies pieces of music as belonging to a shared tradition or set of conventions",
      url: "https://www.wikidata.org/wiki/Q188451",
      pageId: 188451,
    },
    {
      id: "Q207011",
      value: "Neuroscience",
      label: "Neuroscience",
      description: "study of the nervous system",
      url: "https://www.wikidata.org/wiki/Q207011",
      pageId: 207011,
    },
    {
      id: "Q5891",
      value: "Philosophy",
      label: "Philosophy",
      description:
        "study of general and fundamental problems concerning matters such as existence, knowledge, values, reason, mind, and language",
      url: "https://www.wikidata.org/wiki/Q5891",
      pageId: 5891,
    },
    {
      id: "Q413",
      value: "Physics",
      label: "Physics",
      description:
        "natural science that involves the study of matter and its motion through space and time, along with related concepts such as energy and force",
      url: "https://www.wikidata.org/wiki/Q413",
      pageId: 413,
    },
    {
      id: "Q7163",
      value: "Politics",
      label: "Politics",
      description: "activities associated with making decisions in groups",
      url: "https://www.wikidata.org/wiki/Q7163",
      pageId: 7163,
    },
    {
      id: "Q9418",
      value: "Psychology",
      label: "Psychology",
      description: "study of the human mind and its functions",
      url: "https://www.wikidata.org/wiki/Q9418",
      pageId: 9418,
    },
    {
      id: "Q9174",
      value: "Religion",
      label: "Religion",
      description:
        "belief in and reverence for a supernatural power or powers regarded as creator and governor of the universe",
      url: "https://www.wikidata.org/wiki/Q9174",
      pageId: 9174,
    },
    {
      id: "Q21201",
      value: "Sociology",
      label: "Sociology",
      description: "study of human social relationships and institutions",
      url: "https://www.wikidata.org/wiki/Q21201",
      pageId: 21201,
    },
    {
      id: "Q80993",
      value: "Software Engineering",
      label: "Software Engineering",
      description:
        "application of engineering to the development of software in a systematic method",
      url: "https://www.wikidata.org/wiki/Q80993",
      pageId: 80993,
    },
    {
      id: "Q349",
      value: "Sports",
      label: "Sports",
      description:
        "physical activities generally involving skill of dexterity and requiring physical exertion",
      url: "https://www.wikidata.org/wiki/Q349",
      pageId: 349,
    },
    {
      id: "Q12483",
      value: "Statistics",
      label: "Statistics",
      description:
        "study of the collection, organization, analysis, interpretation and presentation of data",
      url: "https://www.wikidata.org/wiki/Q11424",
      pageId: 12483,
    },
    {
      id: "Q11016",
      value: "Technology",
      label: "Technology",
      description:
        "making, modification, usage, and knowledge of tools, machines, techniques, crafts, systems, and methods of organization",
      url: "https://www.wikidata.org/wiki/Q11016",
      pageId: 11016,
    },
    {
      id: "Q34178",
      value: "Theology",
      label: "Theology",
      description: "study of the nature of deities and religious beliefs",
      url: "https://www.wikidata.org/wiki/Q34178",
      pageId: 34178,
    },
  ],
};

export const generalQuery2 = `PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>

SELECT ?source ?sourceLabel ?property ?propertyLabel ?target ?targetLabel
WHERE {
  VALUES ?source { wd:Q21198 }
  {
    ?source ?property ?target .
    ?property rdfs:label ?propertyLabel .
    FILTER(lang(?propertyLabel) = "en")
  }
  UNION
  {
    ?target ?property ?source .
    ?property rdfs:label ?propertyLabel .
    FILTER(lang(?propertyLabel) = "en")
  }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en" . }
}
LIMIT 1000`;

export const neuroscience = {
  name: "Neuroscience",
  id: "1",
  children: [
    {
      name: "Neuroanatomy",
      id: "2",
      children: [
        { name: "Neurons", id: "3" },
        { name: "Synapses", id: "4" },
        { name: "Glia", id: "5" },
        { name: "Brain regions", id: "6" },
        { name: "Spinal cord", id: "7" },
        { name: "Peripheral nervous system", id: "8" },
        { name: "Neural circuits", id: "9" },
        { name: "Neurotransmitters", id: "10" },
        { name: "Receptors", id: "11" },
        { name: "Neural development", id: "12" },
      ],
    },
    {
      name: "Neurophysiology",
      id: "13",
      children: [
        { name: "Action potentials", id: "14" },
        { name: "Synaptic transmission", id: "15" },
        { name: "Neuroplasticity", id: "16" },
        { name: "Neurotransmitter release", id: "17" },
        { name: "Electrophysiology", id: "18" },
        { name: "Neural oscillations", id: "19" },
        { name: "Sensory processing", id: "20" },
        { name: "Motor control", id: "21" },
        { name: "Homeostasis", id: "22" },
        { name: "Neuromodulation", id: "23" },
      ],
    },
    {
      name: "Cognitive neuroscience",
      id: "24",
      children: [
        { name: "Perception", id: "25" },
        { name: "Attention", id: "26" },
        { name: "Memory", id: "27" },
        { name: "Emotion", id: "28" },
        { name: "Language", id: "29" },
        { name: "Executive functions", id: "30" },
        { name: "Social cognition", id: "31" },
        { name: "Consciousness", id: "32" },
        { name: "Decision-making", id: "33" },
        { name: "Learning", id: "34" },
      ],
    },
    {
      name: "Neuropharmacology",
      id: "35",
      children: [
        { name: "Psychopharmacology", id: "36" },
        { name: "Drug receptors", id: "37" },
        { name: "Drug metabolism", id: "38" },
        { name: "Neurotransmitter systems", id: "39" },
        { name: "Neuropsychiatric medications", id: "40" },
        { name: "Addiction", id: "41" },
        { name: "Neurotoxins", id: "42" },
        { name: "Neuroprotection", id: "43" },
        { name: "Psychoactive substances", id: "44" },
        { name: "Pharmacogenetics", id: "45" },
      ],
    },
    {
      name: "Neuroimaging",
      id: "46",
      children: [
        { name: "MRI", id: "47" },
        { name: "fMRI", id: "48" },
        { name: "PET", id: "49" },
        { name: "SPECT", id: "50" },
        { name: "EEG", id: "51" },
        { name: "MEG", id: "52" },
        { name: "NIRS", id: "53" },
        { name: "Optogenetics", id: "54" },
        { name: "Diffusion imaging", id: "55" },
        { name: "Functional connectivity", id: "56" },
      ],
    },
    {
      name: "Neuropsychology",
      id: "57",
      children: [
        { name: "Brain disorders", id: "58" },
        { name: "Cognitive deficits", id: "59" },
        { name: "Neuropsychological assessment", id: "60" },
        { name: "Rehabilitation", id: "61" },
        { name: "Traumatic brain injury", id: "62" },
        { name: "Neurodevelopmental disorders", id: "63" },
        { name: "Neurodegenerative disorders", id: "64" },
        { name: "Stroke", id: "65" },
        { name: "Epilepsy", id: "66" },
        { name: "Psychiatric disorders", id: "67" },
      ],
    },
    {
      name: "Computational neuroscience",
      id: "68",
      children: [
        { name: "Neural networks", id: "69" },
        { name: "Neural coding", id: "70" },
        { name: "Brain-computer interfaces", id: "71" },
        { name: "Artificial intelligence", id: "72" },
        { name: "Neurorobotics", id: "73" },
        { name: "Neuromorphic engineering", id: "74" },
        { name: "Neural simulation", id: "75" },
        { name: "Connectomics", id: "76" },
        { name: "Information theory", id: "77" },
        { name: "Neurodynamics", id: "78" },
      ],
    },
    {
      name: "Molecular neuroscience",
      id: "79",
      children: [
        { name: "Gene expression", id: "80" },
        { name: "Epigenetics", id: "81" },
        { name: "Protein synthesis", id: "82" },
        { name: "Neurogenetics", id: "83" },
        { name: "Neuropeptides", id: "84" },
        { name: "Neurotrophic factors", id: "85" },
        { name: "Ion channels", id: "86" },
        { name: "Neurotransmitter synthesis", id: "87" },
        { name: "Signal transduction", id: "88" },
        { name: "Neural stem cells", id: "89" },
      ],
    },
    {
      name: "Behavioral neuroscience",
      id: "90",
      children: [
        { name: "Neuroethology", id: "91" },
        { name: "Learning and memory", id: "92" },
        { name: "Motivation", id: "93" },
        { name: "Emotion and stress", id: "94" },
        { name: "Sleep and circadian rhythms", id: "95" },
        { name: "Neuroendocrinology", id: "96" },
        { name: "Sensory systems", id: "97" },
        { name: "Neuropsychopharmacology", id: "98" },
        { name: "Animal models", id: "99" },
        { name: "Social behavior", id: "100" },
      ],
    },
    {
      name: "Clinical neuroscience",
      id: "101",
      children: [
        { name: "Neurology", id: "102" },
        { name: "Psychiatry", id: "103" },
        { name: "Neurosurgery", id: "104" },
        { name: "Neurorehabilitation", id: "105" },
        { name: "Neuro-oncology", id: "106" },
        { name: "Neuro-ophthalmology", id: "107" },
        { name: "Neuropsychiatry", id: "108" },
        { name: "Neurointervention", id: "109" },
        { name: "Neuroimmunology", id: "110" },
        { name: "Neuropathology", id: "111" },
      ],
    },
  ],
};
