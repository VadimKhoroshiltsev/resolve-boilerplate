import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import io from 'socket.io-client'

import projection from '../projections'
import reducer from '../reducers'
import saga from '../sagas'

export default (initialState) => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(reducer, projection.initialState, applyMiddleware(sagaMiddleware))
    if(typeof window !== 'undefined' && window.document) {
        const socket = io('/');
        socket.on('connect', (err) => {
            if(err) return console.log(err);

            sagaMiddleware.run(saga, socket)
        })
    }

    return store
};
