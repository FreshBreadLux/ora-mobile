import React from 'react'
import { View, Text, TouchableOpacity, Keyboard } from 'react-native'
import ss from '../../StyleSheet'

const SubmitSubjectHeaderLeftPresenter = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          Keyboard.dismiss()
          navigation.goBack()
        }}>
        <Text style={[ss.headerTextButton, ss.padding10, {color: 'rgb(69, 119, 238)'}]}>Cancel</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SubmitSubjectHeaderLeftPresenter
