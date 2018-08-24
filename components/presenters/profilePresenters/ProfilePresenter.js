import React from 'react'
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, AsyncStorage, Platform } from 'react-native'
import { connect } from 'react-redux'
import { determineChoirTitle, determineChoirName } from '../../utils'
import { LinearGradient } from 'expo'
import { Feather, Ionicons } from '@expo/vector-icons'
import { BackgroundImageContainer } from '../'
import { updateUserTheme } from '../../../store'
import ss from '../../StyleSheet'

const ProfilePresenter = ({ navigation, userLogout, userInfo, dispatchUpdateUserTheme }) => (
  <View style={ss.invisiContainer}>
    <BackgroundImageContainer componentName="Profile" />
    <ScrollView
      showsVerticalScrollIndicator={false}>
      <SafeAreaView style={ss.invisiContainer}>
        <LinearGradient
          colors={['transparent', '#fff']}
          start={[0.5, 0.25]}
          end={[0.5, 0.65]}
          style={ss.flex1}>
          <View style={Platform.OS === 'ios' ? ss.padding15 : ss.androidPadding}>
            <View style={ss.proflileHeader}>
              <Text style={ss.header}>PROFILE</Text>
            </View>
            <View style={ss.addLargeViewSpacing}>
              <Text style={[ss.subHeader]}>
                {userInfo.firstName
                ? `${userInfo.firstName} ${userInfo.lastName}`
                : `${userInfo.email}`
                }
              </Text>
            </View>
            <View style={ss.consecutiveDays}>
              <Text style={ss.subHeader}>Consecutive{'\n'}Days Praying</Text>
              <Text style={ss.consecutiveNumber}>{userInfo.consecutiveDays}</Text>
            </View>
            <View style={ss.addLargeViewSpacing}>
              <Text style={[ss.subHeader, ss.whiteText]}>Prayers{'\n'}Accepted</Text>
              <Text style={ss.choirName}>{userInfo.totalPrayers}</Text>
            </View>
            <View style={[ss.row, ss.addViewSpacing, ss.fullWidth, ss.spaceBetween, ss.marginTop20]}>
              <TouchableOpacity
                style={[ss.newWhiteButton, {width: '48%', borderColor: '#fff'}]}
                onPress={() => navigation.navigate('Testimony')}>
                <Text style={ss.buttonText}>TESTIMONY</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[ss.newWhiteButton, {width: '48%', borderColor: '#fff'}]}
                onPress={() => navigation.navigate('SavedRewardsList')}>
                <Text style={ss.buttonText}>REWARDS</Text>
              </TouchableOpacity>
            </View>
            <View style={[ss.row, ss.addViewSpacing, ss.fullWidth, ss.spaceBetween, ss.marginBottom30]}>
              <TouchableOpacity
                style={[ss.newWhiteButton, {width: '48%', borderColor: '#fff'}]}
                onPress={() => navigation.navigate('Alarms')}>
                <Text style={ss.buttonText}>REMINDERS</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[ss.newWhiteButton, {width: '48%', borderColor: '#fff'}]}
                onPress={() => navigation.navigate('FAQ')}>
                <Text style={ss.buttonText}>FAQ</Text>
              </TouchableOpacity>
            </View>
            <View style={[ss.addMedViewSpacing, ss.darkBottomBorder]}>
              <Text style={[ss.subHeader]}>Themes</Text>
            </View>
            <View style={[ss.addMedViewSpacing, ss.spaceBetween]}>
              <View style={[ss.center, ss.fullWidth, ss.paddingBottom20]}>
                <TouchableOpacity
                  style={ss.fullWidth}
                  onPress={() => {
                    AsyncStorage.setItem('oraTheme_v1.1.0', 'Rome')
                    dispatchUpdateUserTheme(userInfo.id, 'Rome')
                  }}>
                  <View style={ss.thumbnail}>
                    <Image
                      style={ss.backgroundImage}
                      source={require('../../../assets/images/Rome/Accept.jpg')} />
                  </View>
                </TouchableOpacity>
                <Text style={[ss.subBody, ss.padding10]}>ROME</Text>
              </View>
              <View style={[ss.center, ss.fullWidth]}>
                <TouchableOpacity
                  style={ss.fullWidth}
                  onPress={() => {
                    AsyncStorage.setItem('oraTheme_v1.1.0', 'Mountains')
                    dispatchUpdateUserTheme(userInfo.id, 'Mountains')
                  }}>
                  <View style={ss.thumbnail}>
                    <Image
                      style={ss.backgroundImage}
                      source={require('../../../assets/images/Mountains/Accept.jpg')} />
                  </View>
                </TouchableOpacity>
                <Text style={[ss.subBody, ss.padding10]}>MOUNTAINS</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
        <View style={[ss.editHeight, ss.center]}>
          <Text style={[ss.body, ss.blackTextShadow, ss.whiteText, ss.centerText, ss.threeQuartersWidth]}>The smoke of the incense along with the prayers of the holy ones went up before God from the hand of the Angel.</Text>
          <Text style={[ss.body, ss.blackTextShadow, ss.whiteText]}>- Revelation 8:4</Text>
        </View>
        <View style={[ss.addLargeViewSpacing, ss.whiteContainer, ss.center]}>
          <TouchableOpacity
            onPress={userLogout}>
            <View style={ss.row}>
              <Ionicons
                name="ios-log-out"
                size={18}
                color="#555" />
              <Text style={[ss.subBody, ss.greyText, ss.paddingLeft7]}>LOG OUT</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  </View>
)

const mapState = state => ({
  userInfo: state.userInfo
})

const mapDispatch = dispatch => ({
  dispatchUpdateUserTheme: (userId, theme) => dispatch(updateUserTheme(userId, theme))
})

export default connect(mapState, mapDispatch)(ProfilePresenter)

/*
<View style={[ss.addViewSpacing, ss.fullWidth, ss.center]}>
  <TouchableOpacity
    style={[ss.button, ss.threeQuartersWidth, ss.row, ss.spaceBetween]}
    onPress={() => navigation.navigate('ShareOra')}>
    <Text style={ss.buttonText}>Share Ora</Text>
    <Feather
      name="chevron-right"
      size={26} />
  </TouchableOpacity>
</View>
*/
