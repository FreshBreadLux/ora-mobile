import React from 'react'
import { View, Text, Platform, DatePickerIOS, TimePickerAndroid, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const AlarmPresenter = ({ chosenTime, setTime, saveNewAlarm, alarms, deleteAlarm, clearAlarms }) => (
  <View style={[ss.whiteContainer]}>
    {Platform.OS === 'ios'
    ? <DatePickerIOS
        mode="time"
        date={chosenTime}
        onDateChange={setTime} />
    : <TimePickerAndroid />
    }
    <View style={[ss.invisiContainer, ss.padding15]}>
      <View style={[ss.padding15, ss.center]}>
        <TouchableOpacity
          style={[ss.blackButton]}
          onPress={saveNewAlarm}>
          <Text style={[ss.subHeader, ss.whiteText]}>save new alarm</Text>
        </TouchableOpacity>
      </View>
      {alarms.map(alarm => {
        const time = new Date(alarm.time).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'})
        return (
          <View key={alarm.reminderId} style={[ss.row, ss.addViewSpacing, ss.spaceBetween, ss.listBottomBorder]}>
            <Text style={{fontSize: 28}}>{time}</Text>
            <TouchableOpacity
              onPress={() => deleteAlarm(alarm)}>
              <Ionicons
                name="ios-trash-outline"
                size={28}
                color="#555" />
            </TouchableOpacity>
          </View>
      )})}
      <View style={[ss.padding15, ss.center]}>
        <TouchableOpacity
          style={[ss.blackButton]}
          onPress={clearAlarms}>
          <Text style={[ss.subHeader, ss.whiteText]}>clear all alarms</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)

const mapState = state => ({
  alarms: state.alarms
})

export default connect(mapState)(AlarmPresenter)
