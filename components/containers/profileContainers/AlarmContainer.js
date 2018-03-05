import React from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { fetchUserAlarms } from '../../../store'
import { Notifications } from 'expo'
import { AlarmPresenter } from '../../presenters'

class AlarmContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenTime: new Date()
    }
    this.setTime = this.setTime.bind(this)
    this.saveNewAlarm = this.saveNewAlarm.bind(this)
    this.deleteAlarm = this.deleteAlarm.bind(this)
    this.clearAlarms = this.clearAlarms.bind(this)
  }

  setTime(newTime) {
    this.setState({ chosenTime: newTime })
  }

  async saveNewAlarm() {
    let chosenTime =  this.state.chosenTime.getTime()
    const now = new Date()
    if (chosenTime - now < 0) {
      chosenTime += 86400000
    }
    try {
      const reminderId = await Notifications.scheduleLocalNotificationAsync({
        title: 'Strengthen Your Faith',
        body: 'Time to pray',
        data: { body: 'Time to pray' },
        sound: true
      }, {
        time: chosenTime,
        repeat: 'day'
      })
      const oldAlarms = await AsyncStorage.getItem('userAlarms')
      const oldAlarmsJson = await JSON.parse(oldAlarms)
      const spreadAlarms =
        oldAlarmsJson
        ? [...oldAlarmsJson, {time: chosenTime, reminderId}]
        : [{time: chosenTime, reminderId}]
      const updatedAlarms = await JSON.stringify(spreadAlarms)
      await AsyncStorage.setItem('userAlarms', updatedAlarms)
      this.props.refreshUserAlarms()
    } catch (error) {
      console.error(error)
    }
  }

  async deleteAlarm(alarm) {
    try {
      await Notifications.cancelScheduledNotificationAsync(alarm.reminderId)
      const oldAlarms = await AsyncStorage.getItem('userAlarms')
      const oldAlarmsJson = await JSON.parse(oldAlarms)
      const filteredAlarms = oldAlarmsJson.filter(oldAlarm => {
        return oldAlarm.reminderId !== alarm.reminderId
      })
      const updatedAlarms = await JSON.stringify(filteredAlarms)
      await AsyncStorage.setItem('userAlarms', updatedAlarms)
      this.props.refreshUserAlarms()
    } catch (error) {
      console.error(error)
    }
  }

  async clearAlarms() {
    try {
      await Notifications.cancelAllScheduledNotificationsAsync()
      await AsyncStorage.removeItem('userAlarms')
      this.props.refreshUserAlarms()
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <AlarmPresenter
        setTime={this.setTime}
        saveNewAlarm={this.saveNewAlarm}
        deleteAlarm={this.deleteAlarm}
        clearAlarms={this.clearAlarms}
        chosenTime={this.state.chosenTime} />
    )
  }
}

const mapDispatch = dispatch => ({
  refreshUserAlarms: () => dispatch(fetchUserAlarms())
})

export default connect(null, mapDispatch)(AlarmContainer)
