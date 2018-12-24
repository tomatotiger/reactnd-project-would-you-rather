import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    loading: false,
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  inputOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitAvailable = () => {
    return (
      this.state.optionOneText.trim() === '' ||
      this.state.optionTwoText.trim() === '' ||
      this.state.loading === true
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ loading: true })
    const { optionOneText, optionTwoText } = this.state
    const { onSubmit } = this.props

    onSubmit(optionOneText, optionTwoText)
      .then(() => this.setState({ toHome: true }))
      .catch(() => {
        console.warn('Error in handleAddQuestion: ', e)
        alert('There was an error creating the question. Please try again.')
        this.setState({ loading: false })
      })
  }

  render () {
    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <h2>Create New Question</h2>
        <span>Complete the question:</span>
        <h4>Qould you rather ...</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='optionOneText'
            maxLength={55}
            placeholder='Enter Option One Text Here'
            value={this.state.optionOneText}
            onChange={this.inputOnChange}
          />
          OR
          <input
            type='text'
            name='optionTwoText'
            maxLength={55}
            placeholder='Enter Option Two Text Here'
            value={this.state.optionTwoText}
            onChange={this.inputOnChange}
          />
          <button type='submit' disabled={this.submitAvailable()}>
            {this.state.loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (optionOneText, optionTwoText) => {
      return dispatch(handleAddQuestion({ optionOneText, optionTwoText }))
    }
  }
}
export default connect(
  null,
  mapDispatchToProps
)(NewQuestion)
