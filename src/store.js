// Imports
import { 
  compose, 
  combineReducers,
  createStore,
  applyMiddleware,
 } from 'redux';
 import thunk from 'redux-thunk';

// App Imports 
import * as userInfo from './Form/Api/reducers';

// Root Reducer
export const rootReducer = combineReducers({
  ...userInfo
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Store
export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  )
)