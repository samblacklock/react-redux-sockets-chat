import initialState from './initialState';
import { UPDATE_USER, USER_LOGGED_ON } from '../actions/types';

export default function userReducer(state = initialState.user, action = {}) {
  const { type, ...user } = action;

  switch (type) {
    case (USER_LOGGED_ON):
      return ({ ...state, ...user });

    case (UPDATE_USER):
      return ({ ...state, ...user });

    default:
      return state;
  }
}
