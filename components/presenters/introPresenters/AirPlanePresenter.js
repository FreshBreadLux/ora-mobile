import React from 'react'
import { SafeAreaView, View, Text, Animated } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const AirPlanePresenter = ({ planeIntro, plane1Fade, plane1YVal, plane2Fade, plane2YVal, plane3Fade, plane3YVal, plane4Fade, plane4YVal, planeOutro }) => (
  <SafeAreaView style={ss.invisiContainer}>
    <View style={[ss.invisiContainer, ss.padding15]}>
      <View style={[ss.flex1, ss.center]}>
        <Animated.View style={{opacity: planeIntro}}>
          <Text style={[ss.subHeader, ss.whiteText, ss.centerText]}>When you need prayer, you can enter requests anonymously.</Text>
        </Animated.View>
      </View>
      <View style={[ss.flex1, ss.center]}>
        <Animated.View style={{opacity: plane1Fade, bottom: plane1YVal}}>
          <Ionicons
            name="ios-paper-plane"
            size={55}
            style={{color: '#fff'}} />
        </Animated.View>
        <Animated.View style={{opacity: plane2Fade, left: 35, bottom: plane2YVal}}>
          <Ionicons
            name="ios-paper-plane"
            size={50}
            style={{color: '#82ccdd'}} />
        </Animated.View>
        <Animated.View style={{opacity: plane3Fade, right: 40, bottom: plane3YVal}}>
          <Ionicons
            name="ios-paper-plane"
            size={45}
            style={{color: '#6a89cc'}} />
        </Animated.View>
        <Animated.View style={{opacity: plane4Fade, right: 10, bottom: plane4YVal}}>
          <Ionicons
            name="ios-paper-plane"
            size={35}
            style={{color: '#fff'}} />
        </Animated.View>
      </View>
      <View style={[ss.flex1, ss.center, ss.addViewSpacing]}>
        <Animated.View style={{opacity: planeOutro}}>
          <Text style={[ss.subHeader, ss.whiteText, ss.centerText]}>Ora will show those requests to other users, and you will receive notifications when they are praying for you.</Text>
        </Animated.View>
      </View>
    </View>
  </SafeAreaView>
)

export default AirPlanePresenter
