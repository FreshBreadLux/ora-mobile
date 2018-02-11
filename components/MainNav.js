import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Submit, Profile, About, Donate, ChoirRank, ManageAlarms } from './index'
import { AcceptContainer, PrayerContainer, FollowContainer } from './containers'
import { FollowScrollPresenter, PrayerScrollPresenter } from './presenters'
import { Ionicons } from '@expo/vector-icons'

const MainTabNav = TabNavigator({
  FollowScroll: {
    screen: FollowScrollPresenter,
    navigationOptions: {
      title: 'Follows',
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
  PrayerScroll: {
    screen: PrayerScrollPresenter,
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
    screen: AcceptContainer,
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
  Prayer: {
    screen: PrayerContainer,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.prayer.subject}`,
    })
  },
  Follow: {
    screen: FollowContainer,
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
  Donate: {
    screen: Donate,
    navigationOptions: {
      title: 'Donate',
    },
  },
  ManageAlarms: {
    screen: ManageAlarms,
    navigationOptions: {
      title: 'Alarms',
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      title: 'About',
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
