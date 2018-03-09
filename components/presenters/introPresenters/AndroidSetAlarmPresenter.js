import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import { TimePickerAndroidContainer } from '../../containers'
import ss from '../../StyleSheet'

const AndroidSetAlarmPresenter = ({ androidPickerVisible, setTime, handleSubmit, timeWasSelected, toggleAndroidPicker, toggleTimeWasSelected }) => (
  <View style={ss.invisiContainer}>
    <View style={ss.backgroundImageFrame}>
      <Image
        source={require('../../../assets/images/Rome/Follows.jpg')}
        style={ss.backgroundImage} />
    </View>
    <SafeAreaView style={ss.invisiContainer}>
      <View style={[ss.flex1, ss.center]}>
        <View style={[ss.fullWidth, ss.padding15, ss.opacityBackground]}>
          <Text style={[ss.subHeader, ss.centerText]}>To get started, set a daily prayer reminder. You'll be able to edit this setting later in your profile</Text>
        </View>
      </View>
      <View style={[ss.flex1, ss.center]}>
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
              <Text style={[ss.subHeader, ss.whiteText]}>GET STARTED</Text>
            </TouchableOpacity>
          </View>
        : <View style={[ss.padding15, ss.center]}>
            <TouchableOpacity
              style={[ss.blackButton, ss.halfWidth]}
              onPress={toggleAndroidPicker}>
              <Text style={[ss.subHeader, ss.whiteText]}>SELECT A TIME</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    </SafeAreaView>
  </View>
)

export default AndroidSetAlarmPresenter
