import axios from "axios";


class Network {
    static sparqlEndpoint = "https://query.wikidata.org/sparql";
    static wikidataSearchURL = "https://www.wikidata.org/w/api.php";

    static async query(sparqlQuery) {
        const fullUrl = this.sparqlEndpoint + "?query=" + encodeURIComponent(sparqlQuery);
        const headers = { Accept: "application/sparql-results+json" };

        return fetch(fullUrl, { headers })
          .then(this.handleResponse)
          .then((response) => response.json())
          .catch((error) => {
            console.log(error);
          });
      }

    static async handleResponse(response) {
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

    static async wikidataSearch(inputValue) {
        let wikidataSearchQuery = 
          "?action=wbsearchentities"
          + "&format=json"
          + "&type=item"
          + "&language=en"
          + "&search=" + inputValue
          + "&limit=10"
          + "&origin=*";
        return await axios.get(this.wikidataSearchURL + wikidataSearchQuery);
    }

    static async wikidataGetEntity(entityId) {
        let wikidataGetEntityQuery = 
          "?action=wbgetentities"
          + "&format=json"
          + "&props=labels|descriptions|claims"
          + "&languages=en"
          + "&ids=" + entityId
          + "&origin=*";
        return await axios.get(this.wikidataSearchURL + wikidataGetEntityQuery);
    }

    static async wikidataGetEntityLabels(entityId) {
        let wikidataGetEntityLabelsQuery = 
          "?action=wbgetentities"
          + "&format=json"
          + "&props=labels"
          + "&languages=en"
          + "&ids=" + entityId
          + "&origin=*";
        return await axios.get(this.wikidataSearchURL + wikidataGetEntityLabelsQuery);
    }

    static async wikidataGetEntityDescriptions(entityId) {
        let wikidataGetEntityDescriptionsQuery = 
          "?action=wbgetentities"
          + "&format=json"
          + "&props=descriptions"
          + "&languages=en"
          + "&ids=" + entityId
          + "&origin=*";
        return await axios.get(this.wikidataSearchURL + wikidataGetEntityDescriptionsQuery);
    }

    static async wikidataGetEntityAliases(entityId) {
        let wikidataGetEntityAliasesQuery = 
          "?action=wbgetentities"
          + "&format=json"
          + "&props=aliases"
          + "&languages=en"
          + "&ids=" + entityId
          + "&origin=*";
        return await axios.get(this.wikidataSearchURL + wikidataGetEntityAliasesQuery);
    }

    static async wikidataGetEntityInfo(entityId) {
        let wikidataGetEntityInfoQuery = 
          "?action=wbgetentities"
          + "&format=json"
          + "&props=info"
          + "&ids=" + entityId
          + "&origin=*";
        return await axios.get(this.wikidataSearchURL + wikidataGetEntityInfoQuery);
    }

    static async wikidataGetEntitySitelinks(entityId) {
        let wikidataGetEntitySitelinksQuery = 
          "?action=wbgetentities"
          + "&format=json"
          + "&props=sitelinks"
          + "&ids=" + entityId
          + "&origin=*";
        return await axios.get(this.wikidataSearchURL + wikidataGetEntitySitelinksQuery);
    }

    static async wikidataGetEntityPageInfo(entityId) {
        let wikidataGetEntityPageInfoQuery = 
          "?action=wbgetentities"
          + "&format=json"
          + "&props=pageprops"
          + "&ids=" + entityId
          + "&origin=*";
        return await axios.get(this.wikidataSearchURL + wikidataGetEntityPageInfoQuery);
    }

    static async wikidataGetEntityPageImages(entityId) {
        let wikidataGetEntityPageImagesQuery = 
          "?action=wbgetentities"
          + "&format=json"
          + "&props=pageimages"
          + "&ids=" + entityId
          + "&origin=*";
        return await axios.get(this.wikidataSearchURL + wikidataGetEntityPageImagesQuery);
    }

    static async wikidataGetEntityPageTerms(entityId) {
        let wikidataGetEntityPageTermsQuery = 
          "?action=wbgetentities"
          + "&format=json"
          + "&props=terms"
          + "&ids=" + entityId
          + "&origin=*";
        return await axios.get(this.wikidataSearchURL + wikidataGetEntityPageTermsQuery);
    }

    static async wikidataGetEntityPageURLs(entityId) {
        let wikidataGetEntityPageURLsQuery = 
          "?action=wbgetentities"
          + "&format=json"
          + "&props=urls"
          + "&ids=" + entityId
          + "&origin=*";
        return await axios.get(this.wikidataSearchURL + wikidataGetEntityPageURLsQuery);
    }

    static async wikidataGetEntityPageLabels(entityId) {
        let wikidataGetEntityPageLabelsQuery = 
          "?action=wbgetentities"
          + "&format=json"
          + "&props=labels"
          + "&ids=" + entityId
          + "&origin=*";
        return await axios.get(this.wikidataSearchURL + wikidataGetEntityPageLabelsQuery);
    }

    static async wikidataGetEntityPageAliases(entityId) {
        let wikidataGetEntityPageAliasesQuery = 
          "?action=wbgetentities"
          + "&format=json"
          + "&props=aliases"
          + "&ids=" + entityId
          + "&origin=*";
        return await axios.get(this.wikidataSearchURL + wikidataGetEntityPageAliasesQuery);
    }

    static async wikidataGetEntityPageClaims(entityId) {
        let wikidataGetEntityPageClaimsQuery = 
          "?action=wbgetentities"
          + "&format=json"
          + "&props=claims"
          + "&ids=" + entityId
          + "&origin=*";
        return await axios.get(this.wikidataSearchURL + wikidataGetEntityPageClaimsQuery);
    }

}

export default Network;