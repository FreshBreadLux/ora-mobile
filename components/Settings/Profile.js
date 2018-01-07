import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.cover, styles.center]}>
          <Text>Profile Placeholder</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AngelRank')}>
            <Text>Link to AngelRank Placeholder</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
