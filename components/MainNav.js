import React from 'react'
import { Platform } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import { AcceptContainer, PrayerContainer, FollowContainer, SubmitContainer, ProfileContainer, AlarmContainer } from './containers'
import { FollowScrollPresenter, PrayerScrollPresenter, AboutPresenter, ChoirRankPresenter, DonatePresenter, PrayerHeaderPresenter } from './presenters'
import { Constants } from 'expo'
import { Ionicons } from '@expo/vector-icons'

const MainTabNav = TabNavigator({
  Follows: {
    screen: FollowScrollPresenter,
    navigationOptions: {
      title: 'Follows',
      headerBackTitle: null,
      tabBarIcon: ({ focused, tintColor }) => {
        let color = focused ? '#FF4081' : tintColor
        return (
          <Ionicons
            name="md-heart"
            size={26}
            style={{ color }} />
        )
      },
    },
  },
  Prayers: {
    screen: PrayerScrollPresenter,
    navigationOptions: {
      title: 'Prayers',
      headerBackTitle: null,
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-book"
          size={26}
          style={{ color: tintColor }} />
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
          style={{ color: tintColor }} />
      ),
    },
  },
  Submit: {
    screen: SubmitContainer,
    navigationOptions: {
      title: 'New Prayer',
      headerBackTitle: null,
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-paper-plane"
          size={26}
          style={{ color: tintColor }} />
      ),
    },
  },
  Profile: {
    screen: ProfileContainer,
    navigationOptions: {
      title: 'Profile',
      headerBackTitle: null,
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-person"
          size={26}
          style={{ color: tintColor }} />
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
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
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
      title: '',
      headerTitleStyle: {
        fontFamily: 'raleway',
        fontSize: 24
      },
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0
      },
      headerRight: <PrayerHeaderPresenter prayer={navigation.state.params.prayer} />
    })
  },
  Follow: {
    screen: FollowContainer,
    navigationOptions: ({ navigation }) => ({
      title: '',
      headerTitleStyle: {
        fontFamily: 'raleway',
        fontSize: 24
      },
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0,
      },
    })
  },
  ChoirRank: {
    screen: ChoirRankPresenter,
    navigationOptions: {
      title: 'NINE CHOIRS',
      headerTitleStyle: {
        fontFamily: 'raleway',
        fontSize: 24
      },
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0,
      },
    }
  },
  Donate: {
    screen: DonatePresenter,
    navigationOptions: () => {
      const headerTitleStyle = Platform.OS === 'ios'
        ? { fontFamily: 'raleway', fontSize: 24 }
        : { fontFamily: 'raleway', fontSize: 24 }
      const headerStyle = Platform.OS === 'ios'
        ? { backgroundColor: 'white', borderBottomWidth: 0 }
        : { backgroundColor: 'white', borderBottomWidth: 0, marginTop: Constants.statusBarHeight }
      return {
        title: 'DONATE',
        headerTitleStyle,
        headerStyle,
      }
    },
  },
  Alarms: {
    screen: AlarmContainer,
    navigationOptions: {
      title: 'REMINDERS',
      headerTitleStyle: {
        fontFamily: 'raleway',
        fontSize: 24
      },
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0,
      },
    },
  },
  About: {
    screen: AboutPresenter,
    navigationOptions: {
      title: 'ABOUT',
      headerTitleStyle: {
        fontFamily: 'raleway',
        fontSize: 24
      },
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0,
      },
    },
  },
}, {
  headerMode: 'screen'
})

const MainNav = () => (
  <MainStackNav />
)

export default MainNav
