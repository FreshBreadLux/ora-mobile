import React from 'react'
import { View, Image, Animated, AlertIOS } from 'react-native'
import PrePrayer from './PrePrayer'
import CurrentPrayer from './CurrentPrayer'
import axios from 'axios'
import ROOT_URL from '../../config'
import ss from '../StyleSheet'

export default class Accept extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPrayer: null,
      fadeAnim: new Animated.Value(0),
      visibleModal: null,
      noPrayers: false,
    }
    this.loadNextPrayer = this.loadNextPrayer.bind(this)
    this.fadeOut = this.fadeOut.bind(this)
    this.finishPraying = this.finishPraying.bind(this)
    this.setModal = this.setModal.bind(this)
    this.flagPrayer = this.flagPrayer.bind(this)
    this.followPrayer = this.followPrayer.bind(this)
  }

  fadeOut() {
    Animated.timing(
      this.state.fadeAnim,
      { toValue: 0, duration: 500 }
    ).start()
    setTimeout(this.loadNextPrayer, 500)
  }

  loadNextPrayer() {
    const { userId, fetchUserTotalPrayers, prayerIdsOfViews, addPrayerIdOfView } = this.props.screenProps
    axios.put(`${ROOT_URL}/api/prayers/next`, { userId, prayerIdsOfViews })
    .then(response => response.data)
    .then(obj => {
      addPrayerIdOfView(obj.newView[0][0].viewedId)
      this.setState({
        currentPrayer: obj.updatedPrayer
      })
      Animated.timing(
        this.state.fadeAnim,
        { toValue: 1, duration: 500 }
      ).start()
    })
    .then(() => {
      if (userId) fetchUserTotalPrayers(userId)
    })
    .catch(err => {
      if (err.response.status === 404) {
        this.setState({
          currentPrayer: {
            subject: 'Thank You',
            body: 'There are currently no new prayers in the Ora Prayer Network. Please take some time to pray for the intentions that you have followed, and check back later to accept new prayer requests.'
          },
          noPrayers: true,
        })
        Animated.timing(
          this.state.fadeAnim,
          { toValue: 1, duration: 500 }
        ).start()
      } else {
        console.error(err)
      }
    })
  }

  finishPraying() {
    this.setState({
      currentPrayer: null,
      fadeAnim: new Animated.Value(0),
    })
  }

  setModal(name) {
    this.setState({ visibleModal: name })
  }

  flagPrayer(category) {
    const userId = this.props.screenProps.userId
    const prayer = this.state.currentPrayer
    if (userId) {
      axios.post(`${ROOT_URL}/api/flags`, {
        flaggerId: userId,
        flaggedId: prayer.id,
      })
      .then(() => {
        AlertIOS.alert(
          'This prayer has been flagged',
          'The Ora team will look into this and resolve the issue as quickly as possible',
          () => this.setModal(null)
        )
      })
      .catch(console.error)
    } else {
      AlertIOS.alert('You must be logged in to flag prayers')
    }
  }

  followPrayer() {
    const userId = this.props.screenProps.userId
    const prayer = this.state.currentPrayer
    const alreadyFollowing = this.props.screenProps.follows
    ? this.props.screenProps.follows.find(follow => {
      return follow.prayerId === this.state.currentPrayer.id
    })
    : null
    if (userId && !alreadyFollowing) {
      axios.post(`${ROOT_URL}/api/follows`, {
        userId, prayer
      })
      .then(() => {
        this.props.screenProps.fetchUserFollows(userId)
        AlertIOS.alert(
          'You are now following this prayer',
          'You can manage the prayers you follow in the Follows section',
          () => this.setModal(null))
      })
      .catch(console.error)
    } else if (userId && alreadyFollowing) {
      AlertIOS.alert('You are already following this prayer',
      'You can manage the prayers you follow in the Follows section',
      () => this.setModal(null))
    } else {
      AlertIOS.alert('You must log in or sign up to follow prayers',
      'Log in or sign up in order to get the most out of Ora',
      () => this.setModal(null))
    }
  }

  render() {
    return (
      <View style={ss.invisiContainer}>
        <View style={ss.backgroundImageFrame}>
          <Image
            source={require('../../assets/images/Rome.jpg')}
            style={ss.backgroundImage}
          />
        </View>
        {!this.state.currentPrayer
          ? <PrePrayer
              loadNextPrayer={this.loadNextPrayer}
              navigation={this.props.navigation}
            />
          : <View style={ss.opacityContainer}>
              <CurrentPrayer
                statePrayer={this.state.currentPrayer}
                fadeOut={this.fadeOut}
                finishPraying={this.finishPraying}
                flagPrayer={this.flagPrayer}
                followPrayer={this.followPrayer}
                follows={this.props.screenProps.follows}
                opacity={this.state.fadeAnim}
                visibleModal={this.state.visibleModal}
                setModal={this.setModal}
                noPrayers={this.state.noPrayers}
              />
            </View>
        }
      </View>
    )
  }
}
