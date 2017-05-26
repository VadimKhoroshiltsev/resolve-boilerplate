import { eventChannel } from 'redux-saga';
import { fork, all, takeEvery, call, put } from 'redux-saga/effects';
import { actions } from "resolve-redux";
import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO } from '../ActionTypes'

const commandTypes = [ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO];

function* initCommandSender(socket) {
    yield all(
        commandTypes.map(typeName =>
            takeEvery(typeName, command => {
                socket.emit('command', command)
            })
        )
    );
}

function subscribeOnSocket(socket) {
    return eventChannel((emit) => {
        // socket.on('initialTodos', state => emit(actions.merge('todos', state)));
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