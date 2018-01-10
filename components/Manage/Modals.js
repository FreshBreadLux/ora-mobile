import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

export const CloseModalContent = ({ setModal, togglePrayer }) => (
  <View style={[styles.center, styles.padding15]}>
    <View style={styles.modalContent}>
      <Text style={styles.modalText}>Closing this prayer will remove it from the Ora prayer network. You will stop receiving notifications regarding this prayer.</Text>
      <TouchableOpacity
        style={styles.fullWidth}
        onPress={() => togglePrayer(true)}>
        <View style={styles.modalLineView}>
          <Text style={[styles.font20, styles.redText]}>Close Prayer</Text>
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

export const OpenModalContent = ({ setModal, togglePrayer }) => (
  <View style={[styles.center, styles.padding15]}>
    <View style={styles.modalContent}>
      <Text style={styles.modalText}>Opening this prayer will add it to the Ora prayer network. You will start receiving notifications regarding this prayer.</Text>
      <TouchableOpacity
        style={styles.fullWidth}
        onPress={() => togglePrayer(false)}>
        <View style={styles.modalLineView}>
          <Text style={[styles.font20, styles.blueText]}>Open Prayer</Text>
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

export const UnfollowModalContent = ({ setModal, unfollowPrayer }) => (
  <View style={[styles.center, styles.padding15]}>
    <View style={styles.modalContent}>
      <Text style={styles.modalText}>If you unfollow this prayer, it will no longer show up in your Following section and you will not receive any updates about the prayer request.</Text>
      <TouchableOpacity
        style={styles.fullWidth}
        onPress={unfollowPrayer}>
        <View style={styles.modalLineView}>
          <Text style={[styles.font20, styles.redText]}>Unfollow Prayer</Text>
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
