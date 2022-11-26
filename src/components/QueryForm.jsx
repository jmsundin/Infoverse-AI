import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { SPARQLQueryDispatcher } from "../SPARQLQuery/SPARQLQueryDispatcher";
import "./Dropdown.css";

import queryData from "../SPARQLQuery/queryData";

const QueryForm = (props) => {
  const [chosenChart, setChosenChart] = useState("Graph (Network Diagram)");
  const [chosenTopic, setChosenTopic] = useState("Computer Science");
  const [chosenProperty, setChosenProperty] = useState("Subclass of");

  const wikidataItems = queryData.wikidataItems;
  const wikidataProperties = queryData.wikidataProperties;

  let query = `SELECT ?item ?itemLabel ?child1 ?child1Label ?child2 ?child2Label WHERE {
    ?item wdt:${wikidataProperties[chosenProperty]} wd:${wikidataItems[chosenTopic]} .
    ?child1 wdt:${wikidataProperties[chosenProperty]} ?item .
    ?child2 wdt:${wikidataProperties[chosenProperty]} ?child1 .
    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en,en"  }  
  }
  LIMIT 100`;

  // const onChangeHandler = (event) => {
  //   event.preventDefault();
  //   const queryDispatcher = new SPARQLQueryDispatcher(queryData.endpointUrl);
  //   queryDispatcher.query(query).then((res) => {
  //     props.onQuerySubmit(res, chosenChart, chosenTopic, chosenProperty);
  //   });
  // };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const queryDispatcher = new SPARQLQueryDispatcher(queryData.endpointUrl);
    queryDispatcher.query(query).then((res) => {
      props.onQuerySubmit(res, chosenChart, chosenTopic, chosenProperty);
    });
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
              onClick={(event) => {
                setChosenChart(event.target.name);
                // onChangeHandler(event);
              }}
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
              onClick={(event) => {
                setChosenTopic(event.target.name);
                // onChangeHandler(event);
              }}
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
              onClick={(event) => {
                setChosenProperty(event.target.name);
                // onChangeHandler(event);
              }}
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
        </tr>
      </tbody>
    </table>
  );
};

export default QueryForm;
