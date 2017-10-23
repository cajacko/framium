import { combineReducers } from 'redux';
import url from 'reducers/url';
import showChangeUrl from 'reducers/showChangeUrl';

export default combineReducers({
  url,
  showChangeUrl,
});
