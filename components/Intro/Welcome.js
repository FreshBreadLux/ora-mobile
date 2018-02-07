import React from 'react'
import { View, Text } from 'react-native'
import ss from '../StyleSheet'

export default class Welcome extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[ss.whiteContainer, ss.center]}>
        <Text>Welcome</Text>
      </View>
    )
  }
}
