import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ANSWER_QUESTION
} from '../actions/questions'

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.qid]: action.question
      }
    case ANSWER_QUESTION:
      const { answer, authedUser, qid } = action
      if (answer === 'optionOne') {
        return {
          ...state,
          [qid]: {
            ...state[qid],
            optionOne: {
              ...state[qid].optionOne,
              votes: state[qid].optionOne.votes.concat([authedUser])
            }
          }
        }
      } else if (answer === 'optionTwo') {
        return {
          ...state,
          [qid]: {
            ...state[qid],
            optionTwo: {
              ...state[qid].optionTwo,
              votes: state[qid].optionTwo.votes.concat([authedUser])
            }
          }
        }
      }
    default:
      return state
  }
}
