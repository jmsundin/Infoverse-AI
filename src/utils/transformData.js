export function objectToGraphData(root, data) {
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
    newNode.title = item.label + ": " + description.value;
    newNode.description = description.value;
    newNode.pageId = item.pageId;
    newNode.url = item.value;

    graphData.nodes.push(newNode);
    graphData.edges.push({ from: root.id, to: newNode.id });
  }
  return graphData;
}
