const GraphParams = {
  style: { width: "100%", height: "100%" },
  options: {
    interaction: {
      dragNodes: true,
      dragView: true,
      hideEdgesOnDrag: false,
      hideEdgesOnZoom: false,
      hideNodesOnDrag: false,
      hover: true,
      hoverConnectedEdges: true,
      keyboard: {
        enabled: true,
        speed: { x: 10, y: 10, zoom: 0.02 },
        bindToWindow: true,
        autoFocus: true,
      },
      multiselect: false,
      navigationButtons: false,
      selectable: true,
      selectConnectedEdges: true,
      tooltipDelay: 200,
      zoomSpeed: 0.5,
      zoomView: true,
    },
    physics: {
      enabled: true,
      solver: "forceAtlas2Based",
      forceAtlas2Based: {
        theta: 0.5,
        gravitationalConstant: -30,
        centralGravity: 0.01,
        springLength: 100,
        springConstant: 0.1,
        avoidOverlap: 0,
      },
      stabilization: {
        enabled: true,
        iterations: 1000,
        fit: true,
      },
      adaptiveTimestep: true,
    },
    autoResize: false,
    nodes: {
      mass: 2,
      font: {
        size: 24,
        color: "#000000",
      },
      margin: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      },
      borderWidth: 1.5,
      color: {
        background: "#dbe6ff",
        hover: {
          background: "#92b6ff",
        },
        highlight: {
          background: "#92b6ff",
        },
      },
      heightConstraint: {
        minimum: 20,
        valign: "middle",
      },
      shape: "box",
      scaling: {
        min: 15,
        max: 36,
        label: {
          min: 15,
          max: 36,
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
      smooth: true,
      color: "#92b6ff",
      width: 0.8,
      length: 200,
      arrows: {
        to: {
          enabled: true,
          scaleFactor: 0.4,
        },
      },
    },
  },
  events: {
    click: function (params) {},
    doubleClick: function (params) {},
    oncontext: function (params) {},
    dragStart: function (params) {},
    dragging: function (params) {},
    dragEnd: function (params) {},
    controlNodeDragging: function (params) {},
    controlNodeDragEnd: function (params) {},
    zoom: function (params) {},
    showPopup: function (params) {},
    hidePopup: function () {},
    select: function (params) {},
    selectNode: function (params) {},
    selectEdge: function (params) {},
    deselectNode: function (params) {},
    deselectEdge: function (params) {},
    hoverNode: function (params) {},
    hoverEdge: function (params) {},
    blurNode: function (params) {},
    blurEdge: function (params) {},
  },
};

export default GraphParams;
