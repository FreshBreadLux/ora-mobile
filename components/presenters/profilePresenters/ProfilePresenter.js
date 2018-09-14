import React from 'react'
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, AsyncStorage, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'
import { FollowScrollPresenter } from '../../presenters'
import { PrayerScrollPresenter } from '../prayerPresenters';
import SavedRewardsListPresenter from './SavedRewardsListPresenter';

/*
  ProfilePresenter assigns a react component to the variable profileImage before rendering.
  There are three situations: there's an imageUrl on userInfo, there's not an imageUrl but
  there's a local backup, or there's neither, in which case the bundled default image is used.
*/
const ProfilePresenter = ({ navigation, userLogout, askCameraRollPermission, userInfo, activeScrollView, setActiveScrollView }) => {

  let profileImage
  const style = {height: 70, width: 70, borderRadius: 35, resizeMode: 'cover'}
  if (userInfo.imageUrl) {
    profileImage = <Image style={style} source={{ uri: userInfo.imageUrl }} />
  } else {
    profileImage = <Image style={style} source={require('../../../assets/images/default-profile-image.png')} />
  }

  let currentScrollView
  if (activeScrollView === 'follows') {
    currentScrollView = <FollowScrollPresenter />
  } else if (activeScrollView === 'prayers') {
    currentScrollView = <PrayerScrollPresenter />
  } else if (activeScrollView === 'rewards') {
    currentScrollView = <SavedRewardsListPresenter />
  }

  return (
    <View style={ss.whiteContainer}>
      <ScrollView>
        <View style={[ss.row, ss.spaceAround, ss.padding15, {backgroundColor: '#fff', borderBottomColor: '#ccc', borderBottomWidth: 1}]}>
          <View>
            <TouchableOpacity onPress={askCameraRollPermission}>
              {profileImage}
            </TouchableOpacity>
          </View>
          <View style={ss.center}>
            <Text>{userInfo.consecutiveDays}</Text>
            <Text>consecutive{'\n'}days 🔥</Text>
          </View>
          <View style={ss.center}>
            <Text>{userInfo.totalPrayers}</Text>
            <Text>submitted{'\n'}prayers</Text>
          </View>
        </View>
        <View style={[ss.row, ss.spaceAround, {backgroundColor: '#fff', borderBottomColor: '#ccc', borderBottomWidth: 1}]}>
          <TouchableOpacity style={[ss.flex1, ss.center, ss.padding10]} onPress={() => setActiveScrollView('follows')}>
            <Ionicons
              name="md-heart-outline"
              size={28}
              style={activeScrollView === 'follows' ? {color: '#FF4081'} : {color: '#000'}} />
          </TouchableOpacity>
          <TouchableOpacity style={[ss.flex1, ss.center, ss.padding10]} onPress={() => setActiveScrollView('prayers')}>
            <Ionicons
              name="md-book"
              size={28}
              style={activeScrollView === 'prayers' ? {color: '#4577EE'} : {color: '#000'}} />
          </TouchableOpacity>
          <TouchableOpacity style={[ss.flex1, ss.center, ss.padding10]} onPress={() => setActiveScrollView('rewards')}>
            <Image
              style={{height: 28, width: 32, resizeMode: 'contain'}}
              source={(activeScrollView === 'rewards')
              ? require('../../../assets/images/Key/keys-icon-blue.png')
              : require('../../../assets/images/Key/keys-icon-black.png')} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const mapState = state => ({
  userInfo: state.userInfo
})

export default connect(mapState)(ProfilePresenter)
