import React from 'react'
import { View, AlertIOS } from 'react-native'
import { connect } from 'react-redux'
import { fetchUserFollows, fetchUserInfo, fetchNextPrayer, setUserInfo, addView, finishPraying, setReflectionMode, removeVisibleModal } from '../../../store'
import { ReflectionContainer, CurrentPrayerContainer } from '../'
import axios from 'axios'
import ROOT_URL from '../../../config'
import { ampEvents, ampLogEvent } from '../../analytics'
import ss from '../../StyleSheet'

class AcceptContainer extends React.Component {
  constructor(props) {
    super(props)

    this.flagPrayer = this.flagPrayer.bind(this)
    this.finishPraying = this.finishPraying.bind(this)
    this.loadReflection = this.loadReflection.bind(this)
    this.toggleFollowPrayer = this.toggleFollowPrayer.bind(this)
  }

  componentDidMount() {
    this.loadReflection()
  }

  async loadReflection() {
    this.props.dispatchSetReflectionMode()
    ampLogEvent(ampEvents.START_REFLECTION)
  }

  finishPraying() {
    this.props.dispatchFinishPraying()
    this.props.navigation.goBack()
  }

  flagPrayer(flagreasonId) {
    const prayer = this.props.currentPrayer
    axios.post(`${ROOT_URL}/api/flags`, {
      flaggerId: this.props.userId,
      flaggedId: prayer.id,
      flagreasonId
    })
    .then(() => {
      AlertIOS.alert(
        'This prayer has been flagged',
        'The Ora team will look into this and resolve the issue as quickly as possible',
        this.finishPraying
      )
    })
    .catch(console.error)
  }

  toggleFollowPrayer() {
    const { userId, follows, refreshUserFollows, currentPrayer } = this.props
    const alreadyFollowing = follows
    ? follows.find(follow => follow.id === currentPrayer.id)
    : null
    if (!alreadyFollowing) {
      axios.post(`${ROOT_URL}/api/follows`, { userId, currentPrayer })
      .then(() => {
        refreshUserFollows(userId)
        this.props.dispatchRemoveVisibleModal()
        ampLogEvent(ampEvents.FOLLOW_PRAYER)
      })
      .catch(console.error)
    } else {
      axios.delete(`${ROOT_URL}/api/follows/followedId/${currentPrayer.id}/followerId/${userId}`)
      .then(() => {
        refreshUserFollows(userId)
        this.props.dispatchRemoveVisibleModal()
      })
      .catch(console.error)
    }
  }

  render() {
    return (
      <View style={ss.invisiContainer}>
        {this.props.reflectionMode
          ? <ReflectionContainer
              navigation={this.props.navigation}
              finishPraying={this.finishPraying} />
          : <CurrentPrayerContainer
              flagPrayer={this.flagPrayer}
              navigation={this.props.navigation}
              finishPraying={this.finishPraying}
              toggleFollowPrayer={this.toggleFollowPrayer} />
        }
      </View>
    )
  }
}

const mapState = state => ({
  follows: state.follows,
  views: state.views,
  userId: state.auth.userId,
  isLoggedIn: state.auth.isLoggedIn,
  currentPrayer: state.acceptPrayer.currentPrayer,
  reflectionMode: state.acceptPrayer.reflectionMode
})

const mapDispatch = dispatch => ({
  refreshUserFollows: userId => dispatch(fetchUserFollows(userId)),
  dispatchFinishPraying: () => dispatch(finishPraying()),
  dispatchSetReflectionMode: () => dispatch(setReflectionMode()),
  dispatchRemoveVisibleModal: () => dispatch(removeVisibleModal())
})

export default connect(mapState, mapDispatch)(AcceptContainer)
