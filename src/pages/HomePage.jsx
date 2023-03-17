import React, { useState, useEffect, useCallback } from "react";
import NavMenu from "../components/NavMenu";
import QueryForm from "../components/QueryForm";
import Canvas from "../components/Canvas";

import "../assets/HomePage.css";

import { transformDefaultSuggestions } from "../utils/transformData";
import { objectToGraphData } from "../utils/transformData";
import wikidata from "../data/queryData";

const Home = () => {
  const root = {id: "0", label: "Suggested Topics to Explore", value: "Suggested Topics to Explore", description: "Suggested Topics to Explore", pageId: "0", url: "https://en.wikipedia.org/wiki/Special:Random" };

  const graphData = transformDefaultSuggestions(root, wikidata.suggestedTopics);
  console.log("graphData: ", graphData);

  const [data, setData] = useState(graphData);
  const [chosenChart, setChosenChart] = useState("Graph");
  const [chosenTopic, setChosenTopic] = useState("Suggested Topics to Explore");

  const onQuerySubmit = useCallback(
    (resource, chart, chosenTopic, chosenProperty) => {
      setData(resource);
      setChosenChart(chart);
      setChosenTopic(chosenTopic);
    },
    [setData, setChosenChart, setChosenTopic]
  );

  return (
    <React.Fragment>
      <NavMenu />
      <QueryForm onQuerySubmit={onQuerySubmit} />
      <Canvas
        data={data}
        chart={chosenChart}
        chosenTopic={chosenTopic}
      />
    </React.Fragment>
  );
};

export default Home;
