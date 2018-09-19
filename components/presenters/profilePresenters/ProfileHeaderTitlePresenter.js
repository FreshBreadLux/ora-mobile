import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import ss from '../../StyleSheet'

const ProfileHeaderTitlePresenter = ({ firstName }) => (
  <Text style={{fontFamily: 'ralewayBold', fontSize: 16}}>{firstName}</Text>
)

const mapState = state => ({
  firstName: state.userInfo.firstName,
})

export default connect(mapState)(ProfileHeaderTitlePresenter)
