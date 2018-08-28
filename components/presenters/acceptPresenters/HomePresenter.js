import React from 'react'
import { Text, SafeAreaView, TouchableOpacity, View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { KeyContainer, SurveyPromptContainer } from '../../containers'
import { BackgroundImageContainer } from '../../presenters'
import ss from '../../StyleSheet'
import { Ionicons } from '@expo/vector-icons'

function getDateString() {
  let date = new Date().setMinutes(new Date().getMinutes() - new Date().getTimezoneOffset())
  return new Date(date).toISOString().slice(0, 10)
}

const HomePresenter = ({ adminReset, isAdmin, navigation, surveyRevealed, toggleSurvey }) => (
  <View style={ss.invisiContainer}>
    <BackgroundImageContainer componentName="Accept" />
    <SafeAreaView style={[ss.invisiContainer]}>
      <View style={[ss.flex3, ss.center]}>
        <Text style={[ss.title]}>ORA</Text>
      </View>
      <View style={[ss.flex2, ss.center]}>
        <TouchableOpacity
          style={[ss.button, ss.halfWidth]}
          onPress={() => navigation.navigate('AcceptContainer')}>
          <Text style={[ss.buttonText]}>START PRAYING</Text>
        </TouchableOpacity>
      </View>
      <View style={[ss.flex2, ss.center]}>
        <KeyContainer navigation={navigation} toggleSurvey={toggleSurvey} />
      </View>
      {isAdmin
      ? <View style={ss.row}>
          <TouchableOpacity
            style={[ss.padding10, {alignSelf: 'flex-end'}]}
            onPress={adminReset}>
            <Ionicons
              name="ios-log-out"
              size={24}
              color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[ss.padding10, {alignSelf: 'flex-end'}]}
            onPress={async () => {
              const today = getDateString()
              try {
                await AsyncStorage.setItem(`unlockAnimationCompleted-${today}`, 'false')
                console.log('reset unlockAnimationCompleted')
              } catch (error) {
                console.warn('Error with AsyncStorage:', error)
              }
            }}>
            <Ionicons
              name="ios-information-circle"
              size={24}
              color="#fff" />
          </TouchableOpacity>
        </View>
      : null
    }
    </SafeAreaView>
    {surveyRevealed
    ? <SurveyPromptContainer navigation={navigation} toggleSurvey={toggleSurvey} />
    : null
    }
  </View>
)

const mapState = state => ({
  isAdmin: state.userInfo.isAdmin
})

export default connect(mapState)(HomePresenter)
