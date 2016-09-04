import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/components/app';
import Toolbar from '../../src/components/toolbar';

describe('the app component', () => {
  it('should render without crashing', () => {
      const app = shallow(<App />);
  });

  it('should contain a toolbar', () => {
      const app = shallow(<App />);
      const toolbar = <Toolbar />;

      expect(app.contains(toolbar)).toEqual(true);
  });
});
