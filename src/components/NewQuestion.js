import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }

  inputOnChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitAvailable = () => {
    return this.state.optionOneText.trim() === '' || this.state.optionTwoText.trim() === ''
  }

  handleSubmit = e => {
    e.preventDefault()
    const {optionOneText, optionTwoText} = this.state
    const {dispatch}= this.props
    dispatch(handleAddQuestion({optionOneText, optionTwoText}))
    this.setState({toHome: true})
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
            Submit
          </button>
        </form>
      </div>
    )
  }
}

// TODO: move submit function to mapdispatchtoprops
export default connect()(NewQuestion)
