import { SEND_MESSAGE } from './types';

export function sendMessage(message) {
  console.log('action hit');
  return {
    type: SEND_MESSAGE,
    message
  }
};
