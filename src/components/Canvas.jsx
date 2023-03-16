import { useState, useCallback } from "react";
import Graph from "./Graph";
import GraphD3 from "./GraphD3";
import TreeD3 from "./TreeD3";
import ZoomableTreemap from "./ZoomableTreemap";
import SunburstD3 from "./SunburstD3";
import Table from "./Table";
import GraphParams from "../data/GraphParams";

import "../assets/Canvas.css";

const Canvas = (props) => {
  const data = props.data;
  const [graphNodes, setGraphNodes] = useState([]);
  const chart = props.chart;
  const chosenTopic = props.chosenTopic;
  const chosenProperty = props.chosenProperty;

  const getGraphNodes = useCallback((a) => {
    setGraphNodes(a);
  }, []);

  // console.log("Canvas data: ", JSON.stringify(data));

  const chartHandler = (chart) => {
    switch (chart) {
      case "Network Diagram":
        return (
          <Graph
            data={data}
            options={GraphParams.options}
            events={GraphParams.events}
            getNodes={getGraphNodes}
            width="100%"
            height="100%"
          />
        );

      case "Tree Chart":
        return (
          <TreeD3
            data={data}
            chosenTopic={chosenTopic}
            chosenProperty={chosenProperty}
            width="100%"
            height="100%"
          />
        );
      case "Zoomable Treemap":
        return (
          <ZoomableTreemap
            data={data}
            chosenTopic={chosenTopic}
            chosenProperty={chosenProperty}
            width="100%"
            height="100%"
          />
        );
      case "Table":
        return (
          <Table
            data={data}
            chosenTopic={chosenTopic}
            chosenProperty={chosenProperty}
            width="100%"
            height="100%"
          />
        );
    }
  };

  return <div className="canvas">{chartHandler(chart)}</div>;
};

export default Canvas;
