import React from 'react'
import { Keyboard, Animated } from 'react-native'
import { EditPrayerPresenter } from '../../presenters'

export default class EditPrayerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startHeight: null,
      animatedHeight: null,
    }
    this.keyboardWillShow = this.keyboardWillShow.bind(this)
    this.keyboardWillHide = this.keyboardWillHide.bind(this)
    this.handleOnLayout = this.handleOnLayout.bind(this)
    this.focusTextInput = this.focusTextInput.bind(this)
    this.referenceEditTextInput = this.referenceEditTextInput.bind(this)
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow(event) {
    Animated.timing(this.state.animatedHeight, {
      duration: event.duration,
      toValue: this.state.startHeight - event.endCoordinates.height,
    }).start()
  }

  keyboardWillHide(event) {
    Animated.timing(this.state.animatedHeight, {
      duration: event.duration,
      toValue: 0,
    }).start()
  }

  handleOnLayout(event) {
    const startHeight = event.nativeEvent.layout.height
    this.setState({
      startHeight: startHeight,
      animatedHeight: new Animated.Value(startHeight)},
      () => {
      this.focusTextInput()
    })
  }

  focusTextInput() {
    this.editTextInput.focus()
  }

  referenceEditTextInput(ref) {
    this.editTextInput = ref
  }

  render() {
    return (
      <EditPrayerPresenter
        handleOnLayout={this.handleOnLayout}
        animatedHeight={this.state.animatedHeight}
        body={this.props.body}
        toggleEdit={this.props.toggleEdit}
        updatePrayer={this.props.updatePrayer}
        setBody={this.props.setBody}
        referenceEditTextInput={this.referenceEditTextInput} />
    )
  }
}
