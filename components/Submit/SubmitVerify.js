import React from 'react'
import { View, Image } from 'react-native'
import LoginForm from './LoginForm'
import SubmitForm from './SubmitForm'
import styles from '../StyleSheet'

const SubmitVerify = ({ isLoggedIn, verifyStorageKey, fetchUserPrayers, userId }) => (
  <View style={styles.invisiContainer}>
    <View style={styles.backgroundImageFrame}>
      <Image
        source={require('../../assets/images/nightSky.jpg')}
        style={styles.backgroundImage}
      />
    </View>
    { !isLoggedIn
      ? <LoginForm
          verifyStorageKey={verifyStorageKey}
        />
      : <SubmitForm
          fetchUserPrayers={fetchUserPrayers}
          userId={userId}
        />
    }
  </View>
)

export default SubmitVerify
