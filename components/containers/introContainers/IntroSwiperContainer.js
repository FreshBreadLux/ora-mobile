import React from 'react'
import { View } from 'react-native'
import Swiper from 'react-native-swiper'
import WelcomeContainer from './WelcomeContainer'
import SignupFormContainer from './SignupFormContainer'
import SetAlarmContainer from './SetAlarmContainer'

export default class IntroSwiperContainer extends React.Component {
  constructor(props) {
    super(props)

    this.swiper = React.createRef()

    this.scroll = this.scroll.bind(this)
  }

  scroll(numberOfPages) {
    const swiper = this.swiper.current
    if (swiper) swiper.scrollBy(numberOfPages)
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fafafa'}}>
        <Swiper
          loop={false}
          ref={this.swiper}
          scrollEnabled={false}
          showsPagination={false}
          keyboardShouldPersistTaps="handled">
          <WelcomeContainer scroll={this.scroll} />
          <SignupFormContainer scroll={this.scroll} />
          <SetAlarmContainer verifyStorageKey={this.props.verifyStorageKey} />
        </Swiper>
      </View>
    )
  }
}
