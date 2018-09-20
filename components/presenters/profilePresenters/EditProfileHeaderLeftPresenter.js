import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { clearEditProfile } from '../../../store'
import ss from '../../StyleSheet'

const EditProfileHeaderLeftPresenter = ({ navigation, dispatchClearEditProfile }) => (
  <TouchableOpacity
    style={ss.padding10}
    onPress={() => {
      dispatchClearEditProfile()
      navigation.goBack()
    }}>
    <Text style={[ss.headerTextButton, {color: 'rgb(69, 119, 238)'}]}>Cancel</Text>
  </TouchableOpacity>
)

const mapDispatch = dispatch => ({
  dispatchClearEditProfile: () => dispatch(clearEditProfile())
})

export default connect(null, mapDispatch)(EditProfileHeaderLeftPresenter)
