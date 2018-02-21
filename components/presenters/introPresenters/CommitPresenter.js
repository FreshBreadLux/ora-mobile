import React from 'react'
import { View, Text, Animated, Image } from 'react-native'
import { LinearGradient } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const CommitPresenter = ({ commitIntro, commitOutro }) => (
  <View style={ss.invisiContainer}>
    <View style={ss.backgroundImageFrame}>
      <Image
        source={require('../../../assets/images/Rome/Submit.jpg')}
        style={ss.backgroundImage} />
    </View>
    <View style={ss.backgroundImageFrame}>
      <LinearGradient
        colors={['#0c2461', 'transparent']}
        start={[0.5, 0]}
        end={[0.5, 1]}
        style={ss.flex1} />
    </View>
    <View style={[ss.invisiContainer, ss.padding15]}>
      <View style={[ss.flex1, ss.center]}>
        <Animated.View style={{opacity: commitIntro}}>
          <Text style={[ss.subHeader, ss.whiteText, ss.centerText]}>When you start praying, you are committing to pray for the next request shown to you</Text>
        </Animated.View>
      </View>
      <View style={[ss.flex1, ss.center]}>
        <Animated.View style={{opacity: commitOutro}}>
          <Text style={[ss.subHeader, ss.whiteText, ss.centerText]}>The author will be notified as soon as you tap accept</Text>
        </Animated.View>
      </View>
    </View>
  </View>
)

export default CommitPresenter
