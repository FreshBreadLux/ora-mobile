import React from 'react'
import { View, Text, AsyncStorage, AlertIOS } from 'react-native'
import Modal from 'react-native-modal'
import { Notifications } from 'expo'
import { connect } from 'react-redux'
import { fetchUserPrayers } from './store'
import axios from 'axios'
import MainNav from './MainNav'
import ss from './components/StyleSheet'
import ROOT_URL from './config'

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      userId: null,
      jwToken: null,
      follows: null,
      prayerIdsOfViews: null,
      userEmail: null,
      consecutiveDays: null,
      userTotalPrayers: null,
      notification: null,
    }
    this.handleNotification = this.handleNotification.bind(this)
    this.hideNotificationModal = this.hideNotificationModal.bind(this)
    this.addPrayerIdOfView = this.addPrayerIdOfView.bind(this)
    this.verifyStorageKey = this.verifyStorageKey.bind(this)
    this.fetchUserFollows = this.fetchUserFollows.bind(this)
    this.fetchUserViews = this.fetchUserViews.bind(this)
    this.fetchUserInfo = this.fetchUserInfo.bind(this)
    this.fetchUserTotalPrayers = this.fetchUserTotalPrayers.bind(this)
    this.userLogout = this.userLogout.bind(this)
  }

  componentDidMount() {
    this.verifyStorageKey()
    Notifications.addListener(this.handleNotification)
  }

  handleNotification(notification) {
    console.log('notification: ', notification)
    this.setState({ notification })
  }

  hideNotificationModal() {
    setTimeout(() => { this.setState({ notification: null }) }, 3000)
  }

  addPrayerIdOfView(prayerId) {
    this.setState({prayerIdsOfViews: [...this.state.prayerIdsOfViews, prayerId]})
  }

  async verifyStorageKey() {
    const payload = await AsyncStorage.getItem('payload')
    const payloadJson = JSON.parse(payload)
    if (payloadJson) {
      this.setState({
        isLoggedIn: true,
        userId: payloadJson.userId,
        jwToken: payloadJson.jwToken,
      })
      this.props.loadInitialData(payloadJson.userId)
      this.fetchUserFollows(payloadJson.userId)
      this.fetchUserViews(payloadJson.userId)
      this.fetchUserInfo(payloadJson.userId)
      this.fetchUserTotalPrayers(payloadJson.userId)
    }
  }

  async fetchUserFollows(userId) {
    const follows = await axios.get(`${ROOT_URL}/api/users/${userId}/follows`)
    if (follows) {
      this.setState({
        follows: follows.data
      })
    }
  }

  async fetchUserViews(userId) {
    const prayerIdsOfViews = await axios.get(`${ROOT_URL}/api/users/${userId}/views`)
    if (prayerIdsOfViews) {
      this.setState({
        prayerIdsOfViews: prayerIdsOfViews.data
      })
    }
  }

  async fetchUserInfo(userId) {
    const user = await axios.get(`${ROOT_URL}/api/users/${userId}`)
    const userEmail = user.data.email
    const consecutiveDays = user.data.consecutiveDays
    this.setState({
      userEmail,
      consecutiveDays
    })
  }

  async fetchUserTotalPrayers(userId) {
    const user = await axios.get(`${ROOT_URL}/api/users/${userId}`)
    const userTotalPrayers = user.data.totalPrayers
    this.setState({
      userTotalPrayers
    })
  }

  async userLogout() {
    try {
      await AsyncStorage.removeItem('payload')
      this.setState({
        isLoggedIn: false,
        userId: null,
        jwToken: null,
        prayers: null,
        follows: null,
        prayerIdsOfViews: null,
        userEmail: null,
        consecutiveDays: null,
        userTotalPrayers: null,
        notification: null,
      })
      AlertIOS.alert('Logout Successful')
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message)
    }
  }

  render() {
    console.log('state: ', this.state)
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
          isLoggedIn: this.state.isLoggedIn,
          userLogout: this.userLogout,
          userEmail: this.state.userEmail,
          consecutiveDays: this.state.consecutiveDays,
          userTotalPrayers: this.state.userTotalPrayers,
          userId: this.state.userId,
          fetchUserFollows: this.fetchUserFollows,
          fetchUserTotalPrayers: this.fetchUserTotalPrayers,
          verifyStorageKey: this.verifyStorageKey,
          fetchUserPrayers: this.fetchUserPrayers,
          prayers: this.props.prayers,
          follows: this.state.follows,
          prayerIdsOfViews: this.state.prayerIdsOfViews,
          addPrayerIdOfView: this.addPrayerIdOfView,
        }} />
      </View>
    )
  }
}

const mapState = state => {
  return {
    prayers: state.prayers,
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData(userId) {
      dispatch(fetchUserPrayers(userId))
    }
  }
}

export default connect(mapState, mapDispatch)(Root)
