console.log('test.js');

window.boobies = function () {
  console.log('boobies');
};

const { ipcRenderer } = require('electron');

global.pingHost = (message) => {
  ipcRenderer.sendToHost(message);
};
