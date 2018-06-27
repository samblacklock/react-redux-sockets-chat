import io from 'socket.io-client';
import { call, put, fork, take, select, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { UPDATE_USER, SEND_MESSAGE, MESSAGE_RECIEVED, USER_LOGGED_ON, UPDATE_PARTNER } from '../actions/types';

const getUser = state => state.user;

function connectToSocket({ type, ...user }) {
  const socket = io.connect('http://localhost:3000', {
    query: {
      user: JSON.stringify(user)
    }
  });

  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

function subscribe(socket) {
  return eventChannel((emit) => {
    socket.on('message', message => emit({ type: 'message', message }));
    socket.on('new_user', user => emit({ type: 'new_user', ...user }));
    socket.on('error', console.error);

    return () => socket.close();
  });
}

function* readMessage(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    const { type, ...data } = yield take(channel);

    switch (type) {
      case ('new_user'):
        console.log('new user', data)
        yield put({ type: UPDATE_PARTNER, ...data });
        break;
      default:
        yield put({ type: MESSAGE_RECIEVED, ...data });
    }
  }
}

function* sendMessage(socket) {
  while (true) {
    const { message } = yield take(SEND_MESSAGE);
    console.log('in sendmessage saga');
    socket.emit('message', { message });
  }
}

export default function* initSagas() {
  const user = yield take(USER_LOGGED_ON);

  try {
    const socket = yield call(connectToSocket, user);

    // keep users's socket id in the store
    yield put({ type: UPDATE_USER, id: socket.id });
    yield fork(sendMessage, socket);
    yield fork(readMessage, socket);
  } catch (error) {
    console.error('Connection to socket failed:', error);
  }
}
