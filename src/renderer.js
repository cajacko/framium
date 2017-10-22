// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
//
var refreshed = false;

onload = () => {
  const webview = document.querySelector('webview');
  console.warn(webview);

  webview.addEventListener('console-message', e => {
    console.log('G:', e.message, e);
  });

  webview.addEventListener('dom-ready', () => {
    console.log('loaded');

    if (!refreshed) {
      refreshed = true;
      webview.reloadIgnoringCache();
    }

    // webview.executeJavaScript('window', false, result => {
    //   console.log('window', result);
    // });

    webview.addEventListener('ipc-message', event => {
      console.log('recieved message', event.channel, event);
      // Prints "pong"
    });

    // console.log('Pinging', webview.send('ping'));
  });
};
