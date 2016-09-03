import { FEED_ITEM_ACTION_TYPES } from './action-types';

// Action Creators
const share = (id, shareType) => ({
  id,
  shareType,
  type: FEED_ITEM_ACTION_TYPES.SHARE
});

const toggleHidden = (id, isHidden) => ({
  id,
  isHidden,
  type: FEED_ITEM_ACTION_TYPES.TOGGLE_HIDDEN
});

const toggleRead = (id, isRead) => ({
  id,
  isRead,
  type: FEED_ITEM_ACTION_TYPES.TOGGLE_READ
});

const toggleStarred = (id, isStarred) => ({
  id,
  isStarred,
  type: FEED_ITEM_ACTION_TYPES.TOGGLE_STARRED
});

// Action Creator (with Dispatch)
export default const FeedItemActionCreator => dispatch => ({
  share: (id, shareType) => dispatch(share(id, shareType)),
  toggleHidden: (id, isHidden) => dispatch(toggleHidden(id, isHidden)),
  toggleRead: (id, isRead) => dispatch(toggleRead(id, isRead)),
  toggleStarred: (id, isStarred) => dispatch(toggleStarred(id, isStarred))
});
