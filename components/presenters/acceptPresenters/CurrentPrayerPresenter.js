import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Animated, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { setVisibleModal, removeVisibleModal } from '../../../store'
import Modal from 'react-native-modal'
import { Feather } from '@expo/vector-icons'
import { FlagModal, AboutModal, FollowModal } from '../modals'
import ss from '../../StyleSheet'

const CurrentPrayerPresenter = ({ navigation, currentPrayer, animateNextPrayerTransition, finishPraying, flagPrayer, toggleFollowPrayer, follows, buttonOpacity, prayerTextOpacity, activityIndicatorOpacity, networkErrorMessageOpacity, visibleModal, showModal, hideModal, noPrayers, networkError, requestEnRoute }) => (
  <SafeAreaView style={ss.invisiContainer}>
    <Animated.View style={[ss.invisiContainer, ss.padding15, ss.spaceAround, { opacity: buttonOpacity }]}>
      <TouchableOpacity
        style={[ss.padding10, ss.alignFlexStart]}
        onPress={finishPraying}>
        <Feather
          name="x-circle"
          size={20}
          color="#888" />
      </TouchableOpacity>
      <View style={ss.flex1}>
        {networkError
        ? <Animated.View style={[ss.flex1, ss.center, { opacity: networkErrorMessageOpacity }]}>
            <Text style={[ss.centerText, ss.subHeader]}>There appears to be a network error</Text>
          </Animated.View>
        : <View style={ss.flex1}>
            {requestEnRoute
            ? <Animated.View style={[ss.flex1, ss.center, { opacity: activityIndicatorOpacity }]}>
                <ActivityIndicator size="small" color="#ccc" />
              </Animated.View>
            : <View style={ss.flex1}>
                <View style={ss.flex1}>
                  <Animated.View style={[ss.flex1, ss.center, { opacity: prayerTextOpacity }]}>
                    <Text
                      numberOfLines={3}
                      style={[ss.header, ss.centerText]}>
                      {currentPrayer.subject}
                    </Text>
                  </Animated.View>
                </View>
                <View style={[ss.flex4, ss.fullWidth]}>
                  <Animated.ScrollView
                    showsVerticalScrollIndicator={false}
                    style={[ss.flex1, { opacity: prayerTextOpacity }]}>
                    <Text style={[ss.body, ss.paddingBottom30]}>{currentPrayer.body}</Text>
                    {currentPrayer.updates
                    ? currentPrayer.updates.map(update => (
                        <View key={update.id}>
                          <View style={[ss.row, ss.paddingBottom10, ss.darkBottomBorder]}>
                            <Text style={ss.subHeader}>update</Text>
                          </View>
                          <Text style={[ss.body, ss.paddingBottom30, ss.paddingTop10]}>{update.body}</Text>
                        </View>
                      ))
                    : null
                    }
                  </Animated.ScrollView>
                </View>
              </View>
            }
          </View>
        }
      </View>
      {noPrayers
      ? null
      : <View style={ss.fullWidth}>
          <View style={[
            ss.row,
            ss.spaceAround,
            ss.fullWidth,
            ss.darkTopBorder]}>
            <TouchableOpacity
              style={[ss.padding10, ss.center]}
              onPress={() => showModal('flag')}>
              <Feather
                name="flag"
                size={22}
                color="#555" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[ss.padding10, ss.center]}
              onPress={() => showModal('about')}>
              <Feather
                name="help-circle"
                size={22}
                color="#555" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[ss.padding10, ss.center]}
              onPress={() => showModal('follow')}>
              <Feather
                name="heart"
                size={22}
                color={ follows && follows.find(follow => {
                  return follow.id === currentPrayer.id
                }) ? '#FF4081' : '#555' } />
            </TouchableOpacity>
          </View>
          <View style={[ss.padding10, ss.center, ss.fullWidth]}>
            <TouchableOpacity
              onPress={animateNextPrayerTransition}
              style={[ss.button, ss.threeQuartersWidth]}>
              <Text style={ss.buttonText}>ACCEPT NEW PRAYER</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
      <Modal
        isVisible={visibleModal === 'flag'}
        style={ss.bottomModal}>
        <FlagModal
          hideModal={hideModal}
          flagPrayer={flagPrayer} />
      </Modal>
      <Modal
        isVisible={visibleModal === 'about'}
        style={ss.bottomModal}>
        <AboutModal
          navigation={navigation}
          hideModal={hideModal} />
      </Modal>
      <Modal
        isVisible={visibleModal === 'follow'}
        style={ss.bottomModal}>
        <FollowModal
          hideModal={hideModal}
          alreadyFollowing={follows && follows.find(follow => follow.id === currentPrayer.id)}
          toggleFollowPrayer={toggleFollowPrayer} />
      </Modal>
    </Animated.View>
  </SafeAreaView>
)

const mapState = state => ({
  follows: state.follows,
  currentPrayer: state.acceptPrayer.currentPrayer,
  noPrayers: state.acceptPrayer.noPrayers,
  visibleModal: state.visibleModal
})

const mapDispatch = dispatch => ({
  showModal: visibleModal => dispatch(setVisibleModal(visibleModal)),
  hideModal: () => dispatch(removeVisibleModal())
})

export default connect(mapState, mapDispatch)(CurrentPrayerPresenter)
