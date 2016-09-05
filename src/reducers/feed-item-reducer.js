import { INIT_STATE } from '../config/constants';
import { FEED_ITEM_ACTION_TYPES as actionType } from '../actions/action-types';

export default function feedItemReducer(state = INIT_STATE, action) {
  const actions = {
    [actionType.SHARE]: () => {

    },
    [actionType.TOGGLE_HIDDEN]: () => {
      return state.updateIn(['feeds', action.feedId, action.id], item => toggle(item, 'isHidden'));
    },
    [actionType.TOGGLE_READ]: () => {
      return state.updateIn(['feeds', action.feedId, action.id], item => toggle(item, 'isRead'));
    },
    [actionType.TOGGLE_STARRED]: () => {
      return state.updateIn(['feeds', action.feedId, action.id], item => toggle(item, 'isStarred'));
    }
  };

  return actions[action.type] ? actions[action.type]() : state;
}

function toggle(feedItem, propertyName) {
  return feedItem.set(propertyName, !feedItem.get(propertyName));
}
