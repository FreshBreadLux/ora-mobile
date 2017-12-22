import React from 'react'
import { Image, View, Text } from 'react-native'
import styles from '../StyleSheet'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
        <Image
          style={{flex: 1, resizeMode: 'cover', width: '100%'}}
          source={{uri: 'https://static.pexels.com/photos/414727/pexels-photo-414727.jpeg'}}
        />
        </View>
        <View style={[styles.cover, styles.center]}>
          <Text style={styles.title}>Ora</Text>
        </View>
      </View>
    )
  }
}
