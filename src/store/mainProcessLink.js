import getStore from 'store/configureStore';

if (global.ipcRenderer) {
  global.ipcRenderer.on('dispatch', (event, arg) => {
    getStore().dispatch(arg);
  });
}
