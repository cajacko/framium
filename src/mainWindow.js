const { BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const menu = require('./menu');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

/**
 * Create the main window
 *
 * @return {Void} No return value
 */
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
  });

  mainWindow.webContents.openDevTools();

  // Create the browser window.
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
    })
  );

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  menu(mainWindow);
}

/**
 * Return the main window var
 *
 * @return {Object} The main windows object
 */
function getMainWindow() {
  return mainWindow;
}

exports.createWindow = createWindow;
exports.getMainWindow = getMainWindow;
