import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView, ScrollView, Animated, Dimensions } from 'react-native'
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
      toValue: this.state.startHeight - event.startCoordinates.height,
    }).start()
  }

  keyboardWillHide(event) {
    Animated.timing(this.state.animatedHeight, {
      duration: event.duration,
      toValue: 0,
    }).start()
  }

  handleOnLayout(event) {
    console.log('handle layout event: ', event.nativeEvent.layout)
  }

  render() {
    return (
      <View
        onLayout={this.handleOnLayout}
        style={[styles.invisiContainer, styles.editPadding]}>
        <Animated.View
          style={{height: this.state.animatedHeight}}>
          <TextInput
            style={[styles.flex1, styles.font16, styles.paddingBottom10]}
            multiline={true}
            onChangeText={textBody => this.props.setBody(textBody)}
            value={this.props.body}
          />
        </Animated.View>
        <View
          style={[styles.row, styles.spaceBetween, styles.topBorder]}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={this.props.toggleEdit}>
            <Text style={[styles.font14]}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.editButton}
            onPress={this.props.updatePrayer}>
            <Text style={[styles.buttonText, styles.font14]}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
