import React from 'react'
import { Animated, Easing, AsyncStorage } from 'react-native'
import { withNavigationFocus } from 'react-navigation'
import { connect } from 'react-redux'
import { LockPresenter, KeyPresenter } from '../../presenters'

function getDateString() {
  let date = new Date().setMinutes(new Date().getMinutes() - new Date().getTimezoneOffset())
  return new Date(date).toISOString().slice(0, 10)
}

class KeyContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      unlockAnimationCompleted: false,
      lockXPosition: new Animated.Value(0),
    }
    this.shakeLock = this.shakeLock.bind(this)
    this.resetLockAnimatedValue = this.resetLockAnimatedValue.bind(this)
    this.checkIfUnlockAnimationCompleted = this.checkIfUnlockAnimationCompleted.bind(this)
  }

  componentDidMount() {
    this.checkIfUnlockAnimationCompleted()
  }

  async checkIfUnlockAnimationCompleted() {
    const today = getDateString()
    try {
      const unlockAnimationCompleted = await AsyncStorage.getItem(`unlockAnimationCompleted-${today}`)
      console.log('unlockAnimatedCompleted:', unlockAnimationCompleted)
      this.setState({ unlockAnimationCompleted })
    } catch (error) {
      console.warn('Error with AsyncStorage:', error)
    }
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
    console.log('this.props.isFocused:', this.props.isFocused)
    if (this.props.rewardUnlocked) {
      return <KeyPresenter navigation={this.props.navigation} />
    }
    return (
      <LockPresenter
        shakeLock={this.shakeLock}
        lockXPosition={this.state.lockXPosition} />
    )
  }
}

const mapState = state => ({
  rewardUnlocked: state.userInfo.rewardUnlocked
})

export default connect(mapState)(withNavigationFocus(KeyContainer))
