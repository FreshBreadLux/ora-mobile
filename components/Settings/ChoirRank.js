import React from 'react'
import { Text, View } from 'react-native'
import styles from '../StyleSheet'

const ChoirRank = ({ screenProps }) => (
  <View style={[styles.whiteContainer, styles.center]}>
    <Text style={styles.font16}>{`Total people you have prayed for: ${screenProps.userTotalPrayers}`}</Text>
  </View>
)

export default ChoirRank
