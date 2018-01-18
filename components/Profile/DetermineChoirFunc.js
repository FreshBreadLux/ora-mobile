import React from 'react'
import { Text, View } from 'react-native'
import styles from '../StyleSheet'

export const determineChoirTitle = userTotalPrayers => {
  switch (true) {
    case userTotalPrayers < 100:
    return (
      <Text style={styles.font16}>First Choir:</Text>
    )
  case userTotalPrayers < 32:
    return (
      <Text style={styles.font16}>New Member:</Text>
    )
  default:
    return (
      <Text style={styles.font16}>New Member:</Text>
    )
  }
}

export const determineChoirName = userTotalPrayers => {
  switch (true) {
    case userTotalPrayers < 100:
    return (
      <Text style={styles.buttonText}>Angel</Text>
    )
  case userTotalPrayers < 32:
    return (
      <Text style={styles.buttonText}>Not Ranked</Text>
    )
  default:
    return (
      <Text style={styles.buttonText}>Not Ranked</Text>
    )
  }
}

export const determineChoirText = userTotalPrayers => {
  switch (true) {
    case userTotalPrayers < 100:
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

