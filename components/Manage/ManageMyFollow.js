import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class ManageMyPrayer extends React.Component {
  render() {
    const follow = this.props.navigation.state.params.follow
    return (
      <View>
        <Text>{`${follow.subject}`}</Text>
        <Text>{`${follow.body}`}</Text>
      </View>
    )
  }
}
