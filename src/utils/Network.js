import { fullAncestor } from "acorn-walk";
import axios from "axios";

class Network {
  static wikipediaEndpoint = "https://en.wikipedia.org/w/api.php";
  static wikidataSearchEndpoint = "https://www.wikidata.org/w/api.php";
  static wikidataSparqlEndpoint = "https://query.wikidata.org/sparql";

  static async fetchData(url) {
    let data = null;

    try {
      const response = await axios.get(url);
      data = response.data;
    } catch (error) {
      console.log(error);
    }

    return data.search;
  }

  static async sparqlQuery(sparqlQuery) {
    const url = this.wikidataSparqlEndpoint;

    const response = await axios.get(url, {
      params: {
        query: sparqlQuery,
        format: "json",
      },
      headers: {
        Accept: "application/sparql-results+json",
      },
    });
    return response.data;
  }

  // TODO: in ord
  static async getWikidataPageForwardLinks(pageId) {
    const params =
      "?action=parse" +
      "&page=" +
      pageTitle +
      "format=json" +
      "&langualges=en" +
      "&origin=*";

    const response = await axios.get(this.wikipediaEndpoint + params);
    const links = response.data.parse.links;
    const urls = links.map((link) => link.url);
  }

  static async getWikidataPageBacklinks(pageId) {
    const wikidataPageBacklinksQuery =
      "?action=query" +
      "&blpageid=" +
      pageId +
      "&list=backlinks" +
      "&format=json" +
      "&bllimit=10" +
      "&blnamespace=0" +
      "&origin=*";

    const response = await axios.get(
      this.wikidataSearchEndpoint + wikidataPageBacklinksQuery
    );

    return response.data.query.backlinks;
  }

  static async wikidataGetEntity(entityId) {
    let wikidataGetEntityQuery =
      "?action=wbgetentities" +
      "&format=json" +
      "&props=labels|descriptions|claims" +
      "&languages=en" +
      "&ids=" +
      entityId +
      "&origin=*";
    return await axios.get(this.wikidataSearchURL + wikidataGetEntityQuery);
  }

  static async wikidataGetEntityLabels(entityId) {
    let wikidataGetEntityLabelsQuery =
      "?action=wbgetentities" +
      "&format=json" +
      "&props=labels" +
      "&languages=en" +
      "&ids=" +
      entityId +
      "&origin=*";
    return await axios.get(
      this.wikidataSearchURL + wikidataGetEntityLabelsQuery
    );
  }

  static async wikidataGetEntityDescriptions(entityId) {
    let wikidataGetEntityDescriptionsQuery =
      "?action=wbgetentities" +
      "&format=json" +
      "&props=descriptions" +
      "&languages=en" +
      "&ids=" +
      entityId +
      "&origin=*";
    return await axios.get(
      this.wikidataSearchURL + wikidataGetEntityDescriptionsQuery
    );
  }

  static async wikidataGetEntityAliases(entityId) {
    let wikidataGetEntityAliasesQuery =
      "?action=wbgetentities" +
      "&format=json" +
      "&props=aliases" +
      "&languages=en" +
      "&ids=" +
      entityId +
      "&origin=*";
    return await axios.get(
      this.wikidataSearchURL + wikidataGetEntityAliasesQuery
    );
  }

  static async wikidataGetEntityInfo(entityId) {
    let wikidataGetEntityInfoQuery =
      "?action=wbgetentities" +
      "&format=json" +
      "&props=info" +
      "&ids=" +
      entityId +
      "&origin=*";
    return await axios.get(this.wikidataSearchURL + wikidataGetEntityInfoQuery);
  }

  static async wikidataGetEntitySitelinks(entityId) {
    let wikidataGetEntitySitelinksQuery =
      "?action=wbgetentities" +
      "&format=json" +
      "&props=sitelinks" +
      "&ids=" +
      entityId +
      "&origin=*";
    return await axios.get(
      this.wikidataSearchURL + wikidataGetEntitySitelinksQuery
    );
  }

  static async wikidataGetEntityPageInfo(entityId) {
    let wikidataGetEntityPageInfoQuery =
      "?action=wbgetentities" +
      "&format=json" +
      "&props=pageprops" +
      "&ids=" +
      entityId +
      "&origin=*";
    return await axios.get(
      this.wikidataSearchURL + wikidataGetEntityPageInfoQuery
    );
  }

  static async wikidataGetEntityPageImages(entityId) {
    let wikidataGetEntityPageImagesQuery =
      "?action=wbgetentities" +
      "&format=json" +
      "&props=pageimages" +
      "&ids=" +
      entityId +
      "&origin=*";
    return await axios.get(
      this.wikidataSearchURL + wikidataGetEntityPageImagesQuery
    );
  }

  static async wikidataGetEntityPageTerms(entityId) {
    let wikidataGetEntityPageTermsQuery =
      "?action=wbgetentities" +
      "&format=json" +
      "&props=terms" +
      "&ids=" +
      entityId +
      "&origin=*";
    return await axios.get(
      this.wikidataSearchURL + wikidataGetEntityPageTermsQuery
    );
  }

  static async wikidataGetEntityPageURLs(entityId) {
    let wikidataGetEntityPageURLsQuery =
      "?action=wbgetentities" +
      "&format=json" +
      "&props=urls" +
      "&ids=" +
      entityId +
      "&origin=*";
    return await axios.get(
      this.wikidataSearchURL + wikidataGetEntityPageURLsQuery
    );
  }

  static async wikidataGetEntityPageLabels(entityId) {
    let wikidataGetEntityPageLabelsQuery =
      "?action=wbgetentities" +
      "&format=json" +
      "&props=labels" +
      "&ids=" +
      entityId +
      "&origin=*";
    return await axios.get(
      this.wikidataSearchURL + wikidataGetEntityPageLabelsQuery
    );
  }

  static async wikidataGetEntityPageAliases(entityId) {
    let wikidataGetEntityPageAliasesQuery =
      "?action=wbgetentities" +
      "&format=json" +
      "&props=aliases" +
      "&ids=" +
      entityId +
      "&origin=*";
    return await axios.get(
      this.wikidataSearchURL + wikidataGetEntityPageAliasesQuery
    );
  }

  static async wikidataGetEntityPageClaims(entityId) {
    let wikidataGetEntityPageClaimsQuery =
      "?action=wbgetentities" +
      "&format=json" +
      "&props=claims" +
      "&ids=" +
      entityId +
      "&origin=*";
    return await axios.get(
      this.wikidataSearchURL + wikidataGetEntityPageClaimsQuery
    );
  }
}

export default Network;
