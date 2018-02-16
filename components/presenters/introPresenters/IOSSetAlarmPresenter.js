import React from 'react'
import { View, Text, DatePickerIOS, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const IOSSetAlarmPresenter = ({ chosenTime, setTime, handleSubmit }) => (
  <View style={[ss.whiteContainer]}>
    <View style={[ss.padding15, ss.center]}>
      <Text style={[ss.body, ss.centerText]}>It's important to make prayer a part of your daily routine. Select a time to be reminded each day to pray. You can always change this setting later in your profile.</Text>
    </View>
    <DatePickerIOS
        mode="time"
        date={chosenTime}
        onDateChange={setTime} />
    <View style={[ss.padding15, ss.center]}>
      <TouchableOpacity
        style={[ss.blackButton, ss.halfWidth]}
        onPress={handleSubmit}>
        <Text style={[ss.subHeader, ss.whiteText]}>get started</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default IOSSetAlarmPresenter
