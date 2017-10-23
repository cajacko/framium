/* eslint no-console: 0 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * Display a webpage and log any console logs
 *
 * @type {Class}
 */
class WebView extends PureComponent {
  /**
   * Add the console listeners, and refresh the view to ignore the cache.
   * - Need to figure out a better way to ignore the cache.
   *
   * @return {Void} No return value
   */
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

  /**
   * Render the webview
   *
   * @return {Component} The react component to render
   */
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

WebView.propTypes = {
  src: PropTypes.string.isRequired,
};

export default WebView;
