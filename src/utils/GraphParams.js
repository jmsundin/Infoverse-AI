const GraphParams = {
  events: {
    click: function (params) {
      console.log("click Event:", params);
      console.log(params.nodes[0]);
      
    },
    doubleClick: function (params) {
      // params.event = "[original event]";
    },
    oncontext: function (params) {
      // params.event = "[original event]";
    },
    dragStart: function (params) {
      // There's no point in displaying this event on screen, it gets immediately overwritten
      // params.event = "[original event]";
    },
    dragging: function (params) {
      // params.event = "[original event]";
    },
    dragEnd: function (params) {
      // params.event = "[original event]";
    },
    controlNodeDragging: function (params) {
      // params.event = "[original event]";
    },
    controlNodeDragEnd: function (params) {
      // params.event = "[original event]";
    },
    zoom: function (params) {
      // console.log("zoom Event:", params);
    },
    showPopup: function (params) {
      // console.log('showPopup Event:', params);
    },
    hidePopup: function () {
      // console.log('hidePopup Event');
    },
    select: function (params) {
      // console.log("select Event:", params);
    },
    selectNode: function (params) {
      // console.log("selectNode Event:", params);
      
    },
    selectEdge: function (params) {
      // console.log("selectEdge Event:", params);
    },
    deselectNode: function (params) {
      // console.log("deselectNode Event:", params);
    },
    deselectEdge: function (params) {
      // console.log("deselectEdge Event:", params);
    },
    hoverNode: function (params) {
      // console.log("hoverNode Event:", params);
    },
    hoverEdge: function (params) {
      // console.log("hoverEdge Event:", params);
    },
    blurNode: function (params) {
      // console.log("blurNode Event:", params);
    },
    blurEdge: function (params) {
      // console.log("blurEdge Event:", params);
    },
  },

  options: {
    // layout: {
    //   hierarchical: {
    //     direction: "LR",
    //     sortMethod: "directed",
    //   },
    // },
    interaction: {
      dragNodes: true,
      dragView: true,
      hideEdgesOnDrag: false,
      hideEdgesOnZoom: false,
      hideNodesOnDrag: false,
      hover: true,
      hoverConnectedEdges: true,
      keyboard: {
        enabled: false,
        speed: { x: 10, y: 10, zoom: 0.02 },
        bindToWindow: true,
        autoFocus: true,
      },
      multiselect: false,
      navigationButtons: true,
      selectable: true,
      selectConnectedEdges: true,
      tooltipDelay: 200,
      zoomSpeed: 0.5,
      zoomView: true,
    },
    physics: {
      stabilization: false,
    },
    autoResize: false,
    nodes: {
      shape: "ellipse",
      scaling: {
        min: 14,
        max: 20,
        label: {
          min: 14,
          max: 20,
          maxVisible: 20,
          drawThreshold: 5,
        },
        customScalingFunction: function (min, max, total, value) {
          if (max === min) {
            return 0.5;
          } else {
            let scale = 1 / (max - min);
            return Math.max(0, (value - min) * scale);
          }
        },
      },
    },
    edges: {
      smooth: false,
      color: "#000000",
      width: 0.5,
      length: 250,
      arrows: {
        to: {
          enabled: true,
          scaleFactor: 0.5,
        },
      },
    },
  },
};

export default GraphParams;