import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Accept extends React.Component {
  render() {
    return (
      <View style={styles.accept}>
        <Text>New Accept</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  accept: {
    flex: 1,
    backgroundColor: 'aquamarine',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
