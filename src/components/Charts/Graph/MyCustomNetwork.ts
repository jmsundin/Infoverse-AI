import { Network, Node, Edge } from "vis-network/peer/esm/vis-network";

class MyCustomNetwork extends Network {
  constructor(container: HTMLElement, data: { nodes: Node[]; edges: Edge[] }, options: object) {
    super(container, data, options);
  }

}

export default MyCustomNetwork;