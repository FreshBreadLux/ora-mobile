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
        <Animated.Image
          style={{
            position: 'absolute',
            height: 25.9230165,
            width: 21.2097408,
            left: 23.7902592,
            top: 64.0769835,
          }}
          source={require('../../../assets/images/Key/key-head.png')} />
        <Animated.Image
          style={{
            position: 'absolute',
            height: 25.9230165,
            width: 21.2097408,
            left: 44.9999937,
            top: 64.0769835,
          }}
          source={require('../../../assets/images/Key/key-head.png')} />
        <Animated.Image
          style={{
            position: 'absolute',
            height: 4.71327572,
            width: 42.4194815,
            left: 23.7902592,
            top: 59.3637078,
          }}
          source={require('../../../assets/images/Key/key-mid.png')} />
        <Animated.Image
          style={{
            position: 'absolute',
            height: 4.71327572,
            width: 42.4194815,
            left: 23.7902592,
            top: 59.3637078,
          }}
          source={require('../../../assets/images/Key/key-mid.png')} />
        <Animated.Image
          style={{
            position: 'absolute',
            height: 9.42655144,
            width: 4.71327572,
            left: 26.1468971,
            top: 59.3637078,
            transform: [{rotate: '270deg'}]
          }}
          source={require('../../../assets/images/Key/key-end.png')} />
        <Animated.Image
          style={{
            position: 'absolute',
            height: 9.42655144,
            width: 4.71327572,
            left: 59.139827,
            top: 59.3637078,
            transform: [{rotate: '90deg'}]
          }}
          source={require('../../../assets/images/Key/key-end.png')} />
      </View>
    )
  }
}

export default KeyContainer
