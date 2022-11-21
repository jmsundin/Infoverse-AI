import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import GraphView from "./GraphView";
import ForceGraph from './ForceGraph';

const Graph = (props) => {
  // transform props.items into a graph with nodes and links
  const [graph, setGraph] = useState(null);
  const [graphView, setGraphView] = useState(null);

  useEffect(() => {
    if (props.items) {
      const graph = {
        nodes: [],
        links: [],
      };
      const nodes = new Set();
      const links = new Set();
      props.items.results.bindings.forEach((item) => {
        const node1 = item.item.value;
        const node2 = item.child1.value;
        const node3 = item.child2.value;
        nodes.add(node1);
        nodes.add(node2);
        nodes.add(node3);
        links.add(node1 + node2);
        links.add(node1 + node3);
      });
      nodes.forEach((node) => {
        graph.nodes.push({ id: node });
      });
      links.forEach((link) => {
        graph.links.push({
          source: link.slice(0, link.length / 2),
          target: link.slice(link.length / 2),
        });
      });
      setGraph(graph);
    }
  }, [props.items]);

  useEffect(() => {
    if (graph) {
      setGraphView(<GraphView graph={graph} />);
    }
  }, [graph]);

  return (
    <div className="Graph">
      {graphView}
    </div>
  );
};

export default Graph;
