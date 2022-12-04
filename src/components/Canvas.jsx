import { useState, useCallback } from "react";
import Graph from "./Graph";
import Tree from "./Tree";
import Table from "./Table";
import VisNetworkGraph from "./VisNetworkGraph";
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
          <Graph
            data={data}
            chosenTopic={chosenTopic}
            chosenProperty={chosenProperty}
          />
        );
      case "Tree":
        return (
          <Tree
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
      default:
        return (
          <VisNetworkGraph
            data={data}
            options={VisNetworkParams.options}
            events={VisNetworkParams.events}
            getNodes={getNodes}
          />
        );
    }
  };

  return <div className="Canvas">{chartHandler(chart)}</div>;
};

export default Canvas;
