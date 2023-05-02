import React, { useState, useEffect, useCallback } from "react";
import NavBar from "../components/NavBar/NavBar";
import Canvas from "../components/Canvas/Canvas";

import {
  transformSuggestedTopicsToGraph,
  objectToGraphData,
} from "../utils/transformData";
import { wikidata } from "../data/queryData";

import "./Home.css";

const Home = () => {
  const suggestedTopicsRoot = {
    id: "0",
    label: "Suggested Topics",
    value: wikidata.suggestedTopics.length,
    description: "Suggested Topics to Explore",
    pageId: "0",
    url: "https://www.wikidata.org/wiki/Q0",
  };
  const data = transformSuggestedTopicsToGraph(
    suggestedTopicsRoot,
    wikidata.suggestedTopics
  );
  const [graphData, setGraphData] = useState(data);
  const [page, setPage] = useState("Home");

  const onQuerySubmit = (data) => {
    setGraphData(data);
  };

  const onNodeSelect = (topic) => {
    const endpoint = "https://query.wikidata.org/sparql";
    const query = wikidata.propertyQueries.subClassOf.replaceAll(
      "Q21198",
      topic.id
    );

    async function sparqlQuery(endpoint, query) {
      const fullUrl = endpoint + "?query=" + encodeURIComponent(query);
      const headers = {
        Accept: "application/sparql-results+json",
      };

      fetch(fullUrl, { headers })
        .then((response) => response.json())
        .then((data) => {
          const selectedChildNode = {
            id: topic.id,
            label: topic.label,
            description: topic.description,
            title: topic.title,
            pageId: topic.pageId,
            url: topic.url,
            value: data.results.bindings.length,
          };
          let subGraph = null;
          if (data.results.bindings.length > 0) {
            subGraph = objectToGraphData(
              selectedChildNode,
              data.results.bindings
            );
          } else {
            subGraph = {
              nodes: [
                selectedChildNode,
                { id: "no-subtopics-found", label: "No Sub-Topics Found" },
              ],
              edges: [{ from: selectedChildNode.id, to: "no-subtopics-found" }],
            };
          }
          setGraphData((prevGraphData) => {
            const updatedNodes = prevGraphData.nodes
              .filter((prevGraphNode) => {
                return !subGraph.nodes.find(
                  (subGraphNode) => subGraphNode.id === prevGraphNode.id
                );
              })
              .concat(subGraph.nodes);

            const updatedEdges = prevGraphData.edges
              .filter((prevGraphEdge) => {
                return !subGraph.edges.find(
                  (subGraphEdge) =>
                    subGraphEdge.from === prevGraphEdge.from &&
                    subGraphEdge.to === prevGraphEdge.to
                );
              })
              .concat(subGraph.edges);

            return { nodes: updatedNodes, edges: updatedEdges };
          });
        });
    }

    sparqlQuery(endpoint, query);
  };

  return (
    <React.Fragment>
      <NavBar page={page} onQuerySubmit={onQuerySubmit} />
      <Canvas data={graphData} onNodeSelect={onNodeSelect} />
    </React.Fragment>
  );
};

export default Home;
