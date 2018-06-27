import initialState from './initialState';
import { UPDATE_PARTNER } from '../actions/types';

export default function partnerReducer(state = initialState.partner, action = {}) {
  const { type, ...partner } = action;

  switch (action.type) {
    case (UPDATE_PARTNER):
      console.log(partner);
      return ({ ...state, ...partner });

    default:
      return state;
  }
}
