import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import ss from '../StyleSheet'
import { Feather } from '@expo/vector-icons'

const PrePrayer = ({ navigation, loadNextPrayer }) => (
  <SafeAreaView style={[ss.invisiContainer]}>
    <View style={[ss.invisiContainer, ss.spaceAround]}>
      <Text style={ss.title}>ORA</Text>
      <TouchableOpacity
        style={[ss.button, ss.halfWidth]}
        onPress={loadNextPrayer}>
        <Text style={[ss.buttonText]}>accept a prayer</Text>
      </TouchableOpacity>
    </View>
    <View style={[ss.addViewSpacing]}>
      <TouchableOpacity
        style={[ss.padding10, {alignSelf: 'flex-end'}]}
        onPress={() => navigation.navigate('About')}>
        <Feather
          name="help-circle"
          size={24}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  </SafeAreaView>
)

export default PrePrayer
