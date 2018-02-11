import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Modal from 'react-native-modal'
import { connect } from 'react-redux'
import { setVisibleModal, removeVisibleModal } from '../../../store'
import { UnfollowModal } from '../modals'
import ss from '../../StyleSheet'

const FollowPresenter = ({ follow, unfollowPrayer, showModal, hideModal, visibleModal }) => (
  <SafeAreaView style={ss.whiteContainer}>
    <View style={[ss.invisiContainer, ss.padding15]}>
      <ScrollView>
        <Text style={[ss.body, ss.paddingBottom10]}>{`${follow.body}`}</Text>
      </ScrollView>
      <View style={[ss.center, ss.addViewSpacing]}>
        <TouchableOpacity
          onPress={() => showModal('unfollow')}
          style={[ss.blackButton, ss.halfWidth]}>
          <Text style={[ss.buttonText, ss.whiteText]}>Unfollow</Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={visibleModal === 'unfollow'}
        style={ss.bottomModal}>
        <UnfollowModal
          hideModal={hideModal}
          unfollowPrayer={unfollowPrayer} />
      </Modal>
    </View>
  </SafeAreaView>
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

export default connect(mapState, mapDispatch)(FollowPresenter)
