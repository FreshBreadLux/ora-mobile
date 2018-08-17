import React from 'react'
import { View, AsyncStorage, AppState, StatusBar, Image, Platform } from 'react-native'
import { Notifications } from 'expo'
import { connect } from 'react-redux'
import { fetchUserPrayers, fetchUserFollows, fetchUserViews, fetchUserInfo, fetchUserAlarms, login, notFirstRodeo, fetchFlagReasons, setTheme, fetchDailyReflection, fetchAndCacheDailyReward, fetchAndCacheSavedRewards } from '../store'
import { IntroSwiperContainer, LoginFormContainer } from './containers'
import { NotificationModal } from './presenters'
import MainNav from './MainNav'
import { ampInitialize } from './analytics'
import ss from './StyleSheet'

function getDateString() {
  let date = new Date().setMinutes(new Date().getMinutes() - new Date().getTimezoneOffset())
  return new Date(date).toISOString().slice(0, 10)
}

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

  /*
    On componentDidMount, we initialize Amplitude, check if this is the user's first time in the
    app (to decide whether or not to show them the intro pagination), adds listeners to handle
    notifications (to show them in-app and refresh data) and appStateChanges (to refresh data), and
    finally creates channels for push notifications on Android.
  */
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

  /*
    verifyStorageKey verifies a user when they open the app and handles initial setup.
    It first checks to make sure they have an oraAuth item in async storage;
    if they do, it checks async storage for the theme and sets the theme.
    Using the date and userId, it loads all initial data for the user and then logs them in.
    If the user doesn't have an oraAuth item, it will remove the loading screen without
    logging them in, revealing the login screen.
  */
  async verifyStorageKey() {
    const oraAuth = await AsyncStorage.getItem('oraAuth_v1.1.0')
    const oraAuthJson = JSON.parse(oraAuth)
    if (oraAuthJson) {
      const theme = await AsyncStorage.getItem('oraTheme_v1.1.0')
      this.props.dispatchSetTheme(theme)
      const today = getDateString()
      this.props.loadInitialData(oraAuthJson.userId, today)
      this.props.logUserIn(oraAuthJson)
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

  /*
    There are three terniary statements in the render function.
    1. this.state.loading: checks state to determine if it should render the splash screen or if
    it should render the rest of the app (this ensures users don't see other screens, like the
    login screen, before the app has finished processing).
    2. this.props.firstTime: checks to see if it should show the user the intro pagination
    3. this.props.isLoggedIn: checks to see if it should render the app or the login screen

    Show the splash screen until initial processing is finsihed.
    If this is their first time, show them the intro; if it's not, check if they're logged in.
    If they're logged in, render MainNav; otherwise, render the login screen.
  */
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
  loadInitialData: (userId, today) => {
    return Promise.all([
      dispatch(fetchUserPrayers(userId)),
      dispatch(fetchUserFollows(userId)),
      dispatch(fetchUserViews(userId)),
      dispatch(fetchAndCacheSavedRewards(userId)),
      dispatch(fetchUserInfo(userId)),
      dispatch(fetchUserAlarms()),
      dispatch(fetchFlagReasons()),
      dispatch(fetchDailyReflection(today)),
      dispatch(fetchAndCacheDailyReward(today))
    ])
  },
  logUserIn: oraAuthJson => dispatch(login(oraAuthJson)),
  refreshUserPrayers: userId => dispatch(fetchUserPrayers(userId)),
  refreshUserFollows: userId => dispatch(fetchUserFollows(userId)),
  noIntroNeeded: () => dispatch(notFirstRodeo()),
  dispatchSetTheme: theme => dispatch(setTheme(theme))
})

export default connect(mapState, mapDispatch)(Root)
