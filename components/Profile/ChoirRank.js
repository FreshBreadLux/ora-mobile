import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { determineChoirText } from './DetermineChoirFunc'
import ss from '../StyleSheet'

const ChoirRank = ({ userInfo }) => (
  <View style={ss.invisiContainer}>
    { determineChoirText(userInfo.totalPrayers) }
  </View>
)

const mapState = state => ({
  userInfo: state.userInfo
})

export default connect(mapState)(ChoirRank)
