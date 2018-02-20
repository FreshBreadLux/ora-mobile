import React from 'react'
import { connect } from 'react-redux'
import { fetchUserFollows, addRecentlyPrayedFor, removeRecentlyPrayedFor } from '../../../store'
import { FollowPresenter } from '../../presenters'
import axios from 'axios'
import ROOT_URL from '../../../config'

const ONE_HALF_HOUR = 1000 * 60 * 30

class FollowContainer extends React.Component {
  constructor(props) {
    super(props)
    this.unfollowPrayer = this.unfollowPrayer.bind(this)
    this.notifyAuthor = this.notifyAuthor.bind(this)
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

  notifyAuthor() {
    const { followedId } = this.props.navigation.state.params.follow.follow
    axios.put(`${ROOT_URL}/api/follows/notify/followedId/${followedId}`)
    .then(prayer => {
      this.props.dispatchAddRecentlyPrayedFor(prayer.data.id)
      setTimeout(() => {
        this.props.dispatctchRemoveRecentlyPrayedFor(prayer.data.id)
      }, ONE_HALF_HOUR)
    })
    .catch(console.error)
  }

  render() {
    return (
      <FollowPresenter
        notifyAuthor={this.notifyAuthor}
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
  },
  dispatchAddRecentlyPrayedFor(prayerId) {
    return dispatch(addRecentlyPrayedFor(prayerId))
  },
  dispatctchRemoveRecentlyPrayedFor(prayerId) {
    return dispatch(removeRecentlyPrayedFor(prayerId))
  }
})

export default connect(mapState, mapDispatch)(FollowContainer)
