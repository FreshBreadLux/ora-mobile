import React from 'react'
import { AsyncStorage, Alert } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import { logout, updateUserProfileImage } from '../../../store'
import { ProfilePresenter } from '../../presenters'
import { ImagePicker, Permissions } from 'expo'
import Sentry from 'sentry-expo'
import ROOT_URL from '../../../config'

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeScrollView: 'follows',
    }
    this.userLogout = this.userLogout.bind(this)
    this.setProfileName = this.setProfileName.bind(this)
    this.pickProfileImage = this.pickProfileImage.bind(this)
    this.getSignedS3Request = this.getSignedS3Request.bind(this)
    this.setActiveScrollView = this.setActiveScrollView.bind(this)
    this.setSentryUserContext = this.setSentryUserContext.bind(this)
    this.uploadProfileImageToS3 = this.uploadProfileImageToS3.bind(this)
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

  setActiveScrollView(activeScrollView) {
    this.setState({ activeScrollView })
  }

  async askCameraRollPermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status === 'granted') {
      this.pickProfileImage()
    }
  }

  async pickProfileImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0,
    })
    if (!result.cancelled) {
      console.log('full result:', result)
      this.getSignedS3Request(result.uri)
    }
  }

  /*
    getSignedS3Request accepts the image uri from pickProfileImage. It uses the uri's extension
    to determine the file's MIME type. It uses the user's ID to set the file name. It then sends
    a request to the backend for a signed S3 request so that it can upload the image.
  */
  async getSignedS3Request(uri) {
    const ext = uri.substring(
      uri.lastIndexOf('.'),
      uri.indexOf('?') === -1 ? undefined : uri.indexOf('?')
    )
    const fileName = `user-${this.props.userInfo.id}-profile${ext}`
    let fileType
    if (ext === '.jpg') {
      fileType = 'image/jpeg'
    } else if (ext === '.png') {
      fileType = 'image/png'
    }
    try {
      const res = await axios.get(`${ROOT_URL}/api/s3SignedRequests?fileName=${fileName}&fileType=${fileType}`)
      console.log('res.data:', res.data)
      const { signedS3Request, targetUrl } = res.data
      this.uploadProfileImageToS3(signedS3Request, targetUrl, uri)
    } catch (error) {
      console.log(error)
    }
  }

  /*
    uploadProfileImageToS3 fetches data from the provided uri, and then creates a blob from the
    response. The blob is then sent in a put request to the signed URL generated on the backend.
    The new imageUrl is then updated in the database and placed on store state.
  */
  async uploadProfileImageToS3(signedS3Request, targetUrl, uri) {
    try {
      const response = await fetch(uri)
      const blob = await response.blob()
      await fetch(signedS3Request, { method: 'PUT', body: blob })
      this.props.dispatchUpdateUserProfileImage(this.props.userInfo.id, targetUrl)
    } catch (error) {
      console.log(error)
    }
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
        activeScrollView={this.state.activeScrollView}
        setActiveScrollView={this.setActiveScrollView}
        askCameraRollPermission={this.askCameraRollPermission} />
    )
  }
}

const mapState = state => ({
  userInfo: state.userInfo
})

const mapDispatch = dispatch => ({
  logUserOut: () => dispatch(logout()),
  dispatchUpdateUserProfileImage: (id, uri) => dispatch(updateUserProfileImage(id, uri)),
})

export default connect(mapState, mapDispatch)(ProfileContainer)
