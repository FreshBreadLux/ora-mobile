import React from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import LoginForm from './LoginForm'
import SubmitForm from './SubmitForm'

export default class SubmitVerify extends React.Component {
  render() {
    console.log('submitverify userId: ',this.props.userId)
    if (!this.props.isLoggedIn) {
      return (
        <LoginForm verifyStorageKey={this.props.verifyStorageKey} />
      )
    }
    return (
      <SubmitForm userId={this.props.userId} />
    )
  }
}
