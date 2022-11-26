// transform data into nodes and links

export default function transformData(chosenTopic, columns, rows) {
    let nodesAndChildren = {};
    nodesAndChildren.children = [];
    nodesAndChildren.children.push({ children: [] });
    nodesAndChildren.children[0].children.push({ children: [] });
    // nodesAndChildren schema:
    // {
    //   name: chosenTopic,
    //   children: [
    //     {
    //       name: "itemLabel",
    //       children: [
    //         {
    //           name: "child1Label",
    //           children: [
    //            {
    //              name: "child2Label",
    //              children: []
    //            }
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // };
  
    // create nodes
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];
      // create a node for each column
      columns.forEach((column) => {
        // create a node for each row column/item if column string includes "Label"
        // parent node is the chosenTopic with the first generation children nodes being the first column, and the second generation children nodes being the second column, etc.
        if (column.includes("itemLabel")) {
          nodesAndChildren.children.push({
            name: row[column].value,
            children: [],
          });
        } else if (column.includes("child1Label")) {
          nodesAndChildren.children.push({
            name: row[column].value,
            children: [],
          });
        } else if (column.includes("child2Label")) {
          nodesAndChildren.children[i].children.push({
            name: row[column].value,
            children: [],
          });
        }
      });
    }
  
    return nodesAndChildren;
  }