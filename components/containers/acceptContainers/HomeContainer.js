import React from 'react'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'
import { HomePresenter } from '../../presenters'
import { logout } from '../../../store'

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
  }

  async adminReset() {
    const today = getDateString()
    await AsyncStorage.removeItem('oraAuth_v1.1.0')
    await AsyncStorage.removeItem(`unlockAnimationCompleted-${today}`)
    this.props.logUserOut()
    await AsyncStorage.setItem('seenOraIntro_v1.1.0', 'false')
  }

  toggleSurvey() {
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

const mapDispatch = dispatch => ({
  logUserOut: () => dispatch(logout())
})

export default connect(null, mapDispatch)(HomeContainer)
