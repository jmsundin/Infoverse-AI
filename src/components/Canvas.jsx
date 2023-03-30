import React, { useState } from "react";
import Graph from "./Graph";
import GraphParams from "../utils/GraphParams";

import "../assets/Canvas.css";

const Canvas = (props) => {
  const [data, setData] = useState(props.data);

  return (
    <div className="canvas">
      <Graph
        data={props.data}
        options={GraphParams.options}
        events={GraphParams.events}
        style={GraphParams.style}
      />
    </div>
  );
};

export default Canvas;
