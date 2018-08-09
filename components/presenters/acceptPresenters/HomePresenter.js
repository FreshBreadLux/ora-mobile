import React from 'react'
import { Text, SafeAreaView, TouchableOpacity, AsyncStorage, View, Animated, Image } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../../../store'
import { KeyContainer } from '../../containers'
import { BackgroundImageContainer } from '../../presenters'
import ss from '../../StyleSheet'
import { Ionicons, Entypo } from '@expo/vector-icons'

const HomePresenter = ({ logUserOut, isAdmin, navigation }) => (
  <View style={ss.invisiContainer}>
    <BackgroundImageContainer componentName="Accept" />
    <SafeAreaView style={[ss.invisiContainer]}>
      <View style={[ss.flex3, ss.center]}>
        <Text style={[ss.title]}>ORA</Text>
      </View>
      <View style={[ss.flex2, ss.center]}>
        <TouchableOpacity
          style={[ss.button, ss.halfWidth]}
          onPress={() => navigation.navigate('AcceptContainer')}>
          <Text style={[ss.buttonText]}>START PRAYING</Text>
        </TouchableOpacity>
      </View>
      <View style={[ss.flex2, ss.center]}>
        <KeyContainer navigation={navigation} />
      </View>
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
  isAdmin: state.userInfo.isAdmin,
  rewardUnlocked: state.userInfo.rewardUnlocked
})

const mapDispatch = dispatch => ({
  logUserOut: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(HomePresenter)

/*
<Animated.View style={{transform: [{translateX: lockXPosition.interpolate({inputRange: [0, 0.33, 0.66, 1], outputRange: [0, 6, -6, 0]})}]}}>
            <TouchableOpacity
              onPress={shakeLock}
              activeOpacity={0.8}>
              <Entypo
                name="lock"
                size={30}
                color="#000" />
            </TouchableOpacity>
          </Animated.View>
*/
