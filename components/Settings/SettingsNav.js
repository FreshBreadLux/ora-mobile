import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Profile from './Profile'
import About from './About'
import Donate from './Donate'
import AngelRank from './AngelRank'
import Ionicons from 'react-native-vector-icons/Ionicons'

const SettingsTab = TabNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
      headerBackTitle: null,
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-person"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      title: 'About',
      headerBackTitle: null,
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-information-circle-outline"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Donate: {
    screen: Donate,
    navigationOptions: {
      title: 'Donate',
      headerBackTitle: null,
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-heart"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
}, {
  tabBarPosition: 'bottom'
})

const SettingsStack = StackNavigator({
  Root: {
    screen: SettingsTab,
  },
  AngelRank: {
    screen: AngelRank,
    navigationOptions: {
      title: 'Angel Rank',
    }
  }
})

const SettingsNav = ({ isLoggedIn, userLogout, userEmail, userTotalPrayers }) => (
  <SettingsStack screenProps={{
    isLoggedIn,
    userLogout,
    userEmail,
    userTotalPrayers
  }} />
)

export default SettingsNav
