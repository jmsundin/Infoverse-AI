import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import Network from "../utils/Network";
import wikidata from "../data/queryData";
import { objectToGraphData } from "../utils/transformData";

import DatalistInput from "react-datalist-input";

import "../assets/QueryForm.css";

const QueryForm = (props) => {
  const sparqlEndpoint = "https://query.wikidata.org/sparql";

  const [chosenChart, setChosenChart] = useState("Network Diagram");
  const [searchOptions, setSearchOptions] = useState(wikidata.topics);
  const [inputValue, setInputValue] = useState("");
  const [selectedTopic, setSelectedTopic] = useState({
    id: null,
    value: null,
    label: null,
  });

  const [chosenProperty, setChosenProperty] = useState("Subclass of");

  const [data, setData] = useState(null);

  const searchOptionItems = useMemo(() => {
    return searchOptions.map((topic) => {
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
  }, [searchOptions]);

  const searchBoxAndDropdownList = useMemo(() => {
    return (
      <DatalistInput
        label={false}
        placeholder="Search for a topic to explore"
        value={inputValue}
        items={searchOptionItems}
        onSelect={handleSelectedTopic}
        onChange={handleInputChange}
      />
    );
  }, [inputValue, searchOptionItems]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSelectedTopic(topic) {
    const item = {
      id: topic.id,
      value: topic.value || topic.label,
      label: topic.value || topic.label,
    };
    setSelectedTopic(item);

    // TODO: need to correctly get the forward links for the selected item
    // objectToGraphData(topic);
  }

  // live search for topics based on typed user input
  useEffect(() => {
    if (inputValue !== null && inputValue !== undefined && inputValue !== "") {
      async function fetchData() {
        const wikidataSearchEndpoint = "https://www.wikidata.org/w/api.php";
        const params =
          "?action=wbsearchentities" +
          "&format=json" +
          "&language=en" +
          "&limit=10" +
          "&origin=*" +
          "&search=" +
          inputValue;
        const url = wikidataSearchEndpoint + params;

        const items = await Network.fetchData(url);
        setSearchOptions(items);
      }
      fetchData();
    }
  }, [inputValue]);

  function onSubmitHandler(e) {
    e.preventDefault();
    if (selectedTopic.id === null || selectedTopic.id === undefined) {
      alert("Please select a topic to explore");
      return;
    }
    async function sparqlQuery() {
      // P:279 is the property for subclass of
      let sparqlQuery = `SELECT ?item ?itemLabel 
        WHERE {
          ?item p:P279 ?statement0.
          ?statement0 (ps:P279/(wdt:P279*)) wd:${selectedTopic.id}.
          SERVICE wikibase:label { bd:serviceParam wikibase:language "en" }
        }
      LIMIT 10`;

      const data = await Network.sparqlQuery(sparqlQuery);
      console.log("data bindings:", data.results.bindings);
      setData(data.results.bindings);
      return data.results.bindings;
    }
    setData(sparqlQuery());
  }

  const chartDropdownMenu = (
    <div className="chart-menu">
      <select
        defaultValue={"Network Diagram"}
        className="chart-menu__btn"
        onChange={(e) => setChosenChart(e.target.value)}
      >
        <option disabled>Select a Chart</option>
        {wikidata.charts.map((chart) => (
          <option key={chart} value={chart} className="chart-menu__item">
            {chart}
          </option>
        ))}
      </select>
    </div>
  );

  const exploreButton = (
    <input type="submit" value="Explore" className="explore-button" />
  );

  return (
    <form onSubmit={onSubmitHandler} className="query-form">
      {chartDropdownMenu}
      {searchBoxAndDropdownList}
      {exploreButton}
    </form>
  );
};

export default QueryForm;
