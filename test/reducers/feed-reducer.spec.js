import { List, Map } from 'immutable';
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

      const newState = reducer(state, action),
        feeds = newState.get('feeds'),
        id = feeds.keySeq().first(),
        url = feeds.first().get('url');

      expect(feeds.size).toEqual(1);
      expect(shortid.isValid(id)).toBe(true);
      expect(url).toEqual(action.url);
    });
  });

  describe('when called with a delete feed action', () => {
    it('should remove the specified feed from the state', () => {
      const state = Map({
          feeds: Map({ '42': {} })
        }),
        action = {
          id: '42',
          type: types.DELETE_FEED
        };

      const newState = reducer(state, action),
        feeds = newState.get('feeds');

      expect(feeds.size).toEqual(0);
    });
  });
});

// const type = types.EDIT_FEED

// const type = types.GET_FEED

// const type = types.REFESH_FEED_DATA
