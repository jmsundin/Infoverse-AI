import React, { Suspense, useState, useEffect, useRef } from "react";
import isEqual from "lodash/isEqual";
import differenceWith from "lodash/differenceWith";
import { DataSet } from "vis-data/peer/esm/vis-data";
import { Network } from "vis-network/peer/esm/vis-network";
import PropTypes from "prop-types";

import "./Graph.css";
import "vis-network/styles/vis-network.css";

function Graph(props) {
  const data = props.data;
  const [graphData, setGraphData] = useState(data);
  const [options, setOptions] = useState(props.options);
  const [style, setStyle] = useState(props.style);
  const [events, setEvents] = useState(props.events);

  const nodes = useRef(new DataSet(data.nodes));
  const edges = useRef(new DataSet(data.edges));
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
    setGraphData(data);
  }, [data]);

  useEffect(() => {
    const propNodesChange = !isEqual(nodes.current, data.nodes);
    const propEdgesChange = !isEqual(edges.current, data.edges);

    const idIsEqual = (n1, n2) => n1.id === n2.id;

    if (propNodesChange) {
      const newNodes = data.nodes;
      const nodesRemoved = differenceWith(
        nodes.current.get(),
        newNodes,
        idIsEqual
      );
      const nodesAdded = differenceWith(
        newNodes,
        nodes.current.get(),
        idIsEqual
      );
      const nodesChanged = differenceWith(
        differenceWith(newNodes, nodes.current.get(), isEqual),
        nodesAdded
      );

      nodes.current.remove(nodesRemoved);
      nodes.current.add(nodesAdded);
      nodes.current.update(nodesChanged);
    }

    if (propEdgesChange) {
      const newEdges = data.edges;
      const edgesRemoved = differenceWith(
        edges.current.get(),
        newEdges,
        isEqual
      );
      const edgesAdded = differenceWith(newEdges, edges.current.get(), isEqual);
      const edgesChanged = differenceWith(
        differenceWith(newEdges, edges.current.get(), isEqual),
        edgesAdded
      );
      edges.current.remove(edgesRemoved);
      edges.current.add(edgesAdded);
      edges.current.update(edgesChanged);
    }
  }, [data]);

  useEffect(() => {
    network.current.setOptions(options);
  }, [options]);

  useEffect(() => {
    for (const eventName of Object.keys(events)) {
      if (eventName === "selectNode") {
        network.current.on(eventName, (params) => {
          const clickedNodeId = params.nodes[0];
          const topic = nodes.current.get(clickedNodeId);
          props.onNodeSelect(topic);
        });
      }
    }
    return () => {
      for (const eventName of Object.keys(events)) {
        network.current.off(eventName, events[eventName]);
      }
    };
  }, [events, graphData]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div ref={container} style={style} />
    </Suspense>
  );
}

Graph.propTypes = {
  data: PropTypes.object,
};

export default Graph;
