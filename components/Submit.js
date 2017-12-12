import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Submit extends React.Component {
  render() {
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
