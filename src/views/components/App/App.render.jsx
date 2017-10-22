import React from 'react';
import WebView from 'components/WebView/WebView.render';

const App = ({ url }) => (
  <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
    {url ? <WebView src={url} /> : <h1>Add a URL</h1>}
  </div>
);

export default App;
