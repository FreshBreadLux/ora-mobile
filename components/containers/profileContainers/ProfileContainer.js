import React from 'react'
import { AsyncStorage, AlertIOS } from 'react-native'
import { connect } from 'react-redux'
import { DangerZone } from 'expo'
import { logout } from '../../../store'
import { ProfilePresenter } from '../../presenters'

const { Branch } = DangerZone

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props)
    this.userLogout = this.userLogout.bind(this)
  }

  async userLogout() {
    try {
      await AsyncStorage.removeItem('oraAuth_v1.1.0')
      this.props.logUserOut()
      Branch.logout()
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

const mapDispatch = dispatch => ({
  logUserOut: () => dispatch(logout())
})

export default connect(null, mapDispatch)(ProfileContainer)
