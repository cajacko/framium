const { app } = require('electron');
const { createWindow, getMainWindow } = require('./mainWindow');

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (getMainWindow() === null) {
    createWindow();
  }
});
