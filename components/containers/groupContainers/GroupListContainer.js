import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

class GroupListContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[ss.whiteContainer, ss.center]}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('PrivateGroup')}>
          <Text>This is the list of groups</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default GroupListContainer
