import React from 'react'
import { TimePickerAndroid } from 'react-native'

const YEAR = new Date().getFullYear()
const MONTH = new Date().getMonth()
const DAY = new Date().getDate()

export default class TimePickerAndroidContainer extends React.Component {
  componentDidMount() {
    this.showTimePickerAndroid()
  }

  async showTimePickerAndroid() {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        mode: 'spinner'
      })
      if (action !== TimePickerAndroid.dismissedAction) {
        const chosenTime = new Date(YEAR, MONTH, DAY, hour, minute)
        this.props.setTime(chosenTime)
      }
    } catch ({ code, message }) {
      console.warn('Cannot open time picker: ', message)
    }
  }

  render() {
    return (null)
  }
}
