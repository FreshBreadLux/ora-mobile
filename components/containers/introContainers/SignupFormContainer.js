import React from 'react'
import axios from 'axios'
import { AsyncStorage, Platform } from 'react-native'
import { Permissions, Notifications } from 'expo'
import { SignupFormPresenter } from '../../presenters'
import ROOT_URL, { SENDINBLUE_API_KEY_V3 } from '../../../config'

async function registerForPushNotificationsAsync() {
  console.log('PROMPTING USER')
  let permissionsResult = await Permissions.askAsync(Permissions.NOTIFICATIONS)
  console.log('STATUS RESOLVED:', permissionsResult)
  if (permissionsResult.status !== 'granted') return
  console.log('GETTING EXPO PUSH TOKEN')
  let token = await Notifications.getExpoPushTokenAsync()
  console.log('TOKEN RETRIEVED:', token)
  return token
}

function setAsyncStorage(item, selectedValue) {
  return AsyncStorage.setItem(item, selectedValue)
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
      sending: false,
      failed: false,
    }
    this.setEmail = this.setEmail.bind(this)
    this.userLogin = this.userLogin.bind(this)
    this.userSignup = this.userSignup.bind(this)
    this.checkEmail = this.checkEmail.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.focusPassword = this.focusPassword.bind(this)
    this.referencePassword = this.referencePassword.bind(this)
  }

  async userSignup() {
    try {
      if (this.state.email && this.state.password) {
        this.setState({ sending: true })
        console.log('REGISTERING FOR PUSH NOTIFICATIONS')
        let token = await registerForPushNotificationsAsync()
        console.log('TOKEN RESOLVED TO:', token)
        axios.post(`${ROOT_URL}/api/users`, {
          email: this.state.email,
          password: this.state.password,
          pushToken: token,
        })
        .then(response => JSON.stringify(response.data))
        .then(oraAuth => setAsyncStorage('oraAuth_v1.1.0', oraAuth))
        .then(() => {
          axios.post('https://api.sendinblue.com/v3/contacts', {
            email: this.state.email,
            updateEnabled: true
          }, {
            headers: {'api-key': SENDINBLUE_API_KEY_V3 }
          })
          axios.post('https://api.sendinblue.com/v3/smtp/templates/2/send', {
            emailTo: [this.state.email],
          }, {
            headers: {'api-key': SENDINBLUE_API_KEY_V3 }
          })
        })
        .then(() => {
          this.props.showAlarm()
        })
        .catch(error => {
          if (error.response && error.response.status === 405) {
            this.setState({error: 'Please submit a valid email address'})
          }
          if (error.response && error.response.status === 406) {
            this.setState({error: 'That email already exists in our database'})
          }
          this.setState({ sending: false, failed: true })
          setTimeout(() => this.setState({failed: false}), 10000)
        })
      } else {
        this.setState({ error: 'Please provide both an email and a password' })
      }
    } catch (error) {
      console.log(error)
      this.setState({
        error: error.response.request._response,
        sending: false,
        failed: true,
      })
      setTimeout(() => this.setState({failed: false}), 10000)
    }
  }

  checkEmail() {
    if (this.state.email) {
      console.log('QUERYING WITH EMAIL:', this.state.email)
      axios.get(`${ROOT_URL}/api/users/?email=${this.state.email}`)
      .then(response => {
        if (response.data.id) {
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
        let token
        if (!(Platform.OS === 'android' && __DEV__)) {
          token = await registerForPushNotificationsAsync()
        }
        axios.post(`${ROOT_URL}/api/users/sessions`, {
          email: this.state.email,
          password: this.state.password
        })
        .then(response => {
          return axios.put(`${ROOT_URL}/api/users/${response.data.userId}`, {
            pushToken: token
          })
          .then(() => response)
        })
        .then(result => JSON.stringify(result.data))
        .then(oraAuth => setAsyncStorage('oraAuth_v1.1.0', oraAuth))
        .then(() => this.props.showAlarm())
        .catch(() => {
          this.setState({ sending: false, failed: true })
          setTimeout(() => this.setState({failed: false}), 10000)
        })
      } else {
        this.setState({ error: 'Please provide both an email and a password' })
      }
    } catch (error) {
      console.log(error)
      this.setState({
        error: error.response.request._response,
        sending: false,
        failed: true,
      })
      setTimeout(() => this.setState({failed: false}), 10000)
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
        userLogin={this.userLogin}
        failed={this.state.failed}
        sending={this.state.sending}
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
