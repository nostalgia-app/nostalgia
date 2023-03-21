import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import auth from './auth';
import user from './user';
import communities from './communities';
import community from './community';
import geographies from './geographies';
import userCommunity from './userCommunities'
import comment from './comments';
import artifacts from './artifacts';
import profilePics from './profilePics';

const reducer = combineReducers({
  auth,
  artifacts,
  communities,
  community,
  geographies,
  user,
  image,
  userCommunity
});

const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
);

const store = createStore(reducer, middleware);

export default store;

export * from './auth';
export * from './user';
export * from './communities';
export * from './community';
export * from './geographies';
export * from './userCommunities'
export * from './comments';
export * from './artifacts';
export * from './profilePics';
