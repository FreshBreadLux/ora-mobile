import React from 'react'
import { Text, View } from 'react-native'
import styles from '../StyleSheet'

export const determineChoirTitle = userTotalPrayers => {
  switch (true) {
    case userTotalPrayers < 100 && userTotalPrayers > 31:
    return (
      <Text style={[styles.buttonText]}>First Choir</Text>
    )
  case userTotalPrayers < 32:
    return (
      <Text style={[styles.buttonText]}>Welcome</Text>
    )
  default:
    return (
      <Text style={[styles.buttonText]}>Welcome</Text>
    )
  }
}

export const determineChoirName = userTotalPrayers => {
  switch (true) {
    case userTotalPrayers < 100 && userTotalPrayers > 31:
    return (
      <Text style={styles.choirName}>Angel</Text>
    )
  case userTotalPrayers < 32:
    return (
      <Text style={styles.choirName}>New Member</Text>
    )
  default:
    return (
      <Text style={styles.choirName}>New Member</Text>
    )
  }
}

export const determineChoirText = userTotalPrayers => {
  switch (true) {
    case userTotalPrayers < 100 && userTotalPrayers > 31:
      return (
        <Text style={styles.font16}>First Choir: Standard Angels</Text>
      )
    case userTotalPrayers < 32:
      return (
        <Text style={styles.font16}>Welcome to Ora!</Text>
      )
    default:
      return (
        <Text style={styles.font16}>Welcome to Ora!</Text>
      )
  }
}

