import React from 'react'
import { SafeAreaView, View, Text, Animated } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const AirPlanePresenter = ({ planeIntro, plane1Fade, plane1YVal, plane2Fade, plane2YVal, plane3Fade, plane3YVal, plane4Fade, plane4YVal, plane5Fade, plane5YVal, plane6Fade, plane6YVal, plane7Fade, plane7YVal, plane8Fade, plane8YVal, plane9Fade, plane9YVal, plane10Fade, plane10YVal, planeOutro }) => (
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
            size={50}
            style={{color: '#fff'}} />
        </Animated.View>
        <Animated.View style={{opacity: plane2Fade, right: 40, bottom: plane2YVal}}>
          <Ionicons
            name="ios-paper-plane"
            size={40}
            style={{color: '#fff'}} />
        </Animated.View>
        <Animated.View style={{opacity: plane3Fade, left: 40, bottom: plane3YVal}}>
          <Ionicons
            name="ios-paper-plane"
            size={35}
            style={{color: '#6a89cc'}} />
        </Animated.View>
        <Animated.View style={{opacity: plane4Fade, left: 10, bottom: plane4YVal}}>
          <Ionicons
            name="ios-paper-plane"
            size={35}
            style={{color: '#82ccdd'}} />
        </Animated.View>
        <Animated.View style={{opacity: plane5Fade, right: 50, bottom: plane5YVal}}>
          <Ionicons
            name="ios-paper-plane"
            size={30}
            style={{color: '#82ccdd'}} />
        </Animated.View>
        <Animated.View style={{opacity: plane6Fade, right: 30, bottom: plane6YVal}}>
          <Ionicons
            name="ios-paper-plane"
            size={30}
            style={{color: '#6a89cc'}} />
        </Animated.View>
        <Animated.View style={{opacity: plane7Fade, left: 55, bottom: plane7YVal}}>
          <Ionicons
            name="ios-paper-plane"
            size={45}
            style={{color: '#fff'}} />
        </Animated.View>
        <Animated.View style={{opacity: plane8Fade, left: 10, bottom: plane8YVal}}>
          <Ionicons
            name="ios-paper-plane"
            size={40}
            style={{color: '#fff'}} />
        </Animated.View>
        <Animated.View style={{opacity: plane9Fade, right: 20, bottom: plane9YVal}}>
          <Ionicons
            name="ios-paper-plane"
            size={35}
            style={{color: '#fff'}} />
        </Animated.View>
        <Animated.View style={{opacity: plane10Fade, right: 60, bottom: plane10YVal}}>
          <Ionicons
            name="ios-paper-plane"
            size={30}
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
