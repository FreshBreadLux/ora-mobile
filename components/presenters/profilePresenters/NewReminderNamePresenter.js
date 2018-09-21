import React from 'react'
import { View, TextInput } from 'react-native'
import ss from '../../StyleSheet'

const NewReminderNamePresenter = ({ navigation }) => (
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
      onChangeText={navigation.state.params.setNewReminderName}
      underlineColorAndroid="transparent"
      placeholder="Reminder Name"
      placeholderTextColor="#ccc"
      selectionColor="rgb(69, 119, 238)"
      keyboardType="default"
      value={navigation.state.params.newReminderName} />
  </View>
)

export default NewReminderNamePresenter
