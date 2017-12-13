import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const CurrentPrayer = ({ loadNextPrayer, statePrayer, fadeOut }) => (
  <View style={styles.currentprayer}>
    <Text>{statePrayer.subject}</Text>
    <Text>{statePrayer.body}</Text>
    <TouchableOpacity
      onPress={loadNextPrayer}
    >
      <Text>Next Prayer</Text>
    </TouchableOpacity>
    <View style={styles.buttonrow}>
      <TouchableOpacity>
        <Ionicons name="ios-flag" />
        <Text>Flag</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="ios-help-circle" />
        <Text>How to pray</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="ios-bookmark" />
        <Text>Follow</Text>
      </TouchableOpacity>
    </View>
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
  buttonrow: {
    flexDirection: 'row'
  }
})
