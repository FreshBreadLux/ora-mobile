import React from 'react'
import { View, Animated as Ad } from 'react-native'
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
    this.swiper = React.createRef()

    this.scroll = this.scroll.bind(this)
    this.showAlarm = this.showAlarm.bind(this)
  }

  scroll(numberOfPages) {
    const swiper = this.swiper.current
    if (swiper) swiper.scrollBy(numberOfPages)
  }

  showAlarm() {
    this.setState({ alarmVisible: true })
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fafafa'}}>
        <Swiper loop={false} ref={this.swiper} showsPagination={false}>
          <WelcomeContainer scroll={this.scroll} />
          {this.state.alarmVisible
          ? <SetAlarmContainer verifyStorageKey={this.props.verifyStorageKey} />
          : <SignupFormContainer showAlarm={this.showAlarm} />
          }
        </Swiper>
      </View>
    )
  }
}
