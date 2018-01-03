import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

export const FollowModalContent = ({ setModal, followPrayer }) => (
  <View style={[styles.center, { padding: 20 }]}>
    <View style={styles.modalContent}>
      <Text style={[styles.body, { paddingBottom: 10, color: '#888' }]}>Following prayers is a sign of support and engagement, and will keep you updated on the status of the prayer request</Text>
      <TouchableOpacity onPress={followPrayer}>
        <Text style={styles.body}>Follow Prayer</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.modalContent}>
      <TouchableOpacity onPress={() => setModal(null)}>
        <Text style={styles.body}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export const AboutModalContent = ({ setModal }) => (
  <View style={[styles.center, { padding: 20 }]}>
    <View style={styles.modalContent}>
      <Text style={[styles.body, { paddingBottom: 10, color: '#888' }]}>Ora lets you accept prayer requests from all over the world. Before beginning to pray, it's important to take some time to remind yourself what Ora is, and what it is not. Ora is nothing more than an illustration; the reality of universal prayer exists with or without this app. So before you begin to pray, recall that you are in the precense of God. Realize that there are people praying at all times, all over the world. Recognize that your prayers have a real impact.
      {'\n\n'}
      You can use the bookmark icon to follow a prayer that you would like to receive updates about. The prayer will be added to your My Follows section. You can use the flag icon to draw attention to messages that may be dangerous, inappropriate, or spam.
      </Text>
    </View>
    <View style={styles.modalContent}>
      <TouchableOpacity onPress={() => setModal(null)}>
        <Text style={styles.body}>Got it!</Text>
      </TouchableOpacity>
    </View>
  </View>
)
