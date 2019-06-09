const { ipcRenderer } = require("electron");
paper.install(window);

window.onload = function() {
  paper.setup("myCanvas");
  var path = new Path.Circle({
    center: view.center,
    radius: 70,
    fillColor: "red"
  });

  view.onFrame = function(event) {
    const new_hue = ipcRenderer.sendSync("synchronous-message", "get_hue");
    path.fillColor.hue = new_hue;
  };
};
