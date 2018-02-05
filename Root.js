import React from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import Modal from 'react-native-modal'
import { Notifications } from 'expo'
import { connect } from 'react-redux'
import { fetchUserPrayers, fetchUserFollows, fetchUserViews, fetchUserInfo, login } from './store'
import MainNav from './MainNav'
import ss from './components/StyleSheet'

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notification: null,
    }
    this.handleNotification = this.handleNotification.bind(this)
    this.hideNotificationModal = this.hideNotificationModal.bind(this)
    this.verifyStorageKey = this.verifyStorageKey.bind(this)
  }

  componentDidMount() {
    this.verifyStorageKey()
    Notifications.addListener(this.handleNotification)
  }

  handleNotification(notification) {
    this.setState({ notification })
    const { userId, refreshUserPrayers, refreshUserFollows } = this.props
    if (notification.data.type === 'new-follow') refreshUserPrayers(userId)
    if (notification.data.type === 'new-view') refreshUserPrayers(userId)
    if (notification.data.type === 'follow-update') refreshUserFollows(userId)
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
          verifyStorageKey: this.verifyStorageKey
        }} />
      </View>
    )
  }
}

const mapState = state => ({
  userId: state.auth.userId
})

const mapDispatch = dispatch => ({
  loadInitialData(userId) {
    dispatch(fetchUserPrayers(userId))
    dispatch(fetchUserFollows(userId))
    dispatch(fetchUserViews(userId))
    dispatch(fetchUserInfo(userId))
  },
  logUserIn(payloadJson) {
    dispatch(login(payloadJson))
  },
  refreshUserPrayers(userId) {
    dispatch(fetchUserPrayers(userId))
  },
  refreshUserFollows(userId) {
    dispatch(fetchUserFollows(userId))
  },
})

export default connect(mapState, mapDispatch)(Root)
