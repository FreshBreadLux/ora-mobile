import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

const Profile = ({ screenProps, navigation }) => (
  <View style={styles.container}>
    <View style={[styles.cover, styles.center]}>
      <Text>Profile Placeholder</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('AngelRank', { userTotalPrayers: screenProps.userTotalPrayers })}>
        <Text>Link to Angel Rank Placeholder</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={screenProps.userLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default Profile
