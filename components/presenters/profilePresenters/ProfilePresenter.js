import React from 'react'
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, AsyncStorage, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const ProfilePresenter = ({ navigation, userLogout, askCameraRollPermission, userInfo }) => (
  <View style={ss.whiteContainer}>
    <ScrollView>
      <View style={[ss.row, ss.spaceAround, ss.padding10, {backgroundColor: '#fff', borderBottomColor: '#ccc', borderBottomWidth: 1}]}>
        <View>
          <TouchableOpacity onPress={askCameraRollPermission}>
            <Image
              style={{height: 70, width: 70, borderRadius: 35, resizeMode: 'cover'}}
              source={require('../../../assets/images/bobby-headshot.jpg')} />
          </TouchableOpacity>
        </View>
        <View style={ss.center}>
          <Text>{userInfo.consecutiveDays}</Text>
          <Text>consecutive{'\n'}days</Text>
        </View>
        <View style={ss.center}>
          <Text>{userInfo.totalPrayers}</Text>
          <Text>submitted{'\n'}prayers</Text>
        </View>
      </View>
    </ScrollView>
  </View>
)

const mapState = state => ({
  userInfo: state.userInfo
})

export default connect(mapState)(ProfilePresenter)
