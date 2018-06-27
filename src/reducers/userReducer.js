import initialState from './initialState';
import { USER_CONNECTED } from '../actions/types';

export default function usersReducer(state = initialState.user, action = {}) {
  switch (action.type) {
    case (USER_CONNECTED):
      return ({ ...state, id: action.id });

    default:
      return state;
  }
}
