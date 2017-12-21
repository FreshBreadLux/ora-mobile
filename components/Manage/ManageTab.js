import React from 'react'
import { TabNavigator } from 'react-navigation'
import ManagePrayerScroll from './ManagePrayerScroll'
import ManageFollowScroll from './ManageFollowScroll'

const ManageTabNav = TabNavigator({
  ManagePrayerScroll: {
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
    this.navigateToMyFollow = this.navigateToMyFollow.bind(this)
  }
  navigateToMyPrayer(prayer) {
    this.props.navigation.navigate('MyPrayer', { prayer })
  }
  navigateToMyFollow(follow) {
    console.log(follow)
    this.props.navigation.navigate('MyFollow', { follow })
  }
  render() {
    return (
      <ManageTabNav screenProps={{
        navigateToMyPrayer: this.navigateToMyPrayer,
        navigateToMyFollow: this.navigateToMyFollow,
        prayers: this.props.screenProps.prayers,
        follows: this.props.screenProps.follows,
      }} />
    )
  }
}
