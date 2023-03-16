import visNetworkDummyData from "../data/visNetworkDummyData";
import d3TreeDummyData from "../data/d3TreeDummyData";

export function objectToGraphData(data) {
  let graphData = {
    nodes: [],
    edges: [],
  };

  if (data) {
    data.forEach((item) => {
      let newNode = {};
      newNode.id = item.id;
      newNode.label = item.label;
      newNode.pageId = item.pageId;
      newNode.url = item.url;
      graphData.nodes.push(newNode);
    });
    data.forEach((item) => {
      let newEdge = {};
      newEdge.from = item.id;
      newEdge.to = item.child;
      graphData.edges.push(newEdge);
    });
  }

  return graphData;
}

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
      let childNode = {};
      let childEdge = {};
      let grandChildNode = {};
      let grandChildEdge = {};
      let greatGrandChildNode = {};

      childNode.id = binding.childLabel.value;
      childNode.label = binding.childLabel.value;
      childEdge.from = binding.childLabel.value;
      childEdge.to = binding.grandChildLabel.value;

      grandChildNode.id = binding.grandChildLabel.value;
      grandChildNode.label = binding.grandChildLabel.value;
      grandChildEdge.from = binding.grandChildLabel.value;
      grandChildEdge.to = binding.greatGrandChildLabel.value;

      greatGrandChildNode.id = binding.greatGrandChildLabel.value;
      greatGrandChildNode.label = binding.greatGrandChildLabel.value;

      // push node to nodes array if another node with the same id does not exist already
      [childNode, grandChildNode, greatGrandChildNode].forEach((node) => {
        if (!visNetworkData.nodes.some((n) => n.id === node.id)) {
          visNetworkData.nodes.push(node);
        }
      });

      // push edge to edges array if another edge with the same id does not exist already
      [childEdge, grandChildEdge].forEach((edge) => {
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

  return visNetworkData;
}

export function transformDataForD3Graph(data, chosenTopic) {
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

  return rootNode;

}


export function transformDataForD3ReactTree(data, chosenTopic) {
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

  return rootNode;

}

export function transformDataForD3Treemap(data, chosenTopic) {
  

}