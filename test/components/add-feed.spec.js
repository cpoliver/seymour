import React from 'react';
import { shallow } from 'enzyme';

import AddFeed from '../../src/components/add-feed';
import { NO_OP } from '../../src/config/constants';

describe('the add feed component', () => {
  it('should render without crashing', () => {
      const addFeed = shallow(<AddFeed onAddFeed={NO_OP} />);
  });

  describe('the text input', () => {
    it('should be rendered correctly', () => {
      const addFeed = shallow(<AddFeed onAddFeed={NO_OP} />);
      const input = <input type="text" placeholder="rss feed url" />;

      expect(addFeed.containsMatchingElement(input)).toEqual(true);
    });
  });

  describe('the button', () => {
    it('should be rendered correctly', () => {
      const addFeed = shallow(<AddFeed onAddFeed={NO_OP} />);
      const button = <button>Add Feed</button>;

      expect(addFeed.containsMatchingElement(button)).toEqual(true);
    });
  });
});
