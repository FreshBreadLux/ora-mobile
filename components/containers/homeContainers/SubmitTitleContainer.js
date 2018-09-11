import React from 'react'
import { connect } from 'react-redux'
import { setAnonymousTitle } from '../../../store'
import { SubmitTitlePresenter } from '../../presenters'

class SubmitTitleContainer extends React.Component {

  componentWillUnmount() {
    this.props.clearTitle()
  }

  render() {
    return (
      <SubmitTitlePresenter navigation={this.props.navigation} />
    )
  }
}

const mapDispatch = dispatch => ({
  clearTitle: () => dispatch(setAnonymousTitle(''))
})

export default connect(null, mapDispatch)(SubmitTitleContainer)
