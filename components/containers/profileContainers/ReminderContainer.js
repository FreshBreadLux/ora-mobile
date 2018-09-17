import React from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { fetchUserAlarms } from '../../../store'
import { Notifications } from 'expo'
import { ReminderPresenter } from '../../presenters'

class ReminderContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenTime: new Date(),
      androidPickerVisible: false,
      timeWasSelected: false
    }
    this.setTime = this.setTime.bind(this)
    this.toggleAndroidPicker = this.toggleAndroidPicker.bind(this)
    this.toggleTimeWasSelected = this.toggleTimeWasSelected.bind(this)
    this.saveNewAlarm = this.saveNewAlarm.bind(this)
    this.deleteAlarm = this.deleteAlarm.bind(this)
    this.clearAlarms = this.clearAlarms.bind(this)
  }

  setTime(newTime) {
    this.setState({ chosenTime: newTime })
  }

  toggleAndroidPicker() {
    this.setState({ androidPickerVisible: !this.state.androidPickerVisible })
  }

  toggleTimeWasSelected() {
    this.setState({ timeWasSelected: !this.state.timeWasSelected })
  }

  async saveNewAlarm() {
    let chosenTime =  this.state.chosenTime.getTime()
    const now = new Date()
    if (chosenTime - now < 0) {
      chosenTime += 86400000
    }
    try {
      const reminderId = await Notifications.scheduleLocalNotificationAsync({
        title: 'Cultivate a Life of Devotion',
        body: 'Take time to pray',
        data: { body: 'Take time to pray' },
        sound: true,
        android: {
          channelId: 'reminders'
        }
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
      <ReminderPresenter
        setTime={this.setTime}
        toggleAndroidPicker={this.toggleAndroidPicker}
        toggleTimeWasSelected={this.toggleTimeWasSelected}
        saveNewAlarm={this.saveNewAlarm}
        deleteAlarm={this.deleteAlarm}
        clearAlarms={this.clearAlarms}
        timeWasSelected={this.state.timeWasSelected}
        androidPickerVisible={this.state.androidPickerVisible}
        chosenTime={this.state.chosenTime} />
    )
  }
}

const mapDispatch = dispatch => ({
  refreshUserAlarms: () => dispatch(fetchUserAlarms())
})

export default connect(null, mapDispatch)(ReminderContainer)
