const { app, BrowserWindow, ipcMain } = require("electron");

let hue = 0;

ipcMain.on("synchronous-message", (event, arg) => {
  hue += 1;

  if (hue >= 360) {
    hue = 0;
  }

  event.returnValue = hue;
});

function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile("static/index.html");

  win.webContents.openDevTools();
}

app.on("ready", createWindow);
