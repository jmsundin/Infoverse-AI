export class SPARQLQueryDispatcher {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  handleResponse(response) {
    if (response.status === 200) {
      return response;
    } else if (response.status === 404) {
      // handle not found error
      alert("Not found: " + response.statusText);
      return response;
    } else if (response.status === 500) {
      // handle internal server error
      alert("Internal server error: " + response.statusText);
      return response;
    } else {
      // handle other response codes as needed
    }
  }

  async query(sparqlQuery) {
    const fullUrl = this.endpoint + "?query=" + encodeURIComponent(sparqlQuery);
    const headers = { Accept: "application/sparql-results+json" };

    return fetch(fullUrl, { headers })
      .then(this.handleResponse)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
  }
}
