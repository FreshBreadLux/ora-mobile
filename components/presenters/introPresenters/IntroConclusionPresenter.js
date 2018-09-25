import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Animated } from 'react-native'
import ss from '../../StyleSheet'

const IntroConclusionPresenter = ({ opacity, fadeOutAndLogIn }) => (
  <SafeAreaView style={ss.invisiContainer}>
    <Animated.Text style={[ss.tagLine, ss.centerText, ss.padding10, {fontFamily: 'ralewayBold', marginTop: 30, opacity}]}>Welcome to the Ora community</Animated.Text>
    <Animated.Text style={[ss.body, ss.padding10, {marginTop: 10, opacity}]}>"Therefore, confess your sins to one another and pray for one another, that you may be healed. The fervent prayer of a righteous person is very powerful."</Animated.Text>
    <Animated.Text style={[ss.body, ss.fullWidth, ss.rightText, ss.padding10, {opacity}]}>James 5:16</Animated.Text>
    <View style={ss.center}>
      <Animated.View style={[ss.addLargeViewSpacing, {opacity}]}>
        <TouchableOpacity
          onPress={fadeOutAndLogIn}
          style={ss.blueButton}>
          <Text style={[ss.buttonText, ss.whiteText]}>READY TO START</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  </SafeAreaView>
)

export default IntroConclusionPresenter
