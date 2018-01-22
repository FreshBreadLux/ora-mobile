import React from 'react'
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { determineChoirTitle, determineChoirName } from './DetermineChoirFunc'
import styles from '../StyleSheet'
import { LinearGradient } from 'expo'
import { Feather } from '@expo/vector-icons'

const Profile = ({ screenProps, navigation }) => (
  <View style={styles.invisiContainer}>
    <View style={styles.backgroundImageFrame}>
      <Image
        source={require('../../assets/images/Rome-Profile.jpg')}
        style={styles.backgroundImage}
      />
    </View>
    {screenProps.isLoggedIn
    ? <SafeAreaView style={styles.invisiContainer}>
        <View style={styles.proflileHeader}>
          <Text style={styles.font24}>PROFILE</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <LinearGradient
            colors={['transparent', '#fff']}
            start={[0.5, 0.2]}
            end={[0.5, 0.8]}
            style={styles.flex1}>
            <View style={styles.padding15}>
              <View style={[styles.addViewSpacing, styles.fullWidth, styles.center]}>
                { determineChoirName(screenProps.userTotalPrayers) }
                <TouchableOpacity
                  style={[styles.button, styles.halfWidth]}
                  onPress={() => navigation.navigate('ChoirRank', { userTotalPrayers: screenProps.userTotalPrayers })}>
                  { determineChoirTitle(screenProps.userTotalPrayers) }
                </TouchableOpacity>
              </View>
              <View style={styles.addLargeViewSpacing}>
                <Text style={[styles.font20, styles.whiteText]}>{`${screenProps.userEmail}`}</Text>
              </View>
              <View style={styles.consecutiveDays}>
                <Text style={styles.font20}>Consecutive{'\n'}Days Praying</Text>
                <Text style={styles.font20}>Placeholder</Text>
              </View>
              <View style={styles.addLargeViewSpacing}>
                <Text style={[styles.font20, styles.whiteText]}>Prayers{'\n'}Accepted</Text>
                <Text style={styles.choirName}>{screenProps.userTotalPrayers}</Text>
              </View>
              <View style={[styles.addViewSpacing]}>
                <TouchableOpacity
                  style={[styles.button, styles.fullWidth, styles.row, styles.spaceBetween]}
                  onPress={() => navigation.navigate('About')}>
                  <Text style={styles.buttonText}>learn more about Ora</Text>
                  <Feather
                    name="chevron-right"
                    size={26} />
                </TouchableOpacity>
              </View>
              <View style={[styles.addViewSpacing]}>
                <TouchableOpacity
                  style={[styles.button, styles.fullWidth, styles.row, styles.spaceBetween]}
                  onPress={() => navigation.navigate('Donate')}>
                  <Text style={styles.buttonText}>donate</Text>
                  <Feather
                    name="chevron-right"
                    size={26} />
                </TouchableOpacity>
              </View>
              <View style={[styles.addMedViewSpacing, styles.darkBottomBorder]}>
                <Text style={[styles.font20]}>Image Themes (pending feature)</Text>
              </View>
              <View style={[styles.addMedViewSpacing, styles.row, styles.spaceBetween]}>
                <View style={styles.center}>
                  <View style={styles.thumbnail}>
                  <Image
                    style={styles.backgroundImage}
                    source={require('../../assets/images/Rome.jpg')} />
                  </View>
                  <Text style={[styles.font14, styles.padding10]}>Rome</Text>
                </View>
                <View style={styles.center}>
                  <View style={styles.thumbnail}>
                  <Image
                    style={styles.backgroundImage}
                    source={require('../../assets/images/Adoration.jpg')} />
                  </View>
                  <Text style={[styles.font14, styles.padding10]}>Adoration</Text>
                </View>
                <View style={styles.center}>
                  <View style={styles.thumbnail}>
                  <Image
                    style={styles.backgroundImage}
                    source={require('../../assets/images/Paintings.jpg')} />
                  </View>
                  <Text style={[styles.font14, styles.padding10]}>Paintings</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
          <View style={[styles.editHeight, styles.center]}>
            <Text style={[styles.font16, styles.blackTextShadow, styles.whiteText, styles.centerText, styles.threeQuarterWidth]}>The smoke of the incense along with the prayers of the holy ones went up before God from the hand of the angel.{'\n'}-{'\n'}</Text>
            <Text style={[styles.font16, styles.blackTextShadow, styles.whiteText]}>Revelation 8:4</Text>
          </View>
          <View style={[styles.addLargeViewSpacing, styles.whiteContainer, styles.center]}>
            <TouchableOpacity
              style={[styles.halfWidth, styles.blackButton]}
              onPress={screenProps.userLogout}>
              <Text style={[styles.buttonText, styles.whiteText]}>logout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    : <SafeAreaView style={styles.invisiContainer}>
        <View style={[
          styles.flex1, styles.center, styles.padding15]}>
          <TouchableOpacity
            style={[styles.button, styles.fullWidth]}
            onPress={() => navigation.navigate('Submit')}>
              <Text style={[styles.buttonText, styles.centerText]}>sign up or login to view your profile</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    }
  </View>
)

export default Profile
