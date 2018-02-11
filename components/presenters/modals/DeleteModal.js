import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const DeleteModal = ({ hideModal, deletePrayer }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>This prayer will be deleted. You will not be able to recover it. If you only want to prevent new people from seeing the prayer, considering closing it.</Text>
      <TouchableOpacity
        style={ss.fullWidth}
        onPress={() => {
          deletePrayer()
          hideModal()
        }}>
        <View style={ss.modalLineView}>
          <Text style={[ss.subHeader, ss.redText]}>Delete Prayer</Text>
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

export default DeleteModal
