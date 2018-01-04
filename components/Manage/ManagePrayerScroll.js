import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

export default class ManageMyPrayer extends React.Component {
  render() {
    const { prayers } = this.props.screenProps
    const { navigate } = this.props.navigation
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
      <View style={styles.addPadding}>
      <ScrollView>
      { prayers.map(prayer =>
        <TouchableOpacity
          key={prayer.id}
          onPress={() => navigate('MyPrayer', { prayer })}>
          <View style={[styles.fullWidth, styles.listBottomBorder]}>
            <Text style={[styles.buttonText, { color: '#000' }]}>{prayer.subject}</Text>
            <Text style={styles.body} numberOfLines={2}>{prayer.body}</Text>
          </View>
        </TouchableOpacity>
      )}
    </ScrollView>
    </View>
    )
  }
}
