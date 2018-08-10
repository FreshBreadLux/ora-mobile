import React from 'react'
import { View, Animated, Easing, AsyncStorage, Text } from 'react-native'

class KeyContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }

  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={{height: 90, width: 90, backgroundColor: '#555'}}>
        <Animated.Image
          style={{
            position: 'absolute',
            height: 47.1327573,
            width: 30,
            left: 30,
            top: 42.8672427,
          }}
          source={require('../../../assets/images/Key/key-ring.png')} />
        <Animated.Image
          style={{
            position: 'absolute',
            height: 47.1327573,
            width: 30,
            left: 30,
            top: 42.8672427,
          }}
          source={require('../../../assets/images/Key/key-ring.png')} />
      </View>
    )
  }
}

export default KeyContainer
