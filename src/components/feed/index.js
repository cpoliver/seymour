import React, { PropTypes } from 'react';

// import FeedItem from '../feed-item';

const Feed = ({ feed }) => {
  return (
    <div className="c-feed">
      <a className="c-feed__name" href={feed.link}><h2>{feed.title}</h2></a>
      <a className="c-feed__url" href={feed.feedUrl}><small>{feed.feedUrl}</small></a>
      <p className="c-feed__description">{feed.description}</p>
      {
        //feed.entries.map(entry => <FeedItem feedItem={entry} />);
      }
    </div>
  );
};

Feed.propTypes = {
  feed: PropTypes.shape({
    feedUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string.isRequired,
    type: PropTypes.string,
    entries: PropTypes.arrayOf(PropTypes.shape({
      mediaGroups: PropTypes.array, // TODO: implement properly
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publishedDate: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })).isRequired
  })
};

export default Feed;
