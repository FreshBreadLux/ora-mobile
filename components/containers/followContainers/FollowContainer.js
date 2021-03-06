import React from 'react'
import { connect } from 'react-redux'
import { fetchUserFollows, addRecentlyPrayedFor, removeRecentlyPrayedFor } from '../../../store'
import { FollowPresenter } from '../../presenters'
import axios from 'axios'
import { ampEvents, ampLogEvent } from '../../analytics'
import ROOT_URL from '../../../config'

const ONE_HALF_HOUR = 1000 * 60 * 30

class FollowContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sendingLove: false
    }
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
    this.setState({ sendingLove: true })
    const { followedId, followerId } = this.props.navigation.state.params.follow.follow
    axios.put(`${ROOT_URL}/api/follows/notify/followedId/${followedId}`, {followerId})
    .then(prayer => {
      ampLogEvent(ampEvents.SEND_LOVE)
      this.props.dispatchAddRecentlyPrayedFor(prayer.data.id)
      this.setState({ sendingLove: false })
      setTimeout(() => {
        this.props.dispatctchRemoveRecentlyPrayedFor(prayer.data.id)
      }, ONE_HALF_HOUR)
    })
    .catch(error => {
      console.log(error)
      this.setState({ sendingLove: false })
    })
  }

  render() {
    return (
      <FollowPresenter
        notifyAuthor={this.notifyAuthor}
        unfollowPrayer={this.unfollowPrayer}
        sendingLove={this.state.sendingLove}
        follow={this.props.navigation.state.params.follow} />
    )
  }
}

const mapState = state => ({
  userId: state.auth.userId
})

const mapDispatch = dispatch => ({
  refreshUserFollows: userId => dispatch(fetchUserFollows(userId)),
  dispatchAddRecentlyPrayedFor: prayerId => dispatch(addRecentlyPrayedFor(prayerId)),
  dispatctchRemoveRecentlyPrayedFor: prayerId => dispatch(removeRecentlyPrayedFor(prayerId))
})

export default connect(mapState, mapDispatch)(FollowContainer)
