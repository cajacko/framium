const { getMainWindow } = require('./main');

exports.dispatch = (action) => {
  getMainWindow().webContents.send('dispatch', action);
};
