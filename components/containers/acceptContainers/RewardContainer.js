import React from 'react'
import { connect } from 'react-redux'
import { RewardPresenter } from '../../presenters'

class RewardContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <RewardPresenter />
    )
  }
}

export default connect()(RewardContainer)
