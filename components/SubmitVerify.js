import React from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import LoginForm from './LoginForm.js'

export default class SubmitVerify extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedin: false,
      userId: null,
    }
    this.verifyStorageKey = this.verifyStorageKey.bind(this)
  }

  componentDidMount() {
    this.verifyStorageKey()
  }

  async verifyStorageKey() {
    const userId = await AsyncStorage.getItem('userId')
    if (userId) this.setState({isLoggedin: true, userId: userId})
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
