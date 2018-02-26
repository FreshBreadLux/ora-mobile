import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const FollowModalContent = ({ hideModal, followPrayer }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>Following prayers is a sign of support and tells the author that you will continue to pray for their request.</Text>
      <TouchableOpacity
        style={ss.fullWidth}
        onPress={followPrayer}>
        <View style={ss.modalLineView}>
          <Text style={[ss.subHeader, ss.blueText]}>Follow Prayer</Text>
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

export default FollowModalContent
