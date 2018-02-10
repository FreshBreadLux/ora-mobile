import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Animated } from 'react-native'
import { Feather } from '@expo/vector-icons'
import ss from '../StyleSheet'

const Reflection = ({ animateNextPrayerTransition, opacity, finishPraying }) => (
  <View style={ss.opacityContainer}>
    <SafeAreaView style={ss.invisiContainer}>
      <View style={[ss.invisiContainer, ss.padding15]}>
        <TouchableOpacity
          style={[ss.padding10, ss.alignFlexEnd]}
          onPress={finishPraying}>
          <Feather
            name="x-circle"
            size={20}
            color="#888" />
        </TouchableOpacity>
        <Animated.View style={[ss.flex2, ss.justifyCenter, {opacity}]}>
          <Text style={ss.reflectionPrayer}>Lord, I know that you are here, that you see me, that you hear me. I adore you with profound reverence, and I ask pardon for my sins and the grace to make this time of prayer fruitful.</Text>
        </Animated.View>
        <Animated.View style={[ss.flex1, ss.justifyCenter, {opacity}]}>
          <Text style={ss.subBody}>As soon as you are given a new prayer, the author will be notified that someone is praying for them. It is then your responsibility to pray for the intention. Don't be hasty.</Text>
        </Animated.View>
        <Animated.View style={[ss.padding10, ss.center, {opacity}]}>
          <TouchableOpacity
            onPress={animateNextPrayerTransition}
            style={[ss.button, ss.fullWidth]}>
            <Text style={ss.buttonText}>accept a new prayer</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  </View>
)

export default Reflection
