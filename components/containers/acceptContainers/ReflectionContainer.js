import React from 'react'
import { Animated } from 'react-native'
import { connect } from 'react-redux'
import { ReflectionPresenter } from '../../presenters'
import { exitReflectionMode, fetchDailyReflection } from '../../../store'

function animate(...options) {
  return new Promise(res => {
    Animated.timing(...options).start(res)
  })
}

function getDateString() {
  let date = new Date().setMinutes(new Date().getMinutes() - new Date().getTimezoneOffset())
  return new Date(date).toISOString().slice(0, 10)
}

class ReflectionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      copyOpacity: new Animated.Value(0),
      verseOpacity: new Animated.Value(0),
      backgroundOpacity: new Animated.Value(0)
    }
    this.fadeInCopy = this.fadeInCopy.bind(this)
    this.fadeInVerse = this.fadeInVerse.bind(this)
    this.fadeOutCopy = this.fadeOutCopy.bind(this)
    this.fadeOutVerse = this.fadeOutVerse.bind(this)
    this.fadeInBackground = this.fadeInBackground.bind(this)
    this.fadeInReflection = this.fadeInReflection.bind(this)
    this.finishReflection = this.finishReflection.bind(this)
    this.fadeOutBackground = this.fadeOutBackground.bind(this)
  }

  componentDidMount() {
    if (!this.props.dailyReflection.verse) {
      const today = getDateString()
      this.props.dispatchFetchDailyReflection(today)
    }
    this.fadeInReflection()
  }

  async fadeInReflection() {
    await this.fadeInBackground()
    await this.fadeInCopy()
    await this.fadeInVerse()
  }

  async finishReflection() {
    this.fadeOutVerse()
    this.fadeOutCopy()
    await this.fadeOutBackground()
    this.props.dispatchExitReflectionMode()
  }

  fadeInBackground() {
    return animate(this.state.backgroundOpacity, { toValue: 1, duration: 1000 })
  }
  fadeInCopy() {
    return animate(this.state.copyOpacity, { toValue: 1, duration: 500 })
  }
  fadeInVerse() {
    return animate(this.state.verseOpacity, { toValue: 1, duration: 1000 })
  }
  fadeOutBackground() {
    return animate(this.state.backgroundOpacity, { toValue: 0, duration: 1000 })
  }
  fadeOutCopy() {
    return animate(this.state.copyOpacity, { toValue: 0, duration: 500 })
  }
  fadeOutVerse() {
    return animate(this.state.verseOpacity, { toValue: 0, duration: 1000 })
  }

  render() {
    return (
      <ReflectionPresenter
        navigation={this.props.navigation}
        copyOpacity={this.state.copyOpacity}
        verseOpacity={this.state.verseOpacity}
        finishPraying={this.props.finishPraying}
        finishReflection={this.finishReflection}
        backgroundOpacity={this.state.backgroundOpacity} />
    )
  }
}

const mapState = state => ({
  dailyReflection: state.acceptPrayer.dailyReflection
})

const mapDispatch = dispatch => ({
  dispatchFetchDailyReflection: today => dispatch(fetchDailyReflection(today)),
  dispatchExitReflectionMode: () => dispatch(exitReflectionMode())
})

export default connect(mapState, mapDispatch)(ReflectionContainer)
