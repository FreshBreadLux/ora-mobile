import React from 'react'
import { AsyncStorage, AlertIOS } from 'react-native'
import { Notifications } from 'expo'
import Swiper from 'react-native-swiper'
import { Settings, Home, Accept, Submit, Manage } from './components'
import axios from 'axios'
import IP_ADDRESS from './config'

export default class SwiperClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      userId: null,
      jwToken: null,
      prayers: null,
      follows: null,
      notification: null,
    }
    this.handleNotification = this.handleNotification.bind(this)
    this.verifyStorageKey = this.verifyStorageKey.bind(this)
    this.fetchUserPrayers = this.fetchUserPrayers.bind(this)
    this.fetchUserFollows = this.fetchUserFollows.bind(this)
    this.userLogout = this.userLogout.bind(this)
  }

  componentDidMount() {
    this.verifyStorageKey()
    Notifications.addListener(this.handleNotification)
  }

  handleNotification(notification) {
    console.log('notification: ', notification)
    this.setState({ notification })
    console.log('state: ', this.state)
  }

  async verifyStorageKey() {
    const payload = await AsyncStorage.getItem('payload')
    const payloadJson = JSON.parse(payload)
    if (payloadJson) {
      this.setState({
        isLoggedIn: true,
        userId: payloadJson.userId,
        jwToken: payloadJson.jwToken,
      })
      this.fetchUserPrayers(payloadJson.userId)
      this.fetchUserFollows(payloadJson.userId)
    }
  }

  async fetchUserPrayers(userId) {
    const prayers = await axios.get(`http://${IP_ADDRESS}:8080/api/users/${userId}/prayers`)
    if (prayers) {
      this.setState({
        prayers: prayers.data
      })
    }
  }

  async fetchUserFollows(userId) {
    const follows = await axios.get(`http://${IP_ADDRESS}:8080/api/users/${userId}/follows`)
    if (follows) {
      this.setState({
        follows: follows.data // TODO: CLEAN BACKEND
      })
    }
  }

  async userLogout() {
    try {
      await AsyncStorage.removeItem('payload')
      this.setState({
        isLoggedIn: false,
        userId: null,
        jwToken: null,
        prayers: null,
        follows: null,
      })
      AlertIOS.alert('Logout Successful')
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message)
    }
  }

  render() {
    return (
      <Swiper
        showsPagination={false}
        loop={false}
        index={1}
      >
        <Settings userLogout={this.userLogout}/>
        <Home />
        <Accept
          fetchUserFollows={this.fetchUserFollows}
        />
        <Submit
          isLoggedIn={this.state.isLoggedIn}
          verifyStorageKey={this.verifyStorageKey}
          userId={this.state.userId}
          fetchUserPrayers={this.fetchUserPrayers}
        />
        <Manage
          prayers={this.state.prayers}
          follows={this.state.follows}
          isLoggedIn={this.state.isLoggedIn}
        />
      </Swiper>
    )
  }
}
