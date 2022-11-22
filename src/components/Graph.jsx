import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

// d3 force graph
function Graph(props) {
  const data = props.items; // data is a object
  const chosenTopic = props.chosenTopic;
  const chosenProperty = props.chosenProperty;

  const columns = data != null ? data.head.vars : []; // columns is an array
  const rows = data != null ? data.results.bindings : []; // rows is an array

  // returns a root object with named nodes and children for each node
  const nodesAndChildren = transformData(chosenTopic, columns, rows);
  const root = d3.hierarchy(nodesAndChildren);
  const nodes = root.descendants();
  const links = root.links();

  console.log("nodesAndChildren: ", nodesAndChildren);
  // console.log("root: ", root);
  // console.log("nodes: ", nodes);
  // console.log("links: ", links);

  const dimensions = {
    width: 600,
    height: 300,
    margin: { top: 30, right: 30, bottom: 30, left: 60 },
  };
  const { width, height, margin } = dimensions; // chart dimensions
  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;

  const svgRef = useRef(null); // reference to svg element

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg.attr("viewBox", [-width / 2, -height / 2, svgWidth, svgHeight]);

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(0)
          .strength(1)
      )
      .force("charge", d3.forceManyBody().strength(-50))
      .force("x", d3.forceX())
      .force("y", d3.forceY());

    const link = svg
      .append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line");

    const node = svg
      .append("g")
      .attr("fill", "#fff")
      .attr("stroke", "#000")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("fill", (d) => (d.children ? null : "#000"))
      .attr("stroke", (d) => (d.children ? null : "#fff"))
      .attr("r", 3.5)
      .call(drag(simulation));

    function drag(simulation) {
      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }
      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    node.append("title").text((d) => d.data.name);

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    });
  }, [nodes, links]);

  return <svg ref={svgRef} width={svgWidth} height={svgHeight}></svg>;
}

// transform data into nodes and links
function transformData(chosenTopic, columns, rows) {
  let nodesAndChildren = { name: chosenTopic, children: [] };

  // create nodes
  rows.forEach((row) => {
    // create a node for each column
    columns.forEach((column) => {
      // create a node for each row
      const node = row[column].value;
      // add node to nodesAndChildren
      nodesAndChildren.children.push({ name: node });
    });
  });

  return nodesAndChildren;
}

export default Graph;
