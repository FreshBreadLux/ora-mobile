import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

export default class LogoutForm extends React.Component {
  render() {
    return (
      <View style={[styles.container, {backgroundColor: '#fff'}]}>
        <View style={[styles.cover, styles.center]}>
          <Text>Donate Placeholder</Text>
        </View>
      </View>
    )
  }
}
