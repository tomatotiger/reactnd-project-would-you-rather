import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render () {
    return <div>Question</div>
  }
}

function mapStateToProps ({ authedUser, questions, users }, { id }) {
  const question = questions[id]
  const user = users[question.author]
  return {
    authedUser,
    question,
    user
  }
}

export default connect(mapStateToProps)(Question)
