import React from 'react'
import { SafeAreaView } from 'react-native'
import Swiper from 'react-native-swiper'
import Welcome from './Welcome'
import LoginForm from './LoginForm'
import SetAlarm from './SetAlarm'
import ss from '../StyleSheet'

export default class IntroSwiper extends React.Component {
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
          <Welcome />
          {this.state.alarmVisible
          ? <SetAlarm verifyStorageKey={this.props.verifyStorageKey} />
          : <LoginForm showAlarm={this.showAlarm} />
          }
        </Swiper>
      </SafeAreaView>
    )
  }
}
