import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import Graph from "./Graph";
import Tree from "./Tree";
import Table from "./Table";

const Canvas = (props) => {
  const items = props.items;
  const chart = props.chart;

  const chartHandler = (chart) => {
    switch (chart) {
      case "Graph (Network Diagram)":
        return <Graph items={items} />;
      case "Tree":
        return <Tree items={items} />;
      case "Table":
        return <Table items={items} />;
      default:
        return <Graph items={items} />;
    }
  };

  return (
    <div className="Canvas">
      {chartHandler(chart)}
    </div>
  );
};

export default Canvas;
