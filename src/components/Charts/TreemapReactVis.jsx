import React, { useEffect } from "react";
import { Treemap } from "react-vis";
import { transformDataForD3Treemap } from "../utils/Helper/transformData";

const TreemapReactVis = (props) => {
  const transformedData = transformDataForD3Treemap(props.data);
  const width = props.width;
  const height = props.height

  return (
    <Treemap
      title={"My New Treemap"}
      width={300}
      height={300}
      data={transformedData}
    />
  );
};
