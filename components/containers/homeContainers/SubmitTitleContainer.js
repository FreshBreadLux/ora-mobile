import React from 'react'
import { SubmitTitlePresenter } from '../../presenters'

class SubmitTitleContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null
    }
  }

  render() {
    return (
      <SubmitTitlePresenter />
    )
  }
}

export default SubmitTitleContainer
