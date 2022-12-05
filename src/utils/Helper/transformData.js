import visNetworkDummyData from "../../data/visNetworkDummyData";
import d3TreeDummyData from "../../data/d3TreeDummyData";

export function transformDataForVisNetwork(data) {
  let bindings = data?.results?.bindings;
  console.log("bindings: ", JSON.stringify(bindings));
  let visNetworkData = {
    nodes: [],
    edges: [],
  };
  // console.log("Array.isArray(bindings): ",  Array.isArray(bindings));
  // console.log("bindings: ", JSON.stringify(bindings));

  if (bindings !== undefined && bindings.length > 0) {
    bindings.forEach((binding) => {
      let parentNode = {};
      let parentEdge = {};
      let childNode = {};
      let childEdge = {};
      let grandChildNode = {};

      parentNode.id = binding.parentLabel.value;
      parentNode.label = binding.parentLabel.value;
      parentEdge.from = binding.parentLabel.value;
      parentEdge.to = binding.childLabel.value;

      childNode.id = binding.childLabel.value;
      childNode.label = binding.childLabel.value;
      childEdge.from = binding.childLabel.value;
      childEdge.to = binding.grandChildLabel.value;

      grandChildNode.id = binding.grandChildLabel.value;
      grandChildNode.label = binding.grandChildLabel.value;

      // push node to nodes array if another node with the same id does not exist already
      [parentNode, childNode, grandChildNode].forEach((node) => {
        if (!visNetworkData.nodes.some((n) => n.id === node.id)) {
          visNetworkData.nodes.push(node);
        }
      });

      // push edge to edges array if another edge with the same id does not exist already
      [parentEdge, childEdge].forEach((edge) => {
        if (
          !visNetworkData.edges.some(
            (e) => e.from === edge.from && e.to === edge.to
          )
        ) {
          visNetworkData.edges.push(edge);
        }
      });
    });
  }

  console.log("visNetworkData: ", JSON.stringify(visNetworkData));

  return visNetworkData;
}

export function transformDataForD3(data, chosenTopic) {
  let bindings = data?.results?.bindings;

  bindings = bindings ? bindings : d3TreeDummyData;

  let rootNode = { name: chosenTopic, children: [] };

  bindings.forEach((binding) => {
    let childNode = { 
      name: binding.childLabel.value, 
      children: [] 
    };
    let grandChildNode = { 
      name: binding.grandChildLabel.value, 
      children: [] 
    };
    let greatGrandChildNode = {
      name: binding.greatGrandChildLabel.value,
      children: [],
    };

    // if the root node does not have a child with the same name already, add child node to root node children array
    if (!rootNode.children.some((child) => child.name === childNode.name)) {
      // child node does not exist yet, add it to the root node children array
      rootNode.children.push(childNode);
    }
    // child node already exists in root node children array
    else {
      childNode = rootNode.children.find((child) => child.name === childNode.name);
      // check if the child node has a grandchild with the same name already
      if (!childNode.children.some((grandChild) => grandChild.name === grandChildNode.name)) {
        // grandchild does not exist yet, add it to the child node children array
        childNode.children.push(grandChildNode);
      }
      // grandchild node already exists in child node children array
      else {
        grandChildNode = childNode.children.find((grandChild) => grandChild.name === grandChildNode.name);
        // check if the grandchild node has a greatgrandchild with the same name already
        if (!grandChildNode.children.some((greatGrandChild) => greatGrandChild.name === greatGrandChildNode.name)) {
          // greatgrandchild does not exist yet, add it to the grandchild node children array
          grandChildNode.children.push(greatGrandChildNode);
        }
        else {
          // greatgrandchild node already exists in grandchild node children array
          // do nothing
        }
      }
    }

  });

  console.log("root: ", JSON.stringify(rootNode));

  return root;

  // root.children.push(parentNode);

  // check if the parent node already exists in the root node
  // if not, add/push it
  //   const isChildOfRoot = (node) => node.name === parentNode.name;
  //   const isChildOfParent = (node) => node.name === childNode.name;
  //   const isChildOfChild = (node) => node.name === grandChildNode.name;

  //   if (!root.children.some((node) => isChildOfRoot(node))) {
  //     root.children.push(parentNode);
  //   }

  //   // check if the child node already exists in the parent node
  //   // if not, add/push it
  //   if (!parentNode.children.some((node) => isChildOfParent(node))) {
  //     parentNode.children.push(childNode);
  //   }

  //   // check if the grandchild node already exists in the child node
  //   // if not, add/push it
  //   if (!childNode.children.some((node) => isChildOfChild(node))) {
  //     childNode.children.push(grandChildNode);
  //   }
  // });
}
