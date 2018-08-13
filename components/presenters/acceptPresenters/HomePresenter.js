import React from 'react'
import { Text, SafeAreaView, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { KeyContainer } from '../../containers'
import { BackgroundImageContainer } from '../../presenters'
import ss from '../../StyleSheet'
import { Ionicons } from '@expo/vector-icons'

const HomePresenter = ({ adminReset, isAdmin, navigation }) => (
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
          onPress={adminReset}>
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

export default connect(mapState)(HomePresenter)
