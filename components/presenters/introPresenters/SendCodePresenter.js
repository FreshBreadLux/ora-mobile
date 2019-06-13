import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const SendCodePresenter = ({ sendCode, setEmail, error, email, setForgotPasswordMode }) => (
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
          <TouchableOpacity onPress={() => setForgotPasswordMode(false)}>
          <Ionicons
              name="ios-arrow-back"
              size={26}
              color="#fff" />
          </TouchableOpacity>
          <View style={[ss.flex1, ss.center, ss.padding15]}>
            <Text style={[ss.subHeader, ss.centerText, ss.whiteText]}>
              {error ? `${error}` : null}
            </Text>
          </View>
          <View style={[ss.addViewSpacing, ss.center]}>
            <TextInput
              style={[ss.textInput, ss.fullWidth, ss.subHeader]}
              placeholder="Email"
              placeholderTextColor="#555"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />
          </View>
          <View style={[ss.flex1, ss.center]}>
            <TouchableOpacity
              style={[ss.button, ss.halfWidth]}
              onPress={sendCode}>
              <Text style={[ss.buttonText]}>SEND CODE</Text>
            </TouchableOpacity>
          </View>
          <View style={[ss.flex1, ss.center, ss.padding15]}>
            <Text style={[ss.subHeader, ss.centerText, ss.whiteText]}>Enter your email and we'll send you a code to reset your password</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  </View>
)

export default SendCodePresenter
