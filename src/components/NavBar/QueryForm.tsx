import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import debounce from "lodash.debounce";
import { wikidata } from "../../data/queryData";
import { objectToGraphData } from "../../utils/transformToGraph";
import DatalistInput from "react-datalist-input";
import { levenshteinDistance } from "../../utils/levenshteinDistance";

import "./QueryForm.css";
import NetworkClient from "../../utils/NetworkClient";

const basicFuzzySearch = (inputValue, searchOptionTopics) => {
  let bestMatch = null;
  let minDistance = Infinity;

  for (const topic of searchOptionTopics) {
    const distance = levenshteinDistance(inputValue, topic);

    if (distance < minDistance) {
      minDistance = distance;
      bestMatch = topic;
    }
  }

  return bestMatch;
};

const createOptionItem = (topic) => ({
  id: topic.id,
  value: topic.value || topic.label,
  node: (
    <>
      <b>{topic.value || topic.label}</b>
      <br />
      <span>{topic.description}</span>
    </>
  ),
});

const useDebouncedCallback = (callback, delay, dependencies) => {
  const debouncedFn = useCallback(debounce(callback, delay), dependencies);

  useEffect(() => {
    return () => {
      debouncedFn.cancel();
    };
  }, [debouncedFn]);

  return debouncedFn;
};

const QueryForm = (props) => {
  // TODO: fix state management for search input
  const [searchOptions, setSearchOptions] = useState(wikidata.suggestedTopics);
  const [searchOptionItems, setSearchOptionItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedTopic, setSelectedTopic] = useState({
    id: null,
    value: null,
    label: null,
  });

  useEffect(() => {
    setSearchOptionItems(searchOptions.map(createOptionItem));
  }, [searchOptions]);

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

  const handleSearchInput = useCallback(
    async (event) => {
      const input = event.target.value;
      console.log(input);
      if (!input) return;
      setInputValue(input);

      try {
        const response = await axios.get("https://www.wikidata.org/w/api.php", {
          params: {
            action: "wbsearchentities",
            format: "json",
            language: "en",
            limit: 10,
            origin: "*",
            search: input,
          },
        });

        const fetchedOptions = response.data.search;
        setSearchOptions(fetchedOptions);
      } catch (error) {
        console.log(error);
      }
    },
    [inputValue]
  );

  const handleDebounceSearchInput = useDebouncedCallback(
    handleSearchInput,
    300,
    [inputValue]
  );

  // Stop the invocation of the debounced function
  // after unmounting
  useEffect(() => {
    return () => {
      handleDebounceSearchInput.cancel();
    };
  }, []);

  const findClosestMatch = (inputValue, searchOptions) => {
    const bestMatch = basicFuzzySearch(
      inputValue,
      searchOptions.map((option) => {
        return option.label;
      })
    );

    if (bestMatch) {
      return searchOptions.find((option) => option.label === bestMatch);
    }

    return null;
  };

  const submitHandler = useCallback(
    (topicObj) => {
      let topicToSubmit = topicObj;
      if (topicObj.label) {
        topicToSubmit = findClosestMatch(topicObj.label, searchOptions);
        if (!topicToSubmit) return;
      }

      const endpoint = "https://query.wikidata.org/sparql";
      const sparqlQuery = wikidata.generalQuery.replaceAll(
        "Q21198",
        topicToSubmit.id
      );

      NetworkClient.sparqlQuery(endpoint, sparqlQuery, (data) => {
        const root = {
          ...topicToSubmit,
          value: data?.results?.bindings?.length,
        };

        const graph = objectToGraphData(root, data?.results?.bindings);
        props.onQuerySubmit(graph);
      });
    },
    [selectedTopic, inputValue, searchOptions]
  );

  const onTopicSelectedHandler = useCallback(
    (topic) => {
      const selectedTopicObj = { id: topic.id, value: 1, label: topic.value };
      setSelectedTopic(selectedTopicObj);
      submitHandler(selectedTopicObj);
    },
    [selectedTopic]
  );

  const onKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      const input = event.target.value;
      if (input) {
        setInputValue(input);
        onSubmitHandler(event);
      }
    } else if (event.key) {
      handleDebounceSearchInput(event);
    } else if (event.key === "Escape") {
      setInputValue("");
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const input = event.target.value;
    if (input) {
      setInputValue(input);
      submitHandler({ id: null, value: 1, label: input });
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="query-form">
      <DatalistInput
        className="react-datalist-input"
        label={false}
        placeholder="Search for a topic"
        value={inputValue}
        items={searchOptionItems}
        onSelect={onTopicSelectedHandler}
        onKeyDown={onKeyDownHandler}
      />
    </form>
  );
};

export default QueryForm;
