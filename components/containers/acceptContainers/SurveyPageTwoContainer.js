import React from 'react'
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { ampEvents, ampLogEvent } from '../../analytics'
import ss from '../../StyleSheet'

class SurveyPageTwoContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleYes = this.handleYes.bind(this)
    this.handleNo = this.handleNo.bind(this)
  }

  handleYes() {
    ampLogEvent(ampEvents.VOTE_NEW_CONTENT)
    this.props.setStateField('mobileContentBeneficial', true)
    this.props.scroll(1)
  }

  handleNo() {
    ampLogEvent(ampEvents.VOTE_NO_NEW_CONTENT)
    this.props.setStateField('mobileContentBeneficial', false)
    this.props.scroll(3)
  }

  render() {
    return (
      <View style={ss.whiteContainer}>
        <SafeAreaView style={ss.invisiContainer}>
          <View style={[ss.invisiContainer, ss.padding15, {alignItems: 'center'}]}>
            <Text style={[ss.subHeader, ss.fullWidth, ss.addLargeViewSpacing]}>Would mobile content focused on Christian meditation, prayer, or academic study help you cultivate a life of devotion?</Text>
            <View style={[ss.row, ss.fullWidth, ss.spaceBetween]}>
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

export default SurveyPageTwoContainer
