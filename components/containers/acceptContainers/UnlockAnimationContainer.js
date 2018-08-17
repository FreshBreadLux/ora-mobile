import React from 'react'
import { connect } from 'react-redux'
import { View, Animated, AsyncStorage, TouchableOpacity } from 'react-native'

class KeyContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      keyRing1Left: new Animated.Value(30),
      keyRing1Top: new Animated.Value(42.8672427),
      keyRing1Angle: new Animated.Value(0),
      keyRing2Left: new Animated.Value(30),
      keyRing2Top: new Animated.Value(42.8672427),
      keyRing2Angle: new Animated.Value(0),
      keyHead1Left: new Animated.Value(23.7902592),
      keyHead1Top: new Animated.Value(64.0769835),
      keyHead1Angle: new Animated.Value(0),
      keyHead2Left: new Animated.Value(44.9999937),
      keyHead2Top: new Animated.Value(64.0769835),
      keyHead2Angle: new Animated.Value(0),
      keyMid1Left: new Animated.Value(23.7902592),
      keyMid1Top: new Animated.Value(59.3637078),
      keyMid1Angle: new Animated.Value(0),
      keyMid2Left: new Animated.Value(23.7902592),
      keyMid2Top: new Animated.Value(59.3637078),
      keyMid2Angle: new Animated.Value(0),
      keyEnd1Left: new Animated.Value(26.1468971),
      keyEnd1Top: new Animated.Value(59.3637078),
      keyEnd1Angle: new Animated.Value(270),
      keyEnd2Left: new Animated.Value(59.139827),
      keyEnd2Top: new Animated.Value(59.3637078),
      keyEnd2Angle: new Animated.Value(90),
    }
    this.animateUnlock = this.animateUnlock.bind(this)
    this.handleButtonPress = this.handleButtonPress.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.unlockAnimationTriggered != prevProps.unlockAnimationTriggered) {
      this.animateUnlock()
    }
  }

  handleButtonPress() {
    if (!this.props.surveyCompleted) {
      this.props.shakeLock()
      this.props.toggleSurvey()
    } else if (!this.props.unlockAnimationTriggered) {
      this.props.shakeLock()
    } else {
      this.props.navigation.navigate('RewardContainer')
    }
  }

  animateUnlock() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.keyRing1Top, {toValue: 12.2309505, duration: 700, delay: 400}),
        Animated.timing(this.state.keyRing2Top, {toValue: 12.2309505, duration: 700, delay: 400}),
      ]),
      Animated.parallel([
        Animated.timing(this.state.keyRing1Angle, {toValue: -135, duration: 500, delay: 300}),
        Animated.timing(this.state.keyRing1Left, {toValue: 6.21320344, duration: 500, delay: 300}),
        Animated.timing(this.state.keyRing1Top, {toValue: 42.8672427, duration: 500, delay: 300}),
        Animated.timing(this.state.keyRing2Angle, {toValue: 135, duration: 500, delay: 300}),
        Animated.timing(this.state.keyRing2Left, {toValue: 53.7867966, duration: 500, delay: 300}),
        Animated.timing(this.state.keyRing2Top, {toValue: 42.8672427, duration: 500, delay: 300}),
        Animated.timing(this.state.keyHead1Angle, {toValue: 45, duration: 500, delay: 300}),
        Animated.timing(this.state.keyHead1Left, {toValue: 6.21320344, duration: 500, delay: 300}),
        Animated.timing(this.state.keyHead1Top, {toValue: 17.25, duration: 500, delay: 300}),
        Animated.timing(this.state.keyHead2Angle, {toValue: -45, duration: 500, delay: 300}),
        Animated.timing(this.state.keyHead2Left, {toValue: 62.5770559, duration: 500, delay: 300}),
        Animated.timing(this.state.keyHead2Top, {toValue: 17.25, duration: 500, delay: 300}),
        Animated.timing(this.state.keyMid1Angle, {toValue: -45, duration: 500, delay: 300}),
        Animated.timing(this.state.keyMid1Left, {toValue: 31.4999277, duration: 500, delay: 300}),
        Animated.timing(this.state.keyMid1Top, {toValue: 33, duration: 500, delay: 300}),
        Animated.timing(this.state.keyMid2Angle, {toValue: 45, duration: 500, delay: 300}),
        Animated.timing(this.state.keyMid2Left, {toValue: 16, duration: 500, delay: 300}),
        Animated.timing(this.state.keyMid2Top, {toValue: 33, duration: 500, delay: 300}),
        Animated.timing(this.state.keyEnd1Angle, {toValue: -45, duration: 500, delay: 300}),
        Animated.timing(this.state.keyEnd1Left, {toValue: 11.5, duration: 500, delay: 300}),
        Animated.timing(this.state.keyEnd1Top, {toValue: 7.5, duration: 500, delay: 300}),
        Animated.timing(this.state.keyEnd2Angle, {toValue: -315, duration: 500, delay: 300}),
        Animated.timing(this.state.keyEnd2Left, {toValue: 73.8, duration: 500, delay: 300}),
        Animated.timing(this.state.keyEnd2Top, {toValue: 7.5, duration: 500, delay: 300}),
      ])
    ]).start(this.props.setUnlockAnimationComplete)
  }



  render() {
    return (
      <Animated.View style={{height: 90, width: 90, transform: [{translateX: this.props.lockXPosition.interpolate({inputRange: [0, 0.33, 0.66, 1], outputRange: [0, 6, -6, 0]})}]}}>
        <TouchableOpacity
          style={{height: 90, width: 90}}
          onPress={this.handleButtonPress}
          activeOpacity={0.8}>
          <Animated.Image
            style={{
              position: 'absolute',
              height: 47.1327573,
              width: 30,
              left: this.state.keyRing1Left,
              top: this.state.keyRing1Top,
              transform: [{rotate: this.state.keyRing1Angle.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              })}]
            }}
            source={require('../../../assets/images/Key/key-ring.png')} />
          <Animated.Image
            style={{
              position: 'absolute',
              height: 47.1327573,
              width: 30,
              left: this.state.keyRing2Left,
              top: this.state.keyRing2Top,
              transform: [{rotate: this.state.keyRing2Angle.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              })}]
            }}
            source={require('../../../assets/images/Key/key-ring.png')} />
          <Animated.Image
            style={{
              position: 'absolute',
              height: 25.9230165,
              width: 21.2097408,
              left: this.state.keyHead1Left,
              top: this.state.keyHead1Top,
              transform: [{rotate: this.state.keyHead1Angle.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              })}]
            }}
            source={require('../../../assets/images/Key/key-head.png')} />
          <Animated.Image
            style={{
              position: 'absolute',
              height: 25.9230165,
              width: 21.2097408,
              left: this.state.keyHead2Left,
              top: this.state.keyHead2Top,
              transform: [{rotate: this.state.keyHead2Angle.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              })}]
            }}
            source={require('../../../assets/images/Key/key-head.png')} />
          <Animated.Image
            style={{
              position: 'absolute',
              height: 4.71327572,
              width: 42.4194815,
              left: this.state.keyMid1Left,
              top: this.state.keyMid1Top,
              transform: [{rotate: this.state.keyMid1Angle.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              })}]
            }}
            source={require('../../../assets/images/Key/key-mid.png')} />
          <Animated.Image
            style={{
              position: 'absolute',
              height: 4.71327572,
              width: 42.4194815,
              left: this.state.keyMid2Left,
              top: this.state.keyMid2Top,
              transform: [{rotate: this.state.keyMid2Angle.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              })}]
            }}
            source={require('../../../assets/images/Key/key-mid.png')} />
          <Animated.Image
            style={{
              position: 'absolute',
              height: 9.42655144,
              width: 4.71327572,
              left: this.state.keyEnd1Left,
              top: this.state.keyEnd1Top,
              transform: [{rotate: this.state.keyEnd1Angle.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              })}]
            }}
            source={require('../../../assets/images/Key/key-end.png')} />
          <Animated.Image
            style={{
              position: 'absolute',
              height: 9.42655144,
              width: 4.71327572,
              left: this.state.keyEnd2Left,
              top: this.state.keyEnd2Top,
              transform: [{rotate: this.state.keyEnd2Angle.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              })}]
            }}
            source={require('../../../assets/images/Key/key-end.png')} />
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

const mapState = state => ({
  unlockAnimationTriggered: state.acceptPrayer.unlockAnimationTriggered,
  surveyCompleted: state.acceptPrayer.surveyCompleted
})

export default connect(mapState)(KeyContainer)
