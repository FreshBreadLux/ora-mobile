import React from 'react'
import { View, SafeAreaView, Animated as Ad } from 'react-native'
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
      planeIntro: new Ad.Value(0),
      plane1Fade: new Ad.Value(0),
      plane1YVal: new Ad.Value(-50),
      plane2Fade: new Ad.Value(0),
      plane2YVal: new Ad.Value(-50),
      plane3Fade: new Ad.Value(0),
      plane3YVal: new Ad.Value(-50),
      plane4Fade: new Ad.Value(0),
      plane4YVal: new Ad.Value(-50),
      planeOutro: new Ad.Value(0),
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
    const state = this.state
    Ad.sequence([
      Ad.timing(state.planeIntro, { toValue: 1, duration: 1000 }),
      Ad.parallel([
        Ad.timing(state.plane1Fade, { toValue: 1, duration: 1000 }),
        Ad.timing(state.plane1YVal, { toValue: 0, duration: 1000 }),
        Ad.timing(state.plane2Fade, { toValue: 1, delay: 700, duration: 1000 }),
        Ad.timing(state.plane2YVal, { toValue: 15, delay: 700, duration: 1000 }),
        Ad.timing(state.plane3Fade, { toValue: 1, delay: 1200, duration: 800 }),
        Ad.timing(state.plane3YVal, { toValue: 50, delay: 1200, duration: 800 }),
        Ad.timing(state.plane4Fade, { toValue: 1, delay: 1500, duration: 600 }),
        Ad.timing(state.plane4YVal, { toValue: 50, delay: 1500, duration: 600 }),
      ]),
      Ad.timing(state.planeOutro, { toValue: 1, duration: 1000 }),
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
              plane1YVal={this.state.plane1YVal}
              plane2Fade={this.state.plane2Fade}
              plane2YVal={this.state.plane2YVal}
              plane3Fade={this.state.plane3Fade}
              plane3YVal={this.state.plane3YVal}
              plane4Fade={this.state.plane4Fade}
              plane4YVal={this.state.plane4YVal}
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
