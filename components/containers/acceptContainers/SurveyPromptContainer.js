import React from 'react'
import { Animated, View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'
import { Feather } from '@expo/vector-icons'

class SurveyPromptContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      promptOpacity: new Animated.Value(0),
      promptBottom: new Animated.Value(0)
    }
    this.fadeInPrompt = this.fadeInPrompt.bind(this)
    this.handleCloseSurveyPrompt = this.handleCloseSurveyPrompt.bind(this)
  }

  componentDidMount() {
    this.fadeInPrompt()
  }

  fadeInPrompt() {
    Animated.parallel([
      Animated.timing(this.state.promptOpacity, {toValue: 1, duration: 400}),
      Animated.timing(this.state.promptBottom, {toValue: 10, duration: 400}),
    ]).start()
  }

  handleCloseSurveyPrompt() {
    Animated.parallel([
      Animated.timing(this.state.promptOpacity, {toValue: 0, duration: 400}),
      Animated.timing(this.state.promptBottom, {toValue: 0, duration: 400}),
    ]).start(this.props.toggleSurvey)
  }

  render() {
    return (
      <View style={[ss.backgroundImageFrame, ss.center]}>
        <Animated.View style={[ss.surveyPrompt, {opacity: this.state.promptOpacity, bottom: this.state.promptBottom}]}>
          <TouchableOpacity
            style={ss.alignFlexStart}
            onPress={this.handleCloseSurveyPrompt}>
            <Feather
              name="x-circle"
              size={20}
              color="#888" />
          </TouchableOpacity>
          <Text style={[ss.subHeader, ss.centerText, ss.addViewSpacing]}>Subscribe to unlock new content from Ora</Text>
          <TouchableOpacity
            style={[ss.newBlueButton, ss.alignFlexCenter, ss.marginBottom10]}
            onPress={() => {
              this.props.navigation.navigate('SurveySwiper')
              this.props.toggleSurvey()
            }}>
            <Text style={[ss.buttonText, ss.whiteText]}>LEARN MORE</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    )
  }
}

export default SurveyPromptContainer
