import React, { useState } from "react";

import NavBar from "../components/NavBar/NavBar";
import "./About.css";

const About = () => {
  const [page, setPage] = useState("About");

  return (
    <React.Fragment>
      <NavBar page={page} />
      <div className="gradient__bg about-section">
        <div className="header__content card">
          <h2 className="gradient__text">About Infoverse AI</h2>
          <p>
            &emsp; &emsp; Infoverse AI helps you visualize and explore the
            relations between topics. The data comes from{" "}
            <a href="https://wikidata.org">Wikidata.org</a> and{" "}
            <a href="https://wikipedia.org">Wikipedia.org</a>, sister projects
            of <a href="https://wikimedia.org">Wikimedia.org</a>.
          </p>
        </div>
      </div>
      <div className="gradient__bg how-to-section">
        <div className="header__content card">
          <h2 className="gradient__text">How to Use Infoverse AI:</h2>
          <p>
            <ol>
              <li>
                You can pick a suggested topic by clicking on the Search bar, or
                you can Search for a Topic.
              </li>
              <li>
                Topics in the visualization can be clicked to see their
                relations.
              </li>
            </ol>
          </p>
        </div>
      </div>
      <div className="gradient__bg technologies-section">
        <div className="header__content card">
          <h2 className="gradient__text">Technologies Used in this Site:</h2>
          <p>
            <ul>
              <li>
                Frontend JavaScript Library:{" "}
                <a href="https://reactjs.org/">React</a>
              </li>
              <li>
                Wikidata SPARQL Endpoint:{" "}
                <a href="https://query.wikidata.org/">SPARQL</a>
              </li>
              <li>
                Network Diagram: <a href="https://visjs.github.io/vis-network/docs/network/">Vis.js's Vis-Network</a>
              </li>
              <li>
                Data Driven Documents (D3):{" "}
                <a href="https://d3js.org/">D3.js</a>
              </li>
              <li>
                Data sources: <a href="https://wikimedia.org">Wikimedia.org</a>,{" "}
                <a href="https://wikidata.org">Wikidata.org</a>, and{" "}
                <a href="https://wikipedia.org">Wikipedia.org</a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
