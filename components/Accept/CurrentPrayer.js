import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Animated } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from '../StyleSheet'

const CurrentPrayer = ({ statePrayer, fadeOut, followPrayer, opacity }) => (
  <View style={styles.container}>
    <SafeAreaView style={[styles.cover, styles.spaceAround]}>
      <Text style={styles.flex1}>{statePrayer.subject}</Text>
      <Animated.View style={[styles.flex3, { opacity }]}>
        <Text>{statePrayer.body}</Text>
      </Animated.View>
      <TouchableOpacity
        style={styles.flex1}
        onPress={fadeOut}
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
        <TouchableOpacity
          onPress={followPrayer}
        >
          <Ionicons name="ios-bookmark" />
          <Text>Follow</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </View>
)

export default CurrentPrayer
