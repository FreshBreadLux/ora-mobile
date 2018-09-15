import React from 'react'
import { AppLoading, Asset, Font } from 'expo'
import { Image } from 'react-native'
import { Provider } from 'react-redux'
import Root from './components/Root'
import store from './store'
import Sentry from 'sentry-expo'

Sentry.config('https://912d6f61ddf242e6a1cc008fbfb92369@sentry.io/1236350').install()

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

// WAIT FOR ASSETS TO BE LOADED
async function _loadAssetsAsync() {
  const imageAssets = cacheImages([
    require('./assets/images/Rome/Accept.jpg'),
    require('./assets/images/Rome/Submit.jpg'),
    require('./assets/images/Rome/Profile.jpg'),
    require('./assets/images/Rome/Prayers.jpg'),
    require('./assets/images/Rome/Follows.jpg'),
    require('./assets/images/Rome/Reflection.jpg'),
    require('./assets/images/Mountains/Accept.jpg'),
    require('./assets/images/Mountains/Submit.jpg'),
    require('./assets/images/Mountains/Profile.jpg'),
    require('./assets/images/Mountains/Prayers.jpg'),
    require('./assets/images/Mountains/Follows.jpg'),
    require('./assets/images/Mountains/Reflection.jpg'),
    require('./assets/images/Adoration.jpg'),
    require('./assets/images/Choirs.jpg'),
    require('./assets/images/bobby-headshot.jpg'),
  ])
  const fontAssets = cacheFonts([{
    eczar: require('./assets/fonts/Eczar-Regular.ttf'),
    eczarBold: require('./assets/fonts/Eczar-Bold.ttf'),
    raleway: require('./assets/fonts/Raleway-Regular.ttf'),
    ralewayBold: require('./assets/fonts/Raleway-Bold.ttf'),
    eb: require('./assets/fonts/EBGaramond-Regular.ttf'),
    libreBaskerville: require('./assets/fonts/LibreBaskerville-Regular.ttf'),
    gentiumBasic: require('./assets/fonts/GenBasR.ttf'),
  }])
  await Promise.all([...imageAssets, ...fontAssets])
  // implicit promise for having completed above side effects
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false,
    }
  }

  // ONCE ASSETS ARE LOADED, RENDER THE APP
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={_loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}
