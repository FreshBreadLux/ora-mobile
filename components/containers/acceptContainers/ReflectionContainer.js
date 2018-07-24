import React from 'react'
import { Animated } from 'react-native'
import { connect } from 'react-redux'
import { ReflectionPresenter } from '../../presenters'
import { removeReflection } from '../../../store'

function animate(...options) {
  return new Promise(res => {
    Animated.timing(...options).start(res)
  })
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
    this.fadeInBackground = this.fadeInBackground.bind(this)
    this.fadeOutCopy = this.fadeOutCopy.bind(this)
    this.fadeOutVerse = this.fadeOutVerse.bind(this)
    this.fadeOutBackground = this.fadeOutBackground.bind(this)
    this.fadeInReflection = this.fadeInReflection.bind(this)
    this.finishReflection = this.finishReflection.bind(this)
  }

  componentDidMount() {
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
    this.props.dispatchRemoveReflection()
  }

  fadeInBackground() {
    return animate(this.state.backgroundOpacity, { toValue: 1, duration: 1000 })
  }
  fadeInCopy() {
    return animate(this.state.copyOpacity, { toValue: 1, duration: 1000 })
  }
  fadeInVerse() {
    return animate(this.state.verseOpacity, { toValue: 1, duration: 1000 })
  }
  fadeOutBackground() {
    return animate(this.state.backgroundOpacity, { toValue: 0, duration: 1000 })
  }
  fadeOutCopy() {
    return animate(this.state.copyOpacity, { toValue: 0, duration: 1000 })
  }
  fadeOutVerse() {
    return animate(this.state.verseOpacity, { toValue: 0, duration: 1000 })
  }

  render() {
    return (
      <ReflectionPresenter
        copyOpacity={this.state.copyOpacity}
        verseOpacity={this.state.verseOpacity}
        finishPraying={this.props.finishPraying}
        finishReflection={this.finishReflection}
        backgroundOpacity={this.state.backgroundOpacity} />
    )
  }
}

const mapDispatch = dispatch => ({
  dispatchRemoveReflection: () => dispatch(removeReflection())
})

export default connect(null, mapDispatch)(ReflectionContainer)
