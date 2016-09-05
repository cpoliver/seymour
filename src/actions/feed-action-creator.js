import { FEED_ACTION_TYPES as types } from './action-types';

export const addFeed = url => ({
  url,
  type: types.ADD_FEED
});

export const deleteFeed = id => ({
  id,
  type: types.DELETE_FEED
});

export const editFeed = (id, changes) => ({
  id,
  changes,
  type: types.EDIT_FEED
});

export const getFeed = id => ({
  id,
  type: types.GET_FEED
});
