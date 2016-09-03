import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/components/app';

describe('the App component', () => {
  it('should render without crashing', () => {
      const app = shallow(<App />);
      console.log(app);
  });

  it('should contain the placeholder heading text', () => {
      const app = shallow(<App />);
      const placeholder = <h1>&lt;app goes here /&gt;</h1>;

      expect(app.contains(placeholder)).toEqual(true);
  });
});
