import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'
import PercentageBar from './PercentageBar'

class QuestionPage extends Component {
  handleSubmit = (e, answer) => {
    const { dispatch, question } = this.props
    dispatch(
      handleAnswerQuestion({
        qid: question.id,
        answer: answer
      })
    )
  }

  render () {
    const { question } = this.props
    if (question === null) {
      return <p>This Question Doesn't Exist.</p>
    }
    const { author, optionOne, optionTwo, answered } = question
    return (
      <div className='content'>
        <h5 className='question-title'>{author.name} asks: </h5>
        <div className='question-box'>
          <div className='question-box-avatar'>
            <img src={author.avatarURL} className='avatar-big' />
          </div>
          {answered === null ? (
            <UnansweredQuestion
              answered={answered}
              optionOne={optionOne.text}
              optionTwo={optionTwo.text}
              handleSubmit={this.handleSubmit}
            />
          ) : (
            <AnsweredQuestion
              answered={answered}
              optionOne={optionOne}
              optionTwo={optionTwo}
            />
          )}
        </div>
      </div>
    )
  }
}

class UnansweredQuestion extends Component {
  state = {
    answer: 'optionOne'
  }

  handleRadioChange = e => {
    const answer = e.target.value
    this.setState(currentState => ({
      ...currentState,
      answer
    }))
  }

  render () {
    const answer = this.state.answer
    const { optionOne, optionTwo, handleSubmit } = this.props
    return (
      <div className='question-summary'>
        <h3>Would you rather ...</h3>
        <label htmlFor='optionOne' className='pure-radio'>
          <input
            id='optionOne'
            type='radio'
            name='options'
            value='optionOne'
            checked={answer === 'optionOne'}
            onChange={this.handleRadioChange}
          />
          {optionOne}
        </label>

        <label htmlFor='optionTwo' className='pure-radio'>
          <input
            id='optionTwo'
            type='radio'
            name='options'
            value='optionTwo'
            checked={answer === 'optionTwo'}
            onChange={this.handleRadioChange}
          />
          {optionTwo}
        </label>
        <button
          className='pure-button submit-button'
          onClick={e => handleSubmit(e, answer)}
        >
          Submit
        </button>
      </div>
    )
  }
}

const AnsweredQuestion = ({ answered, optionOne, optionTwo }) => {
  const voteCounts = optionOne.votes.concat(optionTwo.votes).length
  const optionOnePercent = (
    (optionOne.votes.length / voteCounts) *
    100
  ).toFixed(1)
  const result = (
    <div className='question-summary'>
      <h3>Results:</h3>
      <div
        className={`question-result ${answered === 'optionOne' &&
          'question-result-voted'}`}
      >
        <span>{optionOne.text}</span>
        <PercentageBar percentage={optionOnePercent} />
        {optionOne.votes.length} out of {voteCounts} votes
      </div>
      <div
        className={`question-result ${answered === 'optionTwo' &&
          'question-result-voted'}`}
      >
        <span>{optionTwo.text}</span>
        <PercentageBar percentage={100 - optionOnePercent} />
        {optionTwo.votes.length} out of {voteCounts} votes
      </div>
    </div>
  )
  return result
}

function mapStateToProps ({ authedUser, questions, users }, props) {
  const { id } = props.match.params
  const question = questions[id]

  return {
    authedUser,
    question: question
      ? {
        ...question,
        author: users[question.author],
        answered: Object.keys(users[authedUser].answers).includes(id)
          ? users[question.author].answers[id]
          : null
      }
      : null
  }
}

export default connect(mapStateToProps)(QuestionPage)
