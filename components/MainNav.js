import React from 'react'
import { Platform } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import { AcceptContainer, PrayerContainer, FollowContainer, SubmitContainer, ProfileContainer, AlarmContainer, ShareOraContainer, RegisterOraMissionaryContainer } from './containers'
import { FollowScrollPresenter, PrayerScrollPresenter, AboutPresenter, ChoirRankPresenter, DonatePresenter, PrayerHeaderPresenter, TraditionalPrayersPresenter, HomePresenter } from './presenters'
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
  Home: {
    screen: HomePresenter,
    navigationOptions: {
      title: 'Home',
      headerBackTitle: null,
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-globe"
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
          name="ios-information-circle"
          size={26}
          style={{ color: tintColor }} />
      ),
    },
  },
}, {
  swipeEnabled: true,
  initialRouteName: 'Home',
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

const CardStackNav = StackNavigator({
  Root: {
    screen: MainTabNav,
    navigationOptions: {
      header: null,
    },
  },
  Prayer: {
    screen: PrayerContainer,
    navigationOptions: ({ navigation }) => {
      const headerTitleStyle = Platform.OS === 'ios'
        ? { fontFamily: 'raleway', fontSize: 24 }
        : { fontFamily: 'ralewayExtraBold', fontSize: 24 }
      const headerStyle = Platform.OS === 'ios'
        ? { backgroundColor: 'white', borderBottomWidth: 0 }
        : { backgroundColor: 'white', borderBottomWidth: 0, marginTop: Constants.statusBarHeight, elevation: 0 }
      return {
        title: '',
        headerRight: <PrayerHeaderPresenter prayer={navigation.state.params.prayer} />,
        headerTitleStyle,
        headerStyle,
      }
    }
  },
  Follow: {
    screen: FollowContainer,
    navigationOptions: () => {
      const headerTitleStyle = Platform.OS === 'ios'
        ? { fontFamily: 'raleway', fontSize: 24 }
        : { fontFamily: 'ralewayExtraBold', fontSize: 24 }
      const headerStyle = Platform.OS === 'ios'
        ? { backgroundColor: 'white', borderBottomWidth: 0 }
        : { backgroundColor: 'white', borderBottomWidth: 0, marginTop: Constants.statusBarHeight, elevation: 0 }
      return {
        title: '',
        headerTitleStyle,
        headerStyle,
      }
    },
  },
  ChoirRank: {
    screen: ChoirRankPresenter,
    navigationOptions: () => {
      const headerTitleStyle = Platform.OS === 'ios'
        ? { fontFamily: 'raleway', fontSize: 24 }
        : { fontFamily: 'ralewayExtraBold', fontSize: 24 }
      const headerStyle = Platform.OS === 'ios'
        ? { backgroundColor: 'white', borderBottomWidth: 0 }
        : { backgroundColor: 'white', borderBottomWidth: 0, marginTop: Constants.statusBarHeight, elevation: 0 }
      return {
        title: 'NINE CHOIRS',
        headerTitleStyle,
        headerStyle,
      }
    },
  },
  ShareOra: {
    screen: ShareOraContainer,
    navigationOptions: () => {
      const headerTitleStyle = Platform.OS === 'ios'
        ? { fontFamily: 'raleway', fontSize: 24 }
        : { fontFamily: 'ralewayExtraBold', fontSize: 24 }
      const headerStyle = Platform.OS === 'ios'
        ? { backgroundColor: 'white', borderBottomWidth: 0 }
        : { backgroundColor: 'white', borderBottomWidth: 0, marginTop: Constants.statusBarHeight, elevation: 0 }
      return {
        title: 'SHARE ORA',
        headerBackTitle: null,
        headerTitleStyle,
        headerStyle,
      }
    },
  },
  RegisterOraMissionary: {
    screen: RegisterOraMissionaryContainer,
    navigationOptions: () => {
      const headerTitleStyle = Platform.OS === 'ios'
        ? { fontFamily: 'raleway', fontSize: 24 }
        : { fontFamily: 'ralewayExtraBold', fontSize: 24 }
      const headerStyle = Platform.OS === 'ios'
        ? { backgroundColor: 'white', borderBottomWidth: 0 }
        : { backgroundColor: 'white', borderBottomWidth: 0, marginTop: Constants.statusBarHeight, elevation: 0 }
      return {
        title: 'ORA MISSIONARY',
        headerTitleStyle,
        headerStyle,
      }
    },
  },
  Donate: {
    screen: DonatePresenter,
    navigationOptions: () => {
      const headerTitleStyle = Platform.OS === 'ios'
        ? { fontFamily: 'raleway', fontSize: 24 }
        : { fontFamily: 'ralewayExtraBold', fontSize: 24 }
      const headerStyle = Platform.OS === 'ios'
        ? { backgroundColor: 'white', borderBottomWidth: 0 }
        : { backgroundColor: 'white', borderBottomWidth: 0, marginTop: Constants.statusBarHeight, elevation: 0 }
      return {
        title: 'DONATE',
        headerTitleStyle,
        headerStyle,
      }
    },
  },
  Alarms: {
    screen: AlarmContainer,
    navigationOptions: () => {
      const headerTitleStyle = Platform.OS === 'ios'
        ? { fontFamily: 'raleway', fontSize: 24 }
        : { fontFamily: 'ralewayExtraBold', fontSize: 24 }
      const headerStyle = Platform.OS === 'ios'
        ? { backgroundColor: 'white', borderBottomWidth: 0 }
        : { backgroundColor: 'white', borderBottomWidth: 0, marginTop: Constants.statusBarHeight, elevation: 0 }
      return {
        title: 'REMINDERS',
        headerTitleStyle,
        headerStyle,
      }
    },
  },
  About: {
    screen: AboutPresenter,
    navigationOptions: () => {
      const headerTitleStyle = Platform.OS === 'ios'
        ? { fontFamily: 'raleway', fontSize: 24 }
        : { fontFamily: 'ralewayExtraBold', fontSize: 24 }
      const headerStyle = Platform.OS === 'ios'
        ? { backgroundColor: 'white', borderBottomWidth: 0 }
        : { backgroundColor: 'white', borderBottomWidth: 0, marginTop: Constants.statusBarHeight, elevation: 0 }
      return {
        title: 'ABOUT',
        headerTitleStyle,
        headerStyle,
      }
    },
  },
}, {
  headerMode: 'screen'
})

const ModalStackNav = StackNavigator({
  Modal: {
    screen: CardStackNav,
    navigationOptions: {
      header: null,
    },
  },
  AcceptContainer: {
    screen: AcceptContainer,
    navigationOptions: {
      header: null,
    },
  },
  TraditionalPrayers: {
    screen: TraditionalPrayersPresenter,
    navigationOptions: () => {
      const headerTitleStyle = Platform.OS === 'ios'
        ? { fontFamily: 'raleway', fontSize: 24 }
        : { fontFamily: 'ralewayExtraBold', fontSize: 24 }
      const headerStyle = Platform.OS === 'ios'
        ? { backgroundColor: 'white', borderBottomWidth: 0 }
        : { backgroundColor: 'white', borderBottomWidth: 0, marginTop: Constants.statusBarHeight, elevation: 0 }
      return {
        title: 'PRAYERS',
        headerTitleStyle,
        headerStyle,
      }
    },
  },
}, {
  mode: 'modal',
  headerMode: 'screen'
})

// IMPORTANT: ALLOWS MODALSTACKNAV TO MANAGE THE STATE
ModalStackNav.router = CardStackNav.router

const MainNav = () => (
  <ModalStackNav />
)

export default MainNav
