import React from 'react'
import { View, Text, Platform, DatePickerIOS, TimePickerAndroid, TouchableOpacity, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { notFirstRodeo } from '../../store'
import { Notifications } from 'expo'
import ss from '../StyleSheet'

class SetAlarm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenTime: new Date()
    }
    this.setTime = this.setTime.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  setTime(newTime) {
    this.setState({ chosenTime: newTime })
  }

  async handleSubmit() {
    try {
      const reminderId = await Notifications.scheduleLocalNotificationAsync({
        title: 'Ora',
        body: 'Time to pray',
        data: { body: 'Time to pray' },
        sound: true
      }, {
        time: this.state.chosenTime,
        repeat: 'day'
      })
      this.props.verifyStorageKey()
      await AsyncStorage.setItem('seenIntro', 'true')
      await AsyncStorage.setItem('reminderId', reminderId)
      this.props.noIntroNeeded()
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <View style={[ss.whiteContainer]}>
        <View style={[ss.padding15, ss.center]}>
          <Text style={[ss.body, ss.centerText]}>It's important to make prayer a part of your daily routine. Select a time to be reminded each day to pray. You can always change this setting later in your profile.</Text>
        </View>
        {Platform.OS === 'ios'
        ? <DatePickerIOS
            mode="time"
            date={this.state.chosenTime}
            onDateChange={this.setTime} />
        : <TimePickerAndroid />
        }
        <View style={[ss.padding15, ss.center]}>
          <TouchableOpacity
            style={[ss.blackButton, ss.halfWidth]}
            onPress={this.handleSubmit}>
            <Text style={[ss.subHeader, ss.whiteText]}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapDispatch = dispatch => ({
  noIntroNeeded() {
    return dispatch(notFirstRodeo())
  }
})

export default connect(null, mapDispatch)(SetAlarm)
