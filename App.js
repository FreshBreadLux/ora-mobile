import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import Home from './components/Home'
import Settings from './components/Settings'
import Accept from './components/Accept'
import Submit from './components/Submit'
import Manage from './components/Manage'

export default class App extends React.Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        index={1}
        showsPagination={false}
        loop={false}
      >
        <Settings />
        <Home />
        <Accept />
        <Submit />
        <Manage />
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
})
