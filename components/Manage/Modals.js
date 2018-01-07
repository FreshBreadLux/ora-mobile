import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

export const CloseModalContent = ({ setModal, togglePrayer }) => (
  <View style={[styles.center, { padding: 20 }]}>
    <View style={styles.modalContent}>
      <Text style={[styles.body, { paddingBottom: 10, color: '#888' }]}>Closing this prayer will remove it from the Ora prayer network. You will stop receiving notifications regarding this prayer.</Text>
      <TouchableOpacity onPress={() => togglePrayer(true)}>
        <Text style={styles.body}>Close Prayer</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={styles.fullWidth}
      onPress={() => setModal(null)}>
      <View style={styles.modalContent}>
        <Text style={styles.body}>Cancel</Text>
      </View>
    </TouchableOpacity>
  </View>
)

export const OpenModalContent = ({ setModal, togglePrayer }) => (
  <View style={[styles.center, { padding: 20 }]}>
    <View style={styles.modalContent}>
      <Text style={[styles.body, { paddingBottom: 10, color: '#888' }]}>Opening this prayer will add it to the Ora prayer network. You will start receiving notifications regarding this prayer.</Text>
      <TouchableOpacity onPress={() => togglePrayer(false)}>
        <Text style={styles.body}>Open Prayer</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={styles.fullWidth}
      onPress={() => setModal(null)}>
      <View style={styles.modalContent}>
        <Text style={styles.body}>Cancel</Text>
      </View>
    </TouchableOpacity>
  </View>
)

export const UnfollowModalContent = ({ setModal, unfollowPrayer }) => (
  <View style={[styles.center, { padding: 20 }]}>
    <View style={styles.modalContent}>
      <Text style={[styles.body, { paddingBottom: 10, color: '#888' }]}>If you unfollow this prayer, it will no longer show up in your Following section and you will not receive any updates about the prayer request.</Text>
      <TouchableOpacity onPress={unfollowPrayer}>
        <Text style={styles.body}>Unfollow Prayer</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={styles.fullWidth}
      onPress={() => setModal(null)}>
      <View style={styles.modalContent}>
        <Text style={styles.body}>Cancel</Text>
      </View>
    </TouchableOpacity>
  </View>
)
