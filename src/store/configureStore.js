import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducers from 'reducers/index';

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(thunkMiddleware, logger))
);

export default () => store;
