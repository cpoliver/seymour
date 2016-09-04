import React, { PropTypes } from 'react';

import actionCreator from '../../actions/feed-action-creator';

const AddFeed = ({ onClick }) => (
  <div>
    <input type="text" placeholder="rss feed url" />
    <button onClick={onClick}>Add Feed</button>
  </div>
);

AddFeed.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddFeed;
