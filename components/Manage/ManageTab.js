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
  navigateToMyPrayer(prayer) {
    this.props.navigation.navigate('MyPrayer', { prayer })
  }
  render() {
    return (
      <ManageTabNav screenProps={{
        setPrayer: this.props.screenProps.setPrayer,
        navigateToMyPrayer: this.navigateToMyPrayer,
        prayers: this.props.screenProps.prayers
      }} />
    )
  }
}
