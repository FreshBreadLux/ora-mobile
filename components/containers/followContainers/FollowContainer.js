import React from 'react'
import { connect } from 'react-redux'
import { fetchUserFollows } from '../../../store'
import { FollowPresenter } from '../../presenters'
import axios from 'axios'
import ROOT_URL from '../../../config'

class FollowContainer extends React.Component {
  constructor(props) {
    super(props)
    this.unfollowPrayer = this.unfollowPrayer.bind(this)
  }

  unfollowPrayer() {
    const { followedId, followerId } = this.props.navigation.state.params.follow.follow
    axios.delete(`${ROOT_URL}/api/follows/followedId/${followedId}/followerId/${followerId}`)
    .then(() => {
      this.props.refreshUserFollows(this.props.userId)
      this.props.navigation.goBack()
    })
    .catch(console.error)
  }

  render() {
    return (
      <FollowPresenter
        unfollowPrayer={this.unfollowPrayer}
        follow={this.props.navigation.state.params.follow} />
    )
  }
}

const mapState = state => ({
  userId: state.auth.userId
})

const mapDispatch = dispatch => ({
  refreshUserFollows(userId) {
    return dispatch(fetchUserFollows(userId))
  }
})

export default connect(mapState, mapDispatch)(FollowContainer)
