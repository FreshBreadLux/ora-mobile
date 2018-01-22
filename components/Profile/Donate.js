import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import styles from '../StyleSheet'

const Donate = () => (
  <SafeAreaView style={styles.whiteContainer}>
    <View style={[styles.whiteContainer, styles.padding15]}>
      <View style={[styles.addLargeViewSpacing, styles.center, styles.bottomBorder]}>
        <Text style={styles.font24}>DONATE</Text>
      </View>
      <View style={styles.addMedViewSpacing}>
        <Text style={styles.font16}>Ora is a non-profit app, and relies on recurring donations to meet its expenses. We currently do not have in-app donations set up, but if you would like to learn more about how you can help please email robert.michael.lux@gmail.com</Text>
      </View>
    </View>
  </SafeAreaView>
)

export default Donate
