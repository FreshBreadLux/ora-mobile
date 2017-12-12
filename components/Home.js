import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.home}>
        <Text>New Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
