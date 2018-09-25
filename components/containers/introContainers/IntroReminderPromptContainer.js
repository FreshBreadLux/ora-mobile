import React from 'react'
import { connect } from 'react-redux'
import { notFirstRodeo } from '../../../store'
import { IntroReminderPromptPresenter } from '../../presenters'

class IntroReminderPromptContainer extends React.Component {
  constructor(props) {
    super(props)

    this.scrollByOne = this.scrollByOne.bind(this)
  }

  scrollByOne() {
    this.props.scroll(1)
  }

  render() {
    return (
      <IntroReminderPromptPresenter
        scrollByOne={this.scrollByOne}
        navigation={this.props.navigation} />
    )
  }
}

const mapDispatch = dispatch => ({
  noIntroNeeded: () => dispatch(notFirstRodeo())
})

export default connect(null, mapDispatch)(IntroReminderPromptContainer)
