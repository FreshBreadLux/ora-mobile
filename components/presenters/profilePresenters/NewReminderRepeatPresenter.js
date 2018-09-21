import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const DAYS_OF_THE_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const renderRepeatSelectionButtons = (arrayOfDays, repeatSelection, setRepeatSelection, setNewReminderRepeat) => {
  return arrayOfDays.map(day => {
    return (
      <TouchableOpacity
        key={day}
        onPress={() => {
          setRepeatSelection(day)
          setNewReminderRepeat(day)
        }}>
        <View style={[ss.row, ss.spaceBetween, ss.whiteBackground, ss.bottomBorder]}>
          <Text style={[ss.tagLine, ss.padding10]}>Every {day}</Text>
          <Ionicons
            name="md-checkmark-circle"
            size={26}
            style={repeatSelection === day
              ? [ss.padding10, {color: 'rgb(69, 119, 238)'}]
              : [ss.padding10, {color: '#fff'}]} />
        </View>
      </TouchableOpacity>
    )
  })
}

const NewReminderRepeatPresenter = ({ repeatSelection, setRepeatSelection, setNewReminderRepeat }) => {
  return (
  <View style={ss.invisiContainer}>
    <TouchableOpacity
      style={{marginTop: 30}}
      onPress={() => {
        setRepeatSelection('Daily')
        setNewReminderRepeat('Daily')
      }}>
      <View style={[ss.row, ss.spaceBetween, ss.whiteBackground, ss.bottomBorder, {borderTopColor: '#ccc', borderTopWidth: 1}]}>
        <Text style={[ss.tagLine, ss.padding10]}>Daily</Text>
        <Ionicons
          name="md-checkmark-circle"
          size={26}
          style={repeatSelection === 'Daily'
            ? [ss.padding10, {color: 'rgb(69, 119, 238)'}]
            : [ss.padding10, {color: '#fff'}]} />
      </View>
    </TouchableOpacity>
    {renderRepeatSelectionButtons(DAYS_OF_THE_WEEK, repeatSelection, setRepeatSelection, setNewReminderRepeat)}
  </View>
)}

export default NewReminderRepeatPresenter
