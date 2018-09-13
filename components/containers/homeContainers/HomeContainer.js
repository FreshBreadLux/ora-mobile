import React from 'react'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'
import { HomePresenter } from '../../presenters'
import { logout } from '../../../store'
import { ampEvents, ampIdentify, ampLogEvent } from '../../analytics'

function getDateString() {
  let date = new Date().setMinutes(new Date().getMinutes() - new Date().getTimezoneOffset())
  return new Date(date).toISOString().slice(0, 10)
}

class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: null
    }
    this.adminReset = this.adminReset.bind(this)
    this.retrieveTheme = this.retrieveTheme.bind(this)
    this.handleAmplitude = this.handleAmplitude.bind(this)
  }

  componentDidMount() {
    this.handleAmplitude()
    this.retrieveTheme()
  }

  /*
  handleAmplitude fires when HomeContainer mounts, after the user has been logged in.
  It takes user data from props and associates them with all future amplitude actions,
  and logs the USER_VERIFIED amplitude event.
  */
  handleAmplitude() {
    const { userId, email, totalPrayers, consecutiveDays } = this.props
    ampIdentify(userId, { email, totalPrayers, consecutiveDays })
    ampLogEvent(ampEvents.USER_VERIFIED)
  }

  async retrieveTheme() {
    const theme = await AsyncStorage.getItem('oraTheme_v1.1.0')
    console.log('theme:', theme)
    if (theme) this.setState({ theme })
  }

  /*
  adminReset allows you to simulate a new phone experience: relevant AsyncStorage items
  are removed and then the user is logged out. Refreshing the app then initializes with
  the introSwiper.
  */
  async adminReset() {
    const today = getDateString()
    await AsyncStorage.removeItem('oraAuth_v1.1.0')
    await AsyncStorage.removeItem(`unlockAnimationCompleted-${today}`)
    this.props.logUserOut()
    await AsyncStorage.setItem('seenOraIntro_v1.1.0', 'false')
  }

  render() {
    return (
      <HomePresenter
        theme={this.state.theme}
        adminReset={this.adminReset}
        navigation={this.props.navigation} />
    )
  }
}

const mapState = state => ({
  userId: state.userInfo.id,
  email: state.userInfo.email,
  totalPrayers: state.userInfo.totalPrayers,
  consecutiveDays: state.userInfo.consecutiveDays,
})

const mapDispatch = dispatch => ({
  logUserOut: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(HomeContainer)
