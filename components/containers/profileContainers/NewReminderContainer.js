import React from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { fetchUserAlarms } from '../../../store'
import { Notifications } from 'expo'
import { NewReminderPresenter } from '../../presenters'

const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const returnChosenDayValue = chosenDay => {
  // loops through the days of the week and returns index value when it finds a match
  for (let i = 0; i < WEEK_DAYS.length; i++) {
    if (chosenDay === WEEK_DAYS[i]) return i
  }
}

const returnDaysToAdd = (chosenDay, chosenDayValue, currentDayValue, chosenTime) => {
  const now = new Date()
  if (chosenDay === 'Daily') {
    // if user selects daily, add 1 day if the selected time is in the past, 0 otherwise
    return (chosenTime - now < 0) ? 1 : 0
  }
  // if the user selects a weekly repeat, use assigned values to calculate daysToAdd
  if (currentDayValue > chosenDayValue) return 7 - (currentDayValue - chosenDayValue)
  else if (currentDayValue < chosenDayValue) return chosenDayValue - currentDayValue
  else if (currentDayValue === chosenDayValue) return (chosenTime - now < 0) ? 7 : 0
}

/*
  returnMillisecondsToAdd returns the number of milliseconds that need to be added to the
  chosenTime in order to have the reminder function properly.
*/
const returnMillisecondsToAdd = (currentDayValue, chosenDay, chosenTime) => {
  /*
    if the chosenDay is a certain day of the week, rather than daily, we'll need to assign it a
    numeric value in order to figure out how many days to add.
    So, we first check chosenDay and assign chosenDayValue accordingly.
  */
  const chosenDayValue = chosenDay === 'Daily' ? 'Daily' : returnChosenDayValue(chosenDay)
  /*
    Now that we've done the necessary prep work, we can pass in all of our variables in order
    to calculate how many days we should add to the chosenTime.
  */
  const daysToAdd = returnDaysToAdd(chosenDay, chosenDayValue, currentDayValue, chosenTime)
  // LocalNotifications use milliseconds, so convert the number of days to milliseconds
  return daysToAdd * 86400000
}

/*
  NewReminderContainer is responsible for keeping track of the information needed to create a new
  reminder. It passes methods to NewReminderPresenter, which in turn passes those methods through
  react navigation props to the respective utility screens.
*/
class NewReminderContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenTime: new Date(),
      androidPickerVisible: false,
      timeWasSelected: false,
      newReminderName: 'Requests in Ora',
      newReminderSubject: 'Cultivate a life of devotion',
      newReminderRepeat: 'Daily',
    }
    this.setTime = this.setTime.bind(this)
    this.setNewReminderName = this.setNewReminderName.bind(this)
    this.setNewReminderSubject = this.setNewReminderSubject.bind(this)
    this.setNewReminderRepeat = this.setNewReminderRepeat.bind(this)
    this.toggleAndroidPicker = this.toggleAndroidPicker.bind(this)
    this.toggleTimeWasSelected = this.toggleTimeWasSelected.bind(this)
    this.saveNewAlarm = this.saveNewAlarm.bind(this)
  }

  setTime(newTime) {
    this.setState({ chosenTime: newTime })
  }

  setNewReminderName(newReminderName) {
    this.setState({ newReminderName })
  }

  setNewReminderSubject(newReminderSubject) {
    this.setState({ newReminderSubject })
  }

  setNewReminderRepeat(newReminderRepeat) {
    this.setState({ newReminderRepeat })
  }

  toggleAndroidPicker() {
    this.setState({ androidPickerVisible: !this.state.androidPickerVisible })
  }

  toggleTimeWasSelected() {
    this.setState({ timeWasSelected: !this.state.timeWasSelected })
  }

  async saveNewAlarm() {
    // repeat is used for expo's local push notification system
    const repeat = (this.state.newReminderRepeat === 'Daily') ? 'day' : 'week'

    /*
      calculating chosenTime is where the magic happens. The user selects the time of day,
      but we'll use currentDayValue and chosenDay in order to calculate how many milliseconds
      should be added to the chosenTime. The added milliseconds are what schedule the reminder
      on the correct day of the week.
    */
    const currentDayValue = new Date().getDay()
    const chosenDay = this.state.newReminderRepeat
    let chosenTime = this.state.chosenTime.getTime()
    chosenTime += returnMillisecondsToAdd(currentDayValue, chosenDay, chosenTime)

    // create the local notification and store the information in AsyncStorage
    try {
      const reminderId = await Notifications.scheduleLocalNotificationAsync({
        title: this.state.newReminderName,
        body: this.state.newReminderSubject,
        data: { body: this.state.newReminderSubject },
        sound: true,
        android: {
          channelId: 'reminders'
        }
      }, {
        time: chosenTime,
        repeat: repeat
      })
      const oldAlarms = await AsyncStorage.getItem('userAlarms')
      const oldAlarmsJson = await JSON.parse(oldAlarms)
      const spreadAlarms =
        oldAlarmsJson
        ? [...oldAlarmsJson, {
            name: this.state.newReminderName,
            subject: this.state.newReminderSubject,
            repeat: this.state.newReminderRepeat,
            time: chosenTime,
            reminderId
          }]
        : [{
            name: this.state.newReminderName,
            subject: this.state.newReminderSubject,
            repeat: this.state.newReminderRepeat,
            time: chosenTime,
            reminderId
          }]
      const updatedAlarms = await JSON.stringify(spreadAlarms)
      await AsyncStorage.setItem('userAlarms', updatedAlarms)
      this.props.refreshUserAlarms()
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <NewReminderPresenter
        navigation={this.props.navigation}
        setTime={this.setTime}
        setNewReminderName={this.setNewReminderName}
        newReminderName={this.state.newReminderName}
        setNewReminderSubject={this.setNewReminderSubject}
        newReminderSubject={this.state.newReminderSubject}
        setNewReminderRepeat={this.setNewReminderRepeat}
        newReminderRepeat={this.state.newReminderRepeat}
        toggleAndroidPicker={this.toggleAndroidPicker}
        toggleTimeWasSelected={this.toggleTimeWasSelected}
        saveNewAlarm={this.saveNewAlarm}
        timeWasSelected={this.state.timeWasSelected}
        androidPickerVisible={this.state.androidPickerVisible}
        chosenTime={this.state.chosenTime} />
    )
  }
}

const mapDispatch = dispatch => ({
  refreshUserAlarms: () => dispatch(fetchUserAlarms())
})

export default connect(null, mapDispatch)(NewReminderContainer)
