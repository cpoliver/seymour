import React from 'react';
import { shallow } from 'enzyme';

import Toolbar from '../../src/components/toolbar';
import AddFeed from '../../src/components/add-feed';

describe('the toolbar component', () => {
  it('should render without crashing', () => {
      const toolbar = shallow(<Toolbar />);
  });

  it('should contain an add feed component', () => {
      const toolbar = shallow(<Toolbar />);
      const addFeed = <AddFeed />;

      expect(toolbar.contains(addFeed)).toEqual(true);
  });
});
