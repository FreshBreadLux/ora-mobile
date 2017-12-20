import React from 'react'
import { Text, View } from 'react-native'
import styles from '../StyleSheet'

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.coverCenter}>
          <Text>About</Text>
        </View>
      </View>
    )
  }
}
