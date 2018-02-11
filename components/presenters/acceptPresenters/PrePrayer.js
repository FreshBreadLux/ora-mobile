import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../../../store'
import ss from '../../StyleSheet'
import { Feather } from '@expo/vector-icons'

const PrePrayer = ({ navigation, loadReflection, logUserOut }) => (
  <SafeAreaView style={[ss.invisiContainer]}>
    <View style={[ss.invisiContainer, ss.spaceAround]}>
      <Text style={ss.title}>ORA</Text>
      <TouchableOpacity
        style={[ss.button, ss.halfWidth]}
        onPress={loadReflection}>
        <Text style={[ss.buttonText]}>start praying</Text>
      </TouchableOpacity>
    </View>
    <View style={[ss.addViewSpacing]}>
      <TouchableOpacity
        style={[ss.padding10, {alignSelf: 'flex-end'}]}
        onPress={async function(){
          await AsyncStorage.removeItem('oraAuth')
          logUserOut()
          await AsyncStorage.setItem('seenIntro', 'false')
        }}>
        <Feather
          name="log-out"
          size={24}
          color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[ss.padding10, {alignSelf: 'flex-end'}]}
        onPress={() => navigation.navigate('About')}>
        <Feather
          name="help-circle"
          size={24}
          color="#fff" />
      </TouchableOpacity>
    </View>
  </SafeAreaView>
)

const mapDispatch = dispatch => ({
  logUserOut() {
    dispatch(logout())
  }
})

export default connect(null, mapDispatch)(PrePrayer)
