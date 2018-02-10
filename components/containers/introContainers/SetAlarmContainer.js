import React from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { notFirstRodeo } from '../../store'
import { Notifications } from 'expo'
import { SetAlarmPresenter } from '../../presenters'

class SetAlarmContainer extends React.Component {
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
      <SetAlarmPresenter
        chosenTime={this.state.chosenTime}
        setTime={this.setTime}
        handleSubmit={this.handleSubmit} />
    )
  }
}

const mapDispatch = dispatch => ({
  noIntroNeeded() {
    return dispatch(notFirstRodeo())
  }
})

export default connect(null, mapDispatch)(SetAlarmContainer)
