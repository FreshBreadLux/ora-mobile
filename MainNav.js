import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Settings, Accept, Submit, ManagePrayerScroll, ManageFollowScroll, ManageMyPrayer, ManageMyFollow, Profile, About, Donate, ChoirRank } from './components'
import { Feather, Ionicons } from '@expo/vector-icons'

const MainTabNav = TabNavigator({
  ManageFollowScroll: {
    screen: ManageFollowScroll,
    navigationOptions: {
      title: 'Following',
      headerBackTitle: null,
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="md-heart"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  ManagePrayerScroll: {
    screen: ManagePrayerScroll,
    navigationOptions: {
      title: 'Prayers',
      headerBackTitle: null,
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-book"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Accept: {
    screen: Accept,
    navigationOptions: {
      title: 'Home',
      headerBackTitle: null,
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-home"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Submit: {
    screen: Submit,
    navigationOptions: {
      title: 'New Prayer',
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
}, {
  swipeEnabled: true,
  initialRouteName: 'Accept',
  tabBarOptions: {
    showLabel: false,
    inactiveTintColor: '#000',
    style: {
      backgroundColor: '#fff',
    }
  },
})

const MainStackNav = StackNavigator({
  Root: {
    screen: MainTabNav,
    navigationOptions: {
      header: null,
    },
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
  ChoirRank: {
    screen: ChoirRank,
    navigationOptions: {
      title: 'The Nine Choirs',
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      title: 'About',
    },
  },
  Donate: {
    screen: Donate,
    navigationOptions: {
      title: 'Donate',
    },
  },
})

const MainNav = ({ screenProps, navigation }) => (
  <MainStackNav
    screenProps={screenProps}
    navigation={navigation}
  />
)

export default MainNav
