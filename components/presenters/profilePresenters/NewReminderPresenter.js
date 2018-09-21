import React from 'react'
import { View, ScrollView, TouchableOpacity, Text, Platform, DatePickerIOS } from 'react-native'
import { TimePickerAndroidContainer } from '../../containers'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

/*
  NewReminderPresenter serves as a navigation hub. The user sets a time and then can navigate to
  different screens to set the name, subject, and repeat frequency of the reminder. The state of
  NewReminderContainer manages all the information, and will be responsible for creating the new
  reminder. The NewReminderContainer methods and state information are passed through
  NewReminderPresenter to the respective screens using react navigation props.
*/
const NewReminderPresenter = ({ navigation, chosenTime, setTime, setNewReminderName, newReminderName, setNewReminderSubject, newReminderSubject, setNewReminderRepeat, newReminderRepeat, androidPickerVisible, toggleAndroidPicker, toggleTimeWasSelected, timeWasSelected, saveNewAlarm }) => (
  <View style={ss.invisiContainer}>
    <ScrollView>
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
      <View style={ss.bottomBorder}>
        <Text style={[ss.tagLine, ss.padding10]}>Who are you praying for?</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('NewReminderName', {setNewReminderName, newReminderName})}>
        <View style={[ss.row, ss.spaceBetween, ss.whiteBackground, ss.bottomBorder]}>
          <Text style={[ss.tagLine, ss.padding10]}>Name</Text>
          <View style={[ss.flex1, {height: 50, justifyContent: 'center'}]}>
            <View style={[ss.row, ss.center]}>
              <View style={[ss.flex1, {alignItems: 'flex-end'}]}>
                <Text numberOfLines={1} style={[ss.tagLine, ss.greyText]}>{newReminderName}</Text>
              </View>
              <Ionicons
                name="ios-arrow-forward"
                size={26}
                style={[ss.padding10, {color: '#000'}]} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={ss.bottomBorder}>
        <Text style={[ss.tagLine, ss.padding10]}>Give your reminder a subject</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('NewReminderSubject', {setNewReminderSubject, newReminderSubject})}>
        <View style={[ss.row, ss.spaceBetween, ss.whiteBackground, ss.bottomBorder]}>
          <Text style={[ss.tagLine, ss.padding10]}>Subject</Text>
          <View style={[ss.flex1, {height: 50, justifyContent: 'center'}]}>
            <View style={[ss.row, ss.center]}>
              <View style={[ss.flex1, {alignItems: 'flex-end'}]}>
                <Text numberOfLines={1} style={[ss.tagLine, ss.greyText]}>{newReminderSubject}</Text>
              </View>
              <Ionicons
                name="ios-arrow-forward"
                size={26}
                style={[ss.padding10, {color: '#000'}]} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={ss.bottomBorder}>
        <Text style={[ss.tagLine, ss.padding10]}>When should you be reminded?</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('NewReminderRepeat', {setNewReminderRepeat, newReminderRepeat})}>
        <View style={[ss.row, ss.spaceBetween, ss.whiteBackground, ss.bottomBorder]}>
          <Text style={[ss.tagLine, ss.padding10]}>Repeat</Text>
          <View style={[ss.flex1, {height: 50, justifyContent: 'center'}]}>
            <View style={[ss.row, ss.center]}>
              <View style={[ss.flex1, {alignItems: 'flex-end'}]}>
                <Text numberOfLines={1} style={[ss.tagLine, ss.greyText]}>{newReminderRepeat}</Text>
              </View>
              <Ionicons
                name="ios-arrow-forward"
                size={26}
                style={[ss.padding10, {color: '#000'}]} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={[ss.fullWidth, ss.center, {marginTop: 30, marginBottom: 30}]}>
        <TouchableOpacity
          style={ss.blueButton}
          onPress={saveNewAlarm}>
          <Text style={[ss.buttonText, ss.whiteText]}>SAVE REMINDER</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
)

export default NewReminderPresenter
