import React from 'react'
import { Text, SafeAreaView, TouchableOpacity, Animated, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../../../store'
import ss from '../../StyleSheet'
import { Ionicons } from '@expo/vector-icons'

const PrePrayerPresenter = ({ titleButtonFade, loadReflection, logUserOut, isAdmin }) => (
  <SafeAreaView style={[ss.invisiContainer]}>
    <Animated.View style={[ss.invisiContainer, ss.spaceAround, {opacity: titleButtonFade}]}>
      <Text style={[ss.title, {bottom: 30}]}>ORA</Text>
      <TouchableOpacity
        style={[ss.button, ss.halfWidth]}
        onPress={loadReflection}>
        <Text style={[ss.buttonText]}>START PRAYING</Text>
      </TouchableOpacity>
    </Animated.View>
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
  </SafeAreaView>
)

const mapState = state => ({
  isAdmin: state.userInfo.isAdmin
})

const mapDispatch = dispatch => ({
  logUserOut: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(PrePrayerPresenter)
