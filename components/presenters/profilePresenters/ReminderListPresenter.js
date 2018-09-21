import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { Notifications } from 'expo'
import ss from '../../StyleSheet'

const deleteAlarm = async alarm => {
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

const clearAlarms = async () => {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync()
    await AsyncStorage.removeItem('userAlarms')
    this.props.refreshUserAlarms()
  } catch (error) {
    console.error(error)
  }
}

const ReminderListPresenter = ({ alarms }) => (
  <View style={ss.invisiContainer}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {alarms.map(alarm => {
        const time = new Date(alarm.time).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'})
        return (
          <View key={alarm.reminderId} style={[ss.row, ss.spaceBetween, ss.listBottomBorder, ss.whiteBackground]}>
            <Text style={[ss.padding10, {fontSize: 24}]}>{time}</Text>
            <TouchableOpacity
              style={ss.padding10}
              onPress={() => deleteAlarm(alarm)}>
              <Ionicons
                name="md-trash"
                size={28}
                color="#000" />
            </TouchableOpacity>
          </View>
      )})}
      <View style={[ss.addLargeViewSpacing, ss.center]}>
        <TouchableOpacity
          style={ss.blueButton}
          onPress={clearAlarms}>
          <Text style={[ss.buttonText, ss.whiteText]}>CLEAR ALL</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
)

const mapState = state => ({
  alarms: state.alarms
})

export default connect(mapState)(ReminderListPresenter)
