import { FEED_ITEM_ACTION_TYPES as types } from './action-types';

export const share = (id, feedId, shareType) => ({
  id,
  feedId, // TODO: remove and make a prefix to the item id?
  shareType,
  type: types.SHARE
});

export const toggleHidden = (id, feedId, isHidden) => ({
  id,
  feedId, // TODO: remove and make a prefix to the item id?
  type: types.TOGGLE_HIDDEN
});

export const toggleRead = (id, feedId, isRead) => ({
  id,
  feedId, // TODO: remove and make a prefix to the item id?
  type: types.TOGGLE_READ
});

export const toggleStarred = (id, feedId, isStarred) => ({
  id,
  feedId, // TODO: remove and make a prefix to the item id?
  type: types.TOGGLE_STARRED
});
