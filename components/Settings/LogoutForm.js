import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

export default class LogoutForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.coverCenter}>
          <TouchableOpacity
            onPress={this.props.screenProps.userLogout}
          >
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
