import { FEED_ACTION_TYPES as actionType } from './action-types';

export const addFeed = url => ({
  url,
  type: actionType.ADD_FEED
});

export const deleteFeed = id => ({
  id,
  type: actionType.DELETE_FEED
});

export const editFeed = (id, changes) => ({
  id,
  changes,
  type: actionType.EDIT_FEED
});

export const getFeed = id => ({
  id,
  type: actionType.GET_FEED
});
