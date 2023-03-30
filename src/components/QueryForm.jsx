import React, { useState, useEffect } from "react";
import axios from "axios";
import wikidata from "../data/queryData";
import { objectToGraphData } from "../utils/transformData";
import DatalistInput from "react-datalist-input";

import "../assets/QueryForm.css";

const QueryForm = (props) => {
  const [searchOptions, setSearchOptions] = useState(wikidata.suggestedTopics);
  const [searchOptionItems, setSearchOptionItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedTopic, setSelectedTopic] = useState({
    id: null,
    value: null,
    label: null,
  });

  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    props.onQuerySubmit(graphData);
  }, [graphData]);

  useEffect(() => {
    const items = searchOptions.map((topic) => {
      return {
        id: topic.id,
        value: topic.value || topic.label,
        node: (
          <>
            <b>{topic.value || topic.label}</b>
            <br />
            <span>{topic.description}</span>
          </>
        ),
      };
    });
    setSearchOptionItems(items);
  }, [searchOptions]);

  const searchBoxAndDropdownList = (
    <DatalistInput
      label={false}
      placeholder="Search for a topic to explore"
      value={inputValue}
      items={searchOptionItems}
      onSelect={handleSelectedTopic}
      onChange={handleInputChange}
    />
  );

  function handleInputChange(event) {
    setInputValue(event.target.value);
    handleSearchInput(event.target.value);
  }

  function handleSelectedTopic(topic) {
    const item = {
      id: topic.id,
      value: topic.value || topic.label,
      label: topic.value || topic.label,
    };
    setSelectedTopic(item);
    setInputValue(item.value);

    // TODO: once selected, send sparql query to get related topics
  }

  // live search for topics based on typed user input
  function handleSearchInput(inputValue) {
    if (inputValue !== null && inputValue !== undefined && inputValue !== "") {
      (async function fetchData() {
        const wikidataSearchEndpoint = "https://www.wikidata.org/w/api.php";
        const params =
          "?action=wbsearchentities" +
          "&format=json" +
          "&language=en" +
          "&limit=10" +
          "&origin=*" +
          "&search=" +
          inputValue;
        // const items = await NetworkClient.get(wikidataSearchEndpoint, params);
        if (wikidataSearchEndpoint == "https://www.wikidata.org/w/api.php") {
          try {
            const fullUrl = wikidataSearchEndpoint + params;
            const response = await axios.get(fullUrl);
            data = response.data;
            setSearchOptions(data.search);
          } catch (error) {
            console.log(error);
          }
        }
      })();
    }
  }

  const exploreButton = (
    <input type="submit" value="Explore" className="explore-button" />
  );

  function handleData(data) {
    const root = {
      id: selectedTopic?.id,
      label: selectedTopic?.label,
      value: data?.results?.bindings?.length,
      description: selectedTopic?.description,
      url: selectedTopic?.url,
    };

    const graph = objectToGraphData(root, data?.results?.bindings);
    setGraphData(graph);
    props.onQuerySubmit(graph);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    if (selectedTopic.id === null || selectedTopic.id === undefined) {
      alert("Please select a topic to explore");
      return;
    }

    (async function sparqlQuery() {
      const endpoint = "https://query.wikidata.org/sparql";
      const sparqlQuery = wikidata.propertyQueries.subClassOf.replaceAll(
        "Q21198",
        selectedTopic.id
      );

      const fullUrl = endpoint + "?query=" + encodeURIComponent(sparqlQuery);
      const headers = {
        Accept: "application/sparql-results+json",
      };

      fetch(fullUrl, { headers })
        .then((response) => response.json())
        .then((data) => handleData(data));
    })();
  }

  return (
    <form onSubmit={onSubmitHandler} className="query-form">
      {searchBoxAndDropdownList}
      {exploreButton}
    </form>
  );
};

export default QueryForm;
