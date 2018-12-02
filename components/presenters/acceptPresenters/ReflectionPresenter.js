import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Animated, ActivityIndicator, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { ampEvents, ampLogEvent } from '../../analytics'
import { BackgroundImageContainer } from '../../presenters'
import { Feather } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const ReflectionPresenter = ({ finishReflection, copyOpacity, backgroundOpacity, finishPraying, dailyReflection, verseOpacity, navigation }) => (
  <View style={ss.whiteContainer}>
    <Animated.View style={[ss.invisiContainer, { opacity: backgroundOpacity }]}>
      <BackgroundImageContainer componentName="Reflection" />
      <SafeAreaView style={ss.invisiContainer}>
        <View style={[ss.invisiContainer, ss.padding15]}>
          <Animated.View style={{opacity: copyOpacity}}>
            <TouchableOpacity
              style={ss.padding10}
              onPress={finishPraying}>
              <Feather
                name="x-circle"
                size={20}
                color="#fff" />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={[ss.flex1, ss.center, ss.padding10, {opacity: copyOpacity}]}>
            <Text style={[ss.subHeader, ss.whiteText, ss.centerText, ss.fullWidth]}>Lord, fill my heart and my mind with grace, that I might grow in love and understanding.</Text>
          </Animated.View>
          <Animated.View style={[ss.padding10, ss.center, {opacity: copyOpacity}]}>
            <TouchableOpacity
              onPress={finishReflection}
              style={[ss.button, ss.threeQuartersWidth]}>
              <Text style={ss.buttonText}>ACCEPT NEW PRAYER</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </SafeAreaView>
    </Animated.View>
  </View>
)

const mapState = state => ({
  dailyReflection: state.acceptPrayer.dailyReflection
})

export default connect(mapState)(ReflectionPresenter)
