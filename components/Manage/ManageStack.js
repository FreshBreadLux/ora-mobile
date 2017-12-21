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
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.prayer.subject}`
    })
  },
  MyFollow: {
    screen: ManageMyFollow,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.follow.subject}`
    })
  },
})

export default class ManageStack extends React.Component {
  render() {
    return (
      <ManageStackNav screenProps={{
        prayers: this.props.prayers,
        follows: this.props.follows,
      }} />
    )
  }
}
