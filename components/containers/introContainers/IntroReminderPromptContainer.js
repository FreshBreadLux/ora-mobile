import React from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { notFirstRodeo } from '../../../store'
import { IntroReminderPromptPresenter } from '../../presenters'

class IntroReminderPromptContainer extends React.Component {
  constructor(props) {
    super(props)

    this.scrollByOne = this.scrollByOne.bind(this)
    this.finishIntroAndLogUserIn = this.finishIntroAndLogUserIn.bind(this)
  }

  scrollByOne() {
    this.props.scroll(1)
  }

  async finishIntroAndLogUserIn() {
    await this.props.verifyStorageKey()
    await AsyncStorage.setItem('seenOraIntro_v1.1.0', 'true')
    this.props.noIntroNeeded()
  }

  render() {
    return (
      <IntroReminderPromptPresenter
        scrollByOne={this.scrollByOne}
        navigation={this.props.navigation}
        finishIntroAndLogUserIn={this.finishIntroAndLogUserIn} />
    )
  }
}

const mapDispatch = dispatch => ({
  noIntroNeeded: () => dispatch(notFirstRodeo())
})

export default connect(null, mapDispatch)(IntroReminderPromptContainer)
