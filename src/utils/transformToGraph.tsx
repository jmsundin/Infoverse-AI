
interface MyNode {
  id: string;
  value: number;
  label: string;
  title: string | Element;
  description: string;
  pageId: string;
  url: string;
}

interface MyEdge {
  from: string;
  to: string;
  arrows: string;
  label: string;
  font: {
    align: string;
    size: number;
    color: string;
  };
}

interface MyGraphData {
  nodes: MyNode[];
  edges: MyEdge[];
}

interface JsonData {
  subject: {
    type: string;
    value: string;
  };
  subjectLabel: {
    type: string;
    value: string;
  };
  subjectDescription?: {
    type: string;
    value: string;
  };
  predicateLabel: {
    type: string;
    value: string;
  };
  predicateEntity: {
    type: string;
    value: string;
  };
  predicateEntityIriLabel: {
    type: string;
    value: string;
  };
  object: {
    type: string;
    value: string;
  };
  objectLabel: {
    type: string;
    value: string;
  };
};

// type JsonDataOrUndefined = JsonData | undefined;

function objectToGraphData(root: MyNode, data: JsonData[]) {
  let graphData: MyGraphData = {
    nodes: [],
    edges: [],
  };

  graphData.nodes.push(root);

  while (data.length > 0) {
    let currentNode: JsonData | undefined = data.pop() as JsonData;
    if (currentNode !== undefined) {
      let {
        subject,
        subjectLabel,
        subjectDescription,
        predicateLabel,
        predicateEntity,
        predicateEntityIriLabel,
        object,
        objectLabel
      } = currentNode;

      let newNode: MyNode = {
        id: "",
        value: 0,
        label: "",
        title: "",
        description: "",
        pageId: "",
        url: "",
      };
      // get substring from ending starting with Q till the end of the string from item.value to use as id
      let id = subject.value.substring(subject.value.lastIndexOf("Q"));
      if (graphData.nodes.filter((node: MyNode) => node.id === id).length === 0) {
        newNode.id = id;
        newNode.value = 1;
        newNode.label = subjectLabel.value;
        newNode.description = subjectDescription?.value || "";
        newNode.pageId = "";
        newNode.url = subject.value;
        // newNode.title = subjectDescription?.value || "";
        newNode.title = htmlTitle(subjectDescription?.value || subjectLabel.value);

        graphData.nodes.push(newNode);
        if (
          predicateEntityIriLabel.value === "instance of" ||
          predicateEntityIriLabel.value === "subclass of" ||
          predicateEntityIriLabel.value === "part of"
        ) {
          let newEdge: MyEdge = {
            from: root.id,
            to: newNode.id,
            arrows: "from",
            label: predicateEntityIriLabel.value,
            font: {
              align: "middle",
              size: 16,
              color: "#dbe6ff",
            },
          };

          graphData.edges.push(newEdge);

        } else if (predicateEntityIriLabel.value === "different from") {
          graphData.edges.push({
            from: root.id,
            to: newNode.id,
            arrows: "to;from",
            label: predicateEntityIriLabel.value,
            font: {
              align: "middle",
              size: 16,
              color: "#dbe6ff",
            },
          });
        } else {
          const newEdge: MyEdge = {
            from: root.id,
            to: newNode.id,
            arrows: "to",
            label: predicateEntityIriLabel.value,
            font: {
              align: "middle",
              size: 16,
              color: "#dbe6ff",
            }
          };
          graphData.edges.push(newEdge);
        }
      }
    }
  }
  return graphData;
}

function transformSuggestedTopicsToGraph(root: any, data: any) {
  let suggestedGraphData: MyGraphData = {
    nodes: [],
    edges: [],
  };

  suggestedGraphData.nodes.push(root);

  if (data.length > 0) {
    data.forEach((item: MyNode) => {
      let newNode: MyNode = {
        id: "",
        value: 0,
        label: "",
        title: "",
        description: "",
        pageId: "",
        url: "",
      };
      newNode.id = item.id;
      newNode.value = 1;
      newNode.label = item.label;
      // newNode.title = item.description;
      newNode.title = htmlTitle(item.description),
        newNode.description = item.description;
      newNode.pageId = item.pageId;
      newNode.url = item.url;

      suggestedGraphData.nodes.push(newNode);
    });

    data.forEach((item) => {
      let newEdge = {};
      newEdge.from = root.id;
      newEdge.to = item.id;
      // TODO: add a label to the edge
      newEdge.label = "";

      suggestedGraphData.edges.push(newEdge);
    });
  }
  return suggestedGraphData;
}

function htmlTitle(description: string) {
  const container = document.createElement("span");
  const html = description;
  container.innerHTML = html;
  return container;
}

export { objectToGraphData, transformSuggestedTopicsToGraph };
