import React from 'react'
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

class SurveyPageOneContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleYes = this.handleYes.bind(this)
  }

  handleYes() {
    this.props.scroll(1)
  }

  render() {
    return (
      <View style={ss.whiteContainer}>
        <SafeAreaView style={ss.invisiContainer}>
          <View style={[ss.invisiContainer, ss.padding10]}>
            <Text style={[ss.subHeader, ss.marginTop10]}>Hi there!{'\n\n'}We actually haven't built out our subscription service yet. We're currently trying to guage the level of interest.{'\n\n'}Do you think you'd pay $4.99/month for mobile content that "deepened your convictions of faith, prompted the conversion of your heart, and strengthened your will to follow Christ"?{'\n'}</Text>
            <Text style={ss.subBody}>- CCC 2708</Text>
            <View style={[ss.row, ss.spaceAround, ss.marginTop10]}>
              <TouchableOpacity
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
