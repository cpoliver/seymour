// Lib
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// App
import App from './components/app';
import { makeStore} from './store';

export const store = makeStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
