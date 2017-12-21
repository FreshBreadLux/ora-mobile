import React from 'react'
import { TabNavigator } from 'react-navigation'
import ManagePrayerScroll from './ManagePrayerScroll'
import ManageFollowScroll from './ManageFollowScroll'

const ManageTabNav = TabNavigator({
  ManageMyScroll: {
    screen: ManagePrayerScroll,
  },
  ManageFollowScroll: {
    screen: ManageFollowScroll,
  }
}, {
  tabBarPosition: 'bottom',
})

export default class ManageTab extends React.Component {
  constructor(props) {
    super(props)
    this.navigateToMyPrayer = this.navigateToMyPrayer.bind(this)
  }
  navigateToMyPrayer() {
    this.props.navigation.navigate('MyPrayer')
  }
  render() {
    return (
      <ManageTabNav screenProps={{ navigateToMyPrayer: this.navigateToMyPrayer }} />
    )
  }
}
