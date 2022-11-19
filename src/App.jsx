import { useState } from "react";
import NavMenu from "./components/NavMenu";
import QueryForm from "./components/QueryForm";
import Canvas from "./components/Canvas";

const App = () => {
  const [json_response, setJsonResponse] = useState(null);
  const [chosenTopic, setChosenTopic] = useState("Computer Science");

  const onQuerySubmit = (json) => {
    setJsonResponse(json);
  };

  return (
    <div className="App">
      <NavMenu />
      <QueryForm onQuerySubmit={onQuerySubmit} />
      <Canvas items={json_response} />
    </div>
  );
};

export default App;
