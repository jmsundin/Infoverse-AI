import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";

import axios from "axios";
import Network from "../utils/Networking/Network";
import { SPARQLQueryDispatcher } from "../utils/Networking/SPARQLQueryDispatcher";
import queryData from "../utils/Networking/queryData";

import "../assets/QueryForm.css";

const QueryForm = (props) => {
  const [searchBoxIsFocused, setSearchBoxIsFocused] = useState(false);
  const [chosenChart, setChosenChart] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [defaultOptionValue, setDefaultOptionValue] = useState("");
  const [searchOptions, setSearchOptions] = useState(null);
  const [chosenProperty, setChosenProperty] = useState("Subclass of");

  const wikidataItems = queryData.wikidataItems;
  const wikidataProperties = queryData.wikidataProperties;

  let query = `SELECT ?child ?childLabel ?grandChild ?grandChildLabel ?greatGrandChild ?greatGrandChildLabel WHERE {
    ?child wdt:${wikidataProperties[chosenProperty]} wd:${wikidataItems[inputValue]} .
    ?grandChild wdt:${wikidataProperties[chosenProperty]} ?child .
    ?greatGrandChild wdt:${wikidataProperties[chosenProperty]} ?grandChild .
    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en,en"  }  
  }
  LIMIT 1000`;

  function handleSearchBoxOnFocus() {
    setSearchBoxIsFocused((prevState) => !prevState);
  }

  function handleSearchBoxOnBlur() {
    setSearchBoxIsFocused((prevState) => !prevState);
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function itemSelectedHandler(event) {
    setInputValue(event.target.textContent);
    setDefaultOptionValue(event.target.textContent);
  }

  const chartDropdownMenu = (
    <div className="chart-menu">
      <button className="chart-menu__button">
        {chosenChart.length > 0 ? chosenChart : "Select a Chart"}
      </button>
      <ul className="chart-menu__dropdown">
        {queryData.charts.map((chart) => (
          <li key={chart} onClick={() => setChosenChart(chart)}>
            {chart}
          </li>
        ))}
      </ul>
    </div>
  );

  const defaultOptionsList = queryData.topics.map((topic) => {
    return (
      <li
        key={wikidataItems[topic]}
        name={topic}
        value={topic}
        onClick={itemSelectedHandler}
      >
        {topic}
      </li>
    );
  });

  const searchOptionsList = searchOptions
    ? searchOptions.map((item) => {
        return (
          <li
            key={item.id}
            name={item.label}
            value={item.label}
            onClick={itemSelectedHandler}
          >
            {item.label}
          </li>
        );
      })
    : null;

  const searchBoxListStyle = searchBoxIsFocused
    ? "search-options__list--active"
    : "search-options__list--inactive";

  const searchBoxList = (
    <ul className={searchBoxListStyle}>
      {defaultOptionsList}
    </ul>
  );

  const searchBox = (
    <div
      className="search-box"
    >
      <input
        type="search"
        value={inputValue || defaultOptionValue}
        onFocus={handleSearchBoxOnFocus}
      // onBlur={handleSearchBoxOnBlur}
        onChange={handleInputChange}
        placeholder="Search"
        className="search__input"
        size="25"
      />
      {searchBoxList}
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

  // send user input on each key stroke (anytime the inputValue changes)
  useEffect(() => {
    const wikidataSearchUrl = "https://www.wikidata.org/w/api.php";
    const wikidataParams =
      "?action=wbsearchentities" +
      "&format=json" +
      "&language=en" +
      "&limit=10" +
      "&search=" +
      inputValue +
      "&origin=*";
    axios.get(wikidataSearchUrl + wikidataParams).then((response) => {
      console.log("response.data.search: ", response.data.search);
      setSearchOptions(response.data.search);
    });
  }, [inputValue]);

  function onSubmitHandler(event) {
    event.preventDefault();
    if (chosenChart.length !== 0 && inputValue.length !== 0) {
      const queryDispatcher = new SPARQLQueryDispatcher(queryData.endpointUrl);
      queryDispatcher.query(query).then((resource) => {
        props.onQuerySubmit(resource, chosenChart, inputValue, chosenProperty);
      });
    } else {
      // alert("Please select a chart and a topic");
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="query-form">
      {chartDropdownMenu}
      {searchBox}
      {exploreButton}
    </form>
  );
};

export default QueryForm;
