import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducer';
import thunk from 'redux-thunk';

export function initializeStore () {
  return createStore(
    reducer,
    applyMiddleware(thunk),
  )
}
