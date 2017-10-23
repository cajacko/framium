const mainWindow = require('./mainWindow');

exports.dispatch = (action) => {
  mainWindow.getMainWindow().webContents.send('dispatch', action);
};
