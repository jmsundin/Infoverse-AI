import visNetworkDummyData from "../../data/visNetworkDummyData";
import d3TreeDummyData from "../../data/d3TreeDummyData";

export function transformDataForVisNetwork(data) {
  let bindings = data?.results?.bindings;

  let visNetworkData = {};
  let nodes = [];
  let edges = [];

  // console.log("Array.isArray(bindings): ",  Array.isArray(bindings));
  // console.log("bindings: ", JSON.stringify(bindings));

  if (bindings !== null && bindings != undefined && bindings.length > 0) {
    bindings.forEach((binding) => {
      let parentNode = {};
      let parentEdge = {};
      let childNode = {};
      let childEdge = {};
      let grandChildNode = {};

      parentNode.id = binding.itemLabel.value;
      parentNode.label = binding.itemLabel.value;
      parentEdge.from = binding.itemLabel.value;
      parentEdge.to = binding.child1Label.value;

      childNode.id = binding.child1Label.value;
      childNode.label = binding.child1Label.value;
      childEdge.from = binding.child1Label.value;
      childEdge.to = binding.child2Label.value;

      grandChildNode.id = binding.child2Label.value;
      grandChildNode.label = binding.child2Label.value;

      // push node to nodes array if another node with the same id does not exist already
      [parentNode, childNode, grandChildNode].forEach((node) => {
        if (!nodes.some((n) => n.id === node.id)) {
          nodes.push(node);
        }
      });

      // push edge to edges array if another edge with the same id does not exist already
      [parentEdge, childEdge].forEach((edge) => {
        if (!edges.some((e) => e.from === edge.from && e.to === edge.to)) {
          edges.push(edge);
        }
      });
    });
  } else {
    return visNetworkDummyData;
  }
  // console.log("visNetworkData: ", JSON.stringify(visNetworkData));

  // console.log("nodes: ", JSON.stringify(nodes));
  visNetworkData.nodes = nodes;
  visNetworkData.edges = edges;

  return visNetworkData;
}

export function transformDataForD3(data, chosenTopic) {
  let bindings = data?.results?.bindings;

  bindings = bindings ? bindings : d3TreeDummyData;

  let rootNode = { name: chosenTopic, children: [] };
  let parentNode = { name: "", children: [] };
  let childNode = { name: "", children: [] };
  let grandChildNode = { name: "", children: [] };

  bindings.forEach((binding) => {
    parentNode.name = binding.itemLabel.value;
    childNode.name = binding.child1Label.value;
    grandChildNode.name = binding.child2Label.value;

    rootNode.children.push(parentNode);
    parentNode.children.push(childNode);
    childNode.children.push(grandChildNode);

    // TODO: remove duplicates
    // check if the parent node already exists in the root node
    // if not, add/push it
    // const deduplicatesInRoot = (node) => {
    //   if (!rootNode.children.some((childOfRoot) => childOfRoot.name === node.name)
    //   ) {
    //     rootNode.children.push(node);
    //   }
    // };
    // deduplicatesInRoot(parentNode);


    // check if the child node already exists in the parent node
    // if not, add/push it
    // [childNode, grandChildNode].forEach((node) => {
    //   if (!parentNode.children.some((child) => child.name === node.name)) {
    //     parentNode.children.push(node);
    //   }
    // });

    // check if the grandchild node already exists in the child node
    // if not, add/push it
    // childNode.children.forEach((grandChild) => {
    //   if (!childNode.children.some((n) => n.name === grandChildNode.name)) {
    //     node.children.push(grandChildNode);
    //   }
    // });
  });

  return rootNode;
}
