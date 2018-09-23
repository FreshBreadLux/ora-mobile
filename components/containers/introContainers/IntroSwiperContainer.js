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
      registerNotificationsVisible: false
    }
    this.swiper = React.createRef()

    this.scroll = this.scroll.bind(this)
    this.showRegisterNotifications = this.showRegisterNotifications.bind(this)
  }

  scroll(numberOfPages) {
    const swiper = this.swiper.current
    if (swiper) swiper.scrollBy(numberOfPages)
  }

  showRegisterNotifications() {
    this.setState({ registerNotificationsVisible: true })
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fafafa'}}>
        <Swiper loop={false} ref={this.swiper} showsPagination={false}>
          <WelcomeContainer scroll={this.scroll} />
          {this.state.registerNotificationsVisible
          ? <SetAlarmContainer verifyStorageKey={this.props.verifyStorageKey} />
          : <SignupFormContainer showRegisterNotifications={this.showRegisterNotifications} />
          }
        </Swiper>
      </View>
    )
  }
}
