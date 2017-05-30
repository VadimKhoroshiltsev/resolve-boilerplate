import { eventChannel } from 'redux-saga';
import { fork, all, takeEvery, call, put, select } from 'redux-saga/effects';
import { deleteTodo, completeTodo } from '../actions';
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from '../ActionTypes';

const commandTypes = [ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO];

function* handleCompleteAll() {
  const tasks = yield select(state => state.todos);
  const isAllCompleted = tasks.reduce(
    (result, task) => result && task.completed,
    true
  );

  for (let task of tasks) {
    if (!(isAllCompleted ^ task.completed))
      yield put(completeTodo(task.aggregateId));
  }
}

function* handleClearCompleted() {
  const completedTasks = yield select(state =>
    state.todos.filter(todo => todo.completed)
  );

  for (let task of completedTasks) {
    yield put(deleteTodo(task.aggregateId));
  }
}

function* initCommandSender(socket) {
  yield all(
    commandTypes
      .map(typeName =>
        takeEvery(typeName, command => {
          socket.emit('command', command);
        })
      )
      .concat([
        takeEvery(COMPLETE_ALL, handleCompleteAll),
        takeEvery(CLEAR_COMPLETED, handleClearCompleted)
      ])
  );
}

function subscribeOnSocket(socket) {
  return eventChannel(emit => {
    socket.on('event', event => emit(event));
    return () => {};
  });
}

function* initEventGetter(socket) {
  const channel = yield call(subscribeOnSocket, socket);

  yield takeEvery(channel, function*(action) {
    yield put(action);
  });
}

export default function*(socket) {
  yield all([fork(initEventGetter, socket), fork(initCommandSender, socket)]);
}
