import { useState, useRef } from "react";
import { SPARQLQueryDispatcher } from "../utils/SPARQLQuery/SPARQLQueryDispatcher";
import queryData from "../utils/SPARQLQuery/queryData";

import "../assets/Dropdown.css";

const QueryForm = (props) => {
  const [chosenChart, setChosenChart] = useState("Graph (Vis-Network)");
  const [chosenTopic, setChosenTopic] = useState("Computer Science");
  const [chosenProperty, setChosenProperty] = useState("Subclass of");

  const wikidataItems = queryData.wikidataItems;
  const wikidataProperties = queryData.wikidataProperties;

  let query = `SELECT ?child ?childLabel ?grandChild ?grandChildLabel ?greatGrandChild ?greatGrandChildLabel WHERE {
    ?child wdt:${wikidataProperties[chosenProperty]} wd:${wikidataItems[chosenTopic]} .
    ?grandChild wdt:${wikidataProperties[chosenProperty]} ?child .
    ?greatGrandChild wdt:${wikidataProperties[chosenProperty]} ?grandChild .
    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en,en"  }  
  }
  LIMIT 50`;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const queryDispatcher = new SPARQLQueryDispatcher(queryData.endpointUrl);
    queryDispatcher.query(query).then((resource) => {
      props.onQuerySubmit(resource, chosenChart, chosenTopic, chosenProperty);
    });
  };

  const onClickTestHandler = (event) => {
    props.onQuerySubmit(chosenChart, chosenTopic, chosenProperty);
  };

  const chartDropdownMenu = (
    <>
      <label>Pick a Chart Type</label>
      <br></br>
      <div className="dropdown">
        <button className="dropdownbtn" type="text">
          {chosenChart}
        </button>
        <div className="dropdown-content">
          {queryData.charts.map((chart) => (
            <button
              key={chart}
              name={chart}
              onClick={(event) => setChosenChart(event.target.name)}
            >
              {chart}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  const topicDropdownMenu = (
    <>
      <label htmlFor="dropdown-div">Select a Topic to Explore</label>
      <br></br>
      <div id="drowdown-div" className="dropdown">
        <button className="dropdownbtn" type="text">
          {chosenTopic}
        </button>
        <div className="dropdown-content">
          {queryData.topics.map((topic) => (
            <button
              key={topic}
              name={topic}
              onClick={(event) => setChosenTopic(event.target.name)}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  const propertyDropdownMenu = (
    <>
      <label htmlFor="dropdown-div">Select a Property</label>
      <br></br>
      <div id="drowdown-div" className="dropdown">
        <button className="dropdownbtn" type="text">
          {chosenProperty}
        </button>
        <div className="dropdown-content">
          {queryData.properties.map((property) => (
            <button
              key={property}
              name={property}
              onClick={(event) => setChosenProperty(event.target.name)}
            >
              {property}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  const exploreButton = (
    <button className="dropdownbtn" onClick={onSubmitHandler}>
      Explore
    </button>
  );

  const testButton = (
    <button className="dropdownbtn" onClick={onClickTestHandler}>
      Test
    </button>
  );

  return (
    <table>
      <tbody>
        <tr>
          <td>{chartDropdownMenu}</td>
          <td>{topicDropdownMenu}</td>
          <td>{propertyDropdownMenu}</td>
          <td>
            <br></br>
            {exploreButton}
          </td>
          <td>
            <br></br>
            {testButton}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default QueryForm;
