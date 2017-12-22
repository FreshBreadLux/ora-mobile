import React from 'react'
import { TabNavigator } from 'react-navigation'
import Settings from './Settings'
import About from './About'
import LogoutForm from './LogoutForm'
import Ionicons from 'react-native-vector-icons/Ionicons'

const SettingsTab = TabNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-settings"
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
      tabBarLabel: 'About',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-information-circle-outline"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  LogoutForm: {
    screen: LogoutForm,
    navigationOptions: {
      title: 'Logout',
      tabBarLabel: 'Logout',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-log-out"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
}, {
  tabBarPosition: 'bottom',
})

export default class SettingsNav extends React.Component {
  render() {
    return (
      <SettingsTab screenProps={{
        userLogout: this.props.userLogout
      }}/>
    )
  }
}
