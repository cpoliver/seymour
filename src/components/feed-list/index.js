import React, { PropTypes } from 'react';

import Feed from '../feed';

const FeedList = ({ feeds }) => (
  <ol className="c-feed-list">
    {
      feeds.map((feed, index) => <li key={index}><Feed key={index} feed={feed}/></li>)
    }
  </ol>
);

FeedList.propTypes = {
  feeds: PropTypes.arrayOf(PropTypes.shape({
    feedUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string.isRequired,
    type: PropTypes.string,
    entries: PropTypes.array.isRequired
  })).isRequired
};

export default FeedList;
