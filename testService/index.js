console.log('framium init');

const { ipcRenderer } = require('electron');

console.log('framium required');

ipcRenderer.on('ping', () => {
  console.log('framium recieved ping');
  ipcRenderer.sendToHost('pong');
});
