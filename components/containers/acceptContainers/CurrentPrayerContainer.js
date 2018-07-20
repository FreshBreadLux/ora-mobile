import React from 'react'
import { Animated } from 'react-native'
import { connect } from 'react-redux'
import { CurrentPrayerPresenter } from '../../presenters'

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
      backgroundOpacity: new Animated.Value(0),
    }
  }

  render() {
    return(
      <CurrentPrayerPresenter />
    )
  }
}

export default connect()(CurrentPrayerContainer)
