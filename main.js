const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

function createWindow() {
  // Create the browser window.
  // win = new BrowserWindow({ kiosk: true });
  win = new BrowserWindow({});

  // and load the index.html of the app.
  win.loadURL("https://dev.charliejackson.com");
}

app.on("ready", createWindow);
