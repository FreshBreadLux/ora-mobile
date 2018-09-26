import React from 'react'
import { Platform } from 'react-native'
import { Permissions, Notifications } from 'expo'
import { IntroEnableNotificationsPresenter } from '../../presenters'
import axios from 'axios'
import ROOT_URL from '../../../config'

async function registerForNotifications() {
  let permissionsResult = await Permissions.askAsync(Permissions.NOTIFICATIONS)
  if (permissionsResult.status !== 'granted') return
  let token = await Notifications.getExpoPushTokenAsync()
  return token
}

class IntroEnableNotificationsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.disableNotifications = this.disableNotifications.bind(this)
    this.updateUserWithNotificationToken = this.updateUserWithNotificationToken.bind(this)
  }

  disableNotifications() {
    const { userId, scroll } = this.props
    axios.put(`${ROOT_URL}/api/users/${userId}`, { notificationsEnabled: false })
    .then(() => scroll(1))
    .catch(console.warn)
  }

  async updateUserWithNotificationToken() {
    const { firstName, lastName, userId, scroll } = this.props
    let pushToken, updateBody
    if (!(Platform.OS === 'android' && __DEV__)) {
      pushToken = await registerForNotifications()
    }
    if (firstName && lastName) updateBody = { firstName, lastName, pushToken, notificationsEnabled: true }
    else updateBody = { pushToken, notificationsEnabled: true }
    axios.put(`${ROOT_URL}/api/users/${userId}`, updateBody)
    .then(() => scroll(1))
    .catch(console.warn)
  }

  render() {
    return (
      <IntroEnableNotificationsPresenter
        disableNotifications={this.disableNotifications}
        updateUserWithNotificationToken={this.updateUserWithNotificationToken} />
    )
  }
}

export default IntroEnableNotificationsContainer
