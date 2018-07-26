import React from 'react'
import { Text, SafeAreaView, TouchableOpacity, AsyncStorage, View } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../../../store'
import { BackgroundImageContainer } from '../../presenters'
import ss from '../../StyleSheet'
import { Ionicons } from '@expo/vector-icons'

const HomePresenter = ({ logUserOut, isAdmin, navigation }) => (
  <View style={ss.invisiContainer}>
    <BackgroundImageContainer componentName="Accept" />
    <SafeAreaView style={[ss.invisiContainer]}>
      <View style={[ss.invisiContainer, ss.spaceAround]}>
        <Text style={[ss.title, {bottom: 30}]}>ORA</Text>
        <TouchableOpacity
          style={[ss.button, ss.halfWidth]}
          onPress={() => navigation.navigate('AcceptContainer')}>
          <Text style={[ss.buttonText]}>START PRAYING</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={ss.marginTop}
        onPress={() => navigation.navigate('RewardContainer')}>
        <Text style={[ss.buttonText]}>REWARD</Text>
      </TouchableOpacity>
      {isAdmin
      ? <TouchableOpacity
          style={[ss.padding10, {alignSelf: 'flex-end'}]}
          onPress={async function(){
            await AsyncStorage.removeItem('oraAuth_v1.1.0')
            logUserOut()
            await AsyncStorage.setItem('seenOraIntro_v1.1.0', 'false')
          }}>
          <Ionicons
            name="ios-log-out"
            size={24}
            color="#fff" />
        </TouchableOpacity>
      : null
      }
    </SafeAreaView>
  </View>
)

const mapState = state => ({
  isAdmin: state.userInfo.isAdmin
})

const mapDispatch = dispatch => ({
  logUserOut: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(HomePresenter)
