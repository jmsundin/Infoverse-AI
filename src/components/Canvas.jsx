import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import Graph from "./Graph";
import Tree from "./Tree";
import Table from "./Table";

const Canvas = (props) => {
  const items = props.items;
  const chart = props.chart;
  const chosenTopic = props.chosenTopic;
  const chosenProperty = props.chosenProperty;

  const chartHandler = (chart) => {
    switch (chart) {
      case "Graph (Network Diagram)":
        return <Graph items={items} chosenTopic={chosenTopic} chosenProperty={chosenProperty} />;
      case "Tree":
        return <Tree items={items} chosenTopic={chosenTopic} chosenProperty={chosenProperty} />;
      case "Table":
        return <Table items={items} chosenTopic={chosenTopic} chosenProperty={chosenProperty} />;
      default:
        return <Table items={items} chosenTopic={chosenTopic} chosenProperty={chosenProperty} />;
    }
  };

  return (
    <div className="Canvas">
      {chartHandler(chart)}
    </div>
  );
};

export default Canvas;
