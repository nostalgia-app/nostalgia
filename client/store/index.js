import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import auth from './auth';
import user from './user';
import image from './image';
import communities from './communities';
import community from './community';
import geographies from './geographies';

const reducer = combineReducers({
  auth,
  communities,
  community,
  geographies,
  user,
  image,
});
const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
);
const store = createStore(reducer, middleware);

export default store;

export * from './auth';
export * from './user';
export * from './image';
export * from './communities';
export * from './community';
export * from './geographies';
