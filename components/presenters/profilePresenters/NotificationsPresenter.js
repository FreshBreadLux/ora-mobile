import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const POSSIBLE_INTERVALS = [30, 60, 180, 720, 1440]

const determineButtonStyle = (notificationInterval, number) => {
  if (notificationInterval === number) return { backgroundColor: 'rgb(69, 119, 238)', flex: 1, justifyContent: 'center', alignItems: 'center' }
  return { flex: 1, justifyContent: 'center', alignItems: 'center' }
}

const determineButtonTextStyle = (notificationInterval, number) => {
  if (notificationInterval === number) return { color: '#fff', padding: 10, fontFamily: 'ralewayBold', fontSize: 14 }
  return { padding: 10, fontFamily: 'raleway', fontSize: 14 }
}

const createIntervalButton = (notificationInterval, number, setNotificationInterval) => (
  <TouchableOpacity
    key={number}
    onPress={() => setNotificationInterval(number)}
    style={determineButtonStyle(notificationInterval, number)}>
    <Text style={determineButtonTextStyle(notificationInterval, number)}>{number / 60} hr</Text>
  </TouchableOpacity>
)

const NotificationsPresenter = ({ notificationInterval, setNotificationInterval, notificationsEnabled, disableNotifications, enableNotifications }) => {
  return (
  <View style={ss.invisiContainer}>
    <Text style={[ss.subBody, ss.greyText, ss.padding10]}>These are the notification preferences for the Ora Prayer Network. To manage group notification preferences, go to the group's settings.</Text>
    <Text style={[ss.fullWidth, ss.padding10, {fontFamily: 'ralewayBold', fontSize: 15}]}>Batch notifications every:</Text>
    <View style={[ss.row, ss.fullWidth, ss.topBorder, ss.bottomBorder, ss.whiteBackground]}>
      {POSSIBLE_INTERVALS.map(number => createIntervalButton(notificationInterval, number, setNotificationInterval))}
    </View>
    <Text style={[ss.fullWidth, ss.padding10, {fontFamily: 'ralewayBold', fontSize: 15, marginTop: 10}]}>Enable notifications:</Text>
    <View style={[ss.row, ss.fullWidth, ss.topBorder, ss.bottomBorder, ss.whiteBackground]}>
      <TouchableOpacity
        onPress={enableNotifications}
        style={notificationsEnabled === true
        ? {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(69, 119, 238)'}
        : {flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={notificationsEnabled === true
          ? {fontFamily: 'ralewayBold', fontSize: 15, padding: 10, color: '#fff'}
          : {fontFamily: 'raleway', fontSize: 15, padding: 10}}>True</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={disableNotifications}
        style={notificationsEnabled === false
        ? {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(69, 119, 238)'}
        : {flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={notificationsEnabled === false
          ? {fontFamily: 'ralewayBold', fontSize: 15, padding: 10, color: '#fff'}
          : {fontFamily: 'raleway', fontSize: 15, padding: 10}}>False</Text>
      </TouchableOpacity>
    </View>
  </View>
)}

const mapState = state => ({
  notificationInterval: state.userInfo.notificationInterval,
  notificationsEnabled: state.userInfo.notificationsEnabled
})

export default connect(mapState)(NotificationsPresenter)
