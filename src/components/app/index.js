import React from 'react';

import Toolbar from '../toolbar';
import Feed from '../feed';

// TODO: remove once the get feed data action is implemented
import mockFeed from '../../../test/test-data/mock-feed-data.json';

import './app.css';

const App = () => (
  <div className="app">
    <Toolbar />
    <Feed feed={mockFeed.responseData.feed} />
  </div>
);

export default App;
