import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Animated, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo'
import ss from '../../StyleSheet'

const ReflectionPresenter = ({ reflectionFadeOut, animateNextPrayerTransition, opacity, finishPraying }) => (
  <View style={ss.whiteContainer}>
    <View style={ss.backgroundImageFrame}>
      <Image
        source={require('../../../assets/images/rose-lock-screen.png')}
        style={ss.backgroundImage} />
    </View>
    <SafeAreaView style={ss.invisiContainer}>
      <View style={[ss.invisiContainer, ss.padding15]}>
        <TouchableOpacity
          style={ss.padding10}
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
          <Text style={[ss.subBody, ss.whiteText, ss.centerText, ss.threeQuartersWidth]}>As soon as you are given a new prayer, the author will be notified that someone is praying for them.{'\n'}Don't be hasty.</Text>
        </Animated.View>
        <Animated.View style={[ss.padding10, ss.center, {opacity}]}>
          <TouchableOpacity
            onPress={async () => {
              await reflectionFadeOut()
              animateNextPrayerTransition()
            }}
            style={[ss.button, ss.threeQuartersWidth]}>
            <Text style={ss.buttonText}>ACCEPT NEW PRAYER</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  </View>
)

export default ReflectionPresenter
