import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Animated } from 'react-native'
import Modal from 'react-native-modal'
import { EvilIcons, Ionicons } from '@expo/vector-icons'
import { FlagModalContent, AboutModalContent, FollowModalContent } from './Modals'
import styles from '../StyleSheet'

const CurrentPrayer = ({ statePrayer, fadeOut, finishPraying, flagPrayer, followPrayer, opacity, visibleModal, setModal }) => (
  <SafeAreaView style={styles.invisiContainer}>
    <View style={[styles.invisiContainer, styles.padding15, styles.spaceAround]}>
      <View style={styles.flex1}>
        <Animated.View style={[styles.flex1, styles.center, { opacity }]}>
          <Text style={[styles.font24, styles.centerText]}>{statePrayer.subject}</Text>
        </Animated.View>
      </View>
      <View style={[styles.flex4, styles.fullWidth]}>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={[styles.flex1, { opacity }]}>
          <Text style={[styles.font16, styles.paddingBottom15]}>{statePrayer.body}</Text>
        </Animated.ScrollView>
      </View>
      <View style={[
        styles.row,
        styles.spaceAround,
        styles.fullWidth,
        styles.topBorder]}
      >
        <TouchableOpacity
          style={[styles.padding10, styles.center]}
          onPress={finishPraying}
        >
          <Ionicons
            name="ios-close-circle-outline"
            size={26}
            color="#777"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.padding10, styles.center]}
          onPress={() => setModal('about')}
        >
          <Ionicons
            name="ios-help-circle-outline"
            size={26}
            color="#777"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.padding10, styles.center]}
          onPress={() => setModal('flag')}
        >
          <Ionicons
            name="ios-flag-outline"
            size={26}
            color="#777"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.padding10, styles.center]}
          onPress={() => setModal('follow')}
        >
          <Ionicons
            name="md-heart-outline"
            size={26}
            color="#777"
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.padding10, styles.center, styles.fullWidth]}>
        <TouchableOpacity
          onPress={fadeOut}
          style={[styles.button, styles.fullWidth]}
        >
          <Text style={styles.buttonText}>Accept Prayer</Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={visibleModal === 'flag'}
        style={styles.bottomModal}
      >
        <FlagModalContent
          setModal={setModal}
          flagPrayer={flagPrayer}
        />
      </Modal>
      <Modal
        isVisible={visibleModal === 'about'}
        style={styles.bottomModal}
      >
        <AboutModalContent
          setModal={setModal}
        />
      </Modal>
      <Modal
        isVisible={visibleModal === 'follow'}
        style={styles.bottomModal}
      >
        <FollowModalContent
          setModal={setModal}
          followPrayer={followPrayer}
        />
      </Modal>
    </View>
  </SafeAreaView>
)

export default CurrentPrayer
