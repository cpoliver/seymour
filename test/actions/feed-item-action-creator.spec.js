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
      const id = 42, shareType = 'twitter';

      const expectedAction = {
        id,
        shareType,
        type: types.SHARE
      };

      actionCreator.share(id, shareType);

      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });

  describe('the `toggleHidden` method', () => {
    it('should dispatch the toggleHidden action', () => {
      const id = 42, isHidden = true;

      const expectedAction = {
        id,
        isHidden,
        type: types.TOGGLE_HIDDEN
      };

      actionCreator.toggleHidden(id, isHidden);

      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });

  describe('the `toggleRead` method', () => {
    it('should dispatch the toggleRead action', () => {
      const id = 42, isRead = false;

      const expectedAction = {
        id,
        isRead,
        type: types.TOGGLE_READ
      };

      actionCreator.toggleRead(id, isRead);

      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });

  describe('the `toggleStarred` method', () => {
    it('should dispatch the toggleStarred action', () => {
      const id = 42, isStarred = true;

      const expectedAction = {
        id,
        isStarred,
        type: types.TOGGLE_STARRED
      };

      actionCreator.toggleStarred(id, isStarred);

      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });
});
