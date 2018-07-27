import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const RewardPresenter = ({ navigation }) => (
  <View style={ss.invisiContainer}>
    <View style={ss.backgroundImageFrame}>
      <Image
        style={{flex: 1, height: undefined, width: undefined, resizeMode: 'cover'}}
        source={{uri: 'https://images.unsplash.com/photo-1504870712357-65ea720d6078?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d91ffea4f802668c524df165caf52704&auto=format&fit=crop&w=2800&q=80'}} />
    </View>
    <SafeAreaView style={ss.invisiContainer}>
      <TouchableOpacity
        style={ss.padding10}
        onPress={() => navigation.goBack()}>
        <Feather
          name="x-circle"
          size={20}
          color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  </View>
)

export default RewardPresenter
