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
      plane1YVal: new Ad.Value(-100),
      plane2Fade: new Ad.Value(0),
      plane2YVal: new Ad.Value(-100),
      plane3Fade: new Ad.Value(0),
      plane3YVal: new Ad.Value(-100),
      plane4Fade: new Ad.Value(0),
      plane4YVal: new Ad.Value(-100),
      plane5Fade: new Ad.Value(0),
      plane5YVal: new Ad.Value(-100),
      plane6Fade: new Ad.Value(0),
      plane6YVal: new Ad.Value(-100),
      plane7Fade: new Ad.Value(0),
      plane7YVal: new Ad.Value(-100),
      plane8Fade: new Ad.Value(0),
      plane8YVal: new Ad.Value(-100),
      plane9Fade: new Ad.Value(0),
      plane9YVal: new Ad.Value(-100),
      plane10Fade: new Ad.Value(0),
      plane10YVal: new Ad.Value(-100),
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
        Ad.timing(state.plane1YVal, { toValue: -50, duration: 1000 }),
        Ad.timing(state.plane2Fade, { toValue: 1, delay: 1000, duration: 1000 }),
        Ad.timing(state.plane2YVal, { toValue: -50, delay: 1000, duration: 1000 }),
        Ad.timing(state.plane3Fade, { toValue: 1, delay: 1500, duration: 800 }),
        Ad.timing(state.plane3YVal, { toValue: -20, delay: 1500, duration: 800 }),
        Ad.timing(state.plane4Fade, { toValue: 1, delay: 1700, duration: 600 }),
        Ad.timing(state.plane4YVal, { toValue: -20, delay: 1700, duration: 600 }),
        Ad.timing(state.plane5Fade, { toValue: 1, delay: 1800, duration: 600 }),
        Ad.timing(state.plane5YVal, { toValue: 100, delay: 1800, duration: 600 }),
        Ad.timing(state.plane6Fade, { toValue: 1, delay: 1800, duration: 500 }),
        Ad.timing(state.plane6YVal, { toValue: 60, delay: 1800, duration: 500 }),
        Ad.timing(state.plane7Fade, { toValue: 1, delay: 1900, duration: 600 }),
        Ad.timing(state.plane7YVal, { toValue: 60, delay: 1900, duration: 600 }),
        Ad.timing(state.plane8Fade, { toValue: 1, delay: 1900, duration: 600 }),
        Ad.timing(state.plane8YVal, { toValue: 160, delay: 1900, duration: 600 }),
        Ad.timing(state.plane9Fade, { toValue: 1, delay: 2000, duration: 500 }),
        Ad.timing(state.plane9YVal, { toValue: 160, delay: 2000, duration: 500 }),
        Ad.timing(state.plane10Fade, { toValue: 1, delay: 2000, duration: 600 }),
        Ad.timing(state.plane10YVal, { toValue: 150, delay: 2000, duration: 600 }),
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
              plane5Fade={this.state.plane5Fade}
              plane5YVal={this.state.plane5YVal}
              plane6Fade={this.state.plane6Fade}
              plane6YVal={this.state.plane6YVal}
              plane7Fade={this.state.plane7Fade}
              plane7YVal={this.state.plane7YVal}
              plane8Fade={this.state.plane8Fade}
              plane8YVal={this.state.plane8YVal}
              plane9Fade={this.state.plane9Fade}
              plane9YVal={this.state.plane9YVal}
              plane10Fade={this.state.plane10Fade}
              plane10YVal={this.state.plane10YVal}
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
