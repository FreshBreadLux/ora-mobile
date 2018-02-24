import React from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native'
import { LinearGradient } from 'expo'
import ss from '../../StyleSheet'

const SignupFormPresenter = ({ userSignup, setEmail, setPassword, focusPassword, referencePassword, error, email, password }) => (
  <View style={ss.invisiContainer}>
    <View style={ss.backgroundImageFrame}>
      <Image
        source={require('../../../assets/images/Rome/Profile.jpg')}
        style={ss.backgroundImage} />
    </View>
    <View style={ss.backgroundImageFrame}>
      <LinearGradient
        colors={['transparent', '#0c2461']}
        start={[0.5, 0]}
        end={[0.5, 1]}
        style={ss.flex1} />
    </View>
    <SafeAreaView style={ss.invisiContainer}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={ss.flex1}>
        <View style={[ss.flex3, ss.padding15]}>
          <View style={[ss.flex1, ss.center, ss.padding15]}>
            <Text style={[ss.subHeader, ss.centerText]}>
              {error ? `${error}` : null}
            </Text>
          </View>
          <View style={[ss.addViewSpacing, ss.center]}>
            <TextInput
              style={[ss.fullWidth, ss.subHeader, ss.textInput]}
              underlineColorAndroid="transparent"
              placeholder="Email"
              placeholderTextColor="#555"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              onSubmitEditing={focusPassword}
              value={email}
            />
          </View>
          <View style={[ss.addViewSpacing, ss.center]}>
            <TextInput
              ref={referencePassword}
              style={[ss.fullWidth, ss.subHeader, ss.textInput]}
              underlineColorAndroid="transparent"
              placeholder="Password"
              placeholderTextColor="#555"
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <View style={[ss.flex1, ss.center]}>
            <TouchableOpacity
              style={[ss.button, ss.halfWidth]}
              onPress={userSignup}>
              <Text style={ss.buttonText}>sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[ss.flex2, ss.center, ss.padding15]}>
          <Text style={[ss.subHeader, ss.whiteText, ss.centerText]}>As a matter of safety and security, we require users to be logged in before submitting prayers. We promise never to share your information with anyone.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  </View>
)

export default SignupFormPresenter
