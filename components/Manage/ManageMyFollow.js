import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Keyboard, SafeAreaView } from 'react-native'
import Modal from 'react-native-modal'
import { UnfollowModalContent } from './Modals'
import axios from 'axios'
import ss from '../StyleSheet'
import ROOT_URL from '../../config'

export default class ManageMyFollow extends React.Component {
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
      <SafeAreaView style={ss.whiteContainer}>
        <View style={[ss.invisiContainer, ss.padding15]}>
          <ScrollView>
            <Text style={[ss.font16, ss.paddingBottom10]}>{`${follow.body}`}</Text>
          </ScrollView>
          <View style={[ss.center, ss.addViewSpacing]}>
            <TouchableOpacity
              onPress={() => this.setModal('unfollow')}
              style={[ss.blackButton, ss.halfWidth]}>
              <Text style={[ss.buttonText, ss.whiteText]}>Unfollow</Text>
            </TouchableOpacity>
          </View>
          <Modal
            isVisible={this.state.visibleModal === 'unfollow'}
            style={ss.bottomModal}
          >
            <UnfollowModalContent
              setModal={this.setModal}
              unfollowPrayer={this.unfollowPrayer}
            />
          </Modal>
        </View>
      </SafeAreaView>
    )
  }
}
