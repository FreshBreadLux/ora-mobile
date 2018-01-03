import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Animated } from 'react-native'
import Modal from 'react-native-modal'
import { Ionicons } from '@expo/vector-icons'
import FollowModalContent from './Modals'
import styles from '../StyleSheet'

const CurrentPrayer = ({ statePrayer, fadeOut, finishPraying, followPrayer, opacity, visibleModal, setModal }) => (
  <SafeAreaView style={styles.cover}>
    <View style={[styles.addPadding, styles.spaceAround]}>
      <View style={styles.flex1}>
        <Animated.View style={[styles.flex1, styles.center, { opacity }]}>
          <Text style={styles.subject}>{statePrayer.subject}</Text>
        </Animated.View>
      </View>
      <View style={[styles.flex3, styles.fullWidth]}>
        <Animated.ScrollView
          style={[styles.flex1, styles.box, { opacity }]}>
          <Text style={styles.body}>{statePrayer.body}</Text>
        </Animated.ScrollView>
      </View>
      <View style={[styles.flex1, styles.center]}>
        <TouchableOpacity
          onPress={fadeOut}
        >
          <Text style={styles.buttonText}>Next Prayer</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={finishPraying}
        >
          <Text style={styles.buttonText}>Finish Praying</Text>
        </TouchableOpacity>
      </View>
      <View style={[
        styles.row,
        styles.flex1,
        styles.spaceAround,
        styles.fullWidth]}
      >
        <TouchableOpacity
          style={[styles.column, styles.center]}
        >
          <Ionicons
            name="ios-flag"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.column, styles.center]}
        >
          <Ionicons
            name="ios-help-circle"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.column, styles.center]}
          onPress={() => setModal('follow')}
        >
          <Ionicons
            name="ios-bookmark"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
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
