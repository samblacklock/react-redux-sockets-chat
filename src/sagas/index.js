import io from 'socket.io-client';
import { call, put } from 'redux-saga/effects';
import { USER_CONNECTED } from '../actions/types';


const connectToSocket = () => {
  const socket = io('http://localhost:3000');
  return new Promise((resolve) => {
    socket.on('connect', () => {
      console.log('socket connected!', socket.id, socket);
      resolve(socket);
    });
  });
};

export default function* initSagas() {
  try {
    const socket = yield call(connectToSocket);
    yield put({ type: USER_CONNECTED, id: socket.id });
  } catch (error) {
    console.error('Connection to socket failed:', error);
  }
}
