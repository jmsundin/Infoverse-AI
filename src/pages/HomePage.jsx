import React, { useState, useEffect, useCallback } from "react";
import NavMenu from "../components/NavMenu";
import QueryForm from "../components/QueryForm";
import Canvas from "../components/Canvas";
import "../assets/HomePage.css";

const Home = () => {
  const [graphData, setGraphData] = useState(null);

  const onQuerySubmit = (data) => {
    setGraphData(data);
  };

  return (
    <React.Fragment>
      <NavMenu />
      <QueryForm onQuerySubmit={onQuerySubmit} />
      <Canvas data={graphData} />
    </React.Fragment>
  );
};

export default Home;
