import React from 'react'
import { Text, View, TouchableOpacity, Animated } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from '../StyleSheet'

const CurrentPrayer = ({ loadNextPrayer, statePrayer, fadeOut }) => (
  <View style={styles.container}>
    <View style={[styles.cover, styles.center]}>
      <Text>{statePrayer.subject}</Text>
      <Text>{statePrayer.body}</Text>
      <TouchableOpacity
        onPress={loadNextPrayer}
      >
        <Text>Next Prayer</Text>
      </TouchableOpacity>
      <View>
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
  </View>
)

export default CurrentPrayer
