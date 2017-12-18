import React from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import LoginForm from './LoginForm.js'

export default class SubmitVerify extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedin: false,
      userId: null,
      jwTtoken: null,
    }
    this.verifyStorageKey = this.verifyStorageKey.bind(this)
  }

  componentDidMount() {
    this.verifyStorageKey()
  }

  async verifyStorageKey() {
    const payload = await AsyncStorage.getItem('payload')
    if (payload) this.setState({
      isLoggedin: true,
      userId: payload.userId,
      jwToken: payload.jwToken,
    })
  }

  render() {
    if (!this.state.isLoggedin) {
      return (
        <LoginForm verifyStorageKey={this.verifyStorageKey} />
      )
    }
    return (
      <View style={styles.submit}>
        <Text>New Submit</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  submit: {
    flex: 1,
    backgroundColor: 'bisque',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
