// Lib
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// App
import App from './components/app';
import rootReducer from './reducers';

const store = createStore(
  rootReducer
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
