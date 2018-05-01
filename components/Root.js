import React from 'react'
import { View, AsyncStorage, AppState, StatusBar } from 'react-native'
import { Notifications } from 'expo'
import { connect } from 'react-redux'
import { fetchUserPrayers, fetchUserFollows, fetchUserViews, fetchUserInfo, fetchUserAlarms, login, notFirstRodeo, fetchFlagReasons, updateUserTheme } from '../store'
import { IntroSwiperContainer, LoginFormContainer } from './containers'
import { NotificationModal } from './presenters'
import MainNav from './MainNav'
import ss from './StyleSheet'

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
    .catch(console.error.bind(console))
    Notifications.addListener(this.handleNotification)
    AppState.addEventListener('change', this.handleAppStateChange)
  }

  async checkFirstTime() {
    const seenIntro = await AsyncStorage.getItem('seenOraIntro_v1.1.0')
    if (seenIntro === 'true') {
      this.props.noIntroNeeded()
      this.verifyStorageKey()
    }
  }

  async verifyStorageKey() {
    const oraAuth = await AsyncStorage.getItem('oraAuth_v1.1.0')
    const oraAuthJson = JSON.parse(oraAuth)
    if (oraAuthJson) {
      console.log('INSIDE THE IF STATEMENT IN VERIFY STORAGE KEY')
      const theme = await AsyncStorage.getItem('oraTheme_v1.1.0')
      await this.props.dispatchUpdateUserTheme(oraAuthJson.userId, theme)
      await this.props.loadInitialData(oraAuthJson.userId)
      this.props.logUserIn(oraAuthJson)
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
      console.log('firing refresh user prayers with userid: ', userId)
      refreshUserPrayers(userId)
      console.log('firing refresh user follows with userid: ', userId)
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
  dispatchUpdateUserTheme: (userId, theme) => dispatch(updateUserTheme(userId, theme))
})

export default connect(mapState, mapDispatch)(Root)
