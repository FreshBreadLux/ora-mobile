import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styles from '../StyleSheet'

export default class ManageMyPrayer extends React.Component {
  render() {
    const prayer = this.props.navigation.state.params.prayer
    return (
      <View>
        <Text>{`${prayer.subject}`}</Text>
        <Text>{`${prayer.body}`}</Text>
      </View>
    )
  }
}
