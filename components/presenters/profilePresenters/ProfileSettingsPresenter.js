import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text, TouchableOpacity, AsyncStorage, Alert } from 'react-native'
import { logout } from '../../../store'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const ProfileSettingsPresenter = ({ navigation, logUserOut }) => (
  <View style={ss.invisiContainer}>
    <ScrollView>
      <TouchableOpacity>
        <View style={[ss.row, ss.spaceBetween, ss.padding10, ss.whiteBackground, ss.bottomBorder]}>
          <Text style={ss.subHeader}>Edit Profile</Text>
          <Ionicons
            name="ios-arrow-forward"
            size={26}
            style={{color: '#000'}} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={[ss.row, ss.spaceBetween, ss.padding10, ss.whiteBackground, ss.bottomBorder]}>
          <Text style={ss.subHeader}>Notifications</Text>
          <Ionicons
            name="ios-arrow-forward"
            size={26}
            style={{color: '#000'}} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Reminders')}>
        <View style={[ss.row, ss.spaceBetween, ss.padding10, ss.whiteBackground, ss.bottomBorder]}>
          <Text style={ss.subHeader}>Reminders</Text>
          <Ionicons
            name="ios-arrow-forward"
            size={26}
            style={{color: '#000'}} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={[ss.row, ss.spaceBetween, ss.padding10, ss.whiteBackground, ss.bottomBorder]}>
          <Text style={ss.subHeader}>Themes</Text>
          <Ionicons
            name="ios-arrow-forward"
            size={26}
            style={{color: '#000'}} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Testimony')}>
        <View style={[ss.row, ss.spaceBetween, ss.padding10, ss.whiteBackground, ss.bottomBorder]}>
          <Text style={ss.subHeader}>Testimony</Text>
          <Ionicons
            name="ios-arrow-forward"
            size={26}
            style={{color: '#000'}} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
        <View style={[ss.row, ss.spaceBetween, ss.padding10, ss.whiteBackground, ss.bottomBorder]}>
          <Text style={ss.subHeader}>FAQ</Text>
          <Ionicons
            name="ios-arrow-forward"
            size={26}
            style={{color: '#000'}} />
        </View>
      </TouchableOpacity>
      <View style={[ss.center, ss.addLargeViewSpacing]}>
        <TouchableOpacity
          style={ss.blueButton}
          onPress={async () => {
            try {
              await AsyncStorage.removeItem('oraAuth_v1.1.0')
              logUserOut()
              Alert.alert('Logout Successful')
            } catch (error) {
              console.error('AsyncStorage error: ' + error.message)
            }
          }}>
          <Text style={[ss.buttonText, ss.whiteText]}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
)

const mapDispatch = dispatch => ({
  logUserOut: () => dispatch(logout()),
})

export default connect(null, mapDispatch)(ProfileSettingsPresenter)
