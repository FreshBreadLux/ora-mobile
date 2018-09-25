import React from 'react'
import { Platform } from 'react-native'
import { Permissions, Notifications } from 'expo'
import { EnableNotificationsPresenter } from '../../presenters'
import axios from 'axios'
import ROOT_URL from '../../../config'

async function registerForNotifications() {
  let permissionsResult = await Permissions.askAsync(Permissions.NOTIFICATIONS)
  if (permissionsResult.status !== 'granted') return
  let token = await Notifications.getExpoPushTokenAsync()
  return token
}

class EnableNotificationsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.updateUserWithNotificationToken = this.updateUserWithNotificationToken.bind(this)
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
      <EnableNotificationsPresenter
        scroll={this.props.scroll}
        updateUserWithNotificationToken={this.updateUserWithNotificationToken} />
    )
  }
}

export default EnableNotificationsContainer
