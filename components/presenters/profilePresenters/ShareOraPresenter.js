import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const ShareOraPresenter = ({ onShareLinkPress }) => (
  <SafeAreaView style={ss.whiteContainer}>
    <View style={[ss.whiteContainer, ss.padding15]}>
      <View style={[ss.addMedViewSpacing, ss.topBorder]}>
        <View>
          <Text style={ss.body}>Use the link below to help others cultivate a life of devotion.</Text>
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
        </View>
      </View>
    </View>
  </SafeAreaView>
)

export default ShareOraPresenter
