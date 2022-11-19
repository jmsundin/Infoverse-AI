import { useState } from "react";

const Canvas = (props) => {
  const items = props.items;
  const table = (items &&
    items.results.bindings.map((item) => (
      <p data={item.item.value}>{item.itemLabel.value}</p>
    ))) || <p>Pick a topic and explore!</p>;

  return (
    <div>
      <h1>Items</h1>
      {table}
      {/* {console.log(typeof items)} */}
      {/* {console.log(JSON.stringify(items))} */}
    </div>
  );
};

export default Canvas;
