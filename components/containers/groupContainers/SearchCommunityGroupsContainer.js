import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SearchCommunityGroupsPresenter } from '../../presenters'
import ss from '../../StyleSheet'

/*
  TODO: This is a placeholder presentational standin; I need to make it functional
*/
class SearchCommunityGroupsContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SearchCommunityGroupsPresenter />
    )
  }
}

export default SearchCommunityGroupsContainer
