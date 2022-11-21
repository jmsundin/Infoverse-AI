import { useState, useEffect } from "react";
import ForceGraph from "./ForceGraph";

const GraphView = (props) => {
  const graph = props.graph;

  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (graph) {
      setNodes(graph.nodes);
      setLinks(graph.links);
    }
  }
  , [graph]);

  return (
    <div className="GraphView">
      <ForceGraph nodes={nodes} links={links} />
    </div>
  );
};

export default GraphView;
