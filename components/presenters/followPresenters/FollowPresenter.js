import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import Modal from 'react-native-modal'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { setVisibleModal, removeVisibleModal } from '../../../store'
import { UnfollowModal } from '../modals'
import ss from '../../StyleSheet'

const inRecentlyPrayedFor = (recentlyPrayedFor, prayerId) => (
  recentlyPrayedFor.reduce((acc, cur) => {
    if (acc || cur === prayerId) return true
    return false
  }, false)
)

const FollowPresenter = ({ follow, notifyAuthor, recentlyPrayedFor, unfollowPrayer, showModal, hideModal, visibleModal }) => (
  <SafeAreaView style={ss.whiteContainer}>
    <View style={[ss.invisiContainer, ss.padding15]}>
      <View style={[ss.row, ss.paddingBottom10, ss.bottomBorder]}>
        <Text style={[ss.subHeader, ss.flex1]}>{follow.subject}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[ss.body, ss.paddingBottom30, ss.paddingTop10]}>{follow.body}</Text>
        {follow.updates
        ? follow.updates.map(update => (
          <View key={update.id}>
            <View style={[ss.row, ss.paddingBottom10, ss.darkBottomBorder]}>
              <Text style={ss.tagLine}>UPDATE</Text>
            </View>
            <Text style={[ss.body, ss.paddingBottom30, ss.paddingTop10]}>{update.body}</Text>
          </View>
        ))
        : null
        }
      </ScrollView>
      <View style={[ss.row, ss.spaceAround, ss.paddingTop10]}>
        <View style={[ss.center, ss.flex1]}>
          <TouchableOpacity
            onPress={() => showModal('unfollow')}>
            <View style={ss.row}>
              <Ionicons
                name="ios-remove-circle-outline"
                size={18}
                color="#555" />
              <Text style={[ss.subBody, ss.greyText, ss.paddingLeft7]}>UNFOLLOW</Text>
            </View>
          </TouchableOpacity>
        </View>
        {inRecentlyPrayedFor(recentlyPrayedFor, follow.id)
        ? <View style={[ss.center, ss.flex1]}>
            <Text style={[ss.subBody, ss.pinkText]}>SENT!</Text>
          </View>
        : <View style={[ss.center, ss.flex1]}>
            <TouchableOpacity
              onPress={notifyAuthor}>
              <View style={ss.row}>
                <Ionicons
                  name="md-heart"
                  size={18}
                  color="#FF4081" />
                <Text style={[ss.subBody, ss.pinkText, ss.paddingLeft7]}>SEND LOVE</Text>
              </View>
            </TouchableOpacity>
          </View>
        }
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
  visibleModal: state.visibleModal,
  recentlyPrayedFor: state.recentlyPrayedFor
})

const mapDispatch = dispatch => ({
  showModal: visibleModal => dispatch(setVisibleModal(visibleModal)),
  hideModal: () => dispatch(removeVisibleModal())
})

export default connect(mapState, mapDispatch)(FollowPresenter)
