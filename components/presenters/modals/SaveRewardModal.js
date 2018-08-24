import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const SaveRewardModal = ({ hideModal, saveReward }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>Saving this image will allow you to revisit it later in your profile.</Text>
      <TouchableOpacity
        style={ss.fullWidth}
        onPress={saveReward}>
        <View style={ss.modalLineView}>
          <Text style={[ss.subHeader, ss.blueText]}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={ss.fullWidth}
      onPress={hideModal}>
      <View style={ss.modalContent}>
        <Text style={[ss.subHeader, ss.redText]}>Cancel</Text>
      </View>
    </TouchableOpacity>
  </View>
)

export default SaveRewardModal
