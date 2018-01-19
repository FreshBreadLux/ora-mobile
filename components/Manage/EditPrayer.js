import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView, ScrollView, Animated, Dimensions } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../StyleSheet'

export default class EditPrayer extends React.Component {
  constructor(props) {
    //jack was here hahhahaah
    super(props)
    this.state = {
      viewHeight: new Animated.Value(Dimensions.get('window').height)
    }
    this.keyboardWillShow = this.keyboardWillShow.bind(this)
    this.keyboardWillHide = this.keyboardWillHide.bind(this)
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
    Animated.timing(this.state.viewHeight, {
      duration: event.duration,
      toValue: event.endCoordinates.screenY - 50 - 70,
    }).start()
  }

  keyboardWillHide(event) {
    Animated.timing(this.state.viewHeight, {
      duration: event.duration,
      toValue: 0,
    }).start()
  }

  render() {
    return (
      <View style={[styles.invisiContainer, styles.editPadding]}>
        <Animated.View
          onLayout={event => console.log('onLayout event: ', event)}
          style={{height: this.state.viewHeight}}>
          <TextInput
            style={[styles.flex1, styles.font16, styles.paddingBottom10]}
            multiline={true}
            autoFocus={true}
            onChangeText={textBody => this.props.setBody(textBody)}
            value={this.props.body}
          />
        </Animated.View>
        {/* who wrote this garbage??*/ }
        <View style={[styles.row, styles.spaceBetween, styles.topBorder]}>
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
