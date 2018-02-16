import React from 'react'
import { View, AsyncStorage, Platform } from 'react-native'
import { connect } from 'react-redux'
import { notFirstRodeo } from '../../../store'
import { Notifications } from 'expo'
import { IOSSetAlarmPresenter, AndroidSetAlarmPresenter } from '../../presenters'
import ss from '../../StyleSheet'

class SetAlarmContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenTime: new Date(),
      androidPickerVisible: false,
      timeWasSelected: false
    }
    this.setTime = this.setTime.bind(this)
    this.toggleAndroidPicker = this.toggleAndroidPicker.bind(this)
    this.toggleTimeWasSelected = this.toggleTimeWasSelected.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  setTime(newTime) {
    this.setState({ chosenTime: newTime })
  }

  toggleAndroidPicker() {
    this.setState({ androidPickerVisible: !this.state.androidPickerVisible })
  }

  toggleTimeWasSelected() {
    this.setState({ timeWasSelected: !this.state.timeWasSelected })
  }

  async handleSubmit() {
    let chosenTime =  this.state.chosenTime.getTime()
    const now = new Date()
    if (chosenTime - now < 0) {
      chosenTime += 86400000
    }
    try {
      const reminderId = await Notifications.scheduleLocalNotificationAsync({
        title: 'Ora',
        body: 'Time to pray',
        data: { body: 'Time to pray' },
        sound: true
      }, {
        time: chosenTime,
        repeat: 'day'
      })
      const userAlarms = await JSON.stringify([{time: chosenTime, reminderId}])
      await AsyncStorage.setItem('userAlarms', userAlarms)
      this.props.verifyStorageKey()
      await AsyncStorage.setItem('seenIntro', 'true')
      this.props.noIntroNeeded()
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <View style={ss.whiteContainer}>
        {Platform.OS === 'ios'
        ? <IOSSetAlarmPresenter
            setTime={this.setTime}
            handleSubmit={this.handleSubmit}
            chosenTime={this.state.chosenTime} />
        : <AndroidSetAlarmPresenter
            setTime={this.setTime}
            handleSubmit={this.handleSubmit}
            timeWasSelected={this.state.timeWasSelected}
            toggleAndroidPicker={this.toggleAndroidPicker}
            toggleTimeWasSelected={this.toggleTimeWasSelected}
            androidPickerVisible={this.state.androidPickerVisible} />
        }
      </View>
    )
  }
}

const mapDispatch = dispatch => ({
  noIntroNeeded() {
    return dispatch(notFirstRodeo())
  }
})

export default connect(null, mapDispatch)(SetAlarmContainer)
