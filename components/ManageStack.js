import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import ManageTab from './ManageTab'
import ManageMyPrayer from './ManageMyPrayer'
import ManageMyFollow from './ManageMyFollow'

const ManageStackNav = StackNavigator({
  Root: {
    screen: ManageTab,
  },
  MyPrayer: {
    screen: ManageMyPrayer,
  },
  FollowPrayer: {
    screen: ManageMyFollow,
  },
})

export default class ManageStack extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPrayer: null,
      selectedFollow: null,
    }
    this.setMyPrayer = this.setMyPrayer.bind(this)
    this.setFollowPrayer = this.setFollowPrayer.bind(this)
  }
  setPrayer(prayer) {
    this.setState({selectedPrayer: prayer})
  }
  setFollow(prayer) {
    this.setState({selectedFollow: prayer})
  }
  render() {
    return (
      <ManageStackNav />
    )
  }
}
