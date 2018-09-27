import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { GroupScrollPresenter } from '../../presenters'
import ss from '../../StyleSheet'

class GroupScrollContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <GroupScrollPresenter />
    )
  }
}

export default GroupScrollContainer
