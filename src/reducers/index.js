import { combineReducers } from 'redux';
import messages from './messagesReducer';
import user from './userReducer';
import partner from './partnerReducer';
import 'babel-polyfill';

const combinedReducers = combineReducers({
  messages,
  user,
  partner
});

const rootReducer = (state, action) => combinedReducers(state, action);

export default rootReducer;
