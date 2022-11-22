import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import NavMenu from "./components/NavMenu";
import QueryForm from "./components/QueryForm";
import Canvas from "./components/Canvas";

const App = () => {
  const [res, setJsonResponse] = useState(null);
  const [chosenChart, setChosenChart] = useState("Graph (Network Diagram)");
  const [chosenTopic, setChosenTopic] = useState("Computer Science");
  const [chosenProperty, setChosenProperty] = useState("Subclass of");

  const onQuerySubmit = (res, chart, chosenTopic, chosenProperty) => {
    setChosenChart(chart);
    setJsonResponse(res);
    setChosenTopic(chosenTopic);
    setChosenProperty(chosenProperty);
  };

  return (
    <div className="App">
      <NavMenu />
      <QueryForm onQuerySubmit={onQuerySubmit} />
      <Canvas items={res} chart={chosenChart} chosenTopic={chosenTopic} chosenProperty={chosenProperty} />
    </div>
  );
};

export default App;
