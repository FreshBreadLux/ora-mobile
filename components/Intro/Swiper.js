import React from 'react'
import { View, Text } from 'react-native'
import Swiper from 'react-native-swiper'
import Welcome from './Welcome'
import ss from '../StyleSheet'

const IntroSwiper = () => (
  <Swiper>
    <Welcome />
    <View style={[ss.whiteContainer, ss.center]}>
      <Text>Second Page</Text>
    </View>
    <View style={[ss.whiteContainer, ss.center]}>
      <Text>Third Page</Text>
    </View>
  </Swiper>
)

export default IntroSwiper
