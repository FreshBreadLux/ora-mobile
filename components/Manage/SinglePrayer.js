import React from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { setVisibleModal, removeVisibleModal } from '../../store'
import Modal from 'react-native-modal'
import { Ionicons } from '@expo/vector-icons'
import { OpenModalContent, CloseModalContent, DeleteModalContent } from './Modals'
import ss from '../StyleSheet'

const SinglePrayer = ({ prayer, toggleEdit, togglePrayer, deletePrayer, showModal, hideModal, visibleModal }) => (
  <View style={[ss.invisiContainer, ss.padding15]}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={[ss.body, ss.paddingBottom10]}>{`${prayer.body}`}</Text>
    </ScrollView>
    <View style={[ss.row, ss.spaceBetween, ss.viewTopBorder]}>
      <Text style={[ss.subBody, ss.greyText]}>{`VIEWS: ${prayer.totalViews}`}</Text>
      <Text style={[ss.subBody, ss.greyText]}>{`FOLLOWS: ${prayer.totalFollows}`}</Text>
    </View>
    <View style={[ss.row, ss.spaceBetween, ss.fullWidth]}>
      <TouchableOpacity
        onPress={() => showModal('delete')}
        style={ss.padding10}>
        <Ionicons
          name="ios-trash-outline"
          size={28}
          color="#555" />
      </TouchableOpacity>
      {prayer.closed
      ? <TouchableOpacity
          onPress={() => showModal('open')}
          style={ss.padding10}>
          <Ionicons
          name="ios-eye-outline"
          size={28}
          color="#555" />
        </TouchableOpacity>
      : <TouchableOpacity
          onPress={() => showModal('close')}
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
        hideModal={hideModal}
        deletePrayer={deletePrayer} />
    </Modal>
    <Modal
      isVisible={visibleModal === 'open'}
      style={ss.bottomModal}>
      <OpenModalContent
        hideModal={hideModal}
        togglePrayer={togglePrayer} />
    </Modal>
    <Modal
      isVisible={visibleModal === 'close'}
      style={ss.bottomModal}>
      <CloseModalContent
        hideModal={hideModal}
        togglePrayer={togglePrayer} />
    </Modal>
  </View>
)

const mapState = state => ({
  visibleModal: state.visibleModal
})

const mapDispatch = dispatch => ({
  showModal(visibleModal) {
    return dispatch(setVisibleModal(visibleModal))
  },
  hideModal() {
    return dispatch(removeVisibleModal())
  }
})

export default connect(mapState, mapDispatch)(SinglePrayer)
