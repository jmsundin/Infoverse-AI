import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";

import { SPARQLQueryDispatcher } from "../utils/SPARQLQuery/SPARQLQueryDispatcher";
import queryData from "../utils/SPARQLQuery/queryData";

import "../assets/QueryForm.css";

const QueryForm = (props) => {
  const [chosenChart, setChosenChart] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [chosenProperty, setChosenProperty] = useState("Subclass of");

  // let wikidataSearchURL =
  //   "https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&type=item&language=en&search=" +
  //   inputValue;

  const wikidataItems = queryData.wikidataItems;
  const wikidataProperties = queryData.wikidataProperties;

  let query = `SELECT ?child ?childLabel ?grandChild ?grandChildLabel ?greatGrandChild ?greatGrandChildLabel WHERE {
    ?child wdt:${wikidataProperties[chosenProperty]} wd:${wikidataItems[inputValue]} .
    ?grandChild wdt:${wikidataProperties[chosenProperty]} ?child .
    ?greatGrandChild wdt:${wikidataProperties[chosenProperty]} ?grandChild .
    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en,en"  }  
  }
  LIMIT 1000`;

  function onSubmitHandler(event){
    event.preventDefault();
    if (chosenChart.length !== 0 && inputValue.length !== 0) {
      const queryDispatcher = new SPARQLQueryDispatcher(queryData.endpointUrl);
      queryDispatcher.query(query).then((resource) => {
        props.onQuerySubmit(resource, chosenChart, inputValue, chosenProperty);
      });
    } else {
      // alert("Please select a chart and a topic");
    }
  };

  // send user input on each key stroke (anytime the inputValue changes)
  useEffect(() => {
    fetch(
      `https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&language=en&type=item&limit=10&search=${inputValue}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((searchResults) => {
        console.log("Search Results:", searchResults);
        setSuggestions(
          searchResults.search.map((item) => ({
            label: item.label,
            id: item.id,
          }))
        );
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [inputValue]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  };

  function handleSelect(item){
    setInputValue(item.id);
  };

  const datalistOptions = queryData.topics.map((topic) => {
    return <option key={topic} name={topic} value={topic} />;
  });

  const suggestionOptions = suggestions.map((item) => (
    <option key={item.id} onClick={() => handleSelect(item)}>
      {item.label}
    </option>
  ));

  const chartDropdownMenu = (
    <div className="chart-menu">
      <button className="chart-menu__button">
        {chosenChart.length > 0 ? chosenChart : "Select a Chart"}
      </button>
      <ul className="chart-menu__dropdown">
        {queryData.charts.map((chart) => (
          <li
            key={chart}
            onClick={() => setChosenChart(chart)}
          >
            {chart}
          </li>
        ))}
      </ul>
    </div>
  );

  const search = (
    <div className="topic-search">
      <input
        type="search"
        value={inputValue}
        onChange={handleInputChange}
        list="suggestion-options"
        placeholder="Search"
        className="topic-search__input"
        size="25"
      />
      <datalist id="suggestion-options">
        {suggestions.length === 0 ? datalistOptions : suggestionOptions}
      </datalist>
    </div>
  );

  const exploreButton = (
    <input
      type="submit"
      value="Explore"
      className="explore-button"
      onClick={onSubmitHandler}
    />
  );

  return (
    <form onSubmit={onSubmitHandler} className="query-form">
      {chartDropdownMenu}
      {search}
      {exploreButton}
    </form>
  );
};

export default QueryForm;
