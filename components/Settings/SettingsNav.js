import React from 'react'
import { TabNavigator } from 'react-navigation'
import Settings from './Settings'
import About from './About'
import LogoutForm from './LogoutForm'

const SettingsTab = TabNavigator({
  Settings: {
    screen: Settings
  },
  About: {
    screen: About
  },
  LogoutForm: {
    screen: LogoutForm
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
