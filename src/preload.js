const { ipcRenderer } = require('electron');

global.pingHost = (message) => {
  ipcRenderer.sendToHost(message);
};
