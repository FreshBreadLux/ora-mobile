import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

const Profile = ({ screenProps, navigation }) => (
  <View style={styles.whiteContainer}>
    {screenProps.isLoggedIn
      ? <View style={[styles.invisiContainer, styles.padding15]}>
          <View style={styles.profileRow}>
            <Text style={styles.font16}>{`${screenProps.userEmail}`}</Text>
          </View>
          <View style={styles.profileRow}>
            <Text style={styles.font16}>Reset Password Placeholder</Text>
          </View>
          <View style={styles.profileRow}>
            <Text style={styles.font16}>{`Total prayers accepted: ${screenProps.userTotalPrayers}`}</Text>
          </View>
          <View style={styles.profileRow}>
            <Text style={styles.font16}>Consecutive Days Praying Placeholder</Text>
          </View>
          <View style={styles.profileRow}>
            <View style={[styles.column, styles.fullWidth]}>
              <Text style={styles.font16}>Choir Logic Placeholder:</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ChoirRank', { userTotalPrayers: screenProps.userTotalPrayers })}>
                <Text style={styles.buttonText}>{`Choir Name Placeholder`}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flex1]}>
            <TouchableOpacity
              style={styles.button}
              onPress={screenProps.userLogout}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      : <View style={[styles.flex1, styles.center, styles.addPadding]}>
          <Text style={styles.font16}>Signup or Login to view your profile</Text>
        </View>
    }
  </View>
)

export default Profile
