import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../StyleSheet'

export const DeleteModalContent = ({ hideModal, deletePrayer }) => (
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

export const CloseModalContent = ({ hideModal, togglePrayer }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>Closing this prayer will remove it from the Ora prayer network. You will stop receiving notifications regarding this prayer. You and the people that are following the prayer will still be able to see it.</Text>
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

export const OpenModalContent = ({ hideModal, togglePrayer }) => (
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

export const UnfollowModalContent = ({ hideModal, unfollowPrayer }) => (
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
