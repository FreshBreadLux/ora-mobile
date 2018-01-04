import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

export default class ManageMyFollow extends React.Component {
  render() {
    const { follows } = this.props.screenProps
    const { navigate } = this.props.navigation
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
      <View style={styles.addPadding}>
        <ScrollView>
        { follows.map(follow =>
          <TouchableOpacity
            key={follow.id}
            onPress={() => navigate('MyFollow', { follow })}>
            <View style={[styles.fullWidth, styles.listBottomBorder]}>
              <Text style={[styles.buttonText, { color: '#000' }]}>{follow.subject}</Text>
              <Text style={styles.body} numberOfLines={2}>{follow.body}</Text>
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
    )
  }
}
