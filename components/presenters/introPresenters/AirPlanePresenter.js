import React from 'react'
import { SafeAreaView, View, Text, Animated } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const AirPlanePresenter = ({ planeIntro, plane1Fade, plane2Fade, plane2YVal, planeOutro }) => (
  <SafeAreaView style={ss.invisiContainer}>
    <View style={[ss.invisiContainer, ss.padding15]}>
      <View style={[ss.flex1, ss.center]}>
        <Animated.View style={{opacity: planeIntro}}>
          <Text style={[ss.subHeader, ss.whiteText, ss.centerText]}>When you need prayer, you can enter requests anonymously.</Text>
        </Animated.View>
      </View>
      <View style={[ss.flex1, ss.center]}>
        <Animated.View style={{opacity: plane1Fade}}>
          <Ionicons
            name="ios-paper-plane"
            size={40}
            style={{color: '#fff'}} />
        </Animated.View>
        <Animated.View style={{opacity: plane2Fade, right: 40, bottom: plane2YVal}}>
          <Ionicons
            name="ios-paper-plane"
            size={40}
            style={{color: '#fff'}} />
        </Animated.View>
      </View>
      <View style={[ss.flex1, ss.center]}>
        <Animated.View style={{opacity: planeOutro}}>
          <Text style={[ss.subHeader, ss.whiteText, ss.centerText]}>Ora will show those requests to other users, and you will receive notifications when they are praying for you.</Text>
        </Animated.View>
      </View>
    </View>
  </SafeAreaView>
)

export default AirPlanePresenter
