import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import Home from './components/Home'

export default class App extends React.Component {
  render() {
    return (
      <Swiper style={styles.wrapper} index={1} showsPagination={false}>
        <View style={styles.settings}>
          <Text>Settings</Text>
        </View>
        <Home />
        <View style={styles.accept}>
          <Text>Accept</Text>
        </View>
        <View style={styles.submit}>
          <Text>Submit</Text>
        </View>
        <View style={styles.manage}>
          <Text>Manage</Text>
        </View>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  settings: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accept: {
    flex: 1,
    backgroundColor: 'antiquewhite',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submit: {
    flex: 1,
    backgroundColor: 'bisque',
    alignItems: 'center',
    justifyContent: 'center',
  },
  manage: {
    flex: 1,
    backgroundColor: 'blanchedalmond',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
