import React from 'react'
import { View, AsyncStorage, AppState } from 'react-native'
import { Notifications } from 'expo'
import { connect } from 'react-redux'
import { fetchUserPrayers, fetchUserFollows, fetchUserViews, fetchUserInfo, fetchUserAlarms, login, notFirstRodeo } from './store'
import IntroSwiper from './components/Intro/Swiper'
import LoginForm from './components/Intro/LoginForm'
import NotificationModal from './components/NotificationModal'
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
    Notifications.addListener(this.handleNotification)
    AppState.addEventListener('change', this.handleAppStateChange)
  }

  async checkFirstTime() {
    const seenIntro = await AsyncStorage.getItem('seenIntro')
    if (seenIntro === 'true') {
      this.props.noIntroNeeded()
      this.verifyStorageKey()
    }
  }

  async verifyStorageKey() {
    const oraAuth = await AsyncStorage.getItem('oraAuth')
    const oraAuthJson = JSON.parse(oraAuth)
    if (oraAuthJson) {
      this.props.logUserIn(oraAuthJson)
      this.props.loadInitialData(oraAuthJson.userId)
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
    this.setState({ notification: null })
  }

  render() {
    return (
      <View style={ss.invisiContainer}>
        {!this.props.firstTime
        ? <View style={ss.invisiContainer}>
          {!this.props.isLoggedIn
          ? <LoginForm verifyStorageKey={this.verifyStorageKey} />
          : <View style={ss.invisiContainer}>
              <NotificationModal
                notification={this.state.notification}
                hideNotificationModal={this.hideNotificationModal} />
              <MainNav />
            </View>
          }
          </View>
        : <IntroSwiper verifyStorageKey={this.verifyStorageKey} />
        }
      </View>
    )
  }
}

const mapState = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  userId: state.auth.userId,
  firstTime: state.auth.firstTime
})

const mapDispatch = dispatch => ({
  loadInitialData(userId) {
    dispatch(fetchUserPrayers(userId))
    dispatch(fetchUserFollows(userId))
    dispatch(fetchUserViews(userId))
    dispatch(fetchUserInfo(userId))
    dispatch(fetchUserAlarms())
  },
  logUserIn(oraAuthJson) {
    return dispatch(login(oraAuthJson))
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
