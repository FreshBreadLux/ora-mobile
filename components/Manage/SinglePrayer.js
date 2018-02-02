import React from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { Ionicons } from '@expo/vector-icons'
import { OpenModalContent, CloseModalContent, DeleteModalContent } from './Modals'
import ss from '../StyleSheet'

const SinglePrayer = ({ prayer, toggleEdit, togglePrayer, deletePrayer, setModal, visibleModal }) => (
  <View style={[ss.invisiContainer, ss.padding15]}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={[ss.body, ss.paddingBottom10]}>{`${prayer.body}`}</Text>
    </ScrollView>
    <View style={[ss.row, ss.spaceBetween, ss.viewTopBorder]}>
      <Text style={[ss.subBody, ss.greyText]}>{`Total Views: ${prayer.totalViews}`}</Text>
      <Text style={[ss.subBody, ss.greyText]}>{`Total Follows: ${prayer.totalFollows}`}</Text>
    </View>
    <View style={[ss.row, ss.spaceBetween, ss.fullWidth]}>
      <TouchableOpacity
        onPress={() => setModal('delete')}
        style={ss.padding10}>
        <Ionicons
          name="ios-trash-outline"
          size={28}
          color="#555" />
      </TouchableOpacity>
      {prayer.closed
      ? <TouchableOpacity
          onPress={() => setModal('open')}
          style={ss.padding10}>
          <Ionicons
          name="ios-eye-outline"
          size={28}
          color="#555" />
        </TouchableOpacity>
      : <TouchableOpacity
          onPress={() => setModal('close')}
          style={ss.padding10}>
          <Ionicons
          name="ios-eye-off-outline"
          size={28}
          color="#555" />
        </TouchableOpacity>
      }
      <TouchableOpacity
        onPress={toggleEdit}
        style={ss.padding10}>
        <Ionicons
          name="ios-create-outline"
          size={28}
          color="#555" />
      </TouchableOpacity>
      <TouchableOpacity
        style={ss.padding10}>
        <Ionicons
          name="ios-share-outline"
          size={28}
          color="#555" />
      </TouchableOpacity>
    </View>
    <Modal
      isVisible={visibleModal === 'delete'}
      style={ss.bottomModal}>
      <DeleteModalContent
        setModal={setModal}
        deletePrayer={deletePrayer} />
    </Modal>
    <Modal
      isVisible={visibleModal === 'open'}
      style={ss.bottomModal}>
      <OpenModalContent
        setModal={setModal}
        togglePrayer={togglePrayer} />
    </Modal>
    <Modal
      isVisible={visibleModal === 'close'}
      style={ss.bottomModal}>
      <CloseModalContent
        setModal={setModal}
        togglePrayer={togglePrayer} />
    </Modal>
  </View>
)

export default SinglePrayer
