/* eslint no-console: 0 */
import React, { Component } from 'react';

class WebView extends Component {
  componentDidMount() {
    this.webview.addEventListener('console-message', (e) => {
      console.log(e.message);
    });

    this.webview.addEventListener('dom-ready', () => {
      if (!this.refreshed) {
        this.refreshed = true;
        this.webview.reloadIgnoringCache();
      }

      this.webview.addEventListener('ipc-message', (event) => {
        console.log(event.channel);
      });
    });
  }

  refreshed = false;

  render() {
    return (
      <webview
        ref={(webview) => {
          this.webview = webview;
        }}
        src={this.props.src}
        style={{ display: 'flex', flex: 1 }}
        preload="./preload.js"
      />
    );
  }
}

export default WebView;
