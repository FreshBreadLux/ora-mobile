import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { LinearGradient } from 'expo'
import ss from '../../StyleSheet'

const ResetPasswordPresenter = ({ setResetCode, resetCode, setPassword, password, referencePassword, focusPassword, setNewPassword, setPasswordCheck, passwordCheck, referencePasswordCheck, focusPasswordCheck, error }) => (
  <View style={ss.invisiContainer}>
    <View style={ss.backgroundImageFrame}>
      <LinearGradient
        colors={['#1e3799', '#0c2461']}
        start={[0.5, 0]}
        style={ss.flex1} />
    </View>
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={ss.flex1}>
      <SafeAreaView style={ss.flex1}>
        <View style={[ss.flex1, ss.padding15]}>
          <View style={[ss.flex1, ss.center, ss.padding15]}>
            <Text style={[ss.subHeader, ss.centerText, ss.whiteText]}>
              {error ? `${error}` : null}
            </Text>
          </View>
          <View style={[ss.addViewSpacing, ss.center]}>
            <TextInput
              style={[ss.textInput, ss.fullWidth, ss.subHeader]}
              placeholder="Reset Code"
              placeholderTextColor="#555"
              keyboardType="numbers-and-punctuation"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setResetCode}
              onSubmitEditing={focusPassword}
              value={resetCode}
            />
          </View>
          <View style={[ss.addViewSpacing, ss.center]}>
            <TextInput
              ref={referencePassword}
              style={[ss.textInput, ss.fullWidth, ss.subHeader]}
              placeholder="New Password"
              placeholderTextColor="#555"
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setPassword}
              onSubmitEditing={focusPasswordCheck}
              value={password}
            />
          </View>
          <View style={[ss.addViewSpacing, ss.center]}>
            <TextInput
              ref={referencePasswordCheck}
              style={[ss.textInput, ss.fullWidth, ss.subHeader]}
              placeholder="Confirm Password"
              placeholderTextColor="#555"
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setPasswordCheck}
              value={passwordCheck}
            />
          </View>
          <View style={[ss.addViewSpacing, ss.center]}>
            <TouchableOpacity
              style={[ss.button, ss.halfWidth]}
              onPress={setNewPassword}>
              <Text style={[ss.buttonText]}>RESET PASSWORD</Text>
            </TouchableOpacity>
          </View>
          <View style={[ss.flex2, ss.center, ss.padding15]}>
            <Text style={[ss.subHeader, ss.centerText, ss.whiteText]}>A reset code has been sent to your email address</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  </View>
)

export default ResetPasswordPresenter
