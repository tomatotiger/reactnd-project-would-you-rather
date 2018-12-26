import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { IoMdTrophy } from 'react-icons/io/index'

const LeaderBoard = props =>
  props.topThree.length > 0 ? (
    <div className='leader-board'>
      <ul>
        {props.topThree.map((u, i) => (
          <li key={u.id} className='leader-board-item'>
            <div class='triangle'>
              <span className={`top${i + 1}`}>
                <IoMdTrophy />
              </span>
            </div>
            <div className='item-content'>
              <img
                src={`/images/avatars/${u.avatarURL}`}
                className='avatar-middle'
                alt={u.name}
              />
              <div className='leader-board-info'>
                <h4>{u.name}</h4>
                <span className='score-type'>Answered questions </span>
                <span className='score-count'>{u.answered}</span>
                <hr />
                <span className='score-type'>Created questions </span>
                <span className='score-count'>{u.created}</span>
              </div>
              <div className='score-box'>
                <h5 className='title'>Score</h5>
                <span className='score'>{u.score}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>No Datas To Show.</div>
  )

LeaderBoard.props = {
  topThree: PropTypes.array.isRequired
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
    .slice(0, 3)
  return {
    topThree: topThreeIds.map(uid => scoredUsers[uid])
  }
}

export default connect(mapStateToProps)(LeaderBoard)
