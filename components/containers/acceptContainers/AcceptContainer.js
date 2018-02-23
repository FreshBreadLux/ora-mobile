import React from 'react'
import { View, Animated, AlertIOS } from 'react-native'
import { connect } from 'react-redux'
import { fetchUserFollows, fetchUserInfo, fetchNextPrayer, setUserInfo, addView, finishPraying, setReflection, removeVisibleModal } from '../../../store'
import { PrePrayerPresenter, ReflectionPresenter, CurrentPrayerPresenter, BackgroundImage } from '../../presenters'
import axios from 'axios'
import ROOT_URL from '../../../config'
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
      titleButtonFade: new Animated.Value(1),
      reflectionFade: new Animated.Value(0),
      fadeAnim: new Animated.Value(0)
    }
    this.fadeOut = this.fadeOut.bind(this)
    this.fadeIn = this.fadeIn.bind(this)
    this.titleButtonFadeIn = this.titleButtonFadeIn.bind(this)
    this.titleButtonFadeOut = this.titleButtonFadeOut.bind(this)
    this.reflectionFadeIn = this.reflectionFadeIn.bind(this)
    this.reflectionFadeOut = this.reflectionFadeOut.bind(this)
    this.loadNextPrayer = this.loadNextPrayer.bind(this)
    this.animateNextPrayerTransition = this.animateNextPrayerTransition.bind(this)
    this.loadReflection = this.loadReflection.bind(this)
    this.finishPraying = this.finishPraying.bind(this)
    this.flagPrayer = this.flagPrayer.bind(this)
    this.followPrayer = this.followPrayer.bind(this)
  }

  fadeOut() {
    return animate(this.state.fadeAnim, { toValue: 0, duration: 500 })
  }

  fadeIn() {
    return animate(this.state.fadeAnim, { toValue: 1, duration: 500 })
  }

  titleButtonFadeIn() {
    return animate(this.state.titleButtonFade, { toValue: 1, duration: 500 })
  }

  titleButtonFadeOut() {
    return animate(this.state.titleButtonFade, { toValue: 0, duration: 500 })
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
    } catch (err) {
      console.error(err)
    }
  }

  async loadReflection() {
    await this.titleButtonFadeOut()
    this.props.dispatchSetReflection()
    await this.reflectionFadeIn()
    this.fadeIn()
  }

  finishPraying() {
    this.setState({
      fadeAnim: new Animated.Value(0),
      reflectionFade: new Animated.Value(0),
      titleButtonFade: new Animated.Value(1)
    })
    this.props.dispatchFinishPraying()
  }

  flagPrayer(flagreasonId) {
    const prayer = this.props.currentPrayer
    if (this.props.isLoggedIn) {
      axios.post(`${ROOT_URL}/api/flags`, {
        flaggerId: this.props.userId,
        flaggedId: prayer.id,
        flagreasonId
      })
      .then(() => {
        AlertIOS.alert(
          'This prayer has been flagged',
          'The Ora team will look into this and resolve the issue as quickly as possible',
          this.props.dispatchRemoveVisibleModal)
      })
      .catch(console.error)
    } else {
      AlertIOS.alert('You must be logged in to flag prayers')
    }
  }

  followPrayer() {
    const { isLoggedIn, userId, follows, refreshUserFollows, currentPrayer } = this.props
    const alreadyFollowing = follows
    ? follows.find(follow => follow.prayerId === currentPrayer.id)
    : null
    if (isLoggedIn && !alreadyFollowing) {
      axios.post(`${ROOT_URL}/api/follows`, { userId, currentPrayer })
      .then(() => {
        refreshUserFollows(userId)
        AlertIOS.alert(
          'You are now following this prayer',
          'You can manage the prayers you follow in the Follows section',
          this.props.dispatchRemoveVisibleModal)
      })
      .catch(console.error)
    } else if (isLoggedIn && alreadyFollowing) {
      AlertIOS.alert('You are already following this prayer',
      'You can manage the prayers you follow in the Follows section',
      this.props.dispatchRemoveVisibleModal)
    } else {
      AlertIOS.alert('You must log in or sign up to follow prayers',
      'Log in or sign up in order to get the most out of Ora',
      this.props.dispatchRemoveVisibleModal)
    }
  }

  render() {
    return (
      <View style={ss.invisiContainer}>
        <BackgroundImage componentName="Accept" />
        {!this.props.currentPrayer.subject
          ? <View style={ss.invisiContainer}>
            {!this.props.reflection
            ? <PrePrayerPresenter
                titleButtonFade={this.state.titleButtonFade}
                loadReflection={this.loadReflection}
                navigation={this.props.navigation} />
            : <ReflectionPresenter
                opacity={this.state.fadeAnim}
                finishPraying={this.finishPraying}
                reflectionFade={this.state.reflectionFade}
                reflectionFadeOut={this.reflectionFadeOut}
                animateNextPrayerTransition={this.animateNextPrayerTransition} />
            }
            </View>
          : <View style={ss.opacityContainer}>
              <CurrentPrayerPresenter
                animateNextPrayerTransition={this.animateNextPrayerTransition}
                finishPraying={this.finishPraying}
                flagPrayer={this.flagPrayer}
                followPrayer={this.followPrayer}
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
  refreshUserFollows(userId) {
    return dispatch(fetchUserFollows(userId))
  },
  dispatchAddView(viewedId) {
    return dispatch(addView(viewedId))
  },
  refreshUserInfo(userId) {
    return dispatch(fetchUserInfo(userId))
  },
  dispatchSetUserInfo(userInfo) {
    return dispatch(setUserInfo(userInfo))
  },
  dispatchFetchNextPrayer(userId, views) {
    return dispatch(fetchNextPrayer(userId, views))
  },
  dispatchFinishPraying() {
    return dispatch(finishPraying())
  },
  dispatchSetReflection() {
    return dispatch(setReflection())
  },
  dispatchRemoveVisibleModal() {
    return dispatch(removeVisibleModal())
  }
})

export default connect(mapState, mapDispatch)(AcceptContainer)
