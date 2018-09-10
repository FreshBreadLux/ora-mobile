import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import ss from '../../StyleSheet'

const SubmitTitleNextButton = ({ navigation }) => (
  <View style={ss.flex1}>
    <TouchableOpacity onPress={() => navigation.navigate('SubmitBody')}>
      <Text>Next</Text>
    </TouchableOpacity>
  </View>
)

export default SubmitTitleNextButton
