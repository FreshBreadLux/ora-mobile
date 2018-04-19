import React from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, TextInput, ScrollView, Image, ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo'
import ss from '../../StyleSheet'

const SignupFormPresenter = ({ userSignup, setEmail, setPassword, focusPassword, referencePassword, error, email, password, checkEmail, userExists, checkEmailReturned, userLogin, failed, sending }) => (
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
            <Text style={[ss.subHeader, ss.centerText, ss.whiteText]}>
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
              onBlur={checkEmail}
              value={email}
            />
          </View>
          {checkEmailReturned && userExists
          ? <View>
              <Text style={[ss.subHeader, ss.centerText, ss.whiteText]}>
                Welcome! Looks like you already have a profile. Please login with the password you created on our website.
              </Text>
            </View>
          : null
          }
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
            {checkEmailReturned && userExists
            ? <TouchableOpacity
                style={[ss.button, ss.halfWidth]}
                onPress={userLogin}>
                {failed
                ? <Text style={ss.buttonText}>LOGIN FAILED</Text>
                : <View>
                    {sending
                    ? <ActivityIndicator size="small" color="#1e3799" />
                    : <Text style={ss.buttonText}>LOGIN</Text>
                    }
                  </View>
                }
              </TouchableOpacity>
            : <TouchableOpacity
                disabled={!checkEmailReturned}
                style={[ss.button, ss.halfWidth]}
                onPress={userSignup}>
                {failed
                ? <Text style={ss.buttonText}>SIGNUP FAILED</Text>
                : <View>
                    {sending
                    ? <ActivityIndicator size="small" color="#1e3799" />
                    : <Text style={ss.buttonText}>SIGN UP</Text>
                    }
                  </View>
                }
              </TouchableOpacity>
            }
          </View>
        </View>
        <View style={[ss.flex2, ss.center, ss.padding15]}>
          <Text style={[ss.subHeader, ss.whiteText, ss.centerText]}>As a matter of safety and security, we require users to be logged in before submitting prayers. We promise never to share your information with anyone</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  </View>
)

export default SignupFormPresenter
