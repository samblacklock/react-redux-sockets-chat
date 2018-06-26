import initialState from './initialState';
import { MESSAGE_RECIEVED } from '../actions/types';

export default function messagesReducer(state = initialState.messages, action = {}) {
  let newState;
  switch (action.type) {
    case (MESSAGE_RECIEVED):
      newState = Object.assign([], state);
      newState.push(action.message);
      console.log(newState, state);
      return newState;

    default:
      return state;
  }
}

