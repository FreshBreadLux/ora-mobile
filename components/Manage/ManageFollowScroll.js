import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

export default class ManageMyFollow extends React.Component {
  render() {
    const { follows, navigateToMyFollow } = this.props.screenProps
    if (!follows) {
      return (
        <View style={styles.container}>
          <View style={[styles.cover, styles.center]}>
            <Text>Please login to manage your follows</Text>
          </View>
        </View>
      )
    }
    return (
      <ScrollView>
      { follows.map(follow =>
        <TouchableOpacity
          key={follow.id}
          onPress={() => navigateToMyFollow(follow)}>
          <Text>{follow.subject}</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
    )
  }
}
