import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const UnfollowModal = ({ hideModal, unfollowPrayer }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>If you unfollow this prayer, it will no longer show up in your Follows section and you will not receive any updates about the prayer request.</Text>
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
