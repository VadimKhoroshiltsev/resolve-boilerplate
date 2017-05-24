import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import io from 'socket.io-client'

import reducer from '../reducers'
import saga from '../sagas'

export default (initialState) => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware))
    if(typeof window !== 'undefined' && window.document) {
        const socket = io('/');

        sagaMiddleware.run(saga, socket)
    }

    return store
};
