import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const UnfollowModal = ({ hideModal, unfollowPrayer }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>Are you sure you want to Unfollow? This action cannot be undone.</Text>
      <TouchableOpacity
        style={ss.fullWidth}
        onPress={() => {
          unfollowPrayer()
          hideModal()
        }}>
        <View style={ss.modalLineView}>
          <Text style={[ss.subHeader, ss.redText]}>Unfollow Prayer</Text>
        </View>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={ss.fullWidth}
      onPress={hideModal}>
      <View style={ss.modalContent}>
        <Text style={[ss.subHeader, ss.blueText]}>Cancel</Text>
      </View>
    </TouchableOpacity>
  </View>
)

export default UnfollowModal
