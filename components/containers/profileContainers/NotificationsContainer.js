import React from 'react'
import { connect } from 'react-redux'
import { Platform } from 'react-native'
import { NotificationsPresenter } from '../../presenters'
import { setUserInfo } from '../../../store'
import { Permissions, Notifications } from 'expo'
import axios from 'axios'
import ROOT_URL from '../../../config'

async function registerForNotifications() {
  let permissionsResult = await Permissions.askAsync(Permissions.NOTIFICATIONS)
  if (permissionsResult.status !== 'granted') return
  let token = await Notifications.getExpoPushTokenAsync()
  return token
}

class NotificationsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.setNotificationInterval = this.setNotificationInterval.bind(this)
    this.disableNotifications = this.disableNotifications.bind(this)
    this.enableNotifications = this.enableNotifications.bind(this)
  }

  setNotificationInterval(notificationInterval) {
    const { userId, dispatchSetUserInfo } = this.props
    axios.put(`${ROOT_URL}/api/users/${userId}`, {notificationInterval})
    .then(userInfo => dispatchSetUserInfo(userInfo.data))
    .catch(console.warn)
  }

  disableNotifications() {
    const { userId, dispatchSetUserInfo } = this.props
    axios.put(`${ROOT_URL}/api/users/${userId}`, {notificationsEnabled: false})
    .then(userInfo => dispatchSetUserInfo(userInfo.data))
    .catch(console.warn)
  }

  async enableNotifications() {
    const { userId, dispatchSetUserInfo } = this.props
    let pushToken
    if (!(Platform.OS === 'android' && __DEV__)) {
      pushToken = await registerForNotifications()
    }
    axios.put(`${ROOT_URL}/api/users/${userId}`, { pushToken, notificationsEnabled: true })
    .then(userInfo => dispatchSetUserInfo(userInfo.data))
    .catch(console.warn)
  }

  render() {
    return (
      <NotificationsPresenter
        enableNotifications={this.enableNotifications}
        disableNotifications={this.disableNotifications}
        setNotificationInterval={this.setNotificationInterval} />
    )
  }
}

const mapState = state => ({
  userId: state.userInfo.id
})

const mapDispatch = dispatch => ({
  dispatchSetUserInfo: userInfo => dispatch(setUserInfo(userInfo))
})

export default connect(mapState, mapDispatch)(NotificationsContainer)
