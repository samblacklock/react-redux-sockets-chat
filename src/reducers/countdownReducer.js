import initialState from './initialState';
import { COUNTDOWN } from '../actions/types';

export default function userReducer(state = initialState.countdown, action = {}) {
  const { type, ...settings } = action;

  switch (type) {
    case (COUNTDOWN):
      return ({ ...state, ...settings });

    default:
      return state;
  }
}



