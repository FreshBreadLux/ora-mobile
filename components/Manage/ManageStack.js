import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import ManageMyPrayer from './ManageMyPrayer'
import ManageMyFollow from './ManageMyFollow'
import ManagePrayerScroll from './ManagePrayerScroll'
import ManageFollowScroll from './ManageFollowScroll'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ManageTabNav = TabNavigator({
  ManagePrayerScroll: {
    screen: ManagePrayerScroll,
    navigationOptions: {
      title: 'Prayers',
      headerBackTitle: null,
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-paper-plane"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  ManageFollowScroll: {
    screen: ManageFollowScroll,
    navigationOptions: {
      title: 'Following',
      headerBackTitle: null,
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-bookmarks"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  }
}, {
  tabBarPosition: 'bottom',
})

const ManageStackNav = StackNavigator({
  Root: {
    screen: ManageTabNav,
  },
  MyPrayer: {
    screen: ManageMyPrayer,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.prayer.subject}`,
    })
  },
  MyFollow: {
    screen: ManageMyFollow,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.follow.subject}`,
    })
  },
})

const ManageStack = ({ prayers, follows, userId, fetchUserPrayers, fetchUserFollows }) => (
  <ManageStackNav screenProps={{
    prayers: prayers,
    follows: follows,
    userId: userId,
    fetchUserPrayers: fetchUserPrayers,
    fetchUserFollows: fetchUserFollows,
  }} />
)

export default ManageStack
