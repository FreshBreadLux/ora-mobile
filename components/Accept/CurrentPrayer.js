import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Animated } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from '../StyleSheet'

const CurrentPrayer = ({ loadNextPrayer, statePrayer, fadeOut }) => (
  <View style={styles.container}>
    <SafeAreaView style={[styles.cover, styles.spaceAround]}>
      <Text style={styles.flex1}>{statePrayer.subject}</Text>
      <View style={styles.flex3}>
        <Text>{statePrayer.body}</Text>
      </View>
      <TouchableOpacity
        style={styles.flex1}
        onPress={loadNextPrayer}
      >
        <Text>Next Prayer</Text>
      </TouchableOpacity>
      <View style={[styles.row, styles.flex1]}>
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
    </SafeAreaView>
  </View>
)

export default CurrentPrayer
