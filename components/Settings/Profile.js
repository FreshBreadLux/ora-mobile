import React from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import styles from '../StyleSheet'

const Profile = ({ screenProps, navigation }) => (
  <SafeAreaView style={styles.whiteContainer}>
    <ScrollView>
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
            <View style={styles.profileRow}>
              <View style={[styles.column, styles.fullWidth]}>
                <Text style={styles.font16}>Learn More About Ora:</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('About')}>
                  <Text style={styles.buttonText}>{`About`}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.profileRow}>
              <View style={[styles.column, styles.fullWidth]}>
                <Text style={styles.font16}>Join the Ora team:</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('Donate')}>
                  <Text style={styles.buttonText}>{`Donate`}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.flex1]}>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={screenProps.userLogout}>
                <Text style={styles.font16}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        : <View style={[styles.flex1, styles.center, styles.addPadding]}>
            <Text style={styles.font16}>Signup or Login to view your profile</Text>
          </View>
      }
      </ScrollView>
  </SafeAreaView>
)

export default Profile
