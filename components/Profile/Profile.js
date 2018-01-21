import React from 'react'
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { determineChoirTitle, determineChoirName } from './DetermineChoirFunc'
import styles from '../StyleSheet'
import { LinearGradient } from 'expo'

const Profile = ({ screenProps, navigation }) => (
  <View style={styles.invisiContainer}>
    <View style={styles.backgroundImageFrame}>
      <Image
        source={require('../../assets/images/beach.jpg')}
        style={styles.backgroundImage}
      />
    </View>
    <View style={styles.backgroundImageFrame}>
      <LinearGradient
        colors={['transparent', '#fff']}
        style={styles.flex1} />
    </View>
    <SafeAreaView style={styles.invisiContainer}>
      <View style={[styles.invisiContainer, styles.padding15]}>
        <View style={[styles.center, styles.titleBottomBorder]}>
          <Text style={styles.font24}>PROFILE</Text>
        </View>
        {screenProps.isLoggedIn
          ? <ScrollView>
              <View style={[styles.column, styles.fullWidth, styles.spaceAround, styles.addViewSpacing]}>
                { determineChoirTitle(screenProps.userTotalPrayers) }
                <TouchableOpacity
                  style={[styles.button, styles.halfWidth]}
                  onPress={() => navigation.navigate('ChoirRank', { userTotalPrayers: screenProps.userTotalPrayers })}>
                  { determineChoirName(screenProps.userTotalPrayers) }
                </TouchableOpacity>
              </View>
              <View style={styles.profileRow}>
                <Text style={styles.font16}>{`${screenProps.userEmail}`}</Text>
              </View>
              <View style={styles.profileRow}>
                <Text style={styles.font16}>{`Total prayers accepted: ${screenProps.userTotalPrayers}`}</Text>
              </View>
              <View style={styles.profileRow}>
                <Text style={styles.font16}>Consecutive Days Praying Placeholder</Text>
              </View>
              <View style={[styles.column, styles.fullWidth, styles.spaceAround, styles.addViewSpacing]}>
                <Text style={styles.font16}>Learn More About Ora:</Text>
                <TouchableOpacity
                  style={[styles.button, styles.halfWidth]}
                  onPress={() => navigation.navigate('About')}>
                  <Text style={styles.buttonText}>About</Text>
                </TouchableOpacity>
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
            </ScrollView>
          : <View style={[
              styles.flex1, styles.center, styles.addPadding]}>
              <Text style={styles.font16}>Signup or Login to view your profile</Text>
            </View>
        }
      </View>
    </SafeAreaView>
  </View>
)

export default Profile
