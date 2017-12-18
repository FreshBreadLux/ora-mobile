import React from 'react'
import tcomb from 'tcomb-form-native'
import axios from 'axios'
import { View, Text, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native'
import IP_ADDRESS from '../../config'

const Form = tcomb.form.Form
const Person = tcomb.struct({
  email: tcomb.String,
  password: tcomb.String,
})

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.setAsyncStorage = this.setAsyncStorage.bind(this)
    this.userSignup = this.userSignup.bind(this)
    this.userLogin = this.userLogin.bind(this)
  }

  async setAsyncStorage(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue)
      this.props.verifyStorageKey()
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message)
    }
  }

  userSignup() {
    const value = this.refs.form.getValue()
    if (value) {
      axios.post(`http://${IP_ADDRESS}:8080/api/users`, {
        email: value.email,
        password: value.password,
      })
      .then(response => JSON.stringify(response.data))
      .then(payload => {
        return this.setAsyncStorage('payload', payload)
      })
      .done()
    }
  }

  userLogin() {
    const value = this.refs.form.getValue()
    if (value) {
      axios.post(`http://${IP_ADDRESS}:8080/api/users/sessions`, {
        email: value.email,
        password: value.password,
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
      <View style={styles.login}>
        <Form
          style={styles.form}
          ref="form"
          type={Person}
          options={{
            auto: 'placeholders',
            fields: {
              email: {
                keyboardType: 'email-address',
                autoCapitalize: 'none',
                onSubmitEditing: () => this.refs.form.getComponent('password').refs.input.focus(),
                placeholderTextColor: '#777',
              },
              password: {
                placeholderTextColor: '#777'
              }
            }
          }}
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

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
  },
})
