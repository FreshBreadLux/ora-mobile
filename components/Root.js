import React from 'react'
import { View, AsyncStorage, AppState, StatusBar, Image, Platform } from 'react-native'
import { Notifications } from 'expo'
import { connect } from 'react-redux'
import { fetchUserPrayers, fetchUserFollows, fetchUserViews, fetchUserInfo, fetchUserAlarms, login, notFirstRodeo, fetchFlagReasons, setTheme } from '../store'
import { IntroSwiperContainer, LoginFormContainer } from './containers'
import { NotificationModal } from './presenters'
import MainNav from './MainNav'
import { ampEvents, ampInitialize, ampIdentify, ampLogEvent } from './analytics'
import ss from './StyleSheet'

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notification: null,
      appState: AppState.currentState,
      loading: false,
    }
    this.handleNotification = this.handleNotification.bind(this)
    this.handleAppStateChange = this.handleAppStateChange.bind(this)
    this.hideNotificationModal = this.hideNotificationModal.bind(this)
    this.verifyStorageKey = this.verifyStorageKey.bind(this)
  }

  componentDidMount() {
    ampInitialize()
    this.checkFirstTime()
    .catch(console.error)
    Notifications.addListener(this.handleNotification)
    AppState.addEventListener('change', this.handleAppStateChange)
    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('reminders', {
        name: 'Reminders',
        priority: 'max',
        sound: true
      })
      Notifications.createChannelAndroidAsync('general-prayer', {
        name: 'General Prayer',
        priority: 'max',
        sound: true
      })
      Notifications.createChannelAndroidAsync('new-follow', {
        name: 'New Follow',
        priority: 'max',
        sound: true
      })
      Notifications.createChannelAndroidAsync('follower-prayer', {
        name: 'Follower Prayer',
        priority: 'max',
        sound: true
      })
      Notifications.createChannelAndroidAsync('follow-update', {
        name: 'Follow Update',
        priority: 'max',
        sound: true
      })
    }
  }

  async checkFirstTime() {
    const seenIntro = await AsyncStorage.getItem('seenOraIntro_v1.1.0')
    if (seenIntro === 'true') {
      this.props.noIntroNeeded()
      this.verifyStorageKey()
    } else {
      this.setState({ loading: false })
    }
  }

  async verifyStorageKey() {
    const oraAuth = await AsyncStorage.getItem('oraAuth_v1.1.0')
    const oraAuthJson = JSON.parse(oraAuth)
    if (oraAuthJson) {
      const theme = await AsyncStorage.getItem('oraTheme_v1.1.0')
      this.props.dispatchSetTheme(theme)
      ampIdentify(oraAuthJson.userId)
      this.props.logUserIn(oraAuthJson)
      await this.props.loadInitialData(oraAuthJson.userId)
      ampLogEvent(ampEvents.USER_VERIFIED)
      this.setState({ loading: false })
    } else {
      this.setState({ loading: false })
    }
  }

  handleNotification(notification) {
    this.setState({ notification })
    const { userId, refreshUserPrayers, refreshUserFollows } = this.props
    if (notification.data.type === 'new-follow') refreshUserPrayers(userId)
    if (notification.data.type === 'general-prayer') refreshUserPrayers(userId)
    if (notification.data.type === 'follow-update') refreshUserFollows(userId)
  }

  handleAppStateChange(nextAppState) {
    const { userId, refreshUserPrayers, refreshUserFollows } = this.props
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active' && userId) {
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
        {this.state.loading
        ? <View style={ss.backgroundImageFrame}>
            <Image
              source={require('../assets/images/splash.png')}
              style={ss.backgroundImage} />
          </View>
        : <View style={ss.invisiContainer}>
          {this.props.firstTime
          ? <IntroSwiperContainer verifyStorageKey={this.verifyStorageKey} />
          : <View style={ss.invisiContainer}>
            {this.props.isLoggedIn
            ? <View style={ss.invisiContainer}>
                <StatusBar barStyle="dark-content" />
                <NotificationModal
                  notification={this.state.notification}
                  hideNotificationModal={this.hideNotificationModal} />
                <MainNav />
              </View>
            : <LoginFormContainer verifyStorageKey={this.verifyStorageKey} />
            }
            </View>
          }
          </View>
        }
      </View>
    )
  }
}

const mapState = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  userId: state.auth.userId,
  firstTime: state.auth.firstTime,
  userInfo: state.userInfo
})

const mapDispatch = dispatch => ({
  loadInitialData: userId => {
    return Promise.all([
      dispatch(fetchUserPrayers(userId)),
      dispatch(fetchUserFollows(userId)),
      dispatch(fetchUserViews(userId)),
      dispatch(fetchUserInfo(userId)),
      dispatch(fetchUserAlarms()),
      dispatch(fetchFlagReasons())
    ])
  },
  logUserIn: oraAuthJson => dispatch(login(oraAuthJson)),
  refreshUserPrayers: userId => dispatch(fetchUserPrayers(userId)),
  refreshUserFollows: userId => dispatch(fetchUserFollows(userId)),
  noIntroNeeded: () => dispatch(notFirstRodeo()),
  dispatchSetTheme: theme => dispatch(setTheme(theme))
})

export default connect(mapState, mapDispatch)(Root)
