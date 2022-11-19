import { useState } from "react";
import { SPARQLQueryDispatcher } from "../SPARQLQuery/SPARQLQueryDispatcher";
import "./Dropdown.css";

import { sparqlQueryComputerScience } from "../SPARQLQuery/SPARQLQueries";

const QueryForm = (props) => {
  const endpointUrl = "https://query.wikidata.org/sparql";
  // sparl query that retrieves the items that are subclasses of computer science

  const topics = [
    "Computer Science",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Medicine",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Data Science",
  ];

  const [chosenTopic, setChosenTopic] = useState("Computer Science");
  const topicList = topics.map((topic) => (
    <button key={topic} onClick={() => setChosenTopic(topic)}>
      {topic}
    </button>
  ));

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const queryDispatcher = new SPARQLQueryDispatcher(endpointUrl);
    queryDispatcher.query(sparqlQueryComputerScience).then((json) => {
      props.onQuerySubmit(json);
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <span>Select a Topic to Explore</span>
      <br></br>
      <div className="dropdown">
        <button className="dropbtn" type="text">
          {chosenTopic}
        </button>
        <div className="dropdown-content">{topicList}</div>
      </div>
      <button className="dropbtn" type="submit">
        Explore
      </button>
    </form>
  );
};

export default QueryForm;
