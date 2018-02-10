import React from 'react'
import { SafeAreaView } from 'react-native'
import Swiper from 'react-native-swiper'
import WelcomeContainer from './WelcomeContainer'
import SignupFormContainer from './SignupFormContainer'
import SetAlarmContainer from './SetAlarmContainer'
import ss from '../../StyleSheet'

export default class IntroSwiperContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alarmVisible: false
    }
    this.showAlarm = this.showAlarm.bind(this)
  }

  showAlarm() {
    this.setState({ alarmVisible: true })
  }

  render() {
    return (
      <SafeAreaView style={ss.invisiContainer}>
        <Swiper loop={false}>
          <WelcomeContainer />
          {this.state.alarmVisible
          ? <SetAlarmContainer verifyStorageKey={this.props.verifyStorageKey} />
          : <SignupFormContainer showAlarm={this.showAlarm} />
          }
        </Swiper>
      </SafeAreaView>
    )
  }
}
