import React from 'react'
import axios from 'axios'
import { View, Text, TouchableOpacity, AsyncStorage, TextInput } from 'react-native'
import { Permissions, Notifications } from 'expo'
import styles from '../StyleSheet'
import IP_ADDRESS from '../../config'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      password: null,
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
      axios.post(`http://${IP_ADDRESS}:8080/api/users`, {
        email: this.state.email,
        password: this.state.password,
        pushToken: token,
      })
      .then(response => JSON.stringify(response.data))
      .then(payload => {
        return this.setAsyncStorage('payload', payload)
      })
      .done()
    }
  }

  userLogin() {
    if (this.state.email && this.state.password) {
      axios.post(`http://${IP_ADDRESS}:8080/api/users/sessions`, {
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => JSON.stringify(response.data))
      .then(payload => {
        return this.setAsyncStorage('payload', payload)
      })
      .done()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>As a matter of safety and security, we require users to be logged in before submitting prayers. We promise never to share your information with anyone.</Text>
        <Text>Email</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#777"
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#777"
          secureTextEntry={true}
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <TouchableOpacity
          onPress={this.userSignup}
        >
          <Text>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.userLogin}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
