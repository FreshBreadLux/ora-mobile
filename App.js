import React from 'react'
import { AppLoading, Asset, Font } from 'expo'
import { StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { Settings, Home, Accept, Submit, Manage } from './components'


/** ASYN FUNCTIONS FOR LOADING ASSETS ONTO THE PHONE **/
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
    }
  }
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
      <Swiper
        style={styles.wrapper}
        index={1}
        showsPagination={false}
        loop={false}
      >
        <Settings />
        <Home />
        <Accept />
        <Submit />
        <Manage />
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
})
