import React from 'react'
import { Animated, Easing, AsyncStorage, Text } from 'react-native'
import { withNavigationFocus } from 'react-navigation'
import { connect } from 'react-redux'
import { UnlockAnimationContainer } from '../../containers'
import { triggerUnlockAnimation, setSurveyCompleted } from '../../../store'

function getDateString() {
  let date = new Date().setMinutes(new Date().getMinutes() - new Date().getTimezoneOffset())
  return new Date(date).toISOString().slice(0, 10)
}

class KeyContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lockXPosition: new Animated.Value(0),
    }
    this.shakeLock = this.shakeLock.bind(this)
    this.resetLockAnimatedValue = this.resetLockAnimatedValue.bind(this)
    this.setUnlockAnimationComplete = this.setUnlockAnimationComplete.bind(this)
    this.checkIfUnlockAnimationCompleted = this.checkIfUnlockAnimationCompleted.bind(this)
  }

  componentDidMount() {
    this.checkSurveyCompletion()
  }

  async checkSurveyCompletion() {
    const surveyCompleted = await AsyncStorage.getItem('oraSurveyCompleted')
    if (surveyCompleted === 'true') {
      this.checkIfUnlockAnimationCompleted()
      this.props.dispatchSetSurveyCompleted()
    }
  }

  async checkIfUnlockAnimationCompleted() {
    const today = getDateString()
    const unlockAnimationCompleted = await AsyncStorage.getItem(`unlockAnimationCompleted-${today}`)
    if (unlockAnimationCompleted === 'true') {
      this.props.dispatchTriggerUnlockAnimation()
    }
  }

  async setUnlockAnimationComplete() {
    const today = getDateString()
    try {
      await AsyncStorage.setItem(`unlockAnimationCompleted-${today}`, 'true')
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
    return (
      <UnlockAnimationContainer
        shakeLock={this.shakeLock}
        navigation={this.props.navigation}
        toggleSurvey={this.props.toggleSurvey}
        lockXPosition={this.state.lockXPosition}
        setUnlockAnimationComplete={this.setUnlockAnimationComplete} />
    )
  }
}

const mapState = state => ({
  rewardUnlocked: state.userInfo.rewardUnlocked
})

const mapDispatch = dispatch => ({
  dispatchTriggerUnlockAnimation: () => dispatch(triggerUnlockAnimation()),
  dispatchSetSurveyCompleted: () => dispatch(setSurveyCompleted()),
})

export default connect(mapState, mapDispatch)(withNavigationFocus(KeyContainer))
