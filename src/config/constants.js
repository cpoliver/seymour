import { fromJS } from 'immutable';

// Helpers
export const INIT_STATE = fromJS({
  feeds: {}
});

export const NO_OP = () => {};

// Feed Config
const NUMBER_OF_ENTRIES = 3;

const CORS_PROXY_URL = 'https://crossorigin.me';
const FEED_API_URL = `https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=${NUMBER_OF_ENTRIES}&q=`;

export const buildUrl = feedUrl => `${CORS_PROXY_URL}/${FEED_API_URL}${feedUrl}`;
