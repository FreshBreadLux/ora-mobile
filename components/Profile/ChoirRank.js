import React from 'react'
import { View } from 'react-native'
import { determineChoirText } from './DetermineChoirFunc'
import ss from '../StyleSheet'

const ChoirRank = ({ screenProps }) => (
  <View style={ss.invisiContainer}>
    { determineChoirText(screenProps.userTotalPrayers) }
  </View>
)

export default ChoirRank
