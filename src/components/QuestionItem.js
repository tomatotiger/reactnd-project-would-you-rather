import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

class QuestionItem extends Component {
  render () {
    const { qid, author, summary } = this.props
    return (
      <div className='question-list-item'>
        <h5 className='question-title'>{author.name} asks: </h5>
        <div>
          <img src={author.avatarURL} className='avatar-middle' alt={author.name} />
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
    qid,
    question,
    author: users[question.author],
    summary: `... ${question.optionOne.text.substring(0, 25)} ...`
  }
}

export default withRouter(connect(mapStateToProps)(QuestionItem))
