import visNetworkDummyData from "../../data/visNetworkDummyData";
import d3TreeDummyData from "../../data/d3TreeDummyData";

export function transformDataForVisNetwork(data) {
  let bindings = data?.results?.bindings;
  console.log("bindings: ", JSON.stringify(bindings));
  let visNetworkData = {
    nodes: [],
    edges: []
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
        if (!visNetworkData.edges.some((e) => e.from === edge.from && e.to === edge.to)) {
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

  let root = { name: chosenTopic, children: [] };
  let parentNode = { name: "", children: [] };
  let childNode = { name: "", children: [] };
  let grandChildNode = { name: "", children: [] };

  const children = []; // array of children of the root node
  const nodes = {}; // Use a hash table to avoid duplicate nodes


  // TODO: remove duplicate nodes
  bindings.forEach((binding) => {
    let node = {
      name: binding.itemLabel.value,
      children: [
        {
          name: binding.child1Label.value,
          children: [
            {
              name: binding.child2Label.value,
              children: [],
            },
          ],
        },
      ],
    };

    // check if node already is in nodes object
    if (nodes[node.name]) {
      // if node is already in nodes object, add children to existing node
      nodes[node.name].children.push(...node.children);
    } else {
      nodes[node.name] = node;
    }
    children.push(Object.values(nodes));
  });

  root.children.push(...children);
  // console.log("root: ", JSON.stringify(root));

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
