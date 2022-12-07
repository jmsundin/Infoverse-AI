import { useState, useCallback } from "react";
import VisNetworkGraph from "./VisNetworkGraph";
import D3Graph from "./D3Graph";
import D3ReactTree from "./D3ReactTree";
import Table from "./Table";

import VisNetworkParams from "../utils/Helper/VisNetworkParams";

const Canvas = (props) => {
  const data = props.data;
  const [networkNodes, setNetwortNodes] = useState([]);
  const chart = props.chart;
  const chosenTopic = props.chosenTopic;
  const chosenProperty = props.chosenProperty;

  const getNodes = useCallback((a) => {
    setNetwortNodes(a);
  }, []);

  // console.log("Canvas data: ", JSON.stringify(data));

  const chartHandler = (chart) => {
    switch (chart) {
      case "Graph (Vis-Network)":
        return (
          <VisNetworkGraph
            data={data}
            options={VisNetworkParams.options}
            events={VisNetworkParams.events}
            getNodes={getNodes}
          />
        );
      case "Graph (D3 Network)":
        return (
          <D3Graph
            data={data}
            chosenTopic={chosenTopic}
            chosenProperty={chosenProperty}
          />
        );
      case "Tree":
        return (
          <D3ReactTree
            data={data}
            chosenTopic={chosenTopic}
            chosenProperty={chosenProperty}
          />
        );
      case "Table":
        return (
          <Table
            data={data}
            chosenTopic={chosenTopic}
            chosenProperty={chosenProperty}
          />
        );
    }
  };

  return <div className="Canvas">{chartHandler(chart)}</div>;
};

export default Canvas;
