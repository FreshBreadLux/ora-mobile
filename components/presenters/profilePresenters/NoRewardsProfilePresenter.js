import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import ss from '../../StyleSheet'

const NoRewardsProfilePresenter = ({ navigation }) => (
  <View style={[ss.invisiContainer, ss.center]}>
    <Image
      style={{height: 50, width: 50, resizeMode: 'contain', marginBottom: 20, marginTop: 30}}
      source={require('../../../assets/images/Key/keys-icon-black-small.jpg')} />
    <Text style={{fontFamily: 'ralewayBold', fontSize: 20}}>Save Rewards</Text>
    <Text style={[ss.tagLine, ss.addMedViewSpacing, ss.threeQuartersWidth, ss.centerText]}>Scripture Rewards are unlocked after you accept prayers. If you save them, they'll appear here</Text>
    <TouchableOpacity style={ss.blueButton} onPress={() => navigation.navigate('Home')}>
      <Text style={[ss.buttonText, ss.whiteText]}>START PRAYING</Text>
    </TouchableOpacity>
  </View>
)

export default NoRewardsProfilePresenter
