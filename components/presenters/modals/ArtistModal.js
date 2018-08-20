import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const ArtistModal = ({ artist, hideModal }) => (
  <View style={ss.invisiContainer}>
    <TouchableOpacity style={ss.flex1} onPress={hideModal}>
      <View style={[ss.invisiContainer, ss.center]}>
        <Text style={[ss.subHeader, ss.whiteText, ss.marginBottom30]}>ABOUT THE ARTIST</Text>
        <Image
          style={{height: 150, width: 150, borderRadius: 75, resizeMode: 'cover'}}
          source={{ uri: artist.imageUrl }} />
        <Text style={[ss.subHeader, ss.whiteText, ss.centerText, ss.addMedViewSpacing]}>{artist.fullName}</Text>
        <Text style={[ss.subBody, ss.whiteText, ss.threeQuartersWidth]}>{artist.bio}</Text>
      </View>
    </TouchableOpacity>
  </View>
)

export default ArtistModal
