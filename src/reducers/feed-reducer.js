import { List, Map } from 'immutable';
import shortid from 'shortid';

import { INIT_STATE } from '../config/constants';
import { FEED_ACTION_TYPES } from '../actions/action-types';

export default function feedReducer(state = INIT_STATE, action) {
  const actions = {
    [FEED_ACTION_TYPES.ADD_FEED]: () => {
      return state.updateIn(
        ['feeds'],
        feeds => feeds.push(Map({
          id: shortid.generate(),
          url: action.url
        }))
      );
    },
    [FEED_ACTION_TYPES.DELETE_FEED]: () => {

    },
    [FEED_ACTION_TYPES.EDIT_FEED]: () => {

    },
    [FEED_ACTION_TYPES.GET_FEED]: () => {

    },
    [FEED_ACTION_TYPES.REFESH_FEED_DATA]: () => {

    }
  };

  return actions[action.type] ? actions[action.type]() : state;
}
