import React from 'react'
import { connect } from 'react-redux'
import { HomePresenter } from '../../presenters';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <HomePresenter navigation={this.props.navigation} />
    )
  }
}

export default connect()(HomeContainer)
