import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class ManageMyPrayer extends React.Component {
  render() {
    return (
      <View>
        <Text>My Prayer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  singleprayer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
