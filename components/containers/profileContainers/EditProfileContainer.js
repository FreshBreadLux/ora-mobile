import React from 'react'
import { connect } from 'react-redux'
import { EditProfilePresenter } from '../../presenters'
import { updateUserProfileImage, setGender } from '../../../store'
import { ImagePicker, Permissions } from 'expo'
import axios from 'axios'
import ROOT_URL from '../../../config'

class EditProfileContainer extends React.Component {
  constructor(props) {
    super(props)

    this.askCameraRollPermission = this.askCameraRollPermission.bind(this)
    this.pickProfileImage = this.pickProfileImage.bind(this)
    this.getSignedS3Request = this.getSignedS3Request.bind(this)
    this.uploadProfileImageToS3 = this.uploadProfileImageToS3.bind(this)
  }

  componentDidMount() {
    this.setGenderOnEditProfileInformation()
  }

  /*
    We need to set the gender from userInfo onto editProfileInformation store state because
    editProfileInformation manages the toggle display logic for the gender buttons. So, if the
    user has already added their gender to their profile, it will show up in the presenter.
  */
  setGenderOnEditProfileInformation() {
    this.props.dispatchSetGender(this.props.userInfo.gender)
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

  render() {
    return (
      <EditProfilePresenter
        askCameraRollPermission={this.askCameraRollPermission} />
    )
  }
}

const mapState = state => ({
  userInfo: state.userInfo
})

const mapDispatch = dispatch => ({
  dispatchUpdateUserProfileImage: (id, uri) => dispatch(updateUserProfileImage(id, uri)),
  dispatchSetGender: gender => dispatch(setGender(gender))
})

export default connect(mapState, mapDispatch)(EditProfileContainer)
