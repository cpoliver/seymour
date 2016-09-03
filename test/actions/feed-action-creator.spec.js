import feedActionCreator from '../../src/actions/feed-action-creator';
import { FEED_ACTION_TYPES as types } from '../../src/actions/action-types';

describe('the feed action creator', () => {
  let actionCreator, dispatch;
  
  beforeEach(() => {
    dispatch = jest.fn();
    actionCreator = feedActionCreator(dispatch);
  });

  describe('the `addFeed` method', () => {
    it('should dispatch the addFeed action', () => {
      const url = 'http://test.seymour.com';

      const expectedAction = {
        url,
        type: types.ADD_FEED
      };

      actionCreator.addFeed(url);

      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });

  describe('the `deleteFeed` method', () => {
    it('should dispatch the deleteFeed action', () => {
      const id = 42;

      const expectedAction = {
        id,
        type: types.DELETE_FEED
      };

      actionCreator.deleteFeed(id);

      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });

  describe('the `editFeed` method', () => {
    it('should dispatch the editFeed action', () => {
      const id = 42, changes = { url: 'http://test.seymour.com/changed' };

      const expectedAction = {
        id,
        changes,
        type: types.EDIT_FEED
      };

      actionCreator.editFeed(id, changes);

      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });

  describe('the `getFeed` method', () => {
    it('should dispatch the getFeed action', () => {
      const id = 42;

      const expectedAction = {
        id,
        type: types.GET_FEED
      };

      actionCreator.getFeed(id);

      expect(dispatch).toBeCalledWith(expectedAction);
    });
  });
});
