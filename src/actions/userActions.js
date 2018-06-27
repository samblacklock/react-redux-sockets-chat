import { UPDATE_USER, USER_LOGGED_ON } from './types';

export function userLoggedOn(user) {
  return {
    type: USER_LOGGED_ON,
    ...user
  };
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    ...user
  };
}
