import React from 'react'
import { View } from 'react-native'
import Swiper from 'react-native-swiper'
import { SurveyPageOneContainer, SurveyPageTwoContainer } from '../../containers'
import ss from '../../StyleSheet'

class SurveySwiperContainer extends React.Component {
  constructor(props) {
    super(props)
    this.swiper = React.createRef()
    this.scroll = this.scroll.bind(this)
  }

  scroll(n) {
    const swiper = this.swiper.current
    if (swiper) swiper.scrollBy(n)
  }

  render() {
    return (
      <View style={ss.invisiContainer}>
        <Swiper ref={this.swiper}>
          <SurveyPageOneContainer scroll={this.scroll} />
          <SurveyPageTwoContainer scroll={this.scroll} />
        </Swiper>
      </View>
    )
  }
}

export default SurveySwiperContainer
