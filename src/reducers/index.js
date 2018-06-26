import { combineReducers } from 'redux';
import messages from './messagesReducer';

const combinedReducers = combineReducers({
  messages
});

const rootReducer = (state, action) => combinedReducers(state, action);

export default rootReducer;
