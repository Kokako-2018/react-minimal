import {combineReducers} from 'redux'
import submitted from './createUser'
import errorMessage from './error'
//import reducers here

export default combineReducers({
  submitted,
  errorMessage
})
