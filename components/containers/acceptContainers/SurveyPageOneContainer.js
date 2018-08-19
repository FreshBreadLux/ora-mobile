import React from 'react'
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { ampEvents, ampLogEvent } from '../../analytics'
import ss from '../../StyleSheet'

class SurveyPageOneContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleYes = this.handleYes.bind(this)
    this.handleNo = this.handleNo.bind(this)
  }

  handleYes() {
    ampLogEvent(ampEvents.START_SURVEY)
    this.props.setStateField('willingToTakeSurvey', true)
    this.props.scroll(1)
  }

  handleNo() {
    ampLogEvent(ampEvents.DECLINE_SURVEY)
    this.props.setStateField('willingToTakeSurvey', false)
    this.props.scroll(4)
  }

  render() {
    return (
      <View style={ss.whiteContainer}>
        <SafeAreaView style={ss.invisiContainer}>
          <View style={[ss.invisiContainer, ss.padding15, {alignItems: 'center'}]}>
            <Text style={[ss.header, ss.addLargeViewSpacing]}>Hi there!</Text>
            <Text style={[ss.subHeader, ss.fullWidth, ss.addViewSpacing]}>We actually haven't built out any subscription content yet. We're currently trying to guage the level of interest.</Text>
            <Text style={[ss.subHeader, ss.fullWidth, ss.addViewSpacing]}>Can you help us by answering a few quick questions?</Text>
            <View style={[ss.row, ss.fullWidth, ss.spaceBetween, ss.addMedViewSpacing]}>
              <TouchableOpacity
                onPress={this.handleNo}
                style={[ss.newWhiteButton, {width: '45%'}]}>
                <Text style={ss.buttonText}>NO</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handleYes}
                style={[ss.newBlueButton, {width: '45%'}]}>
                <Text style={[ss.buttonText, ss.whiteText]}>YES</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    )
  }
}

export default SurveyPageOneContainer
