import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { userAnswerQuestion, userAddQuestion } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion ({ optionOneText, optionTwoText }) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    const question = { optionOneText, optionTwoText, author: authedUser }
    return saveQuestion(question).then(savedQuestion => {
      dispatch(addQuestion(savedQuestion))
      dispatch(userAddQuestion(savedQuestion))
    })
  }
}

function answerQuestion ({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    qid,
    answer,
    authedUser
  }
}

export function handleAnswerQuestion ({ qid, answer }) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(answerQuestion({ authedUser, qid, answer }))
    dispatch(userAnswerQuestion({ authedUser, qid, answer }))

    return saveQuestionAnswer({ authedUser, qid, answer }).catch(e => {
      console.warn('Error in handleAnswerQuestion: ', e)
      // TODO: recovery UI to unanswerd dispatch()
      alert('There was an error answering the question. Please try again.')
    })
  }
}
