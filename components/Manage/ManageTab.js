import React from 'react'
import { TabNavigator } from 'react-navigation'
import ManagePrayerScroll from './ManagePrayerScroll'
import ManageFollowScroll from './ManageFollowScroll'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ManageTabNav = TabNavigator({
  ManagePrayerScroll: {
    screen: ManagePrayerScroll,
    navigationOptions: {
      title: 'Prayers',
      tabBarLabel: 'Prayers',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-paper-plane"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  ManageFollowScroll: {
    screen: ManageFollowScroll,
    navigationOptions: {
      title: 'Following',
      tabBarLabel: 'Following',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-bookmarks"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
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
