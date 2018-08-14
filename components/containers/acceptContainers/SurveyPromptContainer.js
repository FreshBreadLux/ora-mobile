import React from 'react'
import { Animated, View, Text } from 'react-native'
import ss from '../../StyleSheet'

class SurveyPromptContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <View style={[ss.backgroundImageFrame, ss.center]}>
        <View style={[ss.threeQuartersWidth, ss.whiteBackground]}>
          <Text>This is the survey</Text>
        </View>
      </View>
    )
  }
}

export default SurveyPromptContainer
