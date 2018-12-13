import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helper'

class QuestionItem extends Component {
  render () {
    const { author, question, summary } = this.props
    return (
      <div className='question-item'>
        <h5 className='question-title'>{author.name} asks: </h5>
        <div>
          <img src={author.avatarURL} className='question-item-avatar' />
          <div className='question-summary'>
            <h5>Would you rather</h5>
            <span>{summary}</span>
            <a href='#' className='question-item-link'>
              View Poll
            </a>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users }, { id }) {
  const question = questions[id]
  return {
    question,
    author: users[question.author],
    summary: `... ${question.optionOne.text.substring(0, 25)} ...`
  }
}

export default connect(mapStateToProps)(QuestionItem)
