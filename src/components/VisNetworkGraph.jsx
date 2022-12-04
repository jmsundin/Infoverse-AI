import React, { useEffect, useRef } from "react";
import isEqual from "lodash/isEqual";
import differenceWith from "lodash/differenceWith";
import { DataSet } from "vis-data/peer/esm/vis-data";
import { Network } from "vis-network/peer/esm/vis-network";
import PropTypes from "prop-types";

import VisNetworkParams from "../utils/Helper/VisNetworkParams";
import "vis-network/styles/vis-network.css";

import { transformDataForVisNetwork } from "../utils/Helper/transformData";

const visNetworkOptions = VisNetworkParams?.options;
const visNetworkEvents = VisNetworkParams?.events;

const VisNetworkGraph = ({
  data,
  options = visNetworkOptions,
  events = visNetworkEvents,
  style = { width: "1280px", height: "600px" },
  getNetwork,
  getNodes,
  getEdges,
}) => {
  const visNetworkData = transformDataForVisNetwork(data);
//   console.log("visNetworkData: ", JSON.stringify(visNetworkData));

  let nodes = useRef(new DataSet(visNetworkData.nodes));
  let edges = useRef(new DataSet(visNetworkData.edges));
  console.log("nodes: ", JSON.stringify(nodes.current.get()));
  console.log("edges: ", JSON.stringify(edges.current.get()));

  const network = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    network.current = new Network(
      container.current,
      { nodes: nodes.current, edges: edges.current },
      options
    );

    if (getNetwork) {
      getNetwork(network.current);
    }

    if (getNodes) {
      getNodes(nodes.current);
    }

    if (getEdges) {
      getEdges(edges.current);
    }
  }, []);

  useEffect(() => {
    const nodesChange = !isEqual(nodes.current, visNetworkData.nodes);
    const edgesChange = !isEqual(edges.current, visNetworkData.edges);

    if (nodesChange) {
      const idIsEqual = (n1, n2) => n1.id === n2.id;
      const nodesRemoved = differenceWith(
        nodes.current.get(),
        data.nodes,
        idIsEqual
      );
      const nodesAdded = differenceWith(
        data.nodes,
        nodes.current.get(),
        idIsEqual
      );
      const nodesChanged = differenceWith(
        differenceWith(data.nodes, nodes.current.get(), isEqual),
        nodesAdded
      );

      nodes.current.remove(nodesRemoved);
      nodes.current.add(nodesAdded);
      nodes.current.update(nodesChanged);
    }

    if (edgesChange) {
      const edgesRemoved = differenceWith(
        edges.current.get(),
        data.edges,
        isEqual
      );
      const edgesAdded = differenceWith(
        data.edges,
        edges.current.get(),
        isEqual
      );
      const edgesChanged = differenceWith(
        differenceWith(data.edges, edges.current.get(), isEqual),
        edgesAdded
      );
      edges.current.remove(edgesRemoved);
      edges.current.add(edgesAdded);
      edges.current.update(edgesChanged);
    }

    if ((nodesChange || edgesChange) && getNetwork) {
      getNetwork(network.current);
    }

    if (nodesChange && getNodes) {
      getNodes(nodes.current);
    }

    if (edgesChange && getEdges) {
      getEdges(edges.current);
    }
  }, [data]);

  useEffect(() => {
    network.current.setOptions(options);
  }, [options]);

  useEffect(() => {
    // Add user provied events to network
    // eslint-disable-next-line no-restricted-syntax
    for (const eventName of Object.keys(events)) {
      network.current.on(eventName, events[eventName]);
    }

    return () => {
      for (const eventName of Object.keys(events)) {
        network.current.off(eventName, events[eventName]);
      }
    };
  }, [events]);

  return <div ref={container} style={style} />;
};

VisNetworkGraph.propTypes = {
  data: PropTypes.object,
  options: PropTypes.object,
  events: PropTypes.object,
  style: PropTypes.object,
  getNetwork: PropTypes.func,
  getNodes: PropTypes.func,
  getEdges: PropTypes.func,
};

export default VisNetworkGraph;
