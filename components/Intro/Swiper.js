import React from 'react'
import { SafeAreaView } from 'react-native'
import Swiper from 'react-native-swiper'
import Welcome from './Welcome'
import LoginForm from './LoginForm'
import ss from '../StyleSheet'

const IntroSwiper = ({ screenProps }) => (
  <SafeAreaView style={ss.invisiContainer}>
    <Swiper>
      <Welcome />
      <LoginForm verifyStorageKey={screenProps.verifyStorageKey} />
    </Swiper>
  </SafeAreaView>
)

export default IntroSwiper
