import React from 'react'
import { View } from 'react-native'
import Swiper from 'react-native-swiper'
import { SurveyPageOneContainer } from '../../containers'
import ss from '../../StyleSheet'

class SurveySwiperContainer extends React.Component {
  constructor(props) {
    super(props)
    this.swiper = React.createRef()
  }

  render() {
    return (
      <View style={ss.invisiContainer}>
        <Swiper ref={this.swiper}>
          <SurveyPageOneContainer swiper={this.swiper} />
        </Swiper>
      </View>
    )
  }
}

export default SurveySwiperContainer
