import { combineReducers } from 'redux';
import messages from './messagesReducer';
import user from './userReducer';
import partner from './partnerReducer';
import countdown from './countdownReducer';
import 'babel-polyfill';

const combinedReducers = combineReducers({
  messages,
  user,
  partner,
  countdown
});

const rootReducer = (state, action) => combinedReducers(state, action);

export default rootReducer;
