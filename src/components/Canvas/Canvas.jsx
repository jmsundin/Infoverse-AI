import React, { useState, useRef, useEffect, useCallback } from "react";
import Graph from "../Charts/Graph";
import RadialTreeChart from "../Charts/RadialTreeChart";

import debounce from "lodash.debounce";
import GraphParams from "../../utils/GraphParams";

import "./Canvas.css";

const Canvas = (props) => {
  const [data, setData] = useState(props.data);

  return (
    <div className="canvas gradient__bg">
      <Graph
        data={props.data}
        onNodeSelect={props.onNodeSelect}
        events={GraphParams.events}
        options={GraphParams.options}
        style={GraphParams.style}
      />
    </div>
  );
};

export default Canvas;
