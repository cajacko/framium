import React from 'react';
import WebView from 'components/WebView/WebView.render';

const App = () => (
  <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
    <h1>Container</h1>
    <WebView src="http://localhost:3000/" />
  </div>
);

export default App;
