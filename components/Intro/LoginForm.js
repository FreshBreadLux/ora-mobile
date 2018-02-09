import React from 'react'
import axios from 'axios'
import { View, SafeAreaView, Text, TouchableOpacity, AsyncStorage, TextInput, ScrollView } from 'react-native'
import ss from '../StyleSheet'
import ROOT_URL from '../../config'

async function setAsyncStorage(item, selectedValue) {
  try {
    await AsyncStorage.setItem(item, selectedValue)
  } catch (error) {
    console.error('AsyncStorage error: ' + error.message)
  }
}

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      password: null,
      error: false,
    }
    this.userLogin = this.userLogin.bind(this)
  }

  userLogin() {
    if (this.state.email && this.state.password) {
      axios.post(`${ROOT_URL}/api/users/sessions`, {
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => JSON.stringify(response.data))
      .then(oraAuth => setAsyncStorage('oraAuth', oraAuth))
      .then(() => this.props.verifyStorageKey())
      .catch(error => this.setState({error: error.response.request._response}))
    } else {
      this.setState({ error: 'please provide both an email and a password' })
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
                onSubmitEditing={() => this.password.focus()}
                value={this.state.email}
              />
            </View>
            <View style={[ss.flex1, ss.center, ss.darkBottomBorder]}>
              <TextInput
                ref={ref => { this.password = ref }}
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
                onPress={this.userLogin}>
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
  }
}
