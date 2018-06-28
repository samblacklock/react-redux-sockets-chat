import io from 'socket.io-client';
import { call, put, fork, take, select, takeLatest } from 'redux-saga/effects';
import slashCommand from 'slash-command';
import { eventChannel } from 'redux-saga';
import { 
  UPDATE_USER,
  SEND_MESSAGE,
  MESSAGE_RECIEVED,
  USER_LOGGED_ON,
  UPDATE_PARTNER,
  DELETE_LAST_MESSAGE,
  FADE_LAST_MESSAGE,
  COUNTDOWN
} from '../actions/types';

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
    socket.on('delete_last', () => emit({ type: 'delete_last' }));
    socket.on('fade_last', () => emit({ type: 'fade_last' }));
    socket.on('countdown', settings => emit({ type: 'countdown', settings }));
    socket.on('room_full', () => {
      alert('Sorry, the room is already full');
    });
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
        yield put({ type: UPDATE_PARTNER, ...data });
        break;
      case ('delete_last'):
        yield put({ type: DELETE_LAST_MESSAGE });
        break;
      case ('fade_last'):
        yield put({ type: FADE_LAST_MESSAGE });
        break;
      case ('countdown'):
        console.log(data);
        yield put({ type: COUNTDOWN, ...data });
        break;
      default:
        yield put({ type: MESSAGE_RECIEVED, ...data });
    }
  }
}

function* sendMessage(socket) {
  while (true) {
    let { message } = yield take(SEND_MESSAGE);
    const { slashcommand, body } = slashCommand(message);

    console.log(slashCommand(message))

    let think = false;
    let highlight = false;

    switch (slashcommand) {
      case '/nick':
        yield put({ type: UPDATE_USER, nickname: body });
        break;
      case '/think':
        think = true;
        message = body;
        break;
      case '/highlight':
        highlight = true;
        message = body;
        break;
      default:
        break;
    }

    switch (body) {
      case '(smile)':
        message = '🙂';
        break;
      case '(wink)':
        message = '😉';
        break;
      default:
        break;
    }

    socket.emit('message', { message, think, highlight });
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
