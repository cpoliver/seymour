// Lib
import { combineReducers } from 'redux';

// Reducers - TODO: refactor reducers to only receive the parts of the state they handle
import feedReducer from './feed-reducer';
import feedItemReducer from './feed-item-reducer';

export default combineReducers({
  feedReducer,
  feedItemReducer
});
