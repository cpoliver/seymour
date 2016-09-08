import { FEED_DATA_ACTION_TYPES as actionType } from './action-types';
import { buildUrl } from '../config/constants';

export const requestFeed = url => ({
  url,
  type: actionType.REQUEST_FEED
});

export const receiveFeed = (id, response) => ({
  id,
  type: actionType.RECEIVE_FEED,
  feed: response.feed,
  lastUpdated: new Date()
});

export function fetchFeed(feedUrl) {
  const url = buildUrl(feedUrl);

  return dispatch => {
    dispatch(requestFeed(url));

      return fetch(url)
        .then(response => response.json())
        .then(json => dispatch(receiveFeed(shortid.generate(), json.responseData)));
  };
}

export function shouldFetchFeed(state, feedUrl) {
  const feedItems = state.itemsByFeed[feedUrl];

  if (!feedItems) return true;
  if (feedItems.isFetching) return false;

  return feedItems.didInvalidate;
}

export function fetchFeedIfNeeded(feedUrl) {
  return (dispatch, getState) =>
    shouldFetchFeed(getState(), feedUrl)
      ? dispatch(fetchFeed(feedUrl))
      : Promise.resolve();
};
