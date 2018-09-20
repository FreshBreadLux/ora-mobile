import React from 'react'
import { connect } from 'react-redux'
import { ProfilePresenter } from '../../presenters'
import Sentry from 'sentry-expo'

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeScrollView: 'follows',
    }
    this.setActiveScrollView = this.setActiveScrollView.bind(this)
    this.setSentryUserContext = this.setSentryUserContext.bind(this)
  }

  componentDidMount() {
    this.setSentryUserContext()
  }

  setSentryUserContext() {
    Sentry.setUserContext({
      id: this.props.userInfo.id,
      email: this.props.userInfo.email
    })
  }

  setActiveScrollView(activeScrollView) {
    this.setState({ activeScrollView })
  }

  render() {
    return (
      <ProfilePresenter
        navigation={this.props.navigation}
        activeScrollView={this.state.activeScrollView}
        setActiveScrollView={this.setActiveScrollView}
        askCameraRollPermission={this.askCameraRollPermission} />
    )
  }
}

const mapState = state => ({
  userInfo: state.userInfo
})

export default connect(mapState)(ProfileContainer)
