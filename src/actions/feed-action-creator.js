import { FEED_ACTION_TYPES } from './action-types';

// Action Creators
const addFeed = url => ({
  url,
  type: FEED_ACTION_TYPES.ADD_FEED
});

const deleteFeed = id => ({
  id,
  type: FEED_ACTION_TYPES.DELETE_FEED
});

const editFeed = (id, changes) => ({
  id,
  changes,
  type: FEED_ACTION_TYPES.EDIT_FEED
});

const getFeed = id => ({
  id,
  type: FEED_ACTION_TYPES.GET_FEED
});

// Action Creator (with Dispatch)
export default dispatch => ({
  addFeed: url => dispatch(addFeed(url)),
  deleteFeed: id => dispatch(deleteFeed(id)),
  editFeed: id, changes => dispatch(editFeed(id, changes)),
  getFeed: id => dispatch(getFeed(id))
});
