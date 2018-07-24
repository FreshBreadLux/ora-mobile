import React from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo'
import { connect } from 'react-redux'
import BackgroundImage from './BackgroundImage'
import ss from '../StyleSheet'

const BackgroundImageContainer = ({ componentName, theme }) => {
  if (theme) {
    return <BackgroundImage componentName={componentName} theme={theme} />
  }
  return (
    <View style={ss.backgroundImageFrame}>
      <LinearGradient
        colors={['#1e3799', '#0c2461']}
        start={[0.5, 0]}
        style={ss.flex1} />
    </View>
  )
}

const mapState = state => ({
  theme: state.userInfo.theme
})

export default connect(mapState)(BackgroundImageContainer)
