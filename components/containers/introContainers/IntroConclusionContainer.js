import React from 'react'
import { connect } from 'react-redux'
import { Animated, AsyncStorage } from 'react-native'
import { notFirstRodeo } from '../../../store'
import { IntroConclusionPresenter } from '../../presenters'

function animate(...options) {
  return new Promise(res => {
    Animated.timing(...options).start(res)
  })
}

class IntroConclusionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: new Animated.Value(1)
    }
    this.fadeOutAndLogIn = this.fadeOutAndLogIn.bind(this)
  }

  async fadeOutAndLogIn() {
    await animate(this.state.opacity, { toValue: 0, duration: 500 })
    await this.props.verifyStorageKey()
    await AsyncStorage.setItem('seenOraIntro_v1.1.0', 'true')
    this.props.noIntroNeeded()
  }

  render() {
    return (
      <IntroConclusionPresenter
        opacity={this.state.opacity}
        fadeOutAndLogIn={this.fadeOutAndLogIn} />
    )
  }
}

const mapDispatch = dispatch => ({
  noIntroNeeded: () => dispatch(notFirstRodeo())
})

export default connect(null, mapDispatch)(IntroConclusionContainer)
