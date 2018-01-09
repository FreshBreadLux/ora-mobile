import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

const Profile = ({ screenProps, navigation }) => (
  <View style={[styles.container, {backgroundColor: '#fff'}]}>
    {screenProps.isLoggedIn
      ? <View style={[styles.cover, styles.addPadding, { justifyContent: 'flex-start' }]}>
          <View style={styles.profileRow}>
            <Text>{`${screenProps.userEmail}`}</Text>
          </View>
          <View style={styles.profileRow}>
            <Text>Reset Password Placeholder</Text>
          </View>
          <View style={styles.profileRow}>
            <Text>{`Total prayers accepted: ${screenProps.userTotalPrayers}`}</Text>
          </View>
          <View style={styles.profileRow}>
            <Text>Consecutive Days Praying Placeholder</Text>
          </View>
          <View style={styles.profileRow}>
            <View style={[styles.column, styles.fullWidth]}>
              <Text>Choir Logic Placeholder:</Text>
              <TouchableOpacity
                style={[styles.modalContent, {backgroundColor: 'rgb(69, 119, 238)'}]}
                onPress={() => navigation.navigate('AngelRank', { userTotalPrayers: screenProps.userTotalPrayers })}>
                <Text style={{color: '#fff'}}>{`Choir Name Placeholder`}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flex1]}>
            <TouchableOpacity
              style={[styles.modalContent, {backgroundColor: 'rgb(69, 119, 238)'}]}
              onPress={screenProps.userLogout}>
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      : <View style={[styles.center, styles.addPadding]}>
          <Text>Signup or Login to view your profile</Text>
        </View>
    }
  </View>
)

export default Profile
