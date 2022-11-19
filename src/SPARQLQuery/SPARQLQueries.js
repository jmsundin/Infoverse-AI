export const sparqlQueryComputerScience = `SELECT DISTINCT ?item ?itemLabel WHERE {
    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
    {
      SELECT DISTINCT ?item WHERE {
        ?item p:P279 ?statement0.
        ?statement0 (ps:P279/(wdt:P279*)) wd:Q21198.
      }
      LIMIT 100
    }
  }`;

export const sparqlQueryMathematics = `SELECT DISTINCT ?item ?itemLabel WHERE {
    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
    {
        SELECT DISTINCT ?item WHERE {
            ?item p:P279 ?statement0.
            ?statement0 (ps:P279/(wdt:P279*)) wd:Q395.
        }
        LIMIT 100
    }
    }`;

export const sparqlQueryPhysics = `SELECT DISTINCT ?item ?itemLabel WHERE {
    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
    {
        SELECT DISTINCT ?item WHERE {
            ?item p:P279 ?statement0.
            ?statement0 (ps:P279/(wdt:P279*)) wd:Q413.
        }
        LIMIT 100
    }
    }`;

export const sparqlQueryChemistry = `SELECT DISTINCT ?item ?itemLabel WHERE {
    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
    {
        SELECT DISTINCT ?item WHERE {
            ?item p:P279 ?statement0.
            ?statement0 (ps:P279/(wdt:P279*)) wd:Q2329.
        }
        LIMIT 100
    }
    }`;
