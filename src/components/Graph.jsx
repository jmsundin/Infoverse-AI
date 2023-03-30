import React, { useState, useEffect, useRef } from "react";
import isEqual from "lodash/isEqual";
import differenceWith from "lodash/differenceWith";
import { DataSet } from "vis-data/peer/esm/vis-data";
import { Network } from "vis-network/peer/esm/vis-network";
import PropTypes from "prop-types";

import wikidata from "../data/queryData";

import "vis-network/styles/vis-network.css";

const defaultOptions = {
  physics: {
    stabilization: false,
  },
  autoResize: false,
  edges: {
    smooth: false,
    color: "#000000",
    width: 0.5,
    arrows: {
      to: {
        enabled: true,
        scaleFactor: 0.5,
      },
    },
  },
};

export default function Graph({
  data,
  options = defaultOptions,
  events = {},
  style = { width: "100%", height: "100%" },
  getNetwork = {},
  getNodes = {},
  getEdges = {},
}) {
  const graphData = data || transformSuggestedTopicsToGraph();

  const nodes = useRef(new DataSet(graphData.nodes));
  const edges = useRef(new DataSet(graphData.edges));
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
    const nodesChange = !isEqual(nodes.current, graphData.nodes);
    const edgesChange = !isEqual(edges.current, graphData.edges);

    if (nodesChange) {
      const idIsEqual = (n1, n2) => n1.id === n2.id;
      const nodesRemoved = differenceWith(
        nodes?.current.get(),
        graphData.nodes,
        idIsEqual
      );
      const nodesAdded = differenceWith(
        graphData.nodes,
        nodes?.current.get(),
        idIsEqual
      );
      const nodesChanged = differenceWith(
        differenceWith(graphData.nodes, nodes?.current.get(), isEqual),
        nodesAdded
      );

      nodes?.current.remove(nodesRemoved);
      nodes?.current.add(nodesAdded);
      nodes?.current.update(nodesChanged);
    }

    if (edgesChange) {
      const edgesRemoved = differenceWith(
        edges.current.get(),
        graphData.edges,
        isEqual
      );
      const edgesAdded = differenceWith(
        graphData.edges,
        edges.current.get(),
        isEqual
      );
      const edgesChanged = differenceWith(
        differenceWith(graphData.edges, edges.current.get(), isEqual),
        edgesAdded
      );
      edges.current.remove(edgesRemoved);
      edges.current.add(edgesAdded);
      edges.current.update(edgesChanged);
    }
  }, [graphData]);

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
}

Graph.propTypes = {
  data: PropTypes.object,
  options: PropTypes.object,
  events: PropTypes.object,
  style: PropTypes.object,
  getNetwork: PropTypes.func,
  getNodes: PropTypes.func,
  getEdges: PropTypes.func,
};

function transformSuggestedTopicsToGraph(){
  const root = {
    id: "0",
    label: "Suggested Topics to Explore",
    value: wikidata.suggestedTopics.length,
    description: "Suggested Topics to Explore",
    pageId: "0",
    url: "https://en.wikipedia.org/wiki/Special:Random",
  };

  let data = wikidata.suggestedTopics;

  let suggestedGraphData = {
    nodes: [],
    edges: [],
  };

  suggestedGraphData.nodes.push(root);

  if (data.length > 0) {
    data.forEach((item) => {
      let newNode = {};
      newNode.id = item.id;
      newNode.value = 1;
      newNode.label = item.label;
      newNode.title = item.label + ": " + item.description;
      newNode.description = item.description;
      newNode.pageId = item.pageId;
      newNode.url = item.url;

      suggestedGraphData.nodes.push(newNode);
    });

    data.forEach((item) => {
      let newEdge = {};
      newEdge.from = root.id;
      newEdge.to = item.id;

      suggestedGraphData.edges.push(newEdge);
    });
  }
  return suggestedGraphData;
};