import React from 'react'
import { View, Text, Platform, DatePickerIOS, TimePickerAndroid, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const AlarmPresenter = ({ chosenTime, setTime, saveNewAlarm, alarms, deleteAlarm, clearAlarms }) => (
  <View style={[ss.whiteContainer, ss.padding15]}>
    <View style={[ss.paddingTop15, ss.topBorder, ss.center]}>
      <Text style={[ss.subHeader, ss.centerText]}>Add a New Daily Reminder</Text>
    </View>
    {Platform.OS === 'ios'
    ? <DatePickerIOS
        mode="time"
        date={chosenTime}
        onDateChange={setTime} />
    : <TimePickerAndroid />
    }
    <View style={[ss.paddingBottom15, ss.center]}>
      <TouchableOpacity
        onPress={saveNewAlarm}>
        <View style={ss.row}>
          <Ionicons
            name="ios-add-circle-outline"
            size={17}
            color="#1e3799" />
          <Text style={[ss.subBody, {color: '#1e3799'}, ss.paddingLeft7]}>SAVE</Text>
        </View>
      </TouchableOpacity>
    </View>
    <ScrollView>
      <View style={[ss.addLargeViewSpacing, ss.center]}>
        <Text style={[ss.subHeader, ss.centerText]}>My Reminders</Text>
      </View>
      {alarms.map(alarm => {
        const time = new Date(alarm.time).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'})
        return (
          <View key={alarm.reminderId} style={[ss.row, ss.addViewSpacing, ss.spaceBetween, ss.listBottomBorder]}>
            <Text style={{fontSize: 24}}>{time}</Text>
            <TouchableOpacity
              onPress={() => deleteAlarm(alarm)}>
              <Ionicons
                name="ios-trash-outline"
                size={28}
                color="#555" />
            </TouchableOpacity>
          </View>
      )})}
      <View style={[ss.addMedViewSpacing, ss.center]}>
        <TouchableOpacity
          onPress={clearAlarms}>
          <View style={ss.row}>
            <Ionicons
              name="ios-close-circle-outline"
              size={17}
              color="#555" />
            <Text style={[ss.subBody, ss.greyText, ss.paddingLeft7]}>CLEAR ALL</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
)

const mapState = state => ({
  alarms: state.alarms
})

export default connect(mapState)(AlarmPresenter)
