import React from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import ss from '../../StyleSheet'

const LoginFormPresenter = ({ userLogin, setEmail, setPassword, focusPassword, referencePassword, error, email, password }) => (
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
        <View style={[ss.flex1, ss.center, ss.darkBottomBorder]}>
          <TextInput
            style={[ss.fullWidth, ss.subHeader]}
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
        <View style={[ss.flex1, ss.center, ss.darkBottomBorder]}>
          <TextInput
            ref={referencePassword}
            style={[ss.fullWidth, ss.subHeader]}
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
            <Text style={[ss.buttonText]}>login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[ss.flex2, ss.center, ss.padding15]}>
        <Text style={[ss.subHeader, ss.centerText]}>As a matter of safety and security, we require users to be logged in before submitting prayers. We promise never to share your information with anyone.</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
)

export default LoginFormPresenter
