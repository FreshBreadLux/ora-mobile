import React from 'react'
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

class SurveyPageTwoContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={ss.whiteContainer}>
        <SafeAreaView style={ss.invisiContainer}>
          <View style={[ss.invisiContainer, ss.padding10]}>
            <Text style={[ss.subHeader, ss.marginTop10]}>This is page two!</Text>
          </View>
        </SafeAreaView>
      </View>
    )
  }
}

export default SurveyPageTwoContainer
