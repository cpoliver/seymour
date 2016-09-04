import { fromJS, List, Map } from 'immutable';
import shortid from 'shortid';

import { INIT_STATE } from '../../src/config/constants';
import { FEED_ITEM_ACTION_TYPES as types } from '../../src/actions/action-types';

import reducer from '../../src/reducers/feed-item-reducer';

describe('the feed item reducer', () => {
  xdescribe('when called with a share action', () => {
    it('should call the appropriate share function', () => {
      // TODO: come back to this when sharing is to be implemented
    });
  });

  describe('when called with an toggle hidden action', () => {
    it('should invert the hidden state of the given feed item', () => {
      const feedId = '42',
        id = '91',
        state = fromJS({
          feeds: {
            [feedId]: {
              [id]: {
                isHidden: true,
                url: 'http://hiddenToggle.seymour.com'
              }
            }
          }
        }),
        action = {
          id,
          feedId,
          type: types.TOGGLE_HIDDEN
        };

      const newFeedItem = reducer(state, action)
        .get('feeds')
        .first()
        .get(id);

      expect(newFeedItem).toEqual(Map({
        isHidden: false,
        url: 'http://hiddenToggle.seymour.com'
      }));
    });
  });

  describe('when called with an toggle read action', () => {
    it('should invert the read state of the given feed item', () => {
      const feedId = '42',
        id = '91',
        state = fromJS({
          feeds: {
            [feedId]: {
              [id]: {
                isRead: false,
                url: 'http://readToggle.seymour.com'
              }
            }
          }
        }),
        action = {
          id,
          feedId,
          type: types.TOGGLE_READ
        };

      const newFeedItem = reducer(state, action)
        .get('feeds')
        .first()
        .get(id);

      expect(newFeedItem).toEqual(Map({
        isRead: true,
        url: 'http://readToggle.seymour.com'
      }));
    });  
  });

  describe('when called with an toggle starred action', () => {
    it('should invert the starred state of the given feed item', () => {
      const feedId = '42',
        id = '91',
        state = fromJS({
          feeds: {
            [feedId]: {
              [id]: {
                isStarred: false,
                url: 'http://starredToggle.seymour.com'
              }
            }
          }
        }),
        action = {
          id,
          feedId,
          type: types.TOGGLE_STARRED
        };

      const newFeedItem = reducer(state, action)
        .get('feeds')
        .first()
        .get(id);

      expect(newFeedItem).toEqual(Map({
        isStarred: true,
        url: 'http://starredToggle.seymour.com'
      }));
    });  
  });
});
