import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.about}>
        <Text>About</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  about: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
