import { RECEIVE_USERS, ANSWER_QUESTION, ADD_QUESTION } from '../actions/users'

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }

    case ANSWER_QUESTION:
      return {
        ...state,
        answers: { action }
      }

    case ADD_QUESTION:
      return {
        ...state,
        questions: state.questions.concat[action.id]
      }

    default:
      return state
  }
}
