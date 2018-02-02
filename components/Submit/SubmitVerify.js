import React from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import SubmitForm from './SubmitForm'
import ss from '../StyleSheet'
import { LinearGradient } from 'expo'

const SubmitVerify = ({ isLoggedIn, screenProps }) => (
  <View style={ss.invisiContainer}>
    <View style={ss.backgroundImageFrame}>
      <Image
        source={require('../../assets/images/Rome-Submit.jpg')}
        style={ss.backgroundImage} />
    </View>
    <View style={ss.backgroundImageFrame}>
      <LinearGradient
        colors={['#fff', 'transparent']}
        start={[0.5, 0.35]}
        style={ss.flex1} />
    </View>
    { !isLoggedIn
      ? <LoginForm
          verifyStorageKey={screenProps.verifyStorageKey} />
      : <SubmitForm />
    }
  </View>
)

const mapState = state => ({
  isLoggedIn: state.auth.isLoggedIn,
})

export default connect(mapState)(SubmitVerify)
