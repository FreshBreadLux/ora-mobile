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
  }

  componentDidMount() {
    this.verifyStorageKey()
  }

  async verifyStorageKey() {
    const payload = await AsyncStorage.getItem('payload')
    if (payload) this.setState({
      isLoggedIn: true,
      userId: payload.userId,
      jwToken: payload.jwToken,
    })
  }

  render() {
    return (
      <Swiper
        showsPagination={false}
        loop={false}
        index={1}
      >
        <Settings />
        <Home />
        <Accept />
        <Submit
          isLoggedIn={this.state.isLoggedIn}
          verifyStorageKey={this.verifyStorageKey}
        />
        <Manage />
      </Swiper>
    )
  }
}
