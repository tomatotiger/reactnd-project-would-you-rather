import React from 'react'

const PercentageBar = props => (
  <div className='percentage-bar'>
    <div
      className='percentage-bar-progress'
      style={{ width: props.percentage + '%' }}
    >
      {props.percentage}%
    </div>
  </div>
)

export default PercentageBar
