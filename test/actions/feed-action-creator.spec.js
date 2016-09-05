import * as actionCreator from '../../src/actions/feed-action-creator';
import { FEED_ACTION_TYPES as types } from '../../src/actions/action-types';

describe('the feed action creator', () => {
  describe('the `addFeed` method', () => {
    it('should return the addFeed action', () => {
      const expected = {
        url: 'http://test.seymour.com',
        type: types.ADD_FEED
      };

      const actual = actionCreator.addFeed(expected.url);

      expect(actual).toEqual(expected);
    });
  });

  describe('the `deleteFeed` method', () => {
    it('should return the deleteFeed action', () => {
      const expected = {
        id: '42',
        type: types.DELETE_FEED
      };

      const actual = actionCreator.deleteFeed(expected.id);

      expect(actual).toEqual(expected);
    });
  });

  describe('the `editFeed` method', () => {
    it('should return the editFeed action', () => {
      const expected = {
        id: '42',
        changes: { url: 'http://test.seymour.com/changed' },
        type: types.EDIT_FEED
      };

      const actual = actionCreator.editFeed(expected.id, expected.changes);

      expect(actual).toEqual(expected);
    });
  });

  describe('the `getFeed` method', () => {
    it('should return the getFeed action', () => {
      const expected = {
        id: '42',
        type: types.GET_FEED
      };

      const actual = actionCreator.getFeed(expected.id);

      expect(actual).toEqual(expected);
    });
  });
});
