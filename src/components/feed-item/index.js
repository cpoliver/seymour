import React, { PropTypes } from 'react';

const FeedItem = ({ feedItem }) => {
  return (
    <div className="c-feed-item">
      <a href={feedItem.link}>
        <small className="c-feed-item__author">{feedItem.author}</small>,  
        <small className="c-feed-item__published">{feedItem.publishedDate}</small>
        <br />
        <h4 className="c-feed-item__title">{feedItem.title}</h4>
      </a>
      <p className="c-feed-item__content" dangerouslySetInnerHTML={{__html: feedItem.content}}></p>
      <small className="c-feed-item__categories">{feedItem.categories.join(', ')}</small>
    </div>
  );
};

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
