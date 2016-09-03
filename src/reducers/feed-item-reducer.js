import { FEED_ITEM_ACTION_TYPES } from '../actions/action-types';

export default function feedItemReducer(state = [], action) {
  const actions = {
    [FEED_ITEM_ACTION_TYPES.SHARE]: (state = {}, action) => {

    },
    [FEED_ITEM_ACTION_TYPES.TOGGLE_HIDDEN]: (state = {}, action) => {

    },
    [FEED_ITEM_ACTION_TYPES.TOGGLE_READ]: (state = {}, action) => {

    },
    [FEED_ITEM_ACTION_TYPES.TOGGLE_STARRED]: (state = {}, action) => {

    }
  };

  return actions[action.type] ? actions[action.type]() : state;
}
