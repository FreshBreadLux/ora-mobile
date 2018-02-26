import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Animated } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo'
import ss from '../../StyleSheet'

const ReflectionPresenter = ({ reflectionFade, reflectionFadeOut, animateNextPrayerTransition, opacity, finishPraying }) => (
  <View style={ss.opacityContainer}>
    <Animated.View style={[ss.backgroundImageFrame, {opacity: reflectionFade}]}>
      <LinearGradient
      colors={['#1e3799', '#0c2461']}
      start={[0.5, 0]}
      style={ss.flex1} />
    </Animated.View>
    <SafeAreaView style={ss.invisiContainer}>
      <Animated.View style={[ss.invisiContainer, ss.padding15, {opacity: reflectionFade}]}>
        <TouchableOpacity
          style={[ss.padding10, ss.alignFlexEnd]}
          onPress={finishPraying}>
          <Feather
            name="x-circle"
            size={20}
            color="#fff" />
        </TouchableOpacity>
        <Animated.View style={[ss.flex2, ss.center, {opacity}]}>
          <Text style={[ss.subHeader, ss.whiteText, ss.centerText, ss.threeQuartersWidth]}>Lord, I know that You are here, that You see me, that You hear me. Pour out Your grace into my heart, and give me a spirit of true empathy.</Text>
        </Animated.View>
        <Animated.View style={[ss.flex1, ss.center, {opacity}]}>
          <Text style={[ss.subBody, ss.whiteText, ss.centerText, ss.threeQuartersWidth]}>As soon as you are given a new prayer, the author will be notified that someone is praying for them. Don't be hasty.</Text>
        </Animated.View>
        <Animated.View style={[ss.padding10, ss.center, {opacity}]}>
          <TouchableOpacity
            onPress={async () => {
              await reflectionFadeOut()
              animateNextPrayerTransition()
            }}
            style={[ss.button, ss.fullWidth]}>
            <Text style={ss.buttonText}>ACCEPT A NEW PRAYER</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  </View>
)

export default ReflectionPresenter
