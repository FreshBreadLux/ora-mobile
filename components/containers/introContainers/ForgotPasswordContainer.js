import React from 'react'
import axios from 'axios'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { ResetPasswordPresenter, SendCodePresenter } from '../../presenters'
import ss from '../../StyleSheet'
import ROOT_URL from '../../../config'

class ForgotPasswordContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      codeSent: false,
      email: null,
      resetCode: null,
      password: null,
      passwordCheck: null,
      error: false
    }
    this.sendCode = this.sendCode.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setResetCode = this.setResetCode.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.referencePassword = this.referencePassword.bind(this)
    this.focusPassword = this.focusPassword.bind(this)
    this.referencePasswordCheck = this.referencePasswordCheck.bind(this)
    this.focusPasswordCheck = this.focusPasswordCheck.bind(this)
    this.setPasswordCheck = this.setPasswordCheck.bind(this)
    this.setNewPassword = this.setNewPassword.bind(this)
  }

  setEmail(email) {
    this.setState({email})
  }

  setResetCode(resetCode) {
    this.setState({resetCode})
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

  referencePasswordCheck(ref) {
    this.passwordCheck = ref
  }

  focusPasswordCheck() {
    this.passwordCheck.focus()
  }

  setPasswordCheck(passwordCheck) {
    this.setState({passwordCheck})
  }

  sendCode() {
    if (this.state.email) {
      axios.put(`${ROOT_URL}/api/users/sendResetCode`,
        { email: this.state.email },
        { headers: { token: this.props.jwToken }
      })
      .then(() => this.setState({ codeSent: true }))
      .catch(error => this.setState({ error: error.response.request._response }))
    } else {
      this.setState({ error: 'please provide an email' })
    }
  }

  setNewPassword() {
    if ((this.state.password && this.state.passwordCheck)
        && (this.state.password === this.state.passwordCheck)) {
      axios.put(`${ROOT_URL}/api/users/resetPassword`,
        { resetCode: this.state.resetCode, password: this.state.password },
        { headers: { token: this.props.jwToken }
      })
      .then(() => {
        this.props.setLoginFormError('Your password has been reset')
        this.props.setForgotPasswordMode(false)
      })
      .catch(error => this.setState({ error: error.response.request._response }))
    } else {
      this.setState({ error: 'your passwords must match' })
    }
  }

  render() {
    return (
      <View style={ss.invisiContainer}>
        {this.state.codeSent
        ? <ResetPasswordPresenter
            error={this.state.error}
            resetCode={this.state.resetCode}
            setResetCode={this.setResetCode}
            password={this.state.password}
            setPassword={this.setPassword}
            referencePassword={this.referencePassword}
            focusPassword={this.focusPassword}
            referencePasswordCheck={this.referencePasswordCheck}
            focusPasswordCheck={this.focusPasswordCheck}
            setNewPassword={this.setNewPassword}
            passwordCheck={this.state.passwordCheck}
            setPasswordCheck={this.setPasswordCheck} />
        : <SendCodePresenter
            sendCode={this.sendCode}
            email={this.state.email}
            setEmail={this.setEmail}
            error={this.state.error}
            setForgotPasswordMode={this.props.setForgotPasswordMode} />
        }
      </View>
    )
  }
}

const mapState = state => ({
  jwToken: state.auth.jwToken
})

export default connect(mapState)(ForgotPasswordContainer)
