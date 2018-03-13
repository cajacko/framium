const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

var win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    kiosk: true,
    alwaysOnTop: true,
    fullscreen: true,
    frame: false,
    autoHideMenuBar: true,
    titleBarStyle: "hidden"
  });

  // and load the index.html of the app.
  win.loadURL("https://framium-9.firebaseapp.com/");
}

app.on("ready", createWindow);
