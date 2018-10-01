import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

/*
  TODO: This is a placeholder presentational standin; I need to make it functional
*/
const GroupHeaderRightPresenter = ({ navigation }) => (
  <View style={[ss.row, ss.center]}>
    <TouchableOpacity
      style={{paddingLeft: 10, paddingRight: 10}}>
      <Ionicons
        name="md-add-circle"
        size={28}
        style={{color: 'rgb(69, 119, 238)'}} />
    </TouchableOpacity>
    <TouchableOpacity
      style={{paddingRight: 20, paddingLeft: 10}}>
      <Ionicons
        name="md-more"
        size={28}
        style={{color: '#000'}} />
    </TouchableOpacity>
  </View>
)

export default GroupHeaderRightPresenter
