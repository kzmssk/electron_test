const { app, BrowserWindow, ipcMain } = require("electron");

ipcMain.on("asynchronous-message", (event, arg) => {
  console.log(arg);
  event.reply("asynchronous-reply", "pong");
});

function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile("renderer/index.html");

  win.webContents.openDevTools();
}

app.on("ready", createWindow);
