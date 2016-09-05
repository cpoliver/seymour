// Lib
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// App
import App from './components/app';
import { makeStore} from './store';

// Styles
import '../node_modules/skeleton-css/css/normalize.css';
import '../node_modules/skeleton-css/css/skeleton.css';
import './styles.css';

export const store = makeStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
