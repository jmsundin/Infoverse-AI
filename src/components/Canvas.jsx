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
  const chart = props.chart;
  const [data, setData] = useState(props.data);
  const [networkNodes, setNetwortNodes] = useState([]);

  const handleAddNode = useCallback(() => {
    const id = data.nodes.length + 1;
    setData({
      ...data,
      nodes: [...data.nodes, { id, label: `Node ${id}` }],
    });
  }, [setData, data]);

  const getNodes = useCallback((a) => {
    setNetwortNodes(a);
  }, []);

  const handleGetNodes = useCallback(() => {
    console.log(networkNodes);
  }, [networkNodes]);

  const chartHandler = (chart) => {
    switch (chart) {
      case "Graph":
        return (
          <Graph
            data={data}
            options={GraphParams.options}
            events={GraphParams.events}
            style={GraphParams.style}
            // getNetwork={getNetwork}
            getNodes={getNodes}
            // getEdges={getEdges}
          />
        );

      case "Tree Chart":
        return (
          <TreeD3
            data={data}
            chosenTopic={chosenTopic}
          />
        );
      case "Zoomable Treemap":
        return (
          <ZoomableTreemap
            data={data}
          />
        );
      case "Table":
        return (
          <Table
            data={data}
          />
        );
    }
  };

  return <div className="canvas">{chartHandler(chart)}</div>;
};

export default Canvas;
