function objectToGraphData(root, data) {
  // console.log(
  //   `root: ${JSON.stringify(root)},
  //   data: ${JSON.stringify(data)}`
  // );

  let graphData = {
    nodes: [],
    edges: [],
  };

  graphData.nodes.push(root);

  while (data.length > 0) {
    let currentNode = data.shift();
    let { description, item, itemLabel } = currentNode;
    let newNode = {};

    // get substring from ending starting with Q till the end of the string from item.value to use as id
    newNode.id = item.value.substring(item.value.lastIndexOf("/") + 1);
    newNode.value = 1;
    newNode.label = itemLabel.value;
    newNode.title = itemLabel.value + ": " + description.value;
    newNode.description = description.value;
    newNode.pageId = item.pageId;
    newNode.url = item.value;

    graphData.nodes.push(newNode);
    graphData.edges.push({ from: root.id, to: newNode.id });
  }
  return graphData;
}

function transformSuggestedTopicsToGraph(root, data) {
  let suggestedGraphData = {
    nodes: [],
    edges: [],
  };

  suggestedGraphData.nodes.push(root);

  if (data.length > 0) {
    data.forEach((item) => {
      let newNode = {};
      newNode.id = item.id;
      newNode.value = 1;
      newNode.label = item.label;
      newNode.title = item.label + ": " + item.description;
      newNode.description = item.description;
      newNode.pageId = item.pageId;
      newNode.url = item.url;

      suggestedGraphData.nodes.push(newNode);
    });

    data.forEach((item) => {
      let newEdge = {};
      newEdge.from = root.id;
      newEdge.to = item.id;

      suggestedGraphData.edges.push(newEdge);
    });
  }
  return suggestedGraphData;
}

export { objectToGraphData, transformSuggestedTopicsToGraph };
