import React from 'react'
import { Animated, AlertIOS } from 'react-native'
import PrePrayer from './PrePrayer'
import CurrentPrayer from './CurrentPrayer'
import axios from 'axios'
import IP_ADDRESS from '../../config'

export default class Accept extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPrayer: null,
      fadeAnim: new Animated.Value(0)
    }
    this.loadNextPrayer = this.loadNextPrayer.bind(this)
    this.fadeOut = this.fadeOut.bind(this)
    this.followPrayer = this.followPrayer.bind(this)
  }

  fadeOut() {
    Animated.timing(
      this.state.fadeAnim,
      {toValue: 0, duration: 500}
    ).start()
    setTimeout(this.loadNextPrayer, 500)
  }

  loadNextPrayer() {
    axios.put(`http://${IP_ADDRESS}:8080/api/prayers/next`, {userId: this.props.userId})
    .then(response => response.data)
    .then(prayer => {
      this.setState({currentPrayer: prayer})
      Animated.timing(
        this.state.fadeAnim,
        {toValue: 1, duration: 500}
      ).start()
    })
    .catch(console.error)
  }

  followPrayer() {
    const userId = this.props.userId
    const prayer = this.state.currentPrayer
    if (userId) {
      axios.post(`http://${IP_ADDRESS}:8080/api/follows`, {   followerUserId: userId,
       prayerId: prayer.id,
       subject: prayer.subject,
       body: prayer.body,
       views: prayer.views,
       closed: prayer.closed,
      })
      .then(() => {
        this.props.fetchUserFollows(userId)
        AlertIOS.alert('You are now following this prayer')
      })
      .catch(console.error)
    } else {
      AlertIOS.alert('You must be logged in to follow prayers')
    }
  }

  render() {
    if (!this.state.currentPrayer) {
      return (
        <PrePrayer
          loadNextPrayer={this.loadNextPrayer}
        />
      )
    }
    return (
      <CurrentPrayer
        statePrayer={this.state.currentPrayer}
        fadeOut={this.fadeOut}
        followPrayer={this.followPrayer}
        opacity={this.state.fadeAnim}
      />
    )
  }
}
