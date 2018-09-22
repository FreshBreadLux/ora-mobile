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
      answerTextFade: new Animated.Value(0),
      descriptionTextFade: new Animated.Value(0),
      buttonFade: new Animated.Value(0)
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
        Animated.timing(this.state.chatBubbleFade, { toValue: 1, duration: 250, delay: 1000 }),
        Animated.timing(this.state.chatBubbleYPosition, {
          toValue: 15,
          duration: 400,
          delay: 1000,
          easing: Easing.elastic(4)
        })
      ]),
      Animated.timing(this.state.answerTextFade, { toValue: 1, duration: 1000, delay: 1500 }),
      Animated.timing(this.state.descriptionTextFade, { toValue: 1, duration: 1500 }),
      Animated.timing(this.state.buttonFade, { toValue: 1, duration: 500, delay: 1500 })
    ]).start()
  }

  render() {
    return (
      <WelcomePresenter
        scroll={this.props.scroll}
        buttonFade={this.state.buttonFade}
        welcomeTextFade={this.state.welcomeTextFade}
        chatBubbleFade={this.state.chatBubbleFade}
        answerTextFade={this.state.answerTextFade}
        chatBubbleYPosition={this.state.chatBubbleYPosition}
        descriptionTextFade={this.state.descriptionTextFade} />
    )
  }
}
