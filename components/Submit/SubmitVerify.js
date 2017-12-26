import React from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import LoginForm from './LoginForm'
import SubmitForm from './SubmitForm'

export default class SubmitVerify extends React.Component {
  render() {
    if (!this.props.isLoggedIn) {
      return (
        <LoginForm
          handleNotification={this.props.handleNotification}
          verifyStorageKey={this.props.verifyStorageKey}
        />
      )
    }
    return (
      <SubmitForm userId={this.props.userId} />
    )
  }
}
