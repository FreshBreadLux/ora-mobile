import React from 'react'
import { View, Text } from 'react-native'
import ss from '../../StyleSheet'

class PrivateGroupContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[ss.whiteContainer, ss.center]}>
        <Text>This is a private group</Text>
      </View>
    )
  }
}

export default PrivateGroupContainer
