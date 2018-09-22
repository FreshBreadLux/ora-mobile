import React from 'react'
import { Animated, SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const WelcomePresenter = ({ scroll, welcomeTextFade, chatBubbleFade, chatBubbleYPosition, answerTextFade, descriptionTextFade, buttonFade }) => (
  <View style={[ss.flex1, {backgroundColor: '#fafafa'}]}>
    <SafeAreaView style={ss.invisiContainer}>
      <Animated.View style={[ss.center, ss.addLargeViewSpacing, {opacity: welcomeTextFade}]}>
        <Text style={[{fontFamily: 'ralewayBold', fontSize: 30}]}>WELCOME TO</Text>
        <Text style={[{fontFamily: 'ralewayBold', fontSize: 90}]}>ORA</Text>
      </Animated.View>
      <View style={[ss.padding15, ss.alignFlexEnd]}>
        <Animated.Image
          source={require('../../../assets/images/what-is-ora-bubble.png')}
          style={{height: 35, width: 143.09, opacity: chatBubbleFade, bottom: chatBubbleYPosition}} />
      </View>
      <Animated.View style={[ss.center, {opacity: answerTextFade, paddingTop: 10, paddingBottom: 20}]}>
        <Text style={[ss.centerText, {fontFamily: 'ralewayBold', fontSize: 30}]}>Ora is a{'\n'}Prayer Network.</Text>
      </Animated.View>
      <Animated.View style={[ss.center, {opacity: descriptionTextFade}]}>
        <Text style={[ss.centerText, ss.padding10, {fontFamily: 'raleway', fontSize: 20}]}>Ora cultivates lives of devotion by connecting people around the world through prayer.</Text>
      </Animated.View>
      <Animated.View style={[ss.center, ss.addMedViewSpacing, {opacity: buttonFade}]}>
        <TouchableOpacity style={ss.blueButton} onPress={() => scroll(1)}>
          <Text style={[ss.buttonText, ss.whiteText]}>LOVE IT</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  </View>
)

export default WelcomePresenter
