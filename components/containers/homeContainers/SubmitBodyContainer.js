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
    console.log('navigation:', this.props.navigation)
    return (
      <SubmitBodyPresenter navigation={this.props.navigation} />
    )
  }
}

export default SubmitBodyContainer
