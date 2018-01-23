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
        <Text style={styles.font16}>Ora is a non-profit app, and it will always remain free. This means that we rely on donations from our community to meet all operating expenses, from keeping the servers running to funding future projects. We hope to continue making tools for faith in a technology age that has other priorities -- and we're inviting you to be a part of it.{'\n\n'}To learn more about how you can support our work or get involved, please contact robert.michael.lux@gmail.com</Text>
      </View>
    </View>
  </SafeAreaView>
)

export default Donate
