import React from 'react'
import { connect } from 'react-redux'
import { setAnonymousSubject } from '../../../store'
import { SubmitSubjectPresenter } from '../../presenters'

class SubmitSubjectContainer extends React.Component {

  componentWillUnmount() {
    this.props.clearSubject()
  }

  render() {
    return (
      <SubmitSubjectPresenter navigation={this.props.navigation} />
    )
  }
}

const mapDispatch = dispatch => ({
  clearSubject: () => dispatch(setAnonymousSubject(''))
})

export default connect(null, mapDispatch)(SubmitSubjectContainer)
