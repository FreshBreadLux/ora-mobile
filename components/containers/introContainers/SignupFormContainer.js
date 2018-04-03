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
      userExists: false,
      checkEmailReturned: false,
    }
    this.setEmail = this.setEmail.bind(this)
    this.userSignup = this.userSignup.bind(this)
    this.checkEmail = this.checkEmail.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.focusPassword = this.focusPassword.bind(this)
    this.referencePassword = this.referencePassword.bind(this)
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

  checkEmail() {
    if (this.state.email) {
      axios.get(`${ROOT_URL}/api/users/byEmail/${this.state.email}`)
      .then(response => {
        if (response.data.id && response.data.stripeCustomerId) {
          this.setState({ checkEmailReturned: true, userExists: true })
        } else {
          this.setState({ checkEmailReturned: true, userExists: false })
        }
      })
      .catch(console.error)
    }
  }

  async userLogin() {
    try {
      if (this.state.email && this.state.password) {
        let token = await registerForPushNotificationsAsync()
        axios.post(`${ROOT_URL}/api/users/loginDonor`, {
          email: this.state.email,
          password: this.state.password,
          pushToken: token,
        })
        .then(response => JSON.stringify(response.data))
        .then(oraAuth => setAsyncStorage('oraAuth', oraAuth))
        .then(() => this.props.showAlarm())
        .catch(console.error)
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
        setEmail={this.setEmail}
        error={this.state.error}
        email={this.state.email}
        checkEmail={this.checkEmail}
        userSignup={this.userSignup}
        setPassword={this.setPassword}
        password={this.state.password}
        userExists={this.state.userExists}
        focusPassword={this.focusPassword}
        referencePassword={this.referencePassword}
        checkEmailReturned={this.state.checkEmailReturned} />
    )
  }
}
