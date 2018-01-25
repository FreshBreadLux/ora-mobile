import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../StyleSheet'

export const CloseModalContent = ({ setModal, togglePrayer }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>Closing this prayer will remove it from the Ora prayer network. You will stop receiving notifications regarding this prayer.</Text>
      <TouchableOpacity
        style={ss.fullWidth}
        onPress={() => togglePrayer(true)}>
        <View style={ss.modalLineView}>
          <Text style={[ss.subHeader, ss.redText]}>Close Prayer</Text>
        </View>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={ss.fullWidth}
      onPress={() => setModal(null)}>
      <View style={ss.modalContent}>
        <Text style={[ss.subHeader, ss.blueText]}>Cancel</Text>
      </View>
    </TouchableOpacity>
  </View>
)

export const OpenModalContent = ({ setModal, togglePrayer }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>Opening this prayer will add it to the Ora prayer network. You will start receiving notifications regarding this prayer.</Text>
      <TouchableOpacity
        style={ss.fullWidth}
        onPress={() => togglePrayer(false)}>
        <View style={ss.modalLineView}>
          <Text style={[ss.subHeader, ss.blueText]}>Open Prayer</Text>
        </View>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={ss.fullWidth}
      onPress={() => setModal(null)}>
      <View style={ss.modalContent}>
        <Text style={[ss.subHeader, ss.redText]}>Cancel</Text>
      </View>
    </TouchableOpacity>
  </View>
)

export const UnfollowModalContent = ({ setModal, unfollowPrayer }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>If you unfollow this prayer, it will no longer show up in your Following section and you will not receive any updates about the prayer request.</Text>
      <TouchableOpacity
        style={ss.fullWidth}
        onPress={unfollowPrayer}>
        <View style={ss.modalLineView}>
          <Text style={[ss.subHeader, ss.redText]}>Unfollow Prayer</Text>
        </View>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={ss.fullWidth}
      onPress={() => setModal(null)}>
      <View style={ss.modalContent}>
        <Text style={[ss.subHeader, ss.blueText]}>Cancel</Text>
      </View>
    </TouchableOpacity>
  </View>
)
