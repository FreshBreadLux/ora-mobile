import React from 'react'
import { View, Image, Animated, AlertIOS } from 'react-native'
import PrePrayer from './PrePrayer'
import CurrentPrayer from './CurrentPrayer'
import axios from 'axios'
import IP_ADDRESS from '../../config'
import styles from '../StyleSheet'

export default class Accept extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPrayer: null,
      fadeAnim: new Animated.Value(0),
      visibleModal: null,
    }
    this.loadNextPrayer = this.loadNextPrayer.bind(this)
    this.fadeOut = this.fadeOut.bind(this)
    this.finishPraying = this.finishPraying.bind(this)
    this.setModal = this.setModal.bind(this)
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

  finishPraying() {
    this.setState({
      currentPrayer: null,
      fadeAnim: new Animated.Value(0),
    })
  }

  setModal(name) {
    this.setState({ visibleModal: name })
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
    return (
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
          <Image
            source={require('../../assets/images/nightSky.jpg')}
            style={{flex: 1, resizeMode: 'cover', width: '100%'}}
          />
        </View>
        { !this.state.currentPrayer
          ? <PrePrayer
              loadNextPrayer={this.loadNextPrayer}
            />
          : <CurrentPrayer
              statePrayer={this.state.currentPrayer}
              fadeOut={this.fadeOut}
              finishPraying={this.finishPraying}
              followPrayer={this.followPrayer}
              opacity={this.state.fadeAnim}
              visibleModal={this.state.visibleModal}
              setModal={this.setModal}
            />
        }
      </View>
    )
  }
}
