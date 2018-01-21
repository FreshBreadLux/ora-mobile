import React from 'react'
import { View, Image } from 'react-native'
import LoginForm from './LoginForm'
import SubmitForm from './SubmitForm'
import styles from '../StyleSheet'
import { LinearGradient } from 'expo'

const SubmitVerify = ({ screenProps }) => (
  <View style={styles.invisiContainer}>
    <View style={styles.backgroundImageFrame}>
      <Image
        source={require('../../assets/images/nightSky.jpg')}
        style={styles.backgroundImage} />
    </View>
    <View style={styles.backgroundImageFrame}>
      <LinearGradient
        colors={['#fff', 'transparent']}
        start={[0.5, 0.14]}
        style={styles.flex1} />
    </View>
    { !screenProps.isLoggedIn
      ? <LoginForm
          verifyStorageKey={screenProps.verifyStorageKey}
        />
      : <SubmitForm
          fetchUserPrayers={screenProps.fetchUserPrayers}
          userId={screenProps.userId}
        />
    }
  </View>
)

export default SubmitVerify
