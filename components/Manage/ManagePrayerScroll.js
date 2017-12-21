import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

export default class ManageMyPrayer extends React.Component {
  render() {
    const { prayers, navigateToMyPrayer } = this.props.screenProps
    if (!prayers) {
      return (
        <View style={styles.container}>
          <View style={[styles.cover, styles.center]}>
            <Text>Please login to manage your prayers</Text>
          </View>
        </View>
      )
    }
    return (
      <ScrollView>
      { prayers.map(prayer =>
        <TouchableOpacity
          key={prayer.id}
          onPress={() => navigateToMyPrayer(prayer)}>
          <Text>{prayer.subject}</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
    )
  }
}
