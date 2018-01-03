import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

const FollowModalContent = ({ setModal, followPrayer }) => (
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

export default FollowModalContent
