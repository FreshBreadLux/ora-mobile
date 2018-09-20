import React from 'react'
import { View, TouchableOpacity, Text, Platform, DatePickerIOS } from 'react-native'
import { TimePickerAndroidContainer } from '../../containers'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const NewReminderPresenter = ({ chosenTime, setTime, androidPickerVisible, toggleAndroidPicker, toggleTimeWasSelected, timeWasSelected }) => (
  <View style={ss.invisiContainer}>
  {Platform.OS === 'ios'
  ? <DatePickerIOS
      mode="time"
      date={chosenTime}
      onDateChange={setTime} />
  : <View style={[ss.androidReminderHeight, ss.center]}>
      {androidPickerVisible
      ? <TimePickerAndroidContainer
          setTime={setTime}
          toggleAndroidPicker={toggleAndroidPicker}
          toggleTimeWasSelected={toggleTimeWasSelected} />
      : null
      }
      {timeWasSelected
      ? <View style={[ss.padding15, ss.center]}>
          <Text style={[ss.subHeader, ss.darkBlueText]}>TIME SELECTED!</Text>
        </View>
      : <View style={[ss.padding15, ss.center]}>
          <TouchableOpacity
            onPress={toggleAndroidPicker}>
            <View style={[ss.row, ss.center]}>
              <Ionicons
                name="ios-alarm"
                size={24}
                color="#1e3799" />
              <Text style={[ss.subHeader, ss.darkBlueText, ss.paddingLeft7]}>SELECT A TIME</Text>
            </View>
          </TouchableOpacity>
        </View>
      }
    </View>
  }
  </View>
)

export default NewReminderPresenter
