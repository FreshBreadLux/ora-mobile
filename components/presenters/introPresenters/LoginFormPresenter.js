import React from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { LinearGradient } from 'expo'
import ss from '../../StyleSheet'

const LoginFormPresenter = ({ userLogin, setEmail, setPassword, focusPassword, referencePassword, error, email, password, setForgotPasswordMode }) => (
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
      <View style={[ss.flex3, ss.padding15]}>
        <View style={[ss.flex1, ss.center, ss.padding15]}>
          <Text style={[ss.subHeader, ss.centerText, ss.whiteText]}>
            {error ? `${error}` : null}
          </Text>
        </View>
        <View style={[ss.addViewSpacing, ss.center]}>
          <TextInput
            style={[ss.textInput, ss.fullWidth, ss.subHeader]}
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
            style={[ss.textInput, ss.fullWidth, ss.subHeader]}
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
            onPress={userLogin}>
            <Text style={[ss.buttonText]}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={ss.center}>
        <TouchableOpacity onPress={() => setForgotPasswordMode(true)}>
          <Text style={[ss.subBody, ss.whiteText]}>forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View style={[ss.flex2, ss.center, ss.padding15]}>
        <Text style={[ss.subHeader, ss.centerText, ss.whiteText]}>As a matter of safety and security, we require users to be logged in before submitting prayers. We promise never to share your information with anyone.</Text>
      </View>
    </ScrollView>
  </View>
)

export default LoginFormPresenter
