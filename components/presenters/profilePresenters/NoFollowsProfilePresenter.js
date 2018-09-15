import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const NoFollowsProfilePresenter = ({ navigation }) => (
  <View style={[ss.invisiContainer, ss.center]}>
    <Ionicons
      name="md-heart-outline"
      size={50}
      style={{color: '#000', paddingBottom: 20, paddingTop: 30}} />
    <Text style={{fontFamily: 'ralewayBold', fontSize: 20}}>Follow Prayers</Text>
    <Text style={[ss.tagLine, ss.addMedViewSpacing, ss.threeQuartersWidth, ss.centerText]}>When you follow prayers from the Ora Prayer Network, they'll appear here</Text>
    <TouchableOpacity style={ss.blueButton} onPress={() => navigation.navigate('Home')}>
      <Text style={[ss.buttonText, ss.whiteText]}>START PRAYING</Text>
    </TouchableOpacity>
  </View>
)

export default NoFollowsProfilePresenter
