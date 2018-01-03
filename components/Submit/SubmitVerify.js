import React from 'react'
import { View, Image } from 'react-native'
import LoginForm from './LoginForm'
import SubmitForm from './SubmitForm'
import styles from '../StyleSheet'

export default class SubmitVerify extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
          <Image
            source={require('../../assets/images/nightSky.jpg')}
            style={{flex: 1, resizeMode: 'cover', width: '100%'}}
          />
        </View>
        { !this.props.isLoggedIn
          ? <LoginForm
              verifyStorageKey={this.props.verifyStorageKey}
            />
          : <SubmitForm
              fetchUserPrayers={this.props.fetchUserPrayers}
              userId={this.props.userId}
            />
        }
      </View>
    )
  }
}
