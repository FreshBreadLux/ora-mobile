import React from 'react'
import { SubmitBodyPresenter } from '../../presenters'

class SubmitBodyContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: null
    }
  }

  render() {
    return (
      <SubmitBodyPresenter />
    )
  }
}

export default SubmitBodyContainer
