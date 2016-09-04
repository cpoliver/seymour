import feedItemActionCreator from '../../src/actions/feed-item-action-creator';
import { FEED_ITEM_ACTION_TYPES as types } from '../../src/actions/action-types';

describe('the feed item action creator', () => {
  let actionCreator, dispatch;
  
  beforeEach(() => {
    dispatch = jest.fn();
    actionCreator = feedItemActionCreator(dispatch);
  });

  describe('the `share` method', () => {
    it('should dispatch the share action', () => {
      const id = '42', feedId = '91', shareType = 'twitter';

      const expectedAction = {
        id,
        feedId,
        type: types.SHARE
      };

      actionCreator.share(id, feedId, shareType);

      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });

  describe('the `toggleHidden` method', () => {
    it('should dispatch the toggleHidden action', () => {
      const id = '42', feedId = '91', isHidden = true;

      const expectedAction = {
        id,
        feedId,
        type: types.TOGGLE_HIDDEN
      };

      actionCreator.toggleHidden(id, feedId, isHidden);

      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });

  describe('the `toggleRead` method', () => {
    it('should dispatch the toggleRead action', () => {
      const id = '42', feedId = '91', isRead = false;

      const expectedAction = {
        id,
        feedId,
        type: types.TOGGLE_READ
      };

      actionCreator.toggleRead(id, feedId, isRead);

      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });

  describe('the `toggleStarred` method', () => {
    it('should dispatch the toggleStarred action', () => {
      const id = '42', feedId = '91', isStarred = true;

      const expectedAction = {
        id,
        feedId,
        type: types.TOGGLE_STARRED 
      };

      actionCreator.toggleStarred(id, feedId, isStarred);

      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });
});
