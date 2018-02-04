import React from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import Modal from 'react-native-modal'
import { Notifications } from 'expo'
import { connect } from 'react-redux'
import { fetchUserPrayers, fetchUserFollows, fetchUserViews, fetchUserInfo, login } from './store'
import MainNav from './MainNav'
import SocketIOClient from 'socket.io-client'
import socketProcessor from './socket'
import ss from './components/StyleSheet'
import ROOT_URL from './config'

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notification: null,
    }
    this.handleNotification = this.handleNotification.bind(this)
    this.hideNotificationModal = this.hideNotificationModal.bind(this)
    this.verifyStorageKey = this.verifyStorageKey.bind(this)

    this.socket = SocketIOClient(ROOT_URL)
    socketProcessor(this.socket)
  }

  componentDidMount() {
    this.verifyStorageKey()
    Notifications.addListener(this.handleNotification)
  }

  handleNotification(notification) {
    this.setState({ notification })
  }

  hideNotificationModal() {
    setTimeout(() => { this.setState({ notification: null }) }, 3000)
  }

  async verifyStorageKey() {
    const payload = await AsyncStorage.getItem('payload')
    const payloadJson = JSON.parse(payload)
    if (payloadJson) {
      this.props.logUserIn(payloadJson)
      this.props.loadInitialData(payloadJson.userId)
      this.socket.emit('verify-user', payloadJson.userId)
    }
  }

  render() {
    return (
      <View style={ss.invisiContainer}>
        <Modal
          isVisible={!!this.state.notification}
          style={ss.topModal}
          animationIn="slideInDown"
          animationInTiming={500}
          animationOut="slideOutUp"
          animationOutTiming={500}
          backdropOpacity={0}
          onModalShow={this.hideNotificationModal}
          onBackdropPress={() => { this.setState({ notification: null }) }}>
          <View style={[ss.center, ss.padding15]}>
            <View style={ss.modalContent}>
              <Text>
                {this.state.notification
                ? `${this.state.notification.data.body}`
                : null }
              </Text>
            </View>
          </View>
        </Modal>
        <MainNav screenProps={{
          verifyStorageKey: this.verifyStorageKey,
          socket: this.socket
        }} />
      </View>
    )
  }
}

const mapDispatch = dispatch => ({
  loadInitialData(userId) {
    dispatch(fetchUserPrayers(userId))
    dispatch(fetchUserFollows(userId))
    dispatch(fetchUserViews(userId))
    dispatch(fetchUserInfo(userId))
  },
  logUserIn(payloadJson) {
    dispatch(login(payloadJson))
  }
})

export default connect(null, mapDispatch)(Root)
