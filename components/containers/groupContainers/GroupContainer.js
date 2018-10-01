import React from 'react'
import { GroupPresenter } from '../../presenters'

/*
  TODO: This is a placeholder presentational standin; I need to make it functional
*/
class GroupContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <GroupPresenter navigation={this.props.navigation} />
    )
  }
}

export default GroupContainer
