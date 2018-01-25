import React from 'react'
import axios from 'axios'
import { View, SafeAreaView, Text, TouchableOpacity, AsyncStorage, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Permissions, Notifications } from 'expo'
import ss from '../StyleSheet'
import ROOT_URL from '../../config'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      password: null,
      error: false,
    }
    this.setAsyncStorage = this.setAsyncStorage.bind(this)
    this.userSignup = this.userSignup.bind(this)
    this.userLogin = this.userLogin.bind(this)
    this.registerForPushNotificationsAsync = this.registerForPushNotificationsAsync.bind(this)
  }

  async setAsyncStorage(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue)
      this.props.verifyStorageKey()
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message)
    }
  }

  async registerForPushNotificationsAsync() {
    let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS)
    if (status !== 'granted') return
    let token = await Notifications.getExpoPushTokenAsync()
    return token
  }

  async userSignup() {
    let token = await this.registerForPushNotificationsAsync()
    if (this.state.email && this.state.password) {
      axios.post(`${ROOT_URL}/api/users`, {
        email: this.state.email,
        password: this.state.password,
        pushToken: token,
      })
      .then(response => JSON.stringify(response.data))
      .then(payload => this.setAsyncStorage('payload', payload))
      .catch(error => this.setState({error: error.response.request._response}))
    }
  }

  userLogin() {
    if (this.state.email && this.state.password) {
      axios.post(`${ROOT_URL}/api/users/sessions`, {
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => JSON.stringify(response.data))
      .then(payload => this.setAsyncStorage('payload', payload))
      .catch(error => this.setState({error: error.response.request._response}))
    }
  }

  render() {
    return (
      <SafeAreaView style={ss.invisiContainer}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={ss.flex1}>
          <View style={[ss.flex3, ss.padding15]}>
            <View style={[ss.flex1, ss.center, ss.padding15]}>
              <Text style={[ss.subHeader, ss.centerText]}>
                {this.state.error ? `${this.state.error}` : null}
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
                onChangeText={email => this.setState({email})}
                onSubmitEditing={event => this.refs.password.focus()}
                value={this.state.email}
              />
            </View>
            <View style={[ss.flex1, ss.center, ss.darkBottomBorder]}>
              <TextInput
                ref="password"
                style={[ss.fullWidth, ss.subHeader]}
                placeholder="Password"
                placeholderTextColor="#555"
                secureTextEntry={true}
                onChangeText={password => this.setState({password})}
                value={this.state.password}
              />
            </View>
            <View style={[ss.flex1, ss.center]}>
              <TouchableOpacity
                style={[ss.button, ss.halfWidth]}
                onPress={this.userSignup}>
                <Text style={[ss.buttonText]}>sign up</Text>
              </TouchableOpacity>
            </View>
            <View style={[ss.flex1, ss.center]}>
              <TouchableOpacity
                style={[ss.button, ss.halfWidth]}
                onPress={this.userLogin}>
                <Text style={[ss.buttonText]}>login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[ss.flex2, ss.center, ss.padding15]}>
            <Text style={[ss.subHeader, ss.whiteText, ss.centerText]}>As a matter of safety and security, we require users to be logged in before submitting prayers. We promise never to share your information with anyone.</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
