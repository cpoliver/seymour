import React from 'react';
import { shallow } from 'enzyme';

import AddFeed from '../../src/components/add-feed';

fdescribe('the add feed component', () => {
  it('should render without crashing', () => {
      const addFeed = shallow(<AddFeed />);
  });

  describe('the text input', () => {
    it('should be rendered correctly', () => {
      const addFeed = shallow(<AddFeed />);
      const input = <input type="text" placeholder="rss feed url" />;

      expect(addFeed.containsMatchingElement(input)).toEqual(true);
    });
  });

  describe('the button', () => {
    it('should be rendered correctly', () => {
      const addFeed = shallow(<AddFeed />);
      const button = <button>Add Feed</button>;

      expect(addFeed.containsMatchingElement(button)).toEqual(true);
    });

    describe('when clicked', () => {
      it('should dispatch an ADD_FEED action', () => {

      });
    });
  });
});
