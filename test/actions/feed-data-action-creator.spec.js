import MockDate from 'mockdate';

import * as actionCreator from '../../src/actions/feed-data-action-creator';
import { FEED_DATA_ACTION_TYPES as actionType } from '../../src/actions/action-types';

const date = 1434319925275;

describe('the feed data action creator', () => {
  beforeEach(() => {
    MockDate.set(1434319925275);
  });

  describe('the `requestFeed` method', () => {
    it('should return the requestFeed action', () => {
      const expected = {
        url: 'http://test.seymour.com',
        type: actionType.REQUEST_FEED
      };

      const actual = actionCreator.requestFeed(expected.url);

      expect(actual).toEqual(expected);
    });
  });

  describe('the `receiveFeed` method', () => {
    it('should return the receiveFeed action', () => {
      const mockResponse = {
              feed: 'mockfeed'
            },
            expected = {
              id: 't2x8d2s',
              type: actionType.RECEIVE_FEED,
              feed: mockResponse.feed,
              lastUpdated: new Date(1434319925275)
            };

      const actual = actionCreator.receiveFeed(expected.id, mockResponse);

      expect(actual).toEqual(expected);
    });
  });

  describe('the `fetchFeed` method', () => {
    it('should return a function', () => {
      const actual = actionCreator.fetchFeed('http://test.seymour.com');

      expect(typeof actual).toEqual('function');
    });

    describe('the returned function', () => {
      describe('when called', () => {
        it('should call dispatch with the request feed action', () => {
          const fn = actionCreator.fetchFeed('http://test.seymour.com'),
                mockDispatch = jest.fn();

          fn(mockDispatch);

          expect(mockDispatch).toHaveBeenCalledWith();
        });
      });
    });
  });

  describe('the `requestFeed` method', () => {
    it('should return the requestFeed action', () => {
      const expected = {
        url: 'http://test.seymour.com',
        type: actionType.REQUEST_FEED
      };

      const actual = actionCreator.requestFeed(expected.url);

      expect(actual).toEqual(expected);
    });
  });

  describe('the `requestFeed` method', () => {
    it('should return the requestFeed action', () => {
      const expected = {
        url: 'http://test.seymour.com',
        type: actionType.REQUEST_FEED
      };

      const actual = actionCreator.requestFeed(expected.url);

      expect(actual).toEqual(expected);
    });
  });
});


// 
// 
// shouldFetchFeed
// fetchFeedIfNeeded
