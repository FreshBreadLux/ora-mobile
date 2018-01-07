import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

const Profile = () => (
  <View style={styles.container}>
    <View style={[styles.cover, styles.center]}>
      <Text>Profile Placeholder</Text>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('AngelRank')}>
        <Text>Link to Angel Rank Placeholder</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={this.props.screenProps.userLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default Profile
