import { FEED_ACTION_TYPES } from '../actions/action-types';

export default function feedReducer(state = [], action) {
  const actions = {
    [FEED_ACTION_TYPES.ADD_FEED]: (state = {}, action) => {

    },
    [FEED_ACTION_TYPES.DELETE_FEED]: (state = {}, action) => {

    },
    [FEED_ACTION_TYPES.EDIT_FEED]: (state = {}, action) => {

    },
    [FEED_ACTION_TYPES.GET_FEED]: (state = {}, action) => {

    },
    [FEED_ACTION_TYPES.REFESH_FEED_DATA]: (state = {}, action) => {

    }
  };

  return actions[action.type] ? actions[action.type]() : state;
}
