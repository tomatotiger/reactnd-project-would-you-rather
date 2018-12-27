import React from 'react'
import PropTypes from 'prop-types'

const PercentageBar = props => {
  const percentage = props.percentage.toFixed(1) + '%'
  return (
    <div className='percentage-bar'>
      <div className='percentage-bar-progress' style={{ width: percentage }}>
        {percentage}
      </div>
    </div>
  )
}

PercentageBar.propTypes = {
  percentage: PropTypes.number.isRequired
}

export default PercentageBar
