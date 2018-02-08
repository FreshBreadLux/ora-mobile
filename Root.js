import React from 'react'
import { View, Text, AsyncStorage, AppState } from 'react-native'
import Modal from 'react-native-modal'
import { Notifications } from 'expo'
import { connect } from 'react-redux'
import { fetchUserPrayers, fetchUserFollows, fetchUserViews, fetchUserInfo, login, notFirstRodeo } from './store'
import IntroSwiper from './components/Intro/Swiper'
import MainNav from './MainNav'
import ss from './components/StyleSheet'

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notification: null,
      appState: AppState.currentState
    }
    this.handleNotification = this.handleNotification.bind(this)
    this.handleAppStateChange = this.handleAppStateChange.bind(this)
    this.hideNotificationModal = this.hideNotificationModal.bind(this)
    this.verifyStorageKey = this.verifyStorageKey.bind(this)
  }

  componentDidMount() {
    this.checkFirstTime()
    this.verifyStorageKey()
    Notifications.addListener(this.handleNotification)
    AppState.addEventListener('change', this.handleAppStateChange)
  }

  async checkFirstTime() {
    const seenIntro = await AsyncStorage.getItem('seenIntro')
    if (seenIntro) {
      this.props.noIntroNeeded()
    }
  }

  async verifyStorageKey() {
    const payload = await AsyncStorage.getItem('payload')
    const payloadJson = JSON.parse(payload)
    if (payloadJson) {
      this.props.logUserIn(payloadJson)
      this.props.loadInitialData(payloadJson.userId)
    }
  }

  handleNotification(notification) {
    this.setState({ notification })
    const { userId, refreshUserPrayers, refreshUserFollows } = this.props
    if (notification.data.type === 'new-follow') refreshUserPrayers(userId)
    if (notification.data.type === 'new-view') refreshUserPrayers(userId)
    if (notification.data.type === 'follow-update') refreshUserFollows(userId)
  }

  handleAppStateChange(nextAppState) {
    const { userId, refreshUserPrayers, refreshUserFollows } = this.props
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      refreshUserPrayers(userId)
      refreshUserFollows(userId)
    }
    this.setState({ appState: nextAppState })
  }

  hideNotificationModal() {
    setTimeout(() => { this.setState({ notification: null }) }, 3000)
  }

  render() {
    return (
      <View style={ss.invisiContainer}>
        {!this.props.firstTime
        ? <View style={ss.invisiContainer}>
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
            <MainNav />
          </View>
        : <IntroSwiper screenProps={{
            verifyStorageKey: this.verifyStorageKey }} />
        }
      </View>
    )
  }
}

const mapState = state => ({
  userId: state.auth.userId,
  firstTime: state.auth.firstTime
})

const mapDispatch = dispatch => ({
  loadInitialData(userId) {
    dispatch(fetchUserPrayers(userId))
    dispatch(fetchUserFollows(userId))
    dispatch(fetchUserViews(userId))
    dispatch(fetchUserInfo(userId))
  },
  logUserIn(payloadJson) {
    return dispatch(login(payloadJson))
  },
  refreshUserPrayers(userId) {
    return dispatch(fetchUserPrayers(userId))
  },
  refreshUserFollows(userId) {
    return dispatch(fetchUserFollows(userId))
  },
  noIntroNeeded() {
    return dispatch(notFirstRodeo())
  }
})

export default connect(mapState, mapDispatch)(Root)
