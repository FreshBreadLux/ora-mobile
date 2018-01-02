import React from 'react'
import { Text, View, SafeAreaView, Animated, TouchableOpacity, Image } from 'react-native'
import styles from '../StyleSheet'

const PrePrayer = ({ loadNextPrayer }) => (
  <SafeAreaView style={[styles.cover, styles.spaceAround]}>
    <Text style={styles.title}>Ora</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={loadNextPrayer}
    >
      <Text style={styles.buttonText}>Start Praying</Text>
    </TouchableOpacity>
  </SafeAreaView>
)

export default PrePrayer
