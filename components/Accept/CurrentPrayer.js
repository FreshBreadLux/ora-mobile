import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Animated } from 'react-native'
import Modal from 'react-native-modal'
import { Feather } from '@expo/vector-icons'
import { FlagModalContent, AboutModalContent, FollowModalContent } from './Modals'
import ss from '../StyleSheet'

const CurrentPrayer = ({ statePrayer, fadeOut, finishPraying, flagPrayer, followPrayer, follows, opacity, visibleModal, setModal }) => (
  <SafeAreaView style={ss.invisiContainer}>
    <View style={[ss.invisiContainer, ss.padding15, ss.spaceAround]}>
      <View style={ss.flex1}>
        <Animated.View style={[ss.flex1, ss.center, { opacity }]}>
          <Text
            numberOfLines={3}
            style={[ss.header, ss.centerText]}>
            {statePrayer.subject}
          </Text>
        </Animated.View>
      </View>
      <View style={[ss.flex4, ss.fullWidth]}>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={[ss.flex1, { opacity }]}>
          <Text style={[ss.body, ss.paddingBottom15]}>{statePrayer.body}</Text>
        </Animated.ScrollView>
      </View>
      <View style={[
        ss.row,
        ss.spaceAround,
        ss.fullWidth,
        ss.topBorder]}>
        <TouchableOpacity
          style={[ss.padding10, ss.center]}
          onPress={finishPraying}>
          <Feather
            name="x-circle"
            size={22}
            color="#555" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[ss.padding10, ss.center]}
          onPress={() => setModal('about')}>
          <Feather
            name="help-circle"
            size={22}
            color="#555" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[ss.padding10, ss.center]}
          onPress={() => setModal('flag')}>
          <Feather
            name="flag"
            size={22}
            color="#555" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[ss.padding10, ss.center]}
          onPress={() => setModal('follow')}>
          <Feather
            name="heart"
            size={22}
            color={ follows && follows.find(follow => {
              return follow.prayerId === statePrayer.id
            }) ? '#FF4081' : '#555' } />
        </TouchableOpacity>
      </View>
      <View style={[ss.padding10, ss.center, ss.fullWidth]}>
        <TouchableOpacity
          onPress={fadeOut}
          style={[ss.button, ss.fullWidth]}>
          <Text style={ss.buttonText}>accept a new prayer</Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={visibleModal === 'flag'}
        style={ss.bottomModal}>
        <FlagModalContent
          setModal={setModal}
          flagPrayer={flagPrayer} />
      </Modal>
      <Modal
        isVisible={visibleModal === 'about'}
        style={ss.bottomModal}>
        <AboutModalContent
          setModal={setModal} />
      </Modal>
      <Modal
        isVisible={visibleModal === 'follow'}
        style={ss.bottomModal}>
        <FollowModalContent
          setModal={setModal}
          followPrayer={followPrayer} />
      </Modal>
    </View>
  </SafeAreaView>
)

export default CurrentPrayer
