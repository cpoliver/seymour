import React, { PropTypes } from 'react';

import './feed-item.css';

const FeedItem = ({ feedItem }) => (
  <li className="c-feed-item">
    <div className="c-feed-item__header">
      <span className="c-feed-item__published">
        Posted: {feedItem.publishedDate}
      </span>
    </div>
    <div className="c-feed-item__inner">
      <a href={feedItem.link} className="c-feed-item__title">{feedItem.title}</a>
      <br />
      <p className="c-feed-item__content" dangerouslySetInnerHTML={{__html: feedItem.content }}></p>
    </div>
    <div className="c-feed-item__footer">
      <ul className="c-feed-item__categories">
        {feedItem.categories.map((category, index) => <li key={index}><a href="#">{category}</a></li>)}
      </ul>
    </div>
  </li>
);

FeedItem.propTypes = {
  feedItem: PropTypes.shape({
    mediaGroups: PropTypes.array, // TODO: implement properly
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    author: PropTypes.string,
    publishedDate: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string, // TODO: generate from the content
    content: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string),
  })
};

export default FeedItem;
