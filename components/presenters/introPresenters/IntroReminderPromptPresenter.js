import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const IntroReminderPromptPresenter = ({ scrollByOne, navigation, finishIntroAndLogUserIn }) => (
  <SafeAreaView style={ss.invisiContainer}>
    <Text style={[ss.tagLine, ss.centerText, ss.padding10, {marginTop: 30}]}>Before getting started, set a daily prayer reminder</Text>
    <View style={ss.center}>
      <View style={ss.addLargeViewSpacing}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NewReminder', {completionCallback: scrollByOne})}
          style={ss.blueButton}>
          <Text style={[ss.buttonText, ss.whiteText]}>SET REMINDER</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={finishIntroAndLogUserIn}>
        <Text style={[ss.subBody, ss.blueText]}>No Thanks</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
)

export default IntroReminderPromptPresenter
