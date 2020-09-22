import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducer/auth';
import thunkMiddleware from 'redux-thunk';
const rootReducer = combineReducers({
  auth: authReducer,
});
let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
