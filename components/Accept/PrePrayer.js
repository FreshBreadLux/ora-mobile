import React from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

const PrePrayer = ({ loadNextPrayer }) => (
  <SafeAreaView style={[styles.invisiContainer, styles.spaceAround]}>
    <Text style={styles.title}>ORA</Text>
    <TouchableOpacity
      style={[styles.button, styles.halfWidth]}
      onPress={loadNextPrayer}
    >
      <Text style={[styles.buttonText]}>Start Praying</Text>
    </TouchableOpacity>
  </SafeAreaView>
)

export default PrePrayer
