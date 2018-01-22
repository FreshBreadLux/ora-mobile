import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView, ScrollView, Animated, Dimensions, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../StyleSheet'

export default class EditPrayer extends React.Component {
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

  render() {
    return (
      <View
        onLayout={this.handleOnLayout}
        style={[styles.invisiContainer, styles.editPadding]}>
        <Animated.View
          style={{height: this.state.animatedHeight ? this.state.animatedHeight : 600 }}>
          <TextInput
            ref={ref => this.editTextInput = ref}
            style={[styles.flex1, styles.font16, styles.paddingBottom10]}
            multiline={true}
            onChangeText={textBody => this.props.setBody(textBody)}
            value={this.props.body}
          />
        <View
          style={[styles.row, styles.spaceBetween, styles.viewTopBorder]}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={this.props.toggleEdit}>
            <Text style={[styles.font14]}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.editButton}
            onPress={this.props.updatePrayer}>
            <Text style={[styles.font14, styles.whiteText]}>Update</Text>
          </TouchableOpacity>
        </View>
        </Animated.View>
      </View>
    )
  }
}
