import React from 'react'
import { View, SafeAreaView, Animated } from 'react-native'
import { LinearGradient } from 'expo'
import Swiper from 'react-native-swiper'
import WelcomeContainer from './WelcomeContainer'
import { AirPlanePresenter } from '../../presenters'
import SignupFormContainer from './SignupFormContainer'
import SetAlarmContainer from './SetAlarmContainer'
import ss from '../../StyleSheet'

export default class IntroSwiperContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planeIntro: new Animated.Value(0),
      plane1Fade: new Animated.Value(0),
      plane2Fade: new Animated.Value(0),
      plane2YVal: new Animated.Value(0),
      planeOutro: new Animated.Value(0),
      alarmVisible: false
    }
    this.handleSwipe = this.handleSwipe.bind(this)
    this.fadeInPlane = this.fadeInPlane.bind(this)
    this.showAlarm = this.showAlarm.bind(this)
  }

  handleSwipe(index) {
    switch (index) {
      case 1:
        this.fadeInPlane()
        break
      default:
        break
    }
  }

  fadeInPlane() {
    Animated.sequence([
      Animated.timing(this.state.planeIntro, { toValue: 1, duration: 1000 }),
      Animated.parallel([
        Animated.timing(this.state.plane1Fade, { toValue: 1, duration: 1000 }),
        Animated.timing(this.state.plane2Fade, { toValue: 1, delay: 500, duration: 1000 }),
        Animated.timing(this.state.plane2YVal, { toValue: 80, delay: 500, duration: 1000 }),
      ]),
      Animated.timing(this.state.planeOutro, { toValue: 1, duration: 1000 }),
    ]).start()
  }

  showAlarm() {
    this.setState({ alarmVisible: true })
  }

  render() {
    return (
      <View style={ss.invisiContainer}>
        <View style={ss.backgroundImageFrame}>
          <LinearGradient
            colors={['#1e3799', '#0c2461']}
            start={[0.5, 0]}
            style={ss.flex1} />
        </View>
        <SafeAreaView style={ss.invisiContainer}>
          <Swiper
            loop={false}
            onIndexChanged={this.handleSwipe}
            dotStyle={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}
            activeDotStyle={{backgroundColor: '#fff', borderColor: '#fff'}}>
            <WelcomeContainer />
            <AirPlanePresenter
              planeIntro={this.state.planeIntro}
              plane1Fade={this.state.plane1Fade}
              plane2Fade={this.state.plane2Fade}
              plane2YVal={this.state.plane2YVal}
              planeOutro={this.state.planeOutro} />
            {this.state.alarmVisible
            ? <SetAlarmContainer verifyStorageKey={this.props.verifyStorageKey} />
            : <SignupFormContainer showAlarm={this.showAlarm} />
            }
          </Swiper>
        </SafeAreaView>
      </View>
    )
  }
}
