export default GraphParams = {
    events: {
    click: function (params) {
      params.event = "[original event]";
      console.log(
        "click event, getNodeAt returns: " + this.getNodeAt(params.pointer.DOM)
      );
    },
    doubleClick: function (params) {
      console.log("doubleClick Event:", params);
      params.event = "[original event]";
    },
    oncontext: function (params) {
      console.log("oncontext Event:", params);
  
      params.event = "[original event]";
    },
    dragStart: function (params) {
      // There's no point in displaying this event on screen, it gets immediately overwritten
      params.event = "[original event]";
      console.log("dragStart Event:", params);
      console.log(
        "dragStart event, getNodeAt returns: " +
          this.getNodeAt(params.pointer.DOM)
      );
    },
    dragging: function (params) {
      params.event = "[original event]";
    },
    dragEnd: function (params) {
      params.event = "[original event]";
      console.log("dragEnd Event:", params);
      console.log(
        "dragEnd event, getNodeAt returns: " + this.getNodeAt(params.pointer.DOM)
      );
    },
    controlNodeDragging: function (params) {
      params.event = "[original event]";
    },
    controlNodeDragEnd: function (params) {
      params.event = "[original event]";
      console.log("controlNodeDragEnd Event:", params);
    },
    zoom: function (params) {},
    showPopup: function (params) {},
    hidePopup: function () {
      console.log("hidePopup Event");
    },
    select: function (params) {
      console.log("select Event:", params);
    },
    selectNode: function (params) {
      console.log("selectNode Event:", params);
    },
    selectEdge: function (params) {
      console.log("selectEdge Event:", params);
    },
    deselectNode: function (params) {
      console.log("deselectNode Event:", params);
    },
    deselectEdge: function (params) {
      console.log("deselectEdge Event:", params);
    },
    hoverNode: function (params) {
      console.log("hoverNode Event:", params);
    },
    hoverEdge: function (params) {
      console.log("hoverEdge Event:", params);
    },
    blurNode: function (params) {
      console.log("blurNode Event:", params);
    },
    blurEdge: function (params) {
      console.log("blurEdge Event:", params);
    },
  },

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
        enabled: false,
        speed: { x: 10, y: 10, zoom: 0.02 },
        bindToWindow: true,
        autoFocus: true,
      },
      multiselect: false,
      navigationButtons: false,
      selectable: true,
      selectConnectedEdges: true,
      tooltipDelay: 300,
      zoomSpeed: 1,
      zoomView: true,
    },
    physics: {
      stabilization: false,
    },
    autoResize: false,
    edges: {
      smooth: false,
      color: "#000000",
      width: 0.5,
      arrows: {
        to: {
          enabled: true,
          scaleFactor: 0.5,
        },
      },
    },
  },

}