import React from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { setVisibleModal, removeVisibleModal } from '../../../store'
import Modal from 'react-native-modal'
import { Ionicons } from '@expo/vector-icons'
import { OpenModal, CloseModal, DeleteModal, DeleteUpdateModal } from '../modals'
import ss from '../../StyleSheet'

const PrayerPresenter = ({ prayer, toggleEdit, toggleAddUpdate, togglePrayer, deletePrayer, deleteUpdate, showModal, hideModal, visibleModal, setUpdateToDelete }) => (
  <View style={[ss.invisiContainer, ss.padding15]}>
    <View style={ss.invisiContainer}>
      <View style={[ss.row, ss.paddingBottom10, ss.spaceBetween, ss.bottomBorder]}>
        <Text style={[ss.subHeader, ss.flex1]}>{prayer.subject}</Text>
        <View style={[ss.row, ss.center]}>
          <TouchableOpacity
            style={ss.paddingLeft7}
            onPress={() => showModal('delete')}>
            <Ionicons
              name="ios-trash-outline"
              size={20}
              color="#555" />
          </TouchableOpacity>
          {prayer.closed
          ? <TouchableOpacity
            style={ss.paddingLeft7}
              onPress={() => showModal('open')}>
              <Ionicons
                name="ios-eye-outline"
                size={20}
                color="#555" />
            </TouchableOpacity>
          : <TouchableOpacity
            style={ss.paddingLeft7}
              onPress={() => showModal('close')}>
              <Ionicons
                name="ios-eye-off-outline"
                size={20}
                color="#555" />
            </TouchableOpacity>
          }
          <TouchableOpacity
            style={ss.paddingLeft7}
            onPress={toggleEdit}>
            <Ionicons
              name="ios-create-outline"
              size={20}
              color="#555" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[ss.body, ss.paddingBottom30, ss.paddingTop10]}>{prayer.body}</Text>
        {prayer.updates.map(update => (
          <View key={update.id}>
            <View style={[ss.row, ss.paddingBottom10, ss.bottomBorder]}>
              <Text style={[ss.tagLine, ss.flex1]}>UPDATE</Text>
              <TouchableOpacity
                style={ss.paddingLeft7}
                onPress={() => {
                  setUpdateToDelete(update.id)
                  showModal('deleteUpdate')
                }}>
                <Ionicons
                  name="ios-trash-outline"
                  size={20}
                  color="#555" />
              </TouchableOpacity>
            </View>
            <Text style={[ss.body, ss.paddingBottom30, ss.paddingTop10]}>{update.body}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
    <View style={[ss.row, ss.spaceBetween, ss.viewTopBorder]}>
      <Text style={[ss.subBody, ss.greyText, ss.oneThirdWidth]}>{`VIEWS: ${prayer.totalViews}`}</Text>
      <TouchableOpacity
        onPress={toggleAddUpdate}>
        <View style={[ss.row]}>
          <Ionicons
            name="ios-add-circle-outline"
            size={16}
            color="#555" />
          <Text style={[ss.subBody, ss.greyText, ss.paddingLeft7]}>UPDATE</Text>
        </View>
      </TouchableOpacity>
      <Text style={[ss.subBody, ss.greyText, ss.oneThirdWidth, ss.rightText]}>{`FOLLOWS: ${prayer.totalFollows}`}</Text>
    </View>
    <Modal
      isVisible={visibleModal === 'delete'}
      style={ss.bottomModal}>
      <DeleteModal
        hideModal={hideModal}
        deletePrayer={deletePrayer} />
    </Modal>
    <Modal
      isVisible={visibleModal === 'deleteUpdate'}
      style={ss.bottomModal}>
      <DeleteUpdateModal
        setUpdateToDelete={setUpdateToDelete}
        hideModal={hideModal}
        deleteUpdate={deleteUpdate} />
    </Modal>
    <Modal
      isVisible={visibleModal === 'open'}
      style={ss.bottomModal}>
      <OpenModal
        hideModal={hideModal}
        togglePrayer={togglePrayer} />
    </Modal>
    <Modal
      isVisible={visibleModal === 'close'}
      style={ss.bottomModal}>
      <CloseModal
        hideModal={hideModal}
        togglePrayer={togglePrayer} />
    </Modal>
  </View>
)

const mapState = state => ({
  visibleModal: state.visibleModal
})

const mapDispatch = dispatch => ({
  showModal: (visibleModal) => dispatch(setVisibleModal(visibleModal)),
  hideModal: () => dispatch(removeVisibleModal())
})

export default connect(mapState, mapDispatch)(PrayerPresenter)
