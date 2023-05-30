import { useState, useEffect } from "react";
import Graph from "../Charts/Graph/Graph";

import GraphParams from "../../utils/GraphParams";

import "./Canvas.css";

interface CanvasProps {
  data: {
    nodes: any[];
    edges: any[];
  };
  onNodeSelect: (nodeId: string) => void;
}

const Canvas = (props: CanvasProps) => {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <div className="canvas gradient__bg">
      <Graph
        data={props.data}
        onNodeSelect={props.onNodeSelect}
        events={GraphParams.events}
        options={GraphParams.options}
        style={GraphParams.style}
      />
    </div>
  );
};

export default Canvas;
