import React from 'react';
import WebView from 'components/WebView/WebView.render';
import ChangeUrl from 'components/ChangeUrl/ChangeUrl.component';

const App = ({ url }) => (
  <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
    {url ? <WebView src={url} /> : <ChangeUrl url={url} />}
  </div>
);

export default App;
