import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { setVisibleModal, removeVisibleModal } from '../../../store'
import Modal from 'react-native-modal'
import { ArtistModal, SaveRewardModal, DeleteRewardModal } from '../modals'
import { ampEvents, ampLogEvent } from '../../analytics'
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

/*
  The RewardPresenter displays both dailyRewards and saved rewards. If a local path isn't present,
  an activity indicator is rendered (a localPath should be loaded on the reward objects by the
  fetchAndCache functions in the redux store; if the reward doesn't have a localPath, theoretically
  it hasn't finished loading).
  There is some unfortunately complex conditional rendering that takes place surrounding the saving
  functionality:
  1. If a process has failed, an error message is displayed
  2. If a process is ongoing, an activity indicator is displayed
  3. If the reward hasn't been saved yet, a download button is displayed
  4a. If the reward has been saved and reward.savedReward exists (an indication that RewardContainer
    was mounted by SavedRewardListPresenter and that this isn't the dailyReward object), a trash
    button is displayed
  4b. If the reward has been saved but reward.savedReward doesn't exist, this is the dailyReward
    object and a checkmark icon is displayed
*/

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
            <TouchableOpacity
              style={ss.padding10}
              onPress={() => { if (reward.artist) showModal('artist') }}>
              <MaterialIcons
                name="account-circle"
                size={20}
                color={reward.iconColor} />
            </TouchableOpacity>
            <TouchableOpacity
              style={ss.padding10}
              onPress={() => {
                const { fullText, fullSource } = reward
                ampLogEvent(ampEvents.READ_FULL_REWARD)
                navigation.navigate('RewardFullText', { fullText, fullSource })
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
                          style={ss.padding10}
                          onPress={() => showModal('deleteReward')}>
                          <Ionicons
                            name="ios-trash"
                            size={20}
                            color={reward.iconColor} />
                        </TouchableOpacity>
                      : <Ionicons
                          name="ios-checkmark-circle"
                          size={20}
                          color={reward.iconColor} />
                      }
                      </View>
                    : <TouchableOpacity
                        style={ss.padding10}
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
        reward={reward}
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
