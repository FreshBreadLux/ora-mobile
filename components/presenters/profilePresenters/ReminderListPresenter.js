import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const ReminderListPresenter = ({ alarms, clearAlarms }) => (
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
