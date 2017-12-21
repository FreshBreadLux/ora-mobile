import React from 'react'
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
    this.setPrayer = this.setPrayer.bind(this)
    this.setFollow = this.setFollow.bind(this)
  }
  setPrayer(prayer) {
    this.setState({selectedPrayer: prayer})
  }
  setFollow(prayer) {
    this.setState({selectedFollow: prayer})
  }
  render() {
    console.log(this.state)
    return (
      <ManageStackNav screenProps={{
        prayers: this.props.prayers,
        setPrayer: this.setPrayer,
      }} />
    )
  }
}
