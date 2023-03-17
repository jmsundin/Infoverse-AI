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
  const [chosenChart, setChosenChart] = useState("Graph");
  const [searchOptions, setSearchOptions] = useState(wikidata.suggestedTopics);
  const [inputValue, setInputValue] = useState("");
  const [selectedTopic, setSelectedTopic] = useState({
    id: null,
    value: null,
    label: null,
  });

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
    setInputValue(item.value);

    // TODO: once selected, send sparql query to get related topics
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

  const chartDropdownMenu = (
    <div className="chart-menu">
      <select
        defaultValue={"Graph"}
        className="chart-menu__btn"
        onChange={(e) => setChosenChart(e.target.value)}
      >
        <option disabled>Select a Chart</option>
        <option key="Graph" value="Graph" className="chart-menu__item">
          Graph
        </option>
        <option key="Tree" value="Tree" className="chart-menu__item">
          Tree
        </option>
        <option key="Table" value="Table" className="chart-menu__item">
          Table
        </option>
      </select>
    </div>
  );

  const exploreButton = (
    <input type="submit" value="Explore" className="explore-button" />
  );

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

      const root = {
        id: selectedTopic.id,
        label: selectedTopic.label,
        pageId,
        url,
      };
      const graphData = objectToGraphData(root, data.results.bindings);
      setData(graphData);
      console.log("graphData:", graphData);
    }
    sparqlQuery();
  }

  return (
    <form onSubmit={onSubmitHandler} className="query-form">
      {chartDropdownMenu}
      {searchBoxAndDropdownList}
      {exploreButton}
    </form>
  );
};

export default QueryForm;
