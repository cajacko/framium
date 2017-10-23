import React from 'react';
import PropTypes from 'prop-types';
import WebView from 'components/WebView/WebView.render';
import ChangeUrl from 'components/ChangeUrl/ChangeUrl.component';

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
