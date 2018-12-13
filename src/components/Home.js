import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionItem from './QuestionItem'

class Home extends Component {
  state = {
    questionState: 'unanswered'
  }

  handleClickTab = e => {
    this.setState({questionState:e.target.name})
  }

  render () {
    const {questionState} = this.state

    // set class for the unanswered and answered buttons.
    let unanswered_class = 'tab-button pure-button'
    let answered_class = 'tab-button pure-button'
    questionState==='unanswered'
    ? unanswered_class += ' pure-button-active'
    : answered_class += ' pure-button-active'

    return (
      <div className='question-list'>
        <div className='pure-button-group' role='toolbar' aria-label='...'>
          <button name='unanswered' className={unanswered_class} onClick={this.handleClickTab}>Unanswered Questions</button>
          <button name='answered' className={answered_class} onClick={this.handleClickTab}>Answered Questions</button>
        </div>
        <ul>
          {this.props[this.state.questionState].map(q => 
            (<li key={q}><QuestionItem id={q} /></li>)
          )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }) {
  const sortedQuestions = Object.keys(questions).sort(
    (a, b) => questions[a].timestamp - questions[b].timestamp
  )

  return {
    unanswered: sortedQuestions.filter(q => Object.keys(users[authedUser].answers).includes(q)),
    answered: sortedQuestions.filter(q => !Object.keys(users[authedUser].answers).includes(q))
  }
}

export default connect(mapStateToProps)(Home)
