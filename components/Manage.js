import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Manage extends React.Component {
  render() {
    return (
      <View style={styles.manage}>
        <Text>New Manage</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  manage: {
    flex: 1,
    backgroundColor: 'blanchedalmond',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
