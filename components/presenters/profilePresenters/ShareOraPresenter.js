import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const ShareOraPresenter = ({ navigation }) => (
  <SafeAreaView style={ss.whiteContainer}>
    <View style={[ss.whiteContainer, ss.padding15]}>
      <View style={[ss.addMedViewSpacing, ss.topBorder]}>
        <Text style={[ss.body, ss.paddingBottom20]}>Ora's growth is driven organically by members. We need your help creating a culture of devotion to God.</Text>
        <Text style={[ss.body, ss.paddingBottom20]}>If you're interested in going above and beyond to support the app, we encourage you to register as an Ora Missionary. Missionaries are deliberate about sharing the app with as many people as possible, and they receive recognitions and rewards the more new members they refer.</Text>
        <View style={[ss.center, ss.addMedViewSpacing]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterOraMissionary')}>
            <View style={[ss.row, ss.padding4]}>
              <Text style={[ss.subBody, ss.darkBlueText, ss.paddingRight7]}>REGISTER AS AN ORA MISSIONARY</Text>
              <Ionicons
                name="ios-arrow-forward"
                size={18}
                color="#1e3799" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </SafeAreaView>
)

export default ShareOraPresenter

/*
<View style={[ss.center, ss.addMedViewSpacing]}>
  <TouchableOpacity
    onPress={onShareLinkPress}>
    <View style={[ss.row, ss.padding4]}>
      <Text style={[ss.subBody, ss.darkBlueText, ss.paddingRight7]}>SHARE ORA</Text>
      <Ionicons
        name="ios-arrow-forward"
        size={18}
        color="#1e3799" />
    </View>
  </TouchableOpacity>
</View>
*/
