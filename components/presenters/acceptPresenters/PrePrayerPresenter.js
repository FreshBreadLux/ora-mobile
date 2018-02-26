import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Animated, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../../../store'
import ss from '../../StyleSheet'
import { Ionicons } from '@expo/vector-icons'

const PrePrayerPresenter = ({ titleButtonFade, navigation, loadReflection, logUserOut, isAdmin }) => (
  <SafeAreaView style={[ss.invisiContainer]}>
    <Animated.View style={[ss.invisiContainer, ss.spaceAround, {opacity: titleButtonFade}]}>
      <Text style={ss.title}>ORA</Text>
      <TouchableOpacity
        style={[ss.button, ss.halfWidth]}
        onPress={loadReflection}>
        <Text style={[ss.buttonText]}>START PRAYING</Text>
      </TouchableOpacity>
    </Animated.View>
    <View style={[ss.addViewSpacing]}>
      {isAdmin
      ? <TouchableOpacity
        style={[ss.padding10, {alignSelf: 'flex-end'}]}
        onPress={async function(){
          await AsyncStorage.removeItem('oraAuth')
          logUserOut()
          await AsyncStorage.setItem('seenIntro', 'false')
        }}>
        <Ionicons
          name="ios-log-out"
          size={24}
          color="#fff" />
      </TouchableOpacity>
      : null
      }
      <TouchableOpacity
        style={[ss.padding10, {alignSelf: 'flex-end'}]}
        onPress={() => navigation.navigate('About')}>
        <Ionicons
          name="ios-help-circle-outline"
          size={24}
          color="#fff" />
      </TouchableOpacity>
    </View>
  </SafeAreaView>
)

const mapState = state => ({
  isAdmin: state.userInfo.isAdmin
})

const mapDispatch = dispatch => ({
  logUserOut() {
    dispatch(logout())
  }
})

export default connect(mapState, mapDispatch)(PrePrayerPresenter)
