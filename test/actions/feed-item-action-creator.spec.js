import * as actionCreator from '../../src/actions/feed-item-action-creator';
import { FEED_ITEM_ACTION_TYPES as actionType } from '../../src/actions/action-types';

describe('the feed item action creator', () => {
  describe('the `share` method', () => {
    it('should return the share action', () => {
      const expected = {
        id: '42',
        feedId: '91',
        shareType: 'twitter',
        type: actionType.SHARE
      };

      const actual = actionCreator.share(expected.id, expected.feedId, expected.shareType);

      expect(actual).toEqual(expected);
    });
  });

  describe('the `toggleHidden` method', () => {
    it('should return the toggleHidden action', () => {
      const expected = {
        id: '42',
        feedId: '91',
        type: actionType.TOGGLE_HIDDEN
      };

      const actual = actionCreator.toggleHidden(expected.id, expected.feedId);

      expect(actual).toEqual(expected);
    });
  });

  describe('the `toggleRead` method', () => {
    it('should return the toggleRead action', () => {
      const expected = {
        id: '42',
        feedId: '91',
        type: actionType.TOGGLE_READ
      };

      const actual = actionCreator.toggleRead(expected.id, expected.feedId);

      expect(actual).toEqual(expected);
    });
  });

  describe('the `toggleStarred` method', () => {
    it('should return the toggleStarred action', () => {
       const expected = {
        id: '42',
        feedId: '91',
        type: actionType.TOGGLE_STARRED 
      };

      const actual = actionCreator.toggleStarred(expected.id, expected.feedId);

      expect(actual).toEqual(expected);
    });
  });
});
