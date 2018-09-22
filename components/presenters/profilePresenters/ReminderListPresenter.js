import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native'
import { fetchUserAlarms } from '../../../store'
import { Ionicons } from '@expo/vector-icons'
import { Notifications } from 'expo'
import ss from '../../StyleSheet'

const deleteReminder = async (reminder, refreshUserAlarms) => {
  try {
    await Notifications.cancelScheduledNotificationAsync(reminder.reminderId)
    const oldAlarms = await AsyncStorage.getItem('userAlarms')
    const oldAlarmsJson = await JSON.parse(oldAlarms)
    const filteredAlarms = oldAlarmsJson.filter(oldAlarm => {
      return oldAlarm.reminderId !== reminder.reminderId
    })
    const updatedAlarms = await JSON.stringify(filteredAlarms)
    await AsyncStorage.setItem('userAlarms', updatedAlarms)
    refreshUserAlarms()
  } catch (error) {
    console.error(error)
  }
}

const clearReminders = async refreshUserAlarms => {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync()
    await AsyncStorage.removeItem('userAlarms')
    refreshUserAlarms()
  } catch (error) {
    console.error(error)
  }
}

const ReminderListPresenter = ({ alarms, refreshUserAlarms }) => (
  <View style={ss.invisiContainer}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {alarms.map(alarm => {
        const time = new Date(alarm.time).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'})
        return (
          <View key={alarm.reminderId} style={[ss.row, ss.spaceBetween, ss.bottomBorder, ss.whiteBackground]}>
            <View style={ss.padding10}>
              <Text style={{fontSize: 24}}>{time}</Text>
              <Text style={[ss.subBody, ss.greyText]}>{alarm.repeat}</Text>
            </View>
            <View style={ss.flex1}>
              <Text numberOfLines={1} style={{fontFamily: 'ralewayBold', fontSize: 16}}>Pray for {alarm.name}</Text>
              <Text numberOfLines={1} style={ss.subBody}>{alarm.subject}</Text>
            </View>
            <TouchableOpacity
              style={ss.padding10}
              onPress={() => deleteReminder(alarm, refreshUserAlarms)}>
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
          onPress={() => clearReminders(refreshUserAlarms)}>
          <Text style={[ss.buttonText, ss.whiteText]}>CLEAR ALL</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
)

const mapState = state => ({
  alarms: state.alarms
})

const mapDispatch = dispatch => ({
  refreshUserAlarms: () => dispatch(fetchUserAlarms())
})

export default connect(mapState, mapDispatch)(ReminderListPresenter)
