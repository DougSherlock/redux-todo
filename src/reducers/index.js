import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import catReducer from './catReducer'

export default combineReducers({
  todos,
  visibilityFilter,
  catReducer: catReducer
})