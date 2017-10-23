import React from 'react';
import PropTypes from 'prop-types';
import WebView from 'components/WebView/WebView.render';
import ChangeUrl from 'components/ChangeUrl/ChangeUrl.container';

/**
 * The entry render file. Either shows the webview or the change url component
 * @param {Object} props           The props passed to the component
 * @return {Component}             A react component
 */
const App = ({ url, showChangeUrl }) => (
  <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
    {url && !showChangeUrl ? <WebView src={url} /> : <ChangeUrl url={url} />}
  </div>
);

App.propTypes = {
  url: PropTypes.string,
  showChangeUrl: PropTypes.bool.isRequired,
};

App.defaultProps = {
  url: null,
};

export default App;
