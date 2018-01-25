import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import ss from '../StyleSheet'

const Donate = () => (
  <SafeAreaView style={ss.whiteContainer}>
    <View style={[ss.whiteContainer, ss.padding15]}>
      <View style={[ss.addLargeViewSpacing, ss.center, ss.bottomBorder]}>
        <Text style={ss.header}>DONATE</Text>
      </View>
      <View style={ss.addMedViewSpacing}>
        <Text style={ss.body}>Ora is a non-profit app, and it will always remain free. This means that we rely on donations from our community to meet all operating expenses, from keeping the servers running to funding future projects. We hope to continue making tools for faith in a technology age that has other priorities -- and we're inviting you to be a part of it.{'\n\n'}To learn more about how you can support our work or get involved, please contact robert.michael.lux@gmail.com</Text>
      </View>
    </View>
  </SafeAreaView>
)

export default Donate
