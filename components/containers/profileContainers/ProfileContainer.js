import React from 'react'
import { AsyncStorage, AlertIOS } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../../../store'
import { ProfilePresenter } from '../../presenters'
import Sentry from 'sentry-expo'

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props)
    this.userLogout = this.userLogout.bind(this)
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

  async userLogout() {
    try {
      await AsyncStorage.removeItem('oraAuth_v1.1.0')
      this.props.logUserOut()
      AlertIOS.alert('Logout Successful')
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message)
    }
  }

  render() {
    return (
      <ProfilePresenter
        navigation={this.props.navigation}
        userLogout={this.userLogout} />
    )
  }
}

const mapState = state => ({
  userInfo: state.userInfo
})

const mapDispatch = dispatch => ({
  logUserOut: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(ProfileContainer)
