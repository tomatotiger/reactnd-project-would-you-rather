import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

class QuestionItem extends Component {
  render () {
    const { question } = this.props
    if (question === null) return "This Question Doesn't Exist."
    const { qid, author, summary } = question
    return (
      <div className='question-list-item'>
        <h5 className='question-title'>{author.name} asks: </h5>
        <div>
          <img
            src={author.avatarURL}
            className='avatar-middle'
            alt={author.name}
          />
          <div className='question-summary'>
            <h5>Would you rather</h5>
            <span>{summary}</span>
            <Link to={`/question/${qid}`} className='question-item-link'>
              View Poll
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ questions, users }, { qid }) => {
  const question = questions[qid]
  return {
    question: question
      ? {
        qid,
        question,
        author: users[question.author],
        summary: `... ${question.optionOne.text.substring(0, 25)} ...`
      }
      : null
  }
}

export default withRouter(connect(mapStateToProps)(QuestionItem))
