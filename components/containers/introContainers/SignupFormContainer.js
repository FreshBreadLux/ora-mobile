import React from 'react'
import axios from 'axios'
import { AsyncStorage } from 'react-native'
import { SignupFormPresenter } from '../../presenters'
import ROOT_URL, { SENDINBLUE_API_KEY_V3 } from '../../../config'

function setAsyncStorage(item, selectedValue) {
  return AsyncStorage.setItem(item, selectedValue)
}

export default class SignupFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      error: false,
      userExists: false,
      checkEmailReturned: false,
      sending: false,
      failed: false,
      succeeded: false,
    }
    this.setEmail = this.setEmail.bind(this)
    this.userLogin = this.userLogin.bind(this)
    this.userSignup = this.userSignup.bind(this)
    this.checkEmail = this.checkEmail.bind(this)
    this.focusEmail = this.focusEmail.bind(this)
    this.setLastName = this.setLastName.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.setFirstName = this.setFirstName.bind(this)
    this.focusLastName = this.focusLastName.bind(this)
    this.focusPassword = this.focusPassword.bind(this)
    this.referenceEmail = this.referenceEmail.bind(this)
    this.referenceLastName = this.referenceLastName.bind(this)
    this.referencePassword = this.referencePassword.bind(this)
  }

  userSignup() {
    if (this.state.email && this.state.password) {
      this.setState({ sending: true })
      axios.post(`${ROOT_URL}/api/users`, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
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
        this.setState({ succeeded: true })
        setTimeout(() => this.props.scroll(1), 2000)
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
      .catch(console.warn)
    }
  }

  userLogin() {
    if (this.state.email && this.state.password) {
      this.setState({ sending: true })
      axios.post(`${ROOT_URL}/api/users/sessions`, {
        email: this.state.email,
        password: this.state.password
      })
      .then(result => JSON.stringify(result.data))
      .then(oraAuth => setAsyncStorage('oraAuth_v1.1.0', oraAuth))
      .then(() => {
        this.setState({ succeeded: true })
        setTimeout(() => this.props.scroll(1), 2000)
      })
      .catch(() => {
        this.setState({ sending: false, failed: true })
        setTimeout(() => this.setState({failed: false}), 10000)
      })
    } else {
      this.setState({ error: 'Please provide both an email and a password' })
    }
  }

  setFirstName(firstName) {
    this.setState({firstName})
  }

  setLastName(lastName) {
    this.setState({lastName})
  }

  setEmail(email) {
    this.setState({email})
  }

  setPassword(password) {
    this.setState({password})
  }

  referenceLastName(ref) {
    this.lastName = ref
  }

  referenceEmail(ref) {
    this.email = ref
  }

  referencePassword(ref) {
    this.password = ref
  }

  focusLastName() {
    this.lastName.focus()
  }

  focusEmail() {
    this.email.focus()
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
        focusEmail={this.focusEmail}
        lastName={this.state.lastName}
        setPassword={this.setPassword}
        password={this.state.password}
        setLastName={this.setLastName}
        succeeded={this.state.succeeded}
        firstName={this.state.firstName}
        setFirstName={this.setFirstName}
        userExists={this.state.userExists}
        focusPassword={this.focusPassword}
        focusLastName={this.focusLastName}
        referenceEmail={this.referenceEmail}
        referencePassword={this.referencePassword}
        referenceLastName={this.referenceLastName}
        checkEmailReturned={this.state.checkEmailReturned} />
    )
  }
}
