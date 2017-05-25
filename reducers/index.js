import { combineReducers } from 'redux'
import { reducer } from '../packages/resolve-redux/dist';
import todos from './todos'

const rootReducer = combineReducers({
  reducer,
  todos
})

export default rootReducer
