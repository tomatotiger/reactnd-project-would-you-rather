import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render () {
    return (
      <div>
        Home
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[a].timestamp - questions[b].timestamp
    )
  }
}

export default connect(mapStateToProps)(Home)
