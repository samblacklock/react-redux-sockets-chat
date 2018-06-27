import initialState from './initialState';
import { UPDATE_USER } from '../actions/types';

export default function userReducer(state = initialState.user, action = {}) {
  const { type, ...user } = action;

  switch (action.type) {
    case (UPDATE_USER):
      console.log(user);
      return ({ ...state, ...user });

    default:
      return state;
  }
}
