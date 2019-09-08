import React from 'react'
import { View, Text, Animated, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import ss from '../../StyleSheet'

const CommitPresenter = ({ commitIntro, commitImage, commitOutro }) => (
  <View style={ss.invisiContainer}>
    <View style={ss.backgroundImageFrame}>
      <Animated.Image
        source={require('../../../assets/images/Rome/Submit.jpg')}
        style={[ss.backgroundImage, {opacity: commitImage}]} />
    </View>
    <Animated.View style={[ss.backgroundImageFrame, {opacity: commitImage}]}>
      <LinearGradient
        colors={['#1e3799', 'transparent']}
        start={[0.5, 0]}
        end={[0.5, 1]}
        style={ss.flex1} />
    </Animated.View>
    <View style={[ss.invisiContainer, ss.padding15]}>
      <View style={[ss.flex1, ss.center]}>
        <Animated.View style={{opacity: commitIntro}}>
          <Text style={[ss.subHeader, ss.whiteText, ss.centerText]}>When you start praying, you are committing to pray for the next request shown to you</Text>
        </Animated.View>
      </View>
      <View style={[ss.flex1, ss.center]}>
        <Animated.View style={{opacity: commitOutro}}>
          <Text style={[ss.subHeader, ss.whiteText, ss.centerText]}>The author will be notified as soon as you start reading their prayer</Text>
        </Animated.View>
      </View>
    </View>
  </View>
)

export default CommitPresenter
