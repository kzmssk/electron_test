const { ipcRenderer } = require("electron");

ipcRenderer.on("asynchronous-reply", (event, org) => {
  console.log("pong");
});

ipcRenderer.send("asynchronous-message", "ping");

window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  paper.setup(canvas);

  var path = new paper.Path();

  path.strokeColor = "blue";
  var start = new paper.Point(100, 100);

  path.moveTo(start);
  path.lineTo(start.add([200, -50]));
  paper.view.draw();
};
