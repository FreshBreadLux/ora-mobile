import React from 'react'
import { AsyncStorage } from 'react-native'
import Swiper from 'react-native-swiper'
import { Settings, Home, Accept, Submit, Manage } from './components'

export default class SwiperClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      userId: null,
      jwToken: null,
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
    if (payloadJson) this.setState({
      isLoggedIn: true,
      userId: payloadJson.userId,
      jwToken: payloadJson.jwToken,
    })
  }

  async userLogout() {
    try {
      await AsyncStorage.removeItem('payload')
      this.setState({
        isLoggedIn: false,
        userId: null,
        jwToken: null,
      })
      AlertIOS.alert('Logout Successful')
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message)
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
        <Manage />
      </Swiper>
    )
  }
}
