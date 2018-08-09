import React from 'react'
import { Animated, Easing } from 'react-native'
import { connect } from 'react-redux'
import { KeyPresenter } from '../../presenters'

class KeyContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lockXPosition: new Animated.Value(0)
    }
    this.shakeLock = this.shakeLock.bind(this)
    this.resetLockAnimatedValue = this.resetLockAnimatedValue.bind(this)
  }

  shakeLock() {
    Animated.timing(this.state.lockXPosition, {
      toValue: 1,
      duration: 500,
      easing: Easing.elastic()
    }).start(this.resetLockAnimatedValue)
  }

  resetLockAnimatedValue() {
    this.setState({ lockXPosition: new Animated.Value(0) })
  }

  render() {
    return(
      <KeyPresenter
        shakeLock={this.shakeLock}
        navigation={this.props.navigation}
        lockXPosition={this.state.lockXPosition} />
    )
  }
}

export default connect()(KeyContainer)
