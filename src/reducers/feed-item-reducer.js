import { INIT_STATE } from '../config/constants';
import { FEED_ITEM_ACTION_TYPES } from '../actions/action-types';

export default function feedItemReducer(state = INIT_STATE, action) {
  const actions = {
    [FEED_ITEM_ACTION_TYPES.SHARE]: () => {

    },
    [FEED_ITEM_ACTION_TYPES.TOGGLE_HIDDEN]: () => {

    },
    [FEED_ITEM_ACTION_TYPES.TOGGLE_READ]: () => {

    },
    [FEED_ITEM_ACTION_TYPES.TOGGLE_STARRED]: () => {

    }
  };

  return actions[action.type] ? actions[action.type]() : state;
}
