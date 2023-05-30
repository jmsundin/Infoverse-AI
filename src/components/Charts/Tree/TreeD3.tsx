import React from "react";
import { transformDataForD3ReactTree } from "../../../utils/transformToGraph";
import * as d3 from "d3";
import Tree from "react-d3-tree";

function TreeD3(props) {
  const d3TreeData = transformDataForD3ReactTree(props.data, props.chosenTopic);

  const style = {
    width: window.innerWidth - 20,
    height: window.innerHeight,
    border: "1px solid lightgray",
  }
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={style}>
      <Tree data={d3TreeData} />
    </div>
  );
}

export default TreeD3;
