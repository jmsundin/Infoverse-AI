import { useState, Fragment } from "react";
import NavBar from "../components/NavBar/NavBar";
import Canvas from "../components/Canvas/Canvas";

import {
  transformSuggestedTopicsToGraph,
  objectToGraphData,
} from "../utils/transformToGraph";
import { wikidata } from "../data/queryData";

const suggestedTopicsRoot = {
  id: "0",
  label: "Suggested Topics",
  value: wikidata.suggestedTopics.length,
  description: "Suggested Topics to Explore",
  pageId: "0",
  url: "https://www.wikidata.org/wiki/Q0",
};

import "./Home.css";

const Home = () => {
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
    if (topic.id !== "0" && topic.id !== "no-subtopics-found") {
      const endpoint = "https://query.wikidata.org/sparql";
      const query = wikidata.generalQuery.replaceAll("Q21198", topic.id);
      sparqlQuery(endpoint, query);
    }

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
            uri: topic.uri,
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
  };

  return (
    <Fragment>
      <NavBar page={page} onQuerySubmit={onQuerySubmit} />
      <Canvas data={graphData} onNodeSelect={onNodeSelect} />
    </Fragment>
  );
};

export default Home;
