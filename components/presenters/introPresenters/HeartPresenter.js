import React from 'react'
import { SafeAreaView, View, Text, Animated } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const HeartPresenter = ({ heartIntro, heart1Fade, heart2Fade, heart3Fade, heart4Fade, heartOutro }) => (
  <SafeAreaView style={ss.invisiContainer}>
    <View style={[ss.invisiContainer, ss.padding15]}>
      <View style={[ss.flex1, ss.center]}>
        <Animated.View style={{opacity: heartIntro}}>
          <Text style={[ss.subHeader, ss.whiteText, ss.centerText]}>Users will only be able to see your prayer once, unless they choose to follow it</Text>
        </Animated.View>
      </View>
      <View style={[ss.flex1, ss.center]}>
        <Animated.View style={{opacity: heart1Fade}}>
          <Ionicons
            name="md-heart"
            size={55}
            style={{color: '#FF4081'}} />
        </Animated.View>
        <Animated.View style={{opacity: heart2Fade, left: 45}}>
          <Ionicons
            name="md-heart"
            size={45}
            style={{color: '#cf6a87'}} />
        </Animated.View>
        <Animated.View style={{opacity: heart3Fade, right: 45, bottom: 45}}>
          <Ionicons
            name="md-heart"
            size={45}
            style={{color: '#f78fb3'}} />
        </Animated.View>
        <Animated.View style={{opacity: heart4Fade, bottom: 45}}>
          <Ionicons
            name="md-heart"
            size={35}
            style={{color: '#f8a5c2'}} />
        </Animated.View>
      </View>
      <View style={[ss.flex1, ss.center, ss.addViewSpacing]}>
        <Animated.View style={{opacity: heartOutro}}>
          <Text style={[ss.subHeader, ss.whiteText, ss.centerText]}>When someone follows your prayer, it means they will continue to pray for it and they would like to receive updates whenever you choose to share them</Text>
        </Animated.View>
      </View>
    </View>
  </SafeAreaView>
)

export default HeartPresenter
