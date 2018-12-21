import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
  render () {
    return (
      <ul>
        {this.props.topThree.map(u => (
          <li key={u.id}>
            <div>
              <img src={u.avatarURL} alt={u.name} />
              {u.name}
              Answered questions {u.answered}
              Created questions {u.created}
              Score {u.score}
            </div>
          </li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps ({ users }) {
  const scoredUsers = Object.values(users).map(u => {
    const answered = u.questions.length
    const created = Object.keys(u.answers).length
    return {
      ...u,
      answered,
      created,
      score: answered + created
    }
  })
  const topThreeIds = Object.keys(scoredUsers)
    .sort((a, b) => scoredUsers[b].score - scoredUsers[a].score)
    .slice(0, 4)
  return {
    topThree: topThreeIds.map(id => scoredUsers[id])
  }
}

export default connect(mapStateToProps)(LeaderBoard)
