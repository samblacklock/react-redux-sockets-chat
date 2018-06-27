import io from 'socket.io-client';
import { call, put } from 'redux-saga/effects';
import { UPDATE_USER } from '../actions/types';


const connectToSocket = () => {
  const socket = io('http://localhost:3000');
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

export default function* initSagas() {
  try {
    const socket = yield call(connectToSocket);
    yield put({ type: UPDATE_USER, id: socket.id });
  } catch (error) {
    console.error('Connection to socket failed:', error);
  }
}
