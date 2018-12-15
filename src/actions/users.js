export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function userAnswerQuestion ({ authedUser, qid }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid
  }
}

export function userAddQuestion ({authedUser, question}) {
  return {
    type: ADD_QUESTION,
    authedUser,
    question
  }
}
