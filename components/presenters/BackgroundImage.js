import React from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
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
    default:
      return null
  }
}

const BackgroundImage = ({ componentName, theme }) => {
  const URL = determineURL(componentName, theme)
  return (
    <View style={ss.backgroundImageFrame}>
      <Image
        source={URL}
        style={ss.backgroundImage} />
    </View>
  )
}

const mapState = state => ({
  theme: state.userInfo.theme
})

export default connect(mapState)(BackgroundImage)
