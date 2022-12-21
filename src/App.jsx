import React, { useState, useCallback } from "react";
import NavMenu from "./components/NavMenu";
import QueryForm from "./components/QueryForm";
import Canvas from "./components/Canvas";
import "./assets/App.css";

const App = () => {
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
    <div className="App">
      <NavMenu />
      <QueryForm onQuerySubmit={onQuerySubmit} />
      <Canvas
        data={data}
        chart={chosenChart}
        chosenTopic={chosenTopic}
        chosenProperty={chosenProperty}
      />
    </div>
  );
};

export default App;
