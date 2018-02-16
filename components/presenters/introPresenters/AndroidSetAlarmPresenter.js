import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { TimePickerAndroidContainer } from '../../containers'
import ss from '../../StyleSheet'

const AndroidSetAlarmPresenter = ({ androidPickerVisible, setTime, handleSubmit, timeWasSelected, toggleAndroidPicker, toggleTimeWasSelected }) => (
  <View style={[ss.whiteContainer]}>
    <View style={[ss.padding15, ss.center]}>
      <Text style={[ss.body, ss.centerText]}>It's important to make prayer a part of your daily routine. Select a time to be reminded each day to pray. You can always change this setting later in your profile.</Text>
    </View>
    {androidPickerVisible
    ? <TimePickerAndroidContainer
        setTime={setTime}
        toggleAndroidPicker={toggleAndroidPicker}
        toggleTimeWasSelected={toggleTimeWasSelected} />
    : null
    }
    {timeWasSelected
    ? <View style={[ss.padding15, ss.center]}>
        <TouchableOpacity
          style={[ss.blackButton, ss.halfWidth]}
          onPress={handleSubmit}>
          <Text style={[ss.subHeader, ss.whiteText]}>get started</Text>
        </TouchableOpacity>
      </View>
    : <View style={[ss.padding15, ss.center]}>
        <TouchableOpacity
          style={[ss.blackButton, ss.halfWidth]}
          onPress={toggleAndroidPicker}>
          <Text style={[ss.subHeader, ss.whiteText]}>select a time</Text>
        </TouchableOpacity>
      </View>
    }
  </View>
)

export default AndroidSetAlarmPresenter
