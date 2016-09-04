import React, { PropTypes } from 'react';

import AddFeed from '../add-feed';
import { NO_OP } from '../../config/constants';

const Toolbar = () => (
  <div className="c-toolbar">
    <AddFeed onClick={NO_OP}/>
  </div>
);

export default Toolbar;
