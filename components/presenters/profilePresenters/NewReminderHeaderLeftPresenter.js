import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const NewReminderHeaderLeftPresenter = ({ navigation }) => (
  <TouchableOpacity style={ss.padding10} onPress={() => navigation.goBack()}>
    <Text style={[ss.headerTextButton, ss.blueText]}>Cancel</Text>
  </TouchableOpacity>
)

export default NewReminderHeaderLeftPresenter
