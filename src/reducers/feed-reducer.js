import { List, Map } from 'immutable';
import shortid from 'shortid';

import { INIT_STATE } from '../config/constants';
import { FEED_ACTION_TYPES } from '../actions/action-types';

export default function feedReducer(state = INIT_STATE, action) {
  const actions = {
    [FEED_ACTION_TYPES.ADD_FEED]: () => {
      return state.updateIn(
        ['feeds'],
        feeds => feeds.set(shortid.generate(), Map({ url: action.url }))
      );
    },
    [FEED_ACTION_TYPES.DELETE_FEED]: () => {
      return state.deleteIn(['feeds', action.id]);
    },
    [FEED_ACTION_TYPES.EDIT_FEED]: () => {
      return state.mergeIn(['feeds', action.id], action.changes);
    },
    [FEED_ACTION_TYPES.GET_FEED]: () => {
      return state.getIn(['feeds', action.id]);
    },
    [FEED_ACTION_TYPES.REFESH_FEED_DATA]: () => {
      // TODO: implement feed retrieval with redux-thunk
    }
  };

  return actions[action.type] ? actions[action.type]() : state;
}
