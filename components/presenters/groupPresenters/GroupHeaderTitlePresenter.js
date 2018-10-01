import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import ss from '../../StyleSheet'

/*
  TODO: This is a placeholder presentational standin; I need to make it functional
*/
const GroupHeaderTitlePresenter = () => (
  <Text numberOfLines={2} style={[ss.centerText, {fontFamily: 'ralewayBold', fontSize: 18}]}>The Catholic Center</Text>
)

const mapState = state => ({
  firstName: state.userInfo.firstName,
})

export default connect(mapState)(GroupHeaderTitlePresenter)
