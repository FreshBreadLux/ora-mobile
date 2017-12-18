import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.home}>
        <Image
          style={{flex: 1, resizeMode: 'cover', width: '100%'}}
          source={{uri: 'https://static.pexels.com/photos/414727/pexels-photo-414727.jpeg'}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
})
