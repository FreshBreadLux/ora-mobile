import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const DeleteRewardModal = ({ reward, hideModal, deleteReward }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>This saved reward will be deleted. You will not be able to recover it. Are you sure you want to remove it from your profile?</Text>
      <TouchableOpacity
        style={ss.fullWidth}
        onPress={() => deleteReward(reward)}>
        <View style={ss.modalLineView}>
          <Text style={[ss.subHeader, ss.redText]}>Delete Saved Reward</Text>
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

export default DeleteRewardModal
