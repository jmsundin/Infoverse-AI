import { useState, useEffect, useRef } from "react";
import isEqual from "lodash/isEqual";
import differenceWith from "lodash/differenceWith";
// import MyCustomNetwork from "./MyCustomNetwork";
import { Node, Edge, Network } from "vis-network/peer/esm/vis-network";
import { DataSet } from "vis-data/peer/esm/vis-data";

import "vis-network/styles/vis-network.css";
import "./Graph.css";

interface GraphProps {
  data: {
    nodes: Node[];
    edges: Edge[];
  };
  onNodeSelect: (nodeId: string) => void;
  events: object;
  options: object;
  style: object;
}

function Graph(props: GraphProps) {
  const [graphData, setGraphData] = useState(props.data);
  const [options, setOptions] = useState(props.options);
  const [style, setStyle] = useState(props.style);

  const nodes = useRef(new DataSet(props.data.nodes));
  const edges = useRef(new DataSet(props.data.edges));
  const network = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    network.current = new Network(
      container.current,
      { nodes: nodes.current, edges: edges.current },
      options
    );
  }, []);

  useEffect(() => {
    setGraphData(props.data);
  }, [props.data]);

  useEffect(() => {
    network.current.setOptions(props.options);
    setOptions(props.options);
  }, [props.options]);

  useEffect(() => {
    setStyle(props.style);
  }, [props.style]);


  useEffect(() => {
    const idIsEqual = (n1, n2) => n1.id === n2.id;

    if (!isEqual(nodes.current, props.data.nodes)) {
      const newNodes = props.data.nodes;
      const nodesRemoved = differenceWith(nodes.current.get(), newNodes, idIsEqual);
      const nodesAdded = differenceWith(newNodes, nodes.current.get(), idIsEqual);
      const nodesChanged = differenceWith(differenceWith(newNodes, nodes.current.get(), isEqual), nodesAdded);

      nodes.current.remove(nodesRemoved);
      nodes.current.add(nodesAdded);
      nodes.current.update(nodesChanged);
    }

    if (!isEqual(edges.current, props.data.edges)) {
      const newEdges = props.data.edges;
      const edgesRemoved = differenceWith(edges.current.get(), newEdges, isEqual);
      const edgesAdded = differenceWith(newEdges, edges.current.get(), isEqual);
      const edgesChanged = differenceWith(differenceWith(newEdges, edges.current.get(), isEqual), edgesAdded);

      edges.current.remove(edgesRemoved);
      edges.current.add(edgesAdded);
      edges.current.update(edgesChanged);
    }
  }, [props.data]);

  useEffect(() => {
    for (const eventName of Object.keys(props.events)) {
      if (eventName === "selectNode") {
        network.current.on(eventName, params => {
          const clickedNodeId = params.nodes[0];
          const topic = nodes.current.get(clickedNodeId);
          props.onNodeSelect(topic);
        });
      } else if (eventName === "showPopup") {
        network.current.on(eventName, params => {
          // show custom popup
        });
      } else if (eventName === "hoverNode") {
        network.current.on(eventName, params => {
          // show custom popup
        });
      } else {
        network.current.on(eventName, params => {
          console.log(eventName, params);
        });
      }
    }
    return () => {
      for (const eventName of Object.keys(props.events)) {
        network.current.off(eventName, () => { });
      }
    };
  }, [props.events, graphData]);

  return (
    <div ref={container} style={style} />
  );
}

export default Graph;