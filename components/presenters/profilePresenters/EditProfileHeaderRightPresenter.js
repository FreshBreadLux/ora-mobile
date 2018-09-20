import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { updateProfileInformation } from '../../../store'
import ss from '../../StyleSheet'

const EditProfileHeaderRightPresenter = ({ navigation, userId, editProfileInformation, dispatchUpdateProfileInformation }) => (
  <TouchableOpacity
    style={ss.padding10}
    onPress={() => {
      console.log('editProfileInformation:', editProfileInformation)
      dispatchUpdateProfileInformation(userId, editProfileInformation)
      .then(() => navigation.goBack())
    }}>
    <Text style={[ss.headerTextButton, {color: 'rgb(69, 119, 238)'}]}>Save</Text>
  </TouchableOpacity>
)

const mapState = state => ({
  userId: state.userInfo.id,
  editProfileInformation: state.editProfileInformation
})

const mapDispatch = dispatch => ({
  dispatchUpdateProfileInformation: (userId, profileInformation) => dispatch(updateProfileInformation(userId, profileInformation)),
})

export default connect(mapState, mapDispatch)(EditProfileHeaderRightPresenter)
