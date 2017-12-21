import React from 'react'
import { AsyncStorage, AlertIOS } from 'react-native'
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
    }
    this.verifyStorageKey = this.verifyStorageKey.bind(this)
    this.userLogout = this.userLogout.bind(this)
  }

  componentDidMount() {
    this.verifyStorageKey()
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
      axios.get(`http://${IP_ADDRESS}:8080/api/users/${payloadJson.userId}/prayers`)
      .then(prayers => this.setState({
        prayers: prayers.data
      }))
      .catch(console.error)
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
        <Accept />
        <Submit
          isLoggedIn={this.state.isLoggedIn}
          verifyStorageKey={this.verifyStorageKey}
          userId={this.state.userId}
        />
        <Manage prayers={this.state.prayers}/>
      </Swiper>
    )
  }
}
