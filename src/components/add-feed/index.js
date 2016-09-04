import React, { PropTypes } from 'react';

import actionCreator from '../../actions/feed-action-creator';

const dispatch = () => {};

const AddFeed = () => (
  <div>
    <input type="text" placeholder="rss feed url" />
    <button onClick={actionCreator(dispatch).addFeed()}>Add Feed</button>
  </div>
);

AddFeed.propTypes = {
};

export default AddFeed;
