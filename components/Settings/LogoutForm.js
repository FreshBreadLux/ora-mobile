import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class LogoutForm extends React.Component {
  render() {
    console.log('LogoutForm props', this.props.screenProps.userLogout)
    return (
      <View style={styles.login}>
        <TouchableOpacity
          onPress={this.props.screenProps.userLogout}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
