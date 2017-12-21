import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'

export default class ManageMyPrayer extends React.Component {
  render() {
    return (
      <ScrollView>
        <TouchableOpacity
          onPress={this.props.screenProps.navigateToMyPrayer}>
          <Text>First Prayer</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Second Prayer</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Third Prayer</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Fourth Prayer</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Fifth Prayer</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}
