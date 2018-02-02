import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Keyboard, SafeAreaView } from 'react-native'
import Modal from 'react-native-modal'
import { connect } from 'react-redux'
import { fetchUserFollows } from '../../store'
import { UnfollowModalContent } from './Modals'
import axios from 'axios'
import ss from '../StyleSheet'
import ROOT_URL from '../../config'

class ManageMyFollow extends React.Component {
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
    const { followedId, followerId } = this.props.navigation.state.params.follow.follow
    axios.delete(`${ROOT_URL}/api/follows/followedId/${followedId}/followerId/${followerId}`)
    .then(() => {
      this.props.refreshUserFollows(this.props.userId)
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
            <Text style={[ss.body, ss.paddingBottom10]}>{`${follow.body}`}</Text>
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

const mapState = state => ({
  userId: state.auth.userId,
})

const mapDispatch = dispatch => ({
  refreshUserFollows(userId) {
    dispatch(fetchUserFollows(userId))
  }
})

export default connect(mapState, mapDispatch)(ManageMyFollow)
