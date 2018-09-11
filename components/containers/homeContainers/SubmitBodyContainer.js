import React from 'react'
import { Keyboard, Animated } from 'react-native'
import { SubmitBodyPresenter } from '../../presenters'

class SubmitBodyContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startHeight: null,
      animatedHeight: null,
    }
    this.keyboardWillShow = this.keyboardWillShow.bind(this)
    this.keyboardDidShow = this.keyboardDidShow.bind(this)
    this.keyboardWillHide = this.keyboardWillHide.bind(this)
    this.keyboardDidHide = this.keyboardDidHide.bind(this)
    this.handleOnLayout = this.handleOnLayout.bind(this)
    this.focusBodyTextInput = this.focusBodyTextInput.bind(this)
    this.referenceBodyTextInput = this.referenceBodyTextInput.bind(this)
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove()
    this.keyboardDidShowSub.remove()
    this.keyboardWillHideSub.remove()
    this.keyboardDidHideSub.remove()
  }

  keyboardWillShow(event) {
    Animated.timing(this.state.animatedHeight, {
      duration: event.duration,
      toValue: this.state.startHeight - event.endCoordinates.height,
    }).start()
  }

  keyboardDidShow(event) {
    Animated.timing(this.state.animatedHeight, {
      duration: 100,
      toValue: this.state.startHeight - event.endCoordinates.height,
    }).start()
  }

  keyboardWillHide(event) {
    Animated.timing(this.state.animatedHeight, {
      duration: event.duration,
      toValue: 0,
    }).start()
  }

  keyboardDidHide(event) {
    Animated.timing(this.state.animatedHeight, {
      duration: event.duration,
      toValue: 0,
    }).start()
  }

  handleOnLayout(event) {
    let startHeight = event.nativeEvent.layout.height - 50
    this.setState({
      startHeight: startHeight,
      animatedHeight: new Animated.Value(startHeight)},
      this.focusBodyTextInput
    )
  }

  referenceBodyTextInput(ref) {
    this.bodyTextInput = ref
  }

  focusBodyTextInput() {
    this.bodyTextInput.focus()
  }

  render() {
    return (
      <SubmitBodyPresenter
        navigation={this.props.navigation}
        handleOnLayout={this.handleOnLayout}
        animatedHeight={this.state.animatedHeight}
        referenceBodyTextInput={this.referenceBodyTextInput} />
    )
  }
}

export default SubmitBodyContainer
