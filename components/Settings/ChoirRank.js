import React from 'react'
import { Text, View } from 'react-native'
import styles from '../StyleSheet'

const AngelRank = ({ screenProps }) => (
  <View style={styles.container}>
    <View style={[styles.cover, styles.center]}>
      <Text>{`Total people you have prayed for: ${screenProps.userTotalPrayers}`}</Text>
    </View>
  </View>
)

export default AngelRank
