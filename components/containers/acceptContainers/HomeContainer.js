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
      surveyRevealed: false,
    }
    this.adminReset = this.adminReset.bind(this)
    this.toggleSurvey = this.toggleSurvey.bind(this)
    this.handleAmplitude = this.handleAmplitude.bind(this)
  }

  componentDidMount() {
    this.handleAmplitude()
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

  async adminReset() {
    const today = getDateString()
    await AsyncStorage.removeItem('oraAuth_v1.1.0')
    await AsyncStorage.removeItem(`unlockAnimationCompleted-${today}`)
    await AsyncStorage.removeItem('oraSurveyCompleted')
    this.props.logUserOut()
    await AsyncStorage.setItem('seenOraIntro_v1.1.0', 'false')
  }

  toggleSurvey() {
    if (!this.state.surveyRevealed) ampLogEvent(ampEvents.OPEN_SURVEY_PROMPT)
    else ampLogEvent(ampEvents.CLOSE_SURVEY_PROMPT)
    this.setState({ surveyRevealed: !this.state.surveyRevealed })
  }

  render() {
    return(
      <HomePresenter
        adminReset={this.adminReset}
        toggleSurvey={this.toggleSurvey}
        navigation={this.props.navigation}
        surveyRevealed={this.state.surveyRevealed} />
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
