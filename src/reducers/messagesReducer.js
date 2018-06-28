import initialState from './initialState';
import { MESSAGE_RECIEVED, DELETE_LAST_MESSAGE, FADE_LAST_MESSAGE } from '../actions/types';

export default function messagesReducer(state = initialState.messages, action = {}) {
  let newState;
  switch (action.type) {
    case (MESSAGE_RECIEVED):
      newState = Object.assign([], state);
      newState.push(action.message);
      return newState;

    case (DELETE_LAST_MESSAGE):
      newState = state.slice(0, -1);
      return newState;

    case (FADE_LAST_MESSAGE):
      newState = Object.assign([], state);
      newState[newState.length - 1].fade = true;
      return newState;

    default:
      return state;
  }
}
