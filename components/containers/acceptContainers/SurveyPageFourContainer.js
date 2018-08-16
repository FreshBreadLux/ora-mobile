import React from 'react'
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'
import { ampLogEvent, ampEvents } from '../../analytics'

class SurveyPageFourContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleYes = this.handleYes.bind(this)
    this.handleNo = this.handleNo.bind(this)
  }

  handleYes() {
    ampLogEvent(ampEvents.WILLING_TO_PAY)
    this.props.setStateField('willingToPay', true)
    this.props.scroll(1)
  }

  handleNo() {
    ampLogEvent(ampEvents.UNWILLING_TO_PAY)
    this.props.setStateField('willingToPay', false)
    this.props.scroll(1)
  }

  render() {
    return (
      <View style={ss.whiteContainer}>
        <SafeAreaView style={ss.invisiContainer}>
          <View style={[ss.invisiContainer, ss.padding15, {alignItems: 'center'}]}>
            <Text style={[ss.subHeader, ss.fullWidth, ss.addLargeViewSpacing]}>Would you be willing to pay a monthly subscription for this content?</Text>
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

export default SurveyPageFourContainer
