import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

let socket = io('http://localhost:8080');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const finalCreateStore = compose(
  applyMiddleware(
    thunk,
    socketIoMiddleware,
    createLogger()
  )
)(createStore)

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}
