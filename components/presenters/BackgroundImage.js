import React from 'react'
import { View, Image, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import ss from '../StyleSheet'

const determineURL = (componentName, theme) => {
  switch (true) {
    case ((theme === 'Rome') && (componentName === 'Accept')):
      return require('../../assets/images/Rome/Accept.jpg')
    case ((theme === 'Rome') && (componentName === 'Follows')):
      return require('../../assets/images/Rome/Follows.jpg')
    case ((theme === 'Rome') && (componentName === 'Prayers')):
      return require('../../assets/images/Rome/Prayers.jpg')
    case ((theme === 'Rome') && (componentName === 'Submit')):
      return require('../../assets/images/Rome/Submit.jpg')
    case ((theme === 'Rome') && (componentName === 'Profile')):
      return require('../../assets/images/Rome/Profile.jpg')
    case ((theme === 'Rome') && (componentName === 'Reflection')):
      return require('../../assets/images/Rome/Reflection.jpg')
    case ((theme === 'Mountains') && (componentName === 'Accept')):
      return require('../../assets/images/Mountains/Accept.jpg')
    case ((theme === 'Mountains') && (componentName === 'Follows')):
      return require('../../assets/images/Mountains/Follows.jpg')
    case ((theme === 'Mountains') && (componentName === 'Prayers')):
      return require('../../assets/images/Mountains/Prayers.jpg')
    case ((theme === 'Mountains') && (componentName === 'Submit')):
      return require('../../assets/images/Mountains/Submit.jpg')
    case ((theme === 'Mountains') && (componentName === 'Profile')):
      return require('../../assets/images/Mountains/Profile.jpg')
    case ((theme === 'Mountains') && (componentName === 'Reflection')):
      return require('../../assets/images/Mountains/Reflection.jpg')
    default:
      return null
  }
}

export default class BackgroundImage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const URL = determineURL(this.props.componentName, this.props.theme)
    return (
      <View style={ss.backgroundImageFrame}>
        <View style={ss.backgroundImageFrame}>
          <LinearGradient
            colors={['#1e3799', '#0c2461']}
            start={[0.5, 0]}
            style={ss.flex1} />
        </View>
        <Animated.View style={ss.backgroundImageFrame}>
          <Image
            source={URL}
            style={ss.backgroundImage} />
        </Animated.View>
      </View>
    )
  }
}
