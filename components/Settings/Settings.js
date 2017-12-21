import React from 'react'
import { Text, View } from 'react-native'
import styles from '../StyleSheet'

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.cover, styles.center]}>
          <Text>New Settings</Text>
        </View>
      </View>
    )
  }
}
