import React from 'react'
import { Text, View, Image, SafeAreaView, TouchableOpacity, Animated } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from '../StyleSheet'

const CurrentPrayer = ({ statePrayer, fadeOut, finishPraying, followPrayer, opacity }) => (
  <SafeAreaView style={styles.cover}>
    <View style={[styles.addPadding, styles.spaceAround]}>
      <View style={styles.flex1}>
        <Animated.View style={[styles.flex1, styles.center, { opacity }]}>
          <Text style={styles.subject}>{statePrayer.subject}</Text>
        </Animated.View>
      </View>
      <View style={styles.flex3}>
        <Animated.ScrollView
          style={[styles.flex1, styles.box, { opacity }]}>
          <Text style={styles.body}>{statePrayer.body}</Text>
        </Animated.ScrollView>
      </View>
      <View style={[styles.flex1, styles.center]}>
        <TouchableOpacity
          onPress={fadeOut}
        >
          <Text style={styles.buttonText}>Next Prayer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={finishPraying}
        >
          <Text style={styles.buttonText}>Finish Praying</Text>
        </TouchableOpacity>
      </View>
      <View style={[
        styles.row,
        styles.flex1,
        styles.spaceAround,
        styles.fullWidth]}
      >
        <TouchableOpacity
          style={[styles.column, styles.center]}
        >
          <Ionicons
            name="ios-flag-outline"
            size={26}
          />
          <Text>Flag</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.column, styles.center]}
        >
          <Ionicons
            name="ios-help-circle-outline"
            size={26}
          />
          <Text>How to pray</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.column, styles.center]}
          onPress={followPrayer}
        >
          <Ionicons
            name="ios-bookmark-outline"
            size={26}
          />
          <Text>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
)

export default CurrentPrayer
