import React from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { fetchUserAlarms } from '../../../store'
import { Notifications } from 'expo'
import { NewReminderPresenter } from '../../presenters'

/*
  NewReminderContainer is responsible for keeping track of the information needed to create a new
  reminder. It passes methods to NewReminderPresenter, which in turn passes those methods through
  react navigation props to the respective utility screens.
*/

class NewReminderContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenTime: new Date(),
      androidPickerVisible: false,
      timeWasSelected: false,
      newReminderName: 'Requests in Ora',
      newReminderSubject: 'Cultivate a life of devotion',
      newReminderRepeat: 'Daily',
    }
    this.setTime = this.setTime.bind(this)
    this.setNewReminderName = this.setNewReminderName.bind(this)
    this.setNewReminderSubject = this.setNewReminderSubject.bind(this)
    this.setNewReminderRepeat = this.setNewReminderRepeat.bind(this)
    this.toggleAndroidPicker = this.toggleAndroidPicker.bind(this)
    this.toggleTimeWasSelected = this.toggleTimeWasSelected.bind(this)
    this.saveNewAlarm = this.saveNewAlarm.bind(this)
    this.deleteAlarm = this.deleteAlarm.bind(this)
    this.clearAlarms = this.clearAlarms.bind(this)
  }

  setTime(newTime) {
    this.setState({ chosenTime: newTime })
  }

  setNewReminderName(newReminderName) {
    this.setState({ newReminderName })
  }

  setNewReminderSubject(newReminderSubject) {
    this.setState({ newReminderSubject })
  }

  setNewReminderRepeat(newReminderRepeat) {
    this.setState({ newReminderRepeat })
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
    console.log('this.state:', this.state)
    return (
      <NewReminderPresenter
        navigation={this.props.navigation}
        setTime={this.setTime}
        setNewReminderName={this.setNewReminderName}
        newReminderName={this.state.newReminderName}
        setNewReminderSubject={this.setNewReminderSubject}
        newReminderSubject={this.state.newReminderSubject}
        setNewReminderRepeat={this.setNewReminderRepeat}
        newReminderRepeat={this.state.newReminderRepeat}
        toggleAndroidPicker={this.toggleAndroidPicker}
        toggleTimeWasSelected={this.toggleTimeWasSelected}
        saveNewAlarm={this.saveNewAlarm}
        timeWasSelected={this.state.timeWasSelected}
        androidPickerVisible={this.state.androidPickerVisible}
        chosenTime={this.state.chosenTime} />
    )
  }
}

const mapDispatch = dispatch => ({
  refreshUserAlarms: () => dispatch(fetchUserAlarms())
})

export default connect(null, mapDispatch)(NewReminderContainer)
