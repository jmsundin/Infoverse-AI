import uuid from "react-uuid";
import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import { transformDataForD3 } from "../utils/Helper/transformData";

// d3 force graph
function Graph(props) {
  // TODO: remove duplicates
  // let data = transformDataForD3(props.data, props.chosenTopic);
  let data = props.data;

  // console.log("data: ", JSON.stringify(data, chosenTopic));

  // returns a root object with named nodes and children for each node
  const root = d3.hierarchy(data);
  const nodes = root.descendants();
  const links = root.links();

  const dimensions = {
    width: window.innerWidth * 0.9,
    height: window.innerHeight * 0.9,
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
          .distance(0.1 * width)
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
      .attr("r", 5)
      .call(drag(simulation));

    // TODO: add labels to nodes
    // const text = svg
    //   .append("g")
    //   .attr("fill", "#000")
    //   .attr("font-family", "sans-serif")
    //   .attr("font-size", 10)
    //   .selectAll("text")
    //   .data(nodes)
    //   .join("text")
    //   .attr("x", 8)
    //   .attr("y", "0.31em")
    //   .text((d) => d.data.name);

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

      // TODO: edit zoomed function
      // function zoomed(event) {
      //   svg.attr("transform", event.transform);
      // }

      return d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

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

export default Graph;
