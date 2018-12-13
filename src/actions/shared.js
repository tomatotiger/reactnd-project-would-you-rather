import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'
import { login } from './auth'

const userId = 'sarahedo'

export function handleInitialData () {
  return dispatch => {
    dispatch(login(userId))
    dispatch(showLoading())
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(hideLoading())
    })
  }
}
