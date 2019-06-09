const { ipcRenderer } = require("electron");

ipcRenderer.on("asynchronous-reply", (event, org) => {
  console.log("pong");
});

ipcRenderer.send("asynchronous-message", "ping");
