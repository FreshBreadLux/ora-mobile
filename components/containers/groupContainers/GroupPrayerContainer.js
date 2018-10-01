import React from 'react'
import { GroupPrayerPresenter } from '../../presenters'

/*
  TODO: This is a placeholder presentational standin; I need to make it functional
*/
class GroupPrayerContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <GroupPrayerPresenter navigation={this.props.navigation} />
    )
  }
}

export default GroupPrayerContainer
