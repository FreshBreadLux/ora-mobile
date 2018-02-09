import React from 'react'
import { View, Text, Animated } from 'react-native'
import ss from '../StyleSheet'

export default class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      welcomeFade: new Animated.Value(0)
    }
    this.fadeInWelcome = this.fadeInWelcome.bind(this)
  }

  componentDidMount() {
    setTimeout(this.fadeInWelcome, 500)
  }

  fadeInWelcome() {
    Animated.timing(this.state.welcomeFade, { toValue: 1, duration: 2000 }).start()
  }

  render() {
    return (
      <View style={[ss.whiteContainer, ss.center]}>
        <Animated.View style={{opacity: this.state.welcomeFade, top: this.state.welcomeTop}}>
          <Text style={ss.header}>WELCOME TO ORA</Text>
        </Animated.View>
      </View>
    )
  }
}
