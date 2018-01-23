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
          <Text style={[styles.font24, styles.centerText]}>ORA</Text>
        </View>
        <View style={styles.addViewSpacing}>
          <Text style={styles.font16}>Ora is a nonprofit dedicated to illustrating the beauty of the One, Holy, Catholic, and Apostolic Church, and helping Christians cultivate a stronger prayer life and relationship with God. The app has two primary goals: to give support and encouragement to people with burdens, and to encourage people to actively participate in the Body of Christ by taking time out of their day to pray for their brothers and sisters in need. Ora will always be free, and relies on donations from users in order to operate.</Text>
        </View>
        <View style={[styles.addViewSpacing, styles.fullWidth]}>
          <Text style={[styles.font24, styles.centerText]}>USING THE APP</Text>
        </View>
        <View style={styles.addViewSpacing}>
          <Text style={styles.font16}>When you start praying, you will be given an anonymous prayer request. As you take time to reflect on the prayer and intercede to God on their behalf, the author will receive a notification that someone is praying for them.</Text>
        </View>
        <View style={[styles.addViewSpacing, styles.fullWidth]}>
          <Text style={[styles.font24, styles.centerText]}>FOLLOWING PRAYERS</Text>
        </View>
        <View style={styles.addViewSpacing}>
          <Text style={styles.font16}>While all prayers are submitted and viewed anonymously, we hope to use connections between users to illustrate the power of prayer. You can follow prayers by tapping the heart icon, and you will receive notifications anytime the author provides updates to their prayer request.{'\n'}Note: Once you Accept a prayer, you will not be able to return to it, so please be sure to Follow any prayer requests you would like to receive updates about before moving on.</Text>
        </View>
        <View style={[styles.addViewSpacing, styles.fullWidth]}>
          <Text style={[styles.font24, styles.centerText]}>REPORTING CONTENT</Text>
        </View>
        <View style={styles.addViewSpacing}>
          <Text style={styles.font16}>If you come across a request that shouldn't be in our prayer network, use the flag icon to bring it to our attention.</Text>
        </View>
      </ScrollView>
    </View>
  </View>
)

export default About
