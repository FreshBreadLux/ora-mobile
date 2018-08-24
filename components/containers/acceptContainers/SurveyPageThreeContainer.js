import React from 'react'
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

class SurveyPageThreeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.scroll(1)
  }

  render() {
    return (
      <View style={ss.whiteContainer}>
        <SafeAreaView style={ss.invisiContainer}>
          <View style={[ss.invisiContainer, ss.padding15, {alignItems: 'center'}]}>
            <Text style={[ss.subHeader, ss.fullWidth, ss.addLargeViewSpacing]}>What topics would be most beneficial?{'\n'}Select as many as you like.</Text>
            <TouchableOpacity
              onPress={() => this.props.toggleTopicSelection('Christian Meditation')}
              style={(this.props.topicSelection.indexOf('Christian Meditation') === -1)
              ? [ss.newWhiteButton, ss.threeQuartersWidth, ss.marginBottom10]
              : [ss.newBlueButton, ss.threeQuartersWidth, ss.marginBottom10]}>
              <Text style={(this.props.topicSelection.indexOf('Christian Meditation') === -1)
              ? [ss.buttonText]
              : [ss.buttonText, ss.whiteText]}>Christian Meditation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.toggleTopicSelection('Daily Devotionals')}
              style={(this.props.topicSelection.indexOf('Daily Devotionals') === -1)
              ? [ss.newWhiteButton, ss.threeQuartersWidth, ss.marginBottom10]
              : [ss.newBlueButton, ss.threeQuartersWidth, ss.marginBottom10]}>
              <Text style={(this.props.topicSelection.indexOf('Daily Devotionals') === -1)
              ? [ss.buttonText]
              : [ss.buttonText, ss.whiteText]}>Daily Devotionals</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.toggleTopicSelection('Scripture Memorization')}
              style={(this.props.topicSelection.indexOf('Scripture Memorization') === -1)
              ? [ss.newWhiteButton, ss.threeQuartersWidth, ss.marginBottom10]
              : [ss.newBlueButton, ss.threeQuartersWidth, ss.marginBottom10]}>
              <Text style={(this.props.topicSelection.indexOf('Scripture Memorization') === -1)
              ? [ss.buttonText]
              : [ss.buttonText, ss.whiteText]}>Scripture Memorization</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.toggleTopicSelection('Lives of the Saints')}
              style={(this.props.topicSelection.indexOf('Lives of the Saints') === -1)
              ? [ss.newWhiteButton, ss.threeQuartersWidth, ss.marginBottom10]
              : [ss.newBlueButton, ss.threeQuartersWidth, ss.marginBottom10]}>
              <Text style={(this.props.topicSelection.indexOf('Lives of the Saints') === -1)
              ? [ss.buttonText]
              : [ss.buttonText, ss.whiteText]}>Lives of the Saints</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.toggleTopicSelection('Church History')}
              style={(this.props.topicSelection.indexOf('Church History') === -1)
              ? [ss.newWhiteButton, ss.threeQuartersWidth, ss.marginBottom10]
              : [ss.newBlueButton, ss.threeQuartersWidth, ss.marginBottom10]}>
              <Text style={(this.props.topicSelection.indexOf('Church History') === -1)
              ? [ss.buttonText]
              : [ss.buttonText, ss.whiteText]}>Church History</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.toggleTopicSelection('Traditional Prayer Guides')}
              style={(this.props.topicSelection.indexOf('Traditional Prayer Guides') === -1)
              ? [ss.newWhiteButton, ss.threeQuartersWidth, ss.marginBottom30]
              : [ss.newBlueButton, ss.threeQuartersWidth, ss.marginBottom30]}>
              <Text style={(this.props.topicSelection.indexOf('Traditional Prayer Guides') === -1)
              ? [ss.buttonText]
              : [ss.buttonText, ss.whiteText]}>Traditional Prayer Guides</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.handleSubmit}
              style={[ss.newBlueButton, ss.threeQuartersWidth]}>
              <Text style={[ss.buttonText, ss.whiteText]}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    )
  }
}

export default SurveyPageThreeContainer
