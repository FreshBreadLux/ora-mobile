import React from 'react'
import { View, TextInput } from 'react-native'
import ss from '../../StyleSheet'

const NewReminderSubjectPresenter = ({ navigation }) => (
  <View style={ss.invisiContainer}>
    <TextInput
      style={[ss.fullWidth, ss.tagLine, ss.padding10, {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff',
        marginTop: 30
      }]}
      autoFocus={true}
      onChangeText={navigation.state.params.setNewReminderSubject}
      underlineColorAndroid="transparent"
      placeholder="Reminder Subject"
      placeholderTextColor="#ccc"
      selectionColor="rgb(69, 119, 238)"
      keyboardType="default"
      value={navigation.state.params.newReminderSubject} />
  </View>
)

export default NewReminderSubjectPresenter
