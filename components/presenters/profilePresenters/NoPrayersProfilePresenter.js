import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const NoPrayersProfilePresenter = ({ navigation }) => (
  <View style={[ss.invisiContainer, ss.center]}>
    <Ionicons
      name="md-bookmarks"
      size={50}
      style={{color: '#000', paddingBottom: 20, paddingTop: 30}} />
    <Text style={{fontFamily: 'ralewayBold', fontSize: 20}}>Submit Prayers</Text>
    <Text style={[ss.tagLine, ss.addMedViewSpacing, ss.threeQuartersWidth, ss.centerText]}>When you submit prayers to the Ora Prayer Network, you can manage them here</Text>
    <TouchableOpacity style={ss.blueButton} onPress={() => navigation.navigate('Home')}>
      <Text style={[ss.buttonText, ss.whiteText]}>SUBMIT A PRAYER</Text>
    </TouchableOpacity>
  </View>
)

export default NoPrayersProfilePresenter
