import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import NavMenu from "./components/NavMenu";
import QueryForm from "./components/QueryForm";
import Canvas from "./components/Canvas";

const App = () => {
  const [json_response, setJsonResponse] = useState(null);
  const [chosenChart, setChosenChart] = useState("Graph (Network Diagram)");
  const onQuerySubmit = (json, chart) => {
    setChosenChart(chart);
    setJsonResponse(json);
  };

  return (
    <div className="App">
      <NavMenu />
      <QueryForm onQuerySubmit={onQuerySubmit} />
      <Canvas items={json_response} chart={chosenChart} />
    </div>
  );
};

export default App;
