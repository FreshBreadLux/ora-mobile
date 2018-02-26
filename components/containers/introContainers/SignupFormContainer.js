import React from 'react'
import axios from 'axios'
import { AsyncStorage } from 'react-native'
import { Permissions, Notifications } from 'expo'
import { SignupFormPresenter } from '../../presenters'
import ROOT_URL from '../../../config'

async function registerForPushNotificationsAsync() {
  let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
  if (status !== 'granted') return
  let token = await Notifications.getExpoPushTokenAsync()
  return token
}

async function setAsyncStorage(item, selectedValue) {
  try {
    await AsyncStorage.setItem(item, selectedValue)
  } catch (error) {
    console.error('AsyncStorage error: ' + error.message)
  }
}

export default class SignupFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      password: null,
      error: false,
    }
    this.userSignup = this.userSignup.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.referencePassword = this.referencePassword.bind(this)
    this.focusPassword = this.focusPassword.bind(this)
  }

  async userSignup() {
    try {
      if (this.state.email && this.state.password) {
        let token = await registerForPushNotificationsAsync()
        axios.post(`${ROOT_URL}/api/users`, {
          email: this.state.email,
          password: this.state.password,
          pushToken: token,
        })
        .then(response => JSON.stringify(response.data))
        .then(oraAuth => setAsyncStorage('oraAuth', oraAuth))
        .then(() => this.props.showAlarm())
        .catch(error => {
          if (error.response && error.response.status === 405) {
            this.setState({error: 'Please submit a valid email address'})
          }
          if (error.response && error.response.status === 406) {
            this.setState({error: 'That email already exists in our database'})
          }
        })
      } else {
        this.setState({ error: 'Please provide both an email and a password' })
      }
    } catch (error) {
      console.error(error)
      this.setState({error: error.response.request._response})
    }
  }

  setEmail(email) {
    this.setState({email})
  }

  setPassword(password) {
    this.setState({password})
  }

  referencePassword(ref) {
    this.password = ref
  }

  focusPassword() {
    this.password.focus()
  }

  render() {
    return (
      <SignupFormPresenter
        userSignup={this.userSignup}
        setEmail={this.setEmail}
        setPassword={this.setPassword}
        focusPassword={this.focusPassword}
        referencePassword={this.referencePassword}
        error={this.state.error}
        email={this.state.email}
        password={this.state.password} />
    )
  }
}
