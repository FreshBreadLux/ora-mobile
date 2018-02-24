import React from 'react'
import { View, Keyboard, Animated } from 'react-native'
import { connect } from 'react-redux'
import { AddUpdatePresenter, EditPrayerPresenter } from '../../presenters'
import ss from '../../StyleSheet'

class EditPrayerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startHeight: null,
      animatedHeight: null,
    }
    this.keyboardWillShow = this.keyboardWillShow.bind(this)
    this.keyboardWillHide = this.keyboardWillHide.bind(this)
    this.handleOnLayout = this.handleOnLayout.bind(this)
    this.focusEditTextInput = this.focusEditTextInput.bind(this)
    this.focusUpdateTextInput = this.focusUpdateTextInput.bind(this)
    this.referenceEditTextInput = this.referenceEditTextInput.bind(this)
    this.referenceUpdateTextInput = this.referenceUpdateTextInput.bind(this)
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
    const startHeight = this.props.addingUpdate
      ? event.nativeEvent.layout.height - 50
      : event.nativeEvent.layout.height
    this.setState({
      startHeight: startHeight,
      animatedHeight: new Animated.Value(startHeight)},
      () => {
        if (this.props.editMode.addingUpdate) this.focusUpdateTextInput()
        else this.focusEditTextInput()
      }
    )
  }

  focusEditTextInput() {
    this.editTextInput.focus()
  }

  focusUpdateTextInput() {
    this.updateTextInput.focus()
  }

  referenceEditTextInput(ref) {
    this.editTextInput = ref
  }

  referenceUpdateTextInput(ref) {
    this.updateTextInput = ref
  }

  render() {
    return (
      <View style={ss.invisiContainer}>
        {this.props.editMode.addingUpdate
        ? <AddUpdatePresenter
            handleOnLayout={this.handleOnLayout}
            animatedHeight={this.state.animatedHeight}
            updateBody={this.props.updateBody}
            setUpdateBody={this.props.setUpdateBody}
            addNewUpdate={this.props.addNewUpdate}
            referenceUpdateTextInput={this.referenceUpdateTextInput} />
        : <EditPrayerPresenter
            handleOnLayout={this.handleOnLayout}
            animatedHeight={this.state.animatedHeight}
            body={this.props.body}
            editPrayer={this.props.editPrayer}
            setBody={this.props.setBody}
            referenceEditTextInput={this.referenceEditTextInput} />
        }
      </View>
    )
  }
}

const mapState = state => ({
  editMode: state.editMode
})

export default connect(mapState)(EditPrayerContainer)
