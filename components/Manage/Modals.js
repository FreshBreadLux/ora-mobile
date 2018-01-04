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
    <View style={styles.modalContent}>
      <TouchableOpacity onPress={() => setModal(null)}>
        <Text style={styles.body}>Cancel</Text>
      </TouchableOpacity>
    </View>
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
    <View style={styles.modalContent}>
      <TouchableOpacity onPress={() => setModal(null)}>
        <Text style={styles.body}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </View>
)
