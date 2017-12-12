import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.settings}>
        <Text>New Settings</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  settings: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
