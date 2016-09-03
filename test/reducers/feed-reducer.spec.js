import shortid from 'shortid';

import { INIT_STATE } from '../../src/config/constants';
import { FEED_ACTION_TYPES as types } from '../../src/actions/action-types';

import reducer from '../../src/reducers/feed-reducer';

describe('the feed reducer', () => {
  describe('when called with an add feed action', () => {
    it('should add the feed to the state', () => {
      const state = INIT_STATE,
        action = {
          url: 'http://newfeed.seymour.com',
          type: types.ADD_FEED
        };

      const newState = reducer(state, action);
      console.log(newState);

      const feeds = newState.get('feeds'),
        feed = feeds.first();

      expect(feeds.size).toEqual(1);
      expect(shortid.isValid(feed.get('id'))).toBe(true);
      expect(feed.get('url')).toEqual(action.url);
    });
  });
});

// const type = types.DELETE_FEED

// const type = types.EDIT_FEED

// const type = types.GET_FEED

// const type = types.REFESH_FEED_DATA
