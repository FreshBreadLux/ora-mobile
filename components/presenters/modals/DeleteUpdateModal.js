import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const DeleteUpdateModal = ({ hideModal, deleteUpdate, setUpdateToDelete }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>This update will be deleted. You will not be able to recover it.</Text>
      <TouchableOpacity
        style={ss.fullWidth}
        onPress={() => {
          deleteUpdate()
          hideModal()
        }}>
        <View style={ss.modalLineView}>
          <Text style={[ss.subHeader, ss.redText]}>Delete Update</Text>
        </View>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={ss.fullWidth}
      onPress={() => {
        hideModal()
        setUpdateToDelete(null)
      }}>
      <View style={ss.modalContent}>
        <Text style={[ss.subHeader, ss.blueText]}>Cancel</Text>
      </View>
    </TouchableOpacity>
  </View>
)

export default DeleteUpdateModal
