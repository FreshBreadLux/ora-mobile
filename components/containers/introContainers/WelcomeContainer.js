import React from 'react'
import { SafeAreaView, View, Text, Animated } from 'react-native'
import ss from '../../StyleSheet'

export default class WelcomeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      welcomeFade: new Animated.Value(0),
      oraFade: new Animated.Value(0),
      connectFade: new Animated.Value(0)
    }
    this.fadeInWelcome = this.fadeInWelcome.bind(this)
    this.fadeInOra = this.fadeInOra.bind(this)
    this.fadeInConnect = this.fadeInConnect.bind(this)
  }

  componentDidMount() {
    setTimeout(this.fadeInWelcome, 500)
    setTimeout(this.fadeInOra, 1500)
  }

  fadeInWelcome() {
    Animated.timing(this.state.welcomeFade, { toValue: 1, duration: 2000 }).start()
  }

  fadeInOra() {
    Animated.timing(this.state.oraFade, { toValue: 1, duration: 2000 }).start()
    setTimeout(this.fadeInConnect, 1000)
  }

  fadeInConnect() {
    Animated.timing(this.state.connectFade, { toValue: 1, duration: 2000 }).start()
  }

  render() {
    return (
      <SafeAreaView style={ss.invisiContainer}>
        <View style={[ss.invisiContainer, ss.padding15]}>
          <View style={[ss.flex3, ss.center]}>
            <Animated.View style={{opacity: this.state.welcomeFade}}>
              <Text style={ss.welcomeText}>WELCOME TO</Text>
            </Animated.View>
            <Animated.View style={{opacity: this.state.oraFade}}>
              <Text style={ss.title}>ORA</Text>
            </Animated.View>
          </View>
          <Animated.View style={[ss.flex2, ss.center, {opacity: this.state.connectFade}]}>
            <Text style={[ss.subHeader, ss.whiteText, ss.centerText, ss.threeQuartersWidth]}>Ora connects Christians around the world through prayer</Text>
          </Animated.View>
        </View>
      </SafeAreaView>
    )
  }
}
