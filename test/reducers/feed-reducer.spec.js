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

      const newFeeds = reducer(state, action).get('feeds'),
        id = newFeeds.keySeq().first(),
        url = newFeeds.first().get('url');

      expect(newFeeds.size).toEqual(1);
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

      const newFeeds = reducer(state, action).get('feeds');

      expect(newFeeds.size).toEqual(0);
    });
  });

  describe('when called with an edit feed action', () => {
    it('should remove the specified feed from the state', () => {
      const state = Map({
          feeds: Map({ '42': {
            url: 'http://oldurl.seymour.com',
            anotherProperty: 'do not alter'
          } })
        }),
        action = {
          id: '42',
          changes: { url: 'http://newurl.seymour.com', newProperty: 'add this' },
          type: types.EDIT_FEED
        };

      const newFeeds = reducer(state, action).get('feeds');

      expect(newFeeds.size).toEqual(1);
      expect(newFeeds.get('42')).toEqual({
        url: 'http://newurl.seymour.com',
        anotherProperty: 'do not alter',
        newProperty: 'add this'
      });
    });
  });
});

// const type = types.EDIT_FEED

// const type = types.GET_FEED

// const type = types.REFESH_FEED_DATA
