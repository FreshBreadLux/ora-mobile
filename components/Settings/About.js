import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from '../StyleSheet'

const About = () => (
  <View style={styles.whiteContainer}>
    <View style={[styles.invisiContainer, styles.horizontalPadding]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.flex1}>
        <View style={[styles.addViewSpacing, styles.fullWidth]}>
          <Text style={[styles.font24, styles.centerText]}>Ora</Text>
        </View>
        <View style={styles.addViewSpacing}>
          <Text style={styles.font16}>Ora is a nonprofit dedicated to illustrating the beauty of the One, Holy, Catholic, and Apostolic Church, and helping people cultivate a stronger prayer life and relationship with God. The app is nothing more than a reminder of the power of prayer. The reality of universal prayer exists with or without Ora; this app is only useful if it points users toward that reality. We hope that Ora will encourage users to actively participate in the Body of Christ. Ora will always be free, and relies on donations from users in order to operate.</Text>
        </View>
        <View style={[styles.addViewSpacing, styles.fullWidth]}>
          <Text style={[styles.font24, styles.centerText]}>How to use the app</Text>
        </View>
        <View style={styles.addViewSpacing}>
          <Text style={styles.font16}>When you start praying, you will be given an anonymous prayer request. As you take time to reflect on the prayer and intercede to God on their behalf, the author will receive a notification that someone is praying for them.
          {'\n\n'}
          If you come across a prayer request that you would like to be updated about, use the bookmark icon to follow the prayer. If you come across a request that shouldn't be in our prayer network, use the flag icon to bring it to our attention.</Text>
        </View>
      </ScrollView>
    </View>
  </View>
)

export default About
