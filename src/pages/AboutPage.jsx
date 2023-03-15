import React from "react";

import NavMenu from "../components/NavMenu";
import "../assets/About.css";

const About = () => {
  return (
    <React.Fragment>
      <NavMenu />
      <div className="about-section">
        <div className="card">
          <h2>About Infoverse AI</h2>
          <p>
            &emsp; &emsp; Infoverse AI helps you visualize and explore the
            relations between topics. The data comes from{" "}
            <a href="https://wikidata.org">Wikidata.org</a> and{" "}
            <a href="https://wikipedia.org">Wikipedia.org</a>, sister projects
            of <a href="https://wikimedia.org">Wikimedia.org</a>.
          </p>
        </div>
      </div>
      <div className="how-to-section">
        <div className="card">
          <h2>How to Use Infoverse AI:</h2>
          <p>
            <ol>
              <li>Pick a chart type from the dropdown menu on the left.</li>
              <li>
                You can pick a suggested topic by clicking on the Search bar, or
                you can Search for a Topic.
              </li>
              <li>
                Then, hit the "Explore" button. You can interact with the chart
                displayed in the canvas below the form.
              </li>
            </ol>
          </p>
        </div>
      </div>
      <div className="technologies-section">
        <div className="card">
          <h2>Technologies Used in this Site:</h2>
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
                Network Diagram: <a href="https://visjs.org/">Vis.js</a>
              </li>
              <li>
                Data Driven Documents (D3):{" "}
                <a href="https://d3js.org/">D3.js</a>
              </li>
              <li>
                Data sources:
                <ul>
                  <li>
                    <a href="https://wikimedia.org">Wikimedia.org</a>
                  </li>
                  <li>
                    <a href="https://wikidata.org">Wikidata.org</a>
                  </li>
                  <li>
                    <a href="https://wikipedia.org">Wikipedia.org</a>
                  </li>
                </ul>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
