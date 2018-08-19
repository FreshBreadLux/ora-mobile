import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { setVisibleModal, removeVisibleModal } from '../../../store'
import Modal from 'react-native-modal'
import { ArtistModal, SaveRewardModal } from '../modals'
import { ampEvents, ampLogEvent } from '../../analytics'
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const RewardPresenter = ({ saveReward, navigation, dailyRewardLocalUri, dailyReward, saveFailed, alreadySaved, processingSave, visibleModal, showModal, hideModal }) => (
  <View style={ss.invisiContainer}>
    {dailyRewardLocalUri
    ? <View style={ss.invisiContainer}>
        <View style={ss.backgroundImageFrame}>
          <Image
            style={{ flex: 1, height: undefined, width: undefined, resizeMode: 'cover' }}
            source={{ uri: dailyRewardLocalUri }} />
        </View>
        <SafeAreaView style={ss.invisiContainer}>
          <TouchableOpacity
            style={ss.padding10}
            onPress={() => navigation.goBack()}>
            <Feather
              name="x-circle"
              size={20}
              color={dailyReward.iconColor} />
          </TouchableOpacity>
          <View style={ss.flex1} />
          <View style={[ss.row, ss.spaceAround, ss.fullWidth, ss.padding10]}>
            <TouchableOpacity onPress={() => showModal('artist')}>
              <MaterialIcons
                name="account-circle"
                size={20}
                color={dailyReward.iconColor} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                ampLogEvent(ampEvents.READ_FULL_REWARD)
                navigation.navigate('RewardFullText')
              }}>
              <Text style={[ss.subBody, {color: dailyReward.iconColor}]}>READ MORE</Text>
            </TouchableOpacity>
            {saveFailed
            ? <Text>save failed</Text>
            : <View>
                {processingSave
                ? <ActivityIndicator size="small" color={dailyReward.iconColor} />
                : <View>
                    {alreadySaved
                    ? <Ionicons
                        name="md-checkbox"
                        size={20}
                        color={dailyReward.iconColor} />
                    : <TouchableOpacity
                        onPress={() => showModal('saveReward')}>
                        <Ionicons
                          name="md-download"
                          size={20}
                          color={dailyReward.iconColor} />
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
            color={dailyReward.iconColor} />
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
        artist={dailyReward.artist}
        hideModal={hideModal} />
    </Modal>
    <Modal
      isVisible={visibleModal === 'saveReward'}
      style={ss.bottomModal}>
      <SaveRewardModal
        saveReward={saveReward}
        hideModal={hideModal} />
    </Modal>
  </View>
)

const mapState = state => ({
  visibleModal: state.visibleModal,
  dailyRewardLocalUri: state.acceptPrayer.dailyRewardLocalUri,
  dailyReward: state.acceptPrayer.dailyReward,
})

const mapDispatch = dispatch => ({
  showModal: visibleModal => dispatch(setVisibleModal(visibleModal)),
  hideModal: () => dispatch(removeVisibleModal())
})

export default connect(mapState, mapDispatch)(RewardPresenter)
