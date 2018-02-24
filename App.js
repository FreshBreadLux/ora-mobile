import React from 'react'
import { AppLoading, Asset, Font } from 'expo'
import { Image } from 'react-native'
import { Provider } from 'react-redux'
import Root from './components/Root'
import store from './store'


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
    require('./assets/images/Mountains/Accept.jpg'),
    require('./assets/images/Mountains/Submit.jpg'),
    require('./assets/images/Mountains/Profile.jpg'),
    require('./assets/images/Mountains/Prayers.jpg'),
    require('./assets/images/Mountains/Follows.jpg'),
    require('./assets/images/Adoration.jpg'),
    require('./assets/images/Choirs.jpg'),
  ])
  const fontAssets = cacheFonts([{
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    raleway: require('./assets/fonts/Raleway-Regular.ttf'),
    eb: require('./assets/fonts/EBGaramond-Regular.ttf'),
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
