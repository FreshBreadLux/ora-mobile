import React from 'react'
import { View, Image } from 'react-native'
import LoginForm from './LoginForm'
import SubmitForm from './SubmitForm'
import styles from '../StyleSheet'

const SubmitVerify = ({ screenProps }) => (
  <View style={styles.invisiContainer}>
    <View style={styles.backgroundImageFrame}>
      <Image
        source={require('../../assets/images/nightSky.jpg')}
        style={styles.backgroundImage}
      />
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
