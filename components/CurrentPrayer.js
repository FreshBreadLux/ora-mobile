import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'

const CurrentPrayer = ({ loadNextPrayer, statePrayer, fadeOut }) => (
  <View style={styles.currentprayer}>
    <Text>{statePrayer.subject}</Text>
    <Text>{statePrayer.body}</Text>
    <TouchableOpacity
      onPress={loadNextPrayer}
    >
      <Text>Next Prayer</Text>
    </TouchableOpacity>
  </View>
)

export default CurrentPrayer

const styles = StyleSheet.create({
  currentprayer: {
    flex: 1,
    backgroundColor: 'aquamarine',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
