import { combineReducers } from 'redux';
import messages from './messagesReducer';
import user from './userReducer';
import 'babel-polyfill';

const combinedReducers = combineReducers({
  messages,
  user
});

const rootReducer = (state, action) => combinedReducers(state, action);

export default rootReducer;
