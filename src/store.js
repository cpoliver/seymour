import { createStore } from 'redux';
import rootReducer from './reducers';

export function makeStore() {
  return createStore(rootReducer);
}
