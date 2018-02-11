import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const OpenModal = ({ hideModal, togglePrayer }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>Opening this prayer will add it to the Ora prayer network. You will start receiving notifications regarding this prayer.</Text>
      <TouchableOpacity
        style={ss.fullWidth}
        onPress={() => {
          togglePrayer(false)
          hideModal()
        }}>
        <View style={ss.modalLineView}>
          <Text style={[ss.subHeader, ss.blueText]}>Open Prayer</Text>
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

export default OpenModal
