import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const ArtistModal = ({ hideModal }) => (
  <View style={[ss.flex1, ss.center, ss.padding15]}>
    <TouchableOpacity onPress={hideModal}>
      <Text style={[ss.subBody, ss.whiteText]}>This is the ArtistModal</Text>
    </TouchableOpacity>
  </View>
)

export default ArtistModal
