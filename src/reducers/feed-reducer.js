import { Map } from 'immutable';
import shortid from 'shortid';

import { INIT_STATE } from '../config/constants';
import { FEED_ACTION_TYPES as actionType } from '../actions/action-types';

export default function feedReducer(state = INIT_STATE, action) {
  const actions = {
    [actionType.ADD_FEED]: () => {
      return state.updateIn(
        ['feeds'],
        feeds => feeds.set(shortid.generate(), Map({ url: action.url }))
      );
    },
    [actionType.DELETE_FEED]: () => {
      return state.deleteIn(['feeds', action.id]);
    },
    [actionType.EDIT_FEED]: () => {
      return state.mergeIn(['feeds', action.id], action.changes);
    },
    [actionType.GET_FEED]: () => {
      return state.getIn(['feeds', action.id]);
    },
    [actionType.REFESH_FEED_DATA]: () => {
      // TODO: implement feed retrieval with redux-thunk
    }
  };

  return actions[action.type] ? actions[action.type]() : state;
}
