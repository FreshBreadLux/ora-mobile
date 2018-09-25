import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const EnableNotificationsPresenter = ({ scroll, updateUserWithNotificationToken }) => (
  <SafeAreaView style={ss.invisiContainer}>
    <Text style={[ss.tagLine, ss.centerText, ss.padding10, {fontFamily: 'ralewayBold', marginTop: 30}]}>It's important to be able to send and receive prayer notifications in Ora. Tap below to enable prayer notifications.</Text>
    <View style={ss.center}>
      <View style={ss.addLargeViewSpacing}>
        <TouchableOpacity
          style={ss.blueButton}
          onPress={updateUserWithNotificationToken}>
          <Text style={[ss.buttonText, ss.whiteText]}>ENABLE NOTIFICATIONS</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => scroll(1)}>
        <Text style={[ss.subBody, ss.blueText]}>No Thanks</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
)

export default EnableNotificationsPresenter
