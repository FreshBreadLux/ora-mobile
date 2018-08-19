import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { setVisibleModal, removeVisibleModal } from '../../../store'
import Modal from 'react-native-modal'
import { ArtistModal, SaveRewardModal, DeleteRewardModal } from '../modals'
import { ampEvents, ampLogEvent } from '../../analytics'
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const RewardPresenter = ({ reward, saveReward, deleteReward, navigation, failed, alreadySaved, processing, visibleModal, showModal, hideModal }) => (
  <View style={ss.invisiContainer}>
    {reward.localPath
    ? <View style={ss.invisiContainer}>
        <View style={ss.backgroundImageFrame}>
          <Image
            style={{ flex: 1, height: undefined, width: undefined, resizeMode: 'cover' }}
            source={{ uri: reward.localPath }} />
        </View>
        <SafeAreaView style={ss.invisiContainer}>
          <TouchableOpacity
            style={ss.padding10}
            onPress={() => navigation.goBack()}>
            <Feather
              name="x-circle"
              size={20}
              color={reward.iconColor} />
          </TouchableOpacity>
          <View style={ss.flex1} />
          <View style={[ss.row, ss.spaceAround, ss.fullWidth, ss.padding10]}>
            <TouchableOpacity onPress={() => showModal('artist')}>
              <MaterialIcons
                name="account-circle"
                size={20}
                color={reward.iconColor} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                ampLogEvent(ampEvents.READ_FULL_REWARD)
                navigation.navigate('RewardFullText')
              }}>
              <Text style={[ss.subBody, {color: reward.iconColor}]}>READ MORE</Text>
            </TouchableOpacity>
            {failed
            ? <Text>task failed</Text>
            : <View>
                {processing
                ? <ActivityIndicator size="small" color={reward.iconColor} />
                : <View>
                    {alreadySaved
                    ? <View>
                      {reward.savedReward
                      ? <TouchableOpacity
                          onPress={() => showModal('deleteReward')}>
                          <Ionicons
                            name="ios-trash"
                            size={20}
                            color={reward.iconColor} />
                        </TouchableOpacity>
                      : <Ionicons
                          name="md-checkbox"
                          size={20}
                          color={reward.iconColor} />
                      }
                      </View>
                    : <TouchableOpacity
                        onPress={() => showModal('saveReward')}>
                        <Ionicons
                          name="md-download"
                          size={20}
                          color={reward.iconColor} />
                      </TouchableOpacity>
                    }
                  </View>
                }
              </View>
            }

          </View>
        </SafeAreaView>
      </View>
    : <SafeAreaView style={ss.invisiContainer}>
        <TouchableOpacity
          style={ss.padding10}
          onPress={() => navigation.goBack()}>
          <Feather
            name="x-circle"
            size={20}
            color="#777" />
        </TouchableOpacity>
        <View style={[ss.invisiContainer, ss.center]}>
          <ActivityIndicator size="large" color="#777" />
        </View>
      </SafeAreaView>
    }
    <Modal
      isVisible={visibleModal === 'artist'}
      style={ss.centerModal}>
      <ArtistModal
        artist={reward.artist}
        hideModal={hideModal} />
    </Modal>
    <Modal
      isVisible={visibleModal === 'saveReward'}
      style={ss.bottomModal}>
      <SaveRewardModal
        saveReward={saveReward}
        hideModal={hideModal} />
    </Modal>
    <Modal
      isVisible={visibleModal === 'deleteReward'}
      style={ss.bottomModal}>
      <DeleteRewardModal
        savedReward={reward.savedReward}
        deleteReward={deleteReward}
        hideModal={hideModal} />
    </Modal>
  </View>
)

const mapState = state => ({
  visibleModal: state.visibleModal,
})

const mapDispatch = dispatch => ({
  showModal: visibleModal => dispatch(setVisibleModal(visibleModal)),
  hideModal: () => dispatch(removeVisibleModal())
})

export default connect(mapState, mapDispatch)(RewardPresenter)
