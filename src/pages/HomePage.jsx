import React, { useState, useCallback } from "react";
import NavMenu from "../components/NavMenu";
import QueryForm from "../components/QueryForm";
import Canvas from "../components/Canvas";

import "../assets/HomePage.css";

const Home = () => {
  const [data, setData] = useState(null);
  const [chosenChart, setChosenChart] = useState("Graph (Vis-Network)");
  const [chosenTopic, setChosenTopic] = useState("Computer Science");
  const [chosenProperty, setChosenProperty] = useState("Subclass of");

  const onQuerySubmit = useCallback(
    (resource, chart, chosenTopic, chosenProperty) => {
      setData(resource);
      setChosenChart(chart);
      setChosenTopic(chosenTopic);
      setChosenProperty(chosenProperty);
    },
    [setData, setChosenChart, setChosenTopic, setChosenProperty]
  );

  return (
    <React.Fragment>
      <NavMenu />
      <QueryForm onQuerySubmit={onQuerySubmit} />
      <Canvas
        data={data}
        chart={chosenChart}
        chosenTopic={chosenTopic}
        chosenProperty={chosenProperty}
      />
    </React.Fragment>
  );
};

export default Home;
