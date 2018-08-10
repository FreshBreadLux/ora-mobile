import React from 'react'
import { Animated, Easing, AsyncStorage, Text } from 'react-native'
import { withNavigationFocus } from 'react-navigation'
import { connect } from 'react-redux'
import { LockPresenter, KeyPresenter } from '../../presenters'
import { UnlockAnimationContainer } from '../../containers'

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
      console.log('unlockAnimationCompleted:', unlockAnimationCompleted)
      this.setState({ unlockAnimationCompleted })
    } catch (error) {
      console.warn('Error with AsyncStorage:', error)
    }
  }

  async completeUnlockAnimation() {
    const today = getDateString()
    await AsyncStorage.setItem(`unlockAnimationCompleted-${today}`, 'true')
    this.setState({ unlockAnimationCompleted: 'true' })
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
    if (this.props.rewardUnlocked && this.state.unlockAnimationCompleted) {
      return <KeyPresenter navigation={this.props.navigation} />
    }
    if (this.props.rewardUnlocked && this.props.isFocused && !this.state.unlockAnimationCompleted) {
      return <UnlockAnimationContainer />
    }
    return <LockPresenter shakeLock={this.shakeLock} lockXPosition={this.state.lockXPosition} />
  }
}

const mapState = state => ({
  rewardUnlocked: state.userInfo.rewardUnlocked
})

export default connect(mapState)(withNavigationFocus(KeyContainer))
