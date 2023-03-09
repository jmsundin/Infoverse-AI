import React from "react";

import NavMenu from "../components/NavMenu";
import "../assets/About.css";

const About = () => {
  return (
    <React.Fragment>
      <NavMenu />
      <section className="about-section">
        <h1>About</h1>
        <p>
          Infoverse.ai is a tool for visualizing the relationships between
          concepts in the world. The tool is based on the Wikidata knowledge
          graph, which contains the information about people, places, things,
          and ideas. The tool allows you to explore the relationships between
          concepts in the world, and to visualize them in a variety of ways.
        </p>
      </section>
      <section className="how-to-section">
        <h2>How to use the tool</h2>
        <p>
          <ul>
            <li>Pick a chart type from the dropdown menu on the left.</li>
            <li>Pick a topic from the dropdown menu on the right.</li>
            <li>Then, hit the "Explore" button. You can interact with the chart displayed in the canvas below the form.</li>
          </ul>
        </p>
      </section>
      <section className="technologies-section">
        <h2>Technologies used in this project</h2>
        <p>
          <ul>
            <li>
              <a href="https://reactjs.org/">React</a>
            </li>
            <li>
              <a href="https://query.wikidata.org/">Wikidata SPARQL endpoint</a>
            </li>
            <li>
              <a href="https://visjs.org/">Vis.js</a>
            </li>
            <li>
              <a href="https://d3js.org/">D3.js</a>
            </li>
          </ul>
        </p>
      </section>
    </React.Fragment>
  );
};

export default About;
