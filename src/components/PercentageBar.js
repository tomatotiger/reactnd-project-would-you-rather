import React, { Component } from 'react'

class PercentageBar extends Component {
  render () {
    return (
      <div className='percentage-bar'>
        <div
          className='percentage-bar-progress'
          style={{ width: this.props.percentage + '%' }}
        >
          {this.props.percentage}%
        </div>
      </div>
    )
  }
}

export default PercentageBar
