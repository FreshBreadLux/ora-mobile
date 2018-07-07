import React from 'react'
import { View, Animated, AlertIOS } from 'react-native'
import { connect } from 'react-redux'
import { fetchUserFollows, fetchUserInfo, fetchNextPrayer, setUserInfo, addView, finishPraying, setReflection, removeVisibleModal } from '../../../store'
import { ReflectionPresenter, CurrentPrayerPresenter, BackgroundImageContainer } from '../../presenters'
import axios from 'axios'
import ROOT_URL from '../../../config'
import { ampEvents, ampLogEvent } from '../../analytics'
import ss from '../../StyleSheet'

function animate(...options) {
  return new Promise(res => {
    Animated.timing(...options).start(res)
  })
}

class AcceptContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reflectionFade: new Animated.Value(0),
      fadeAnim: new Animated.Value(0)
    }
    this.fadeOut = this.fadeOut.bind(this)
    this.fadeIn = this.fadeIn.bind(this)
    this.reflectionFadeIn = this.reflectionFadeIn.bind(this)
    this.reflectionFadeOut = this.reflectionFadeOut.bind(this)
    this.loadNextPrayer = this.loadNextPrayer.bind(this)
    this.animateNextPrayerTransition = this.animateNextPrayerTransition.bind(this)
    this.loadReflection = this.loadReflection.bind(this)
    this.finishPraying = this.finishPraying.bind(this)
    this.flagPrayer = this.flagPrayer.bind(this)
    this.toggleFollowPrayer = this.toggleFollowPrayer.bind(this)
  }

  componentDidMount() {
    this.loadReflection()
  }

  fadeOut() {
    return animate(this.state.fadeAnim, { toValue: 0, duration: 500 })
  }

  fadeIn() {
    return animate(this.state.fadeAnim, { toValue: 1, duration: 500 })
  }

  reflectionFadeIn() {
    return animate(this.state.reflectionFade, { toValue: 1, duration: 500 })
  }

  reflectionFadeOut() {
    return animate(this.state.reflectionFade, { toValue: 0, duration: 500 })
  }

  loadNextPrayer() {
    const { dispatchFetchNextPrayer, userId, views } = this.props
    return dispatchFetchNextPrayer(userId, views)
  }

  async animateNextPrayerTransition() {
    try {
      await this.fadeOut()
      await this.loadNextPrayer().then(this.fadeIn)
      ampLogEvent(ampEvents.LOAD_NEXT_PRAYER)
    } catch (err) {
      console.error(err)
    }
  }

  async loadReflection() {
    // vv this doesn't seem to do anything...
    this.props.dispatchSetReflection()
    await this.reflectionFadeIn()
    this.fadeIn()
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
        <BackgroundImageContainer componentName="Accept" />
        {!this.props.currentPrayer.subject
          ? <ReflectionPresenter
              opacity={this.state.fadeAnim}
              finishPraying={this.finishPraying}
              reflectionFade={this.state.reflectionFade}
              reflectionFadeOut={this.reflectionFadeOut}
              animateNextPrayerTransition={this.animateNextPrayerTransition} />
          : <View style={ss.opacityContainer}>
              <CurrentPrayerPresenter
                animateNextPrayerTransition={this.animateNextPrayerTransition}
                navigation={this.props.navigation}
                finishPraying={this.finishPraying}
                flagPrayer={this.flagPrayer}
                toggleFollowPrayer={this.toggleFollowPrayer}
                opacity={this.state.fadeAnim} />
            </View>
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
  reflection: state.acceptPrayer.reflection
})

const mapDispatch = dispatch => ({
  refreshUserFollows: userId => dispatch(fetchUserFollows(userId)),
  dispatchAddView: viewedId => dispatch(addView(viewedId)),
  refreshUserInfo: userId => dispatch(fetchUserInfo(userId)),
  dispatchSetUserInfo: userInfo => dispatch(setUserInfo(userInfo)),
  dispatchFetchNextPrayer: (userId, views) => dispatch(fetchNextPrayer(userId, views)),
  dispatchFinishPraying: () => dispatch(finishPraying()),
  dispatchSetReflection: () => dispatch(setReflection()),
  dispatchRemoveVisibleModal: () => dispatch(removeVisibleModal())
})

export default connect(mapState, mapDispatch)(AcceptContainer)
