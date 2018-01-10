import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

export const FollowModalContent = ({ setModal, followPrayer }) => (
  <View style={[styles.center, styles.padding15]}>
    <View style={styles.modalContent}>
      <Text style={styles.modalText}>Following prayers is a sign of support and engagement, and will keep you updated on the status of the prayer request</Text>
      <TouchableOpacity
        style={styles.fullWidth}
        onPress={followPrayer}>
        <View style={styles.modalLineView}>
          <Text style={[styles.font20, styles.blueText]}>Follow Prayer</Text>
        </View>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={styles.fullWidth}
      onPress={() => setModal(null)}>
      <View style={styles.modalContent}>
        <Text style={[styles.font20, styles.redText]}>Cancel</Text>
      </View>
    </TouchableOpacity>
  </View>
)

export const AboutModalContent = ({ setModal }) => (
  <View style={[styles.center, styles.padding15]}>
    <View style={styles.modalContent}>
      <Text style={styles.modalText}>Ora lets you accept prayer requests from all over the world. Before beginning to pray, it's important to take some time to remind yourself what Ora is, and what it is not. Ora is nothing more than an illustration; the reality of universal prayer exists with or without this app. So before you begin to pray, recall that you are in the presence of God. Realize that there are people praying at all times, all over the world. Recognize that your prayers have a real impact.
      {'\n\n'}
      You can use the bookmark icon to follow a prayer that you would like to receive updates about. The prayer will be added to your My Follows section. You can use the flag icon to draw attention to messages that may be dangerous, inappropriate, or spam.
      </Text>
    </View>
    <TouchableOpacity
      style={styles.fullWidth}
      onPress={() => setModal(null)}>
      <View style={styles.modalContent}>
        <Text style={[styles.font20, styles.blueText]}>Got it!</Text>
      </View>
    </TouchableOpacity>
  </View>
)

export const FlagModalContent = ({ setModal, flagPrayer }) => (
  <View style={[styles.center, styles.padding15]}>
    <View style={styles.modalContent}>
      <Text style={styles.modalText}>Please select the category that this prayer should be flagged under</Text>
      <TouchableOpacity
        style={styles.fullWidth}
        onPress={() => flagPrayer('spam')}>
        <View style={styles.modalLineView}>
          <Text style={[styles.font20, styles.redText]}>Spam</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fullWidth}
        onPress={() => flagPrayer('dangerous')}>
        <View style={styles.modalLineView}>
          <Text style={[styles.font20, styles.redText]}>Dangerous</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fullWidth}
        onPress={() => flagPrayer('inappropriate')}>
        <View style={styles.modalLineView}>
          <Text style={[styles.font20, styles.redText]}>Inappropriate</Text>
        </View>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={styles.fullWidth}
      onPress={() => setModal(null)}>
      <View style={styles.modalContent}>
        <Text style={[styles.font20, styles.blueText]}>Cancel</Text>
      </View>
    </TouchableOpacity>
  </View>
)
