import React from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

const PrePrayer = ({ loadNextPrayer }) => (
  <SafeAreaView style={[styles.invisiContainer, styles.spaceAround]}>
    <Text style={styles.title}>Ora</Text>
    <TouchableOpacity
      style={styles.padding10}
      onPress={loadNextPrayer}
    >
      <Text style={[styles.font24, styles.whiteText]}>Start Praying</Text>
    </TouchableOpacity>
  </SafeAreaView>
)

export default PrePrayer
