import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const GroupScrollHeaderRightPresenter = ({ navigation }) => (
  <View>
    <TouchableOpacity
      style={ss.padding10}
      onPress={() => navigation.navigate('ProfileSettings')}>
      <Ionicons
        name="md-add"
        size={28}
        style={{color: '#000'}} />
    </TouchableOpacity>
  </View>
)

export default GroupScrollHeaderRightPresenter
