import React from 'react'
import { View, Text, DatePickerIOS, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import ss from '../../StyleSheet'

const IOSSetAlarmPresenter = ({ chosenTime, setTime, handleSubmit }) => (
  <View style={ss.invisiContainer}>
    <View style={ss.backgroundImageFrame}>
      <Image
        source={require('../../../assets/images/Rome/Follows.jpg')}
        style={ss.backgroundImage} />
    </View>
    <SafeAreaView style={ss.invisiContainer}>
      <View style={[ss.flex1, ss.padding15]}>
        <Text style={[ss.subHeader, ss.centerText, ss.whiteText]}>To get started, set a daily prayer reminder. You'll be able to edit this setting later in your profile.</Text>
      </View>
      <View style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
        <DatePickerIOS
            mode="time"
            date={chosenTime}
            onDateChange={setTime} />
      </View>
      <View style={[ss.flex1, ss.padding15, ss.center]}>
        <TouchableOpacity
          style={[ss.button, ss.halfWidth]}
          onPress={handleSubmit}>
          <Text style={ss.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </View>
)

export default IOSSetAlarmPresenter
