import React from 'react'
import { Animated, SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const WelcomePresenter = ({ scroll, welcomeTextFade, chatBubbleFade, chatBubbleYPosition, answerTextFade, descriptionTextFade, buttonFade }) => (
  <View style={[ss.flex1, {backgroundColor: '#fafafa'}]}>
    <SafeAreaView style={[ss.invisiContainer, ss.spaceAround]}>
      <Animated.View style={[ss.center, {opacity: welcomeTextFade}]}>
        <Text style={[{fontFamily: 'ralewayBold', fontSize: 30}]}>WELCOME TO</Text>
        <Text style={[{fontFamily: 'ralewayBold', fontSize: 80}]}>ORA</Text>
      </Animated.View>
      <View style={[ss.padding15, ss.alignFlexEnd]}>
        <Animated.Image
          source={require('../../../assets/images/what-is-ora-bubble.png')}
          style={{height: 35, width: 143.09, opacity: chatBubbleFade, bottom: chatBubbleYPosition}} />
      </View>
      <View>
        <Animated.View style={[ss.center, {opacity: answerTextFade, paddingBottom: 10}]}>
          <Text style={[ss.centerText, {fontFamily: 'ralewayBold', fontSize: 30}]}>Ora is a{'\n'}Prayer Network.</Text>
        </Animated.View>
        <Animated.View style={[ss.center, {opacity: descriptionTextFade}]}>
          <Text style={[ss.centerText, ss.padding10, {fontFamily: 'raleway', fontSize: 18}]}>Ora connects people around the world through prayer. Share prayers anonymously with Christians all over the world, or start a group and share prayers with your friends.</Text>
        </Animated.View>
      </View>
      <Animated.View style={[ss.center, ss.addViewSpacing, {opacity: buttonFade}]}>
        <TouchableOpacity style={ss.blueButton} onPress={() => scroll(1)}>
          <Text style={[ss.buttonText, ss.whiteText]}>LOVE IT</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  </View>
)

export default WelcomePresenter
