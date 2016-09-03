import reducer from '../../src/reducers/feed-reducer';

import { INIT_STATE } from '../../src/config/constants';
import { FEED_ACTION_TYPES as types } from '../../src/actions/action-types';

describe('the feed reducer', () => {
  describe('when called with an add feed action', () => {
    it('should add the feed to the state', () => {
      const state = INIT_STATE,
        action = {
          url: 'http://newfeed.seymour.com',
          type: types.ADD_FEED
        };

      const newState = reducer(state, action);

      expect(newState.feeds.length).toEqual(1);
      expect(newState.feeds[0].url).toEqual(url);
      expect(typeof newState.feeds[0].id).toBe('number');
    });
  });
});

// const type = types.DELETE_FEED

// const type = types.EDIT_FEED

// const type = types.GET_FEED

// const type = types.REFESH_FEED_DATA
