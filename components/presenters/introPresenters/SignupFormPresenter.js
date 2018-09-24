import React from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ss from '../../StyleSheet'

const determineButtonText = (checkEmailReturned, userExists, failed, sending, succeeded) => {
  if (checkEmailReturned && userExists) {
    if (failed) return <Text style={[ss.buttonText, ss.whiteText]}>LOGIN FAILED</Text>
    else if (sending) return <ActivityIndicator size="small" color="#fff" />
    else if (succeeded) return <Text style={[ss.buttonText, ss.whiteText]}>SUCCEEDED</Text>
    else return <Text style={[ss.buttonText, ss.whiteText]}>LOGIN</Text>
  }
  if (failed) return <Text style={[ss.buttonText, ss.whiteText]}>SIGNUP FAILED</Text>
  else if (sending) return <ActivityIndicator size="small" color="#fff" />
  else if (succeeded) return <Text style={[ss.buttonText, ss.whiteText]}>SUCCEEDED</Text>
  else return <Text style={[ss.buttonText, ss.whiteText]}>SIGN UP</Text>
}

const SignupFormPresenter = ({ userSignup, setFirstName, setLastName, setEmail, setPassword, focusLastName, focusEmail, focusPassword, referenceLastName, referenceEmail, referencePassword, error, firstName, lastName, email, password, checkEmail, userExists, checkEmailReturned, userLogin, failed, sending, succeeded }) => (
  <SafeAreaView style={ss.invisiContainer}>
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
      <View style={ss.flex2}>
        {error
        ? <Text numberOfLines={2} style={[ss.subBody, ss.redText, ss.centerText, ss.padding10]}>{error}</Text>
        : <Text style={[ss.tagLine, ss.centerText, ss.padding10]}>SIGN UP TO GET STARTED</Text>
        }
        <View style={[ss.row, ss.fullWidth]}>
          <Text style={[ss.halfWidth, ss.padding10, {fontFamily: 'ralewayBold', fontSize: 15, paddingBottom: 4}]}>First Name</Text>
          <Text style={[ss.halfWidth, ss.padding10, {fontFamily: 'ralewayBold', fontSize: 15, paddingBottom: 4}]}>Last Name</Text>
        </View>
        <View style={[ss.row, ss.fullWidth]}>
          <TextInput
            style={[ss.halfWidth, ss.padding10, ss.subBody, ss.whiteBackground, ss.bottomBorder, ss.topBorder]}
            underlineColorAndroid="transparent"
            placeholder="Thomas"
            placeholderTextColor="#ccc"
            keyboardType="default"
            autoCorrect={false}
            onChangeText={setFirstName}
            onSubmitEditing={focusLastName}
            value={firstName} />
          <TextInput
            ref={referenceLastName}
            style={[ss.halfWidth, ss.padding10, ss.subBody, ss.whiteBackground, ss.bottomBorder, ss.topBorder]}
            underlineColorAndroid="transparent"
            placeholder="Aquinas"
            placeholderTextColor="#ccc"
            keyboardType="default"
            autoCorrect={false}
            onChangeText={setLastName}
            onSubmitEditing={focusEmail}
            value={lastName} />
        </View>
        <View style={[ss.row, ss.fullWidth]}>
          <Text style={[ss.fullWidth, ss.padding10, {fontFamily: 'ralewayBold', fontSize: 15, paddingBottom: 4}]}>Email</Text>
        </View>
        <View style={[ss.row, ss.fullWidth]}>
          <TextInput
            ref={referenceEmail}
            style={[ss.fullWidth, ss.padding10, ss.subBody, ss.whiteBackground, ss.bottomBorder, ss.topBorder]}
            underlineColorAndroid="transparent"
            placeholder="summa@theologica.com"
            placeholderTextColor="#ccc"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
            onSubmitEditing={focusPassword}
            onBlur={checkEmail}
            value={email} />
        </View>
        {checkEmailReturned && userExists
          ? <View>
              <View style={[ss.row, ss.fullWidth]}>
                <Text style={[ss.fullWidth, ss.padding10, {fontFamily: 'ralewayBold', fontSize: 15, paddingBottom: 4}]}>Welcome back!</Text>
              </View>
              <TextInput
                ref={referencePassword}
                style={[ss.fullWidth, ss.padding10, ss.subBody, ss.whiteBackground, ss.bottomBorder, ss.topBorder]}
                underlineColorAndroid="transparent"
                placeholder="Please use existing password"
                placeholderTextColor="#ccc"
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
                onSubmitEditing={userLogin}
                returnKeyType="go" />
            </View>
          : <View>
              <View style={[ss.row, ss.fullWidth]}>
                <Text style={[ss.fullWidth, ss.padding10, {fontFamily: 'ralewayBold', fontSize: 15, paddingBottom: 4}]}>Password</Text>
              </View>
              <TextInput
                ref={referencePassword}
                style={[ss.fullWidth, ss.padding10, ss.subBody, ss.whiteBackground, ss.bottomBorder, ss.topBorder]}
                underlineColorAndroid="transparent"
                placeholder="I don't know, something cool"
                placeholderTextColor="#ccc"
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
                onSubmitEditing={userSignup}
                returnKeyType="go" />
            </View>
        }
        <View style={[ss.center, ss.addMedViewSpacing]}>
          {checkEmailReturned && userExists
            ? <TouchableOpacity
                style={[ss.blueButton, ss.halfWidth]}
                onPress={userLogin}>
                {determineButtonText(checkEmailReturned, userExists, failed, sending, succeeded)}
              </TouchableOpacity>
            : <TouchableOpacity
                disabled={!checkEmailReturned}
                style={[ss.blueButton, ss.halfWidth]}
                onPress={userSignup}>
                {determineButtonText(checkEmailReturned, userExists, failed, sending, succeeded)}
              </TouchableOpacity>
          }
        </View>
      </View>
    </KeyboardAwareScrollView>
  </SafeAreaView>
)

export default SignupFormPresenter
