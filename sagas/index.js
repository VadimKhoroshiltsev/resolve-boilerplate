import { fork, all, takeEvery } from 'redux-saga/effects';
import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO } from '../constants/ActionTypes'

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


export default function*(socket) {
    yield initCommandSender(socket);
}
