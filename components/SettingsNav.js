import React from 'react'
import { TabNavigator } from 'react-navigation'
import Settings from './Settings.js'
import About from './About.js'

const SettingsTab = TabNavigator({
  Settings: {
    screen: Settings
  },
  About: {
    screen: About
  }
}, {
  tabBarPosition: 'bottom',
})

export default class SettingsNav extends React.Component {
  render() {
    return (
      <SettingsTab />
    )
  }
}
