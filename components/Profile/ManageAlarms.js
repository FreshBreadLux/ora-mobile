import React from 'react'
import { View, Text, Platform, DatePickerIOS, TimePickerAndroid, TouchableOpacity, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { fetchUserAlarms } from '../../store'
import { Notifications } from 'expo'
import ss from '../StyleSheet'

class ManageAlarms extends React.Component {
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
        title: 'Ora',
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
      <View style={[ss.whiteContainer]}>
        {Platform.OS === 'ios'
        ? <DatePickerIOS
            mode="time"
            date={this.state.chosenTime}
            onDateChange={this.setTime} />
        : <TimePickerAndroid />
        }
        <View style={[ss.padding15, ss.center]}>
          <TouchableOpacity
            style={[ss.blackButton, ss.halfWidth]}
            onPress={this.saveNewAlarm}>
            <Text style={[ss.subHeader, ss.whiteText]}>save new alarm</Text>
          </TouchableOpacity>
        </View>
        {this.props.alarms.map(alarm => {
          const time = new Date(alarm.time).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'})
          return (
            <View key={alarm.reminderId} style={ss.listBottomBorder}>
              <Text>{time}</Text>
              <TouchableOpacity
                onPress={() => this.deleteAlarm(alarm)}>
                <Text>delete</Text>
              </TouchableOpacity>
            </View>
        )})}
        <View style={[ss.padding15, ss.center]}>
          <TouchableOpacity
            style={[ss.blackButton, ss.halfWidth]}
            onPress={this.clearAlarms}>
            <Text style={[ss.subHeader, ss.whiteText]}>clear all alarms</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapState = state => ({
  alarms: state.alarms
})

const mapDispatch = dispatch => ({
  refreshUserAlarms() {
    return dispatch(fetchUserAlarms())
  }
})

export default connect(mapState, mapDispatch)(ManageAlarms)
