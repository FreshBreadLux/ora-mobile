import React from 'react'
import { AsyncStorage, AlertIOS } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../../../store'
import { ProfilePresenter } from '../../presenters'

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props)
    this.userLogout = this.userLogout.bind(this)
  }

  async userLogout() {
    try {
      await AsyncStorage.removeItem('oraAuth')
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

const mapDispatch = dispatch => ({
  logUserOut: () => dispatch(logout())
})

export default connect(null, mapDispatch)(ProfileContainer)
