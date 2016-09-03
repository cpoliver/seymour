// Lib
import { combineReducers } from 'redux';

// Reducers
import feedReducer from './feed-reducer';
import feedItemReducer from './feed-item-reducer';

export default combineReducers({
  feedReducer,
  feedItemReducer
});
