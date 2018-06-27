import { combineReducers } from 'redux';
import messages from './messagesReducer';
import 'babel-polyfill';

const combinedReducers = combineReducers({
  messages
});

const rootReducer = (state, action) => combinedReducers(state, action);

export default rootReducer;
