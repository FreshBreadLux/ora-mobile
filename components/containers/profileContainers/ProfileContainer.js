import React from 'react'
import { AsyncStorage, Alert } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import { logout } from '../../../store'
import { ProfilePresenter } from '../../presenters'
import { ImagePicker, Permissions } from 'expo'
import Sentry from 'sentry-expo'
import ROOT_URL from '../../../config'

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props)

    this.userLogout = this.userLogout.bind(this)
    this.setProfileName = this.setProfileName.bind(this)
    this.pickProfileImage = this.pickProfileImage.bind(this)
    this.setSentryUserContext = this.setSentryUserContext.bind(this)
    this.updateUserProfileImage = this.updateUserProfileImage.bind(this)
    this.askCameraRollPermission = this.askCameraRollPermission.bind(this)
  }

  componentDidMount() {
    this.setSentryUserContext()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userInfo.firstName !== this.props.userInfo.firstName) {
      this.setProfileName()
    }
  }

  setSentryUserContext() {
    Sentry.setUserContext({
      id: this.props.userInfo.id,
      email: this.props.userInfo.email
    })
  }

  setProfileName() {
    let firstName = this.props.userInfo.firstName
    if (firstName) {
      this.props.navigation.setParams({ firstName })
    }
  }

  async askCameraRollPermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    console.log('status:', status)
    if (status === 'granted') {
      this.pickProfileImage()
    }
  }

  async pickProfileImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5
    })
    if (!result.cancelled) {
      this.updateUserProfileImage(result.uri)
    }
  }

  updateUserProfileImage(uri) {
    console.log('image uri:', uri)
  }

  async userLogout() {
    try {
      await AsyncStorage.removeItem('oraAuth_v1.1.0')
      this.props.logUserOut()
      Alert.alert('Logout Successful')
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message)
    }
  }

  render() {
    return (
      <ProfilePresenter
        userLogout={this.userLogout}
        navigation={this.props.navigation}
        askCameraRollPermission={this.askCameraRollPermission} />
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
