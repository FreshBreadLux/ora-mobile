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
        <Animated.View style={[ss.flex2, ss.justifyCenter, {opacity}]}>
          <Text style={[ss.subHeader, ss.whiteText, ss.threeQuartersWidth]}>Lord, I know that you are here, that you see me, that you hear me. I adore you with profound reverence, and I ask pardon for my sins and the grace to make this time of prayer fruitful.</Text>
        </Animated.View>
        <Animated.View style={[ss.flex1, ss.justifyCenter, {opacity}]}>
          <Text style={[ss.subBody, ss.whiteText, ss.threeQuartersWidth]}>As soon as you are given a new prayer, the author will be notified that someone is praying for them. It is then your responsibility to pray for the intention. Don't be hasty.</Text>
        </Animated.View>
        <Animated.View style={[ss.padding10, ss.center, {opacity}]}>
          <TouchableOpacity
            onPress={async () => {
              await reflectionFadeOut()
              animateNextPrayerTransition()
            }}
            style={[ss.button, ss.fullWidth]}>
            <Text style={ss.buttonText}>accept a new prayer</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  </View>
)

export default ReflectionPresenter
