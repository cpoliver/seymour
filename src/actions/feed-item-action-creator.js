import { FEED_ITEM_ACTION_TYPES } from './action-types';

// Action Creators
const share = (id, feedId, shareType) => ({
  id,
  feedId, // TODO: remove and make a prefix to the item id?
  type: FEED_ITEM_ACTION_TYPES.SHARE
});

const toggleHidden = (id, feedId, isHidden) => ({
  id,
  feedId, // TODO: remove and make a prefix to the item id?
  type: FEED_ITEM_ACTION_TYPES.TOGGLE_HIDDEN
});

const toggleRead = (id, feedId, isRead) => ({
  id,
  feedId, // TODO: remove and make a prefix to the item id?
  type: FEED_ITEM_ACTION_TYPES.TOGGLE_READ
});

const toggleStarred = (id, feedId, isStarred) => ({
  id,
  feedId, // TODO: remove and make a prefix to the item id?
  type: FEED_ITEM_ACTION_TYPES.TOGGLE_STARRED
});

// Action Creator (with Dispatch)
export default dispatch => ({
  share: (id, feedId, shareType) => dispatch(share(id, feedId, shareType)),
  toggleHidden: (id, feedId, isHidden) => dispatch(toggleHidden(id, feedId, isHidden)),
  toggleRead: (id, feedId, isRead) => dispatch(toggleRead(id, feedId, isRead)),
  toggleStarred: (id, feedId, isStarred) => dispatch(toggleStarred(id, feedId, isStarred))
});
