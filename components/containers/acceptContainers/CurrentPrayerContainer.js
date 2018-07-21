import React from 'react'
import { View, Animated } from 'react-native'
import { connect } from 'react-redux'
import { CurrentPrayerPresenter, BackgroundImageContainer } from '../../presenters'
import ss from '../../StyleSheet'

function animate(...options) {
  return new Promise(res => {
    Animated.timing(...options).start(res)
  })
}

class CurrentPrayerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonOpacity: new Animated.Value(0),
      prayerTextOpacity: new Animated.Value(0),
      backgroundCoverOpacity: new Animated.Value(1),
    }
    this.fadeInButtons = this.fadeInButtons.bind(this)
    this.fadeInPrayerText = this.fadeInPrayerText.bind(this)
    this.fadeInBackground = this.fadeInBackground.bind(this)
    this.fadeInCurrentPrayer = this.fadeInCurrentPrayer.bind(this)
  }

  componentDidMount() {
    this.fadeInCurrentPrayer()
  }

  async fadeInCurrentPrayer() {
    await this.fadeInBackground()
  }

  fadeInBackground() {
    return animate(this.state.backgroundCoverOpacity, { toValue: 0.8, duration: 1000 })
  }
  fadeInButtons() {
    return animate(this.state.buttonOpacity, { toValue: 1, duration: 1000 })
  }
  fadeInPrayerText() {
    return animate(this.state.prayerTextOpacity, { toValue: 1, duration: 1000 })
  }

  render() {
    return(
      <View>
        <BackgroundImageContainer componentName="Accept" />
        <Animated.View style={[ss.whiteContainer, {opacity: this.state.backgroundCoverOpacity}]}>
          <CurrentPrayerPresenter
            buttonOpacity={this.state.buttonOpacity}
            prayerTextOpacity={this.state.prayerTextOpacity} />
        </Animated.View>
      </View>
    )
  }
}

export default connect()(CurrentPrayerContainer)
