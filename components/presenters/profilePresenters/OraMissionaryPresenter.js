import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const OraMissionaryPresenter = ({ onShareLinkPress, userInfo }) => (
  <SafeAreaView style={ss.whiteContainer}>
    <View style={[ss.whiteContainer, ss.padding15]}>
      <View style={[ss.addMedViewSpacing, ss.topBorder]}>
        <Text style={ss.body}>
          {`Hi ${userInfo.firstName}!
          ${'\n\n'}
          Thank you for your help promoting Ora! By using your unique link below to share the app, you'll earn points that go towards Ora gear and rewards.`}</Text>
        <View style={[ss.center, ss.addMedViewSpacing]}>
          <TouchableOpacity
            onPress={onShareLinkPress}>
            <View style={[ss.row, ss.padding4]}>
              <Text style={[ss.subBody, ss.darkBlueText, ss.paddingRight7]}>SHARE ORA</Text>
              <Ionicons
                name="ios-arrow-forward"
                size={18}
                color="#1e3799" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </SafeAreaView>
)

const mapState = state => ({
  userInfo: state.userInfo
})

export default connect(mapState)(OraMissionaryPresenter)
