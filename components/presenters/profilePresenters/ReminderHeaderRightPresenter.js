import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const ReminderHeaderRightPresenter = ({ navigation }) => (
  <TouchableOpacity
    style={ss.padding10}
    onPress={() => navigation.navigate('NewReminder')}>
    <Ionicons
      name="md-add"
      size={26}
      style={{color: 'rgb(69, 119, 238)'}} />
  </TouchableOpacity>
)

export default ReminderHeaderRightPresenter
