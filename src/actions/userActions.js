import { UPDATE_USER } from './types';

export function updateUser(user) {
  console.log('action', user);
  return {
    type: UPDATE_USER,
    ...user
  }
};
