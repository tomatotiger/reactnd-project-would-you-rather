import { combineReducers } from 'redux'
import users from './users'
import questions from './questions'
import auth from './auth'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser: auth,
  users,
  questions,
  loadingBar: loadingBarReducer
})
