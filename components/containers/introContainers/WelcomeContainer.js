import React from 'react'
import {  Animated, Easing } from 'react-native'
import { WelcomePresenter } from '../../presenters'

export default class WelcomeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      welcomeTextFade: new Animated.Value(0),
      chatBubbleFade: new Animated.Value(0),
      chatBubbleYPosition: new Animated.Value(0),
      descriptionTextFade: new Animated.Value(0)
    }
    this.startAnimationSequence = this.startAnimationSequence.bind(this)
  }

  componentDidMount() {
    this.startAnimationSequence()
  }

  startAnimationSequence() {
    Animated.sequence([
      Animated.timing(this.state.welcomeTextFade, { toValue: 1, duration: 2000, delay: 250 }),
      Animated.parallel([
        Animated.timing(this.state.chatBubbleFade, { toValue: 1, duration: 250 }),
        Animated.timing(this.state.chatBubbleYPosition, {
          toValue: 30,
          duration: 250,
          easing: Easing.elastic()
        })
      ]),
      Animated.timing(this.state.descriptionTextFade, { toValue: 1, duration: 2000, delay: 1000 })
    ])
  }

  render() {
    return (
      <WelcomePresenter
        scroll={this.props.scroll}
        welcomeTextFade={this.state.welcomeTextFade}
        chatBubbleFade={this.state.chatBubbleFade}
        chatBubbleYPosition={this.state.chatBubbleYPosition}
        descriptionTextFade={this.state.descriptionTextFade} />
    )
  }
}
