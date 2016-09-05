import React from 'react';

import AddFeed from '../../containers/add-feed-container';

import './toolbar.css';

const Toolbar = () => (
  <div className="c-toolbar">
    <div className="c-toolbar__inner">
      <AddFeed />
    </div>
  </div>
);

export default Toolbar;
