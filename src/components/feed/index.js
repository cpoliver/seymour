import React, { PropTypes } from 'react';

import FeedItem from '../feed-item';

import './feed.css';

const Feed = ({ feed }) => (
  <div className="c-feed">
    <a className="c-feed__title" href={feed.link}>{feed.title}</a>
    <a className="c-feed__url" href={feed.feedUrl}><small>{feed.feedUrl}</small></a>
    <p className="c-feed__description">{feed.description}</p>
    {
      feed.entries.map((entry, index) => <FeedItem key={index} feedItem={entry} />)
    }
  </div>
);

Feed.propTypes = {
  feed: PropTypes.shape({
    feedUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string.isRequired,
    type: PropTypes.string,
    entries: PropTypes.array.isRequired
  })
};

export default Feed;
