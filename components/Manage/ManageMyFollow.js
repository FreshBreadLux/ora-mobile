import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Keyboard } from 'react-native'
import Modal from 'react-native-modal'
import { UnfollowModalContent } from './Modals'
import axios from 'axios'
import styles from '../StyleSheet'
import ROOT_URL from '../../config'

export default class ManageMyPrayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleModal: null,
    }
    this.setModal = this.setModal.bind(this)
    this.unfollowPrayer = this.unfollowPrayer.bind(this)
  }

  setModal(name) {
    this.setState({ visibleModal: name })
  }

  unfollowPrayer() {
    Keyboard.dismiss()
    const { fetchUserFollows, userId } = this.props.screenProps
    axios.delete(`${ROOT_URL}/api/follows/${this.props.navigation.state.params.follow.id}`)
    .then(() => {
      fetchUserFollows(userId)
      this.props.navigation.goBack()
    })
    .catch(console.error)
  }

  render() {
    const follow = this.props.navigation.state.params.follow
    return (
      <View style={[styles.container, styles.addPadding]}>
        <ScrollView>
          <Text style={styles.body}>{`${follow.body}`}</Text>
        </ScrollView>
        <View style={styles.center}>
          <TouchableOpacity
            onPress={() => this.setModal('unfollow')}
            style={styles.modalContent}>
            <Text>Unfollow</Text>
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={this.state.visibleModal === 'unfollow'}
          style={styles.bottomModal}
        >
          <UnfollowModalContent
            setModal={this.setModal}
            unfollowPrayer={this.unfollowPrayer}
          />
        </Modal>
      </View>
    )
  }
}
