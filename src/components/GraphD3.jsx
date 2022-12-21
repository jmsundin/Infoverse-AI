import uuid from "react-uuid";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { transformDataForD3Graph } from "../utils/Helper/transformData";
import miserablesDummyData from "../data/miserables-d3-force-directed-graph";

// d3 force graph
const GraphD3 = (props) => {
  // TODO: need to transform the data into nodes and links
  // const data = transformDataForD3Graph(props.data, props.chosenTopic);
  const data = miserablesDummyData;

  const svgRef = useRef(null); // reference to svg element
  // returns a root object with named nodes and children for each node
  let root = d3.hierarchy(data);
  let nodes = root.descendants();
  let links = root.links();

  const dimensions = {
    width: props.width * 0.95,
    height: props.height * 0.95,
    margin: { top: 10, right: 10, bottom: 10, left: 10 },
  };
  const { width, height, margin } = dimensions; // chart dimensions
  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // svg.attr("viewBox", [-width / 2, -height / 2, svgWidth, svgHeight]);

    // Use D3 to create a force graph layout based on the data
    const simulation = d3
      .forceSimulation(nodes)
      .force("link", d3.forceLink(links))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = d3
      .select(svgRef.current)
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke-width", (d) => Math.sqrt(d.value));

    const node = d3
      .select(svgRef.current)
      .append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", 5)
      .attr("fill", "steelblue")
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    // Add tick event listener to the simulation to update the node and link positions
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    });

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }, [nodes, links, width, height]);

  return <svg ref={svgRef} width={svgWidth} height={svgHeight}></svg>;
};

export default GraphD3;
