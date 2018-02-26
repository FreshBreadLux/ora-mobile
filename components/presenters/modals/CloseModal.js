import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const CloseModal = ({ hideModal, togglePrayer }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>Closing this prayer means it will not be displayed to new users. You and the people that are following the prayer will still be able to see it.</Text>
      <TouchableOpacity
        style={ss.fullWidth}
        onPress={() => {
          togglePrayer(true)
          hideModal()
        }}>
        <View style={ss.modalLineView}>
          <Text style={[ss.subHeader, ss.redText]}>Close Prayer</Text>
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

export default CloseModal
