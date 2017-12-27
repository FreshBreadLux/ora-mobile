import React from 'react'
import { AppLoading, Asset, Font, Permissions, Notifications } from 'expo'
import { StyleSheet, Image } from 'react-native'
import SwiperClass from './Swiper'

const PUSH_ENDPOINT = 'https://exponent-push-server.herokuapp.com/tokens'

/** ASYNC FUNCTIONS FOR LOADING ASSETS ONTO THE PHONE **/
function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font))
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false,
      receivedNotification: null,
      lastNotificationId: null,
    }
    this.registerForPushNotificationsAsync = this.registerForPushNotificationsAsync.bind(this)
  }

  componentWillMount() {
    this.registerForPushNotificationsAsync();
    Notifications.addListener((receivedNotification) => {
      this.setState({
        receivedNotification,
        lastNotificationId: receivedNotification.notificationId,
      })
    })
  }

  async registerForPushNotificationsAsync() {
    let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);
    if (status !== 'granted') return
    let token = await Notifications.getExponentPushTokenAsync();
    return fetch(PUSH_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: {
          value: token,
        },
      }),
    });
  };
  // WAIT FOR ASSETS TO BE LOADED
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      'https://static.pexels.com/photos/414727/pexels-photo-414727.jpeg',
      require('./assets/images/milky-way.jpg'),
    ])
    const fontAssets = cacheFonts([{
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'
    )}])
    await Promise.all([...imageAssets, ...fontAssets])
  }
  // ONCE ASSETS ARE LOADED, RENDER THE APP
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }
    return (
      <SwiperClass />
    )
  }
}
