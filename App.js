import React from 'react'
import { AppLoading, Asset, Font } from 'expo'
import { Image } from 'react-native'
import Root from './Root'


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
    }
  }
  // WAIT FOR ASSETS TO BE LOADED
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      'https://static.pexels.com/photos/414727/pexels-photo-414727.jpeg',
      require('./assets/images/milky-way.jpg'),
      require('./assets/images/beach.jpg'),
      require('./assets/images/Rome.jpg'),
      require('./assets/images/Rome-Submit.jpg'),
      require('./assets/images/Rome-Profile.jpg'),
      require('./assets/images/Rome-Prayers.jpg'),
      require('./assets/images/Rome-Follows.jpg'),
    ])
    const fontAssets = cacheFonts([{
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'raleway': require('./assets/fonts/Raleway-Regular.ttf'),
      'eb': require('./assets/fonts/EBGaramond-Regular.ttf'),
    }])
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
      <Root />
    )
  }
}
