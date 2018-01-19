import React from 'react'
import axios from 'axios'
import { View, Text, TouchableOpacity, Keyboard, TextInput, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ROOT_URL from '../../config'
import styles from '../StyleSheet'

export default class SubmitForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subject: null,
      body: null,
      prayerSent: false,
      bodyHeight: null,
    }
    this.submitPrayer = this.submitPrayer.bind(this)
  }

  componentWillMount() {
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
  }

  componentWillUnmount() {
    this.keyboardWillShowListener.remove()
    this.keyboardWillHideListener.remove()
  }

  keyboardWillShow(event) {
    console.log('keyboard show event object: ', event)
  }

  keyboardWillHide(event) {
    console.log('keyboard hide event object: ', event)
  }

  submitPrayer() {
    Keyboard.dismiss()
    axios.post(`${ROOT_URL}/api/prayers`, {
      userId: this.props.userId,
      subject: this.state.subject,
      body: this.state.body,
    })
    .then(() => {
      this.setState({
        subject: null,
        body: null,
        prayerSent: true,
      })
      this.props.fetchUserPrayers(this.props.userId)
      setTimeout(() => this.setState({prayerSent: false}), 10000)
    })
    .catch(console.error)
  }

  render() {
    return (
      <SafeAreaView style={styles.invisiContainer}>
        <View style={[styles.flex1, styles.padding15]}>
          { this.state.prayerSent
            ? <View style={styles.addViewSpacing}>
                <Text style={[styles.font24, styles.centerText]}>Prayer successfully submitted</Text>
              </View>
            : <View style={styles.addViewSpacing}>
                <Text style={[styles.font24, styles.centerText]}>Submit a prayer</Text>
              </View> }
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled">
            <View style={[styles.addViewSpacing, styles.darkBottomBorder]}>
              <TextInput
                style={[styles.fullWidth, styles.font20, styles.paddingBottom10]}
                placeholder="Enter prayer subject"
                placeholderTextColor="#555"
                keyboardType="default"
                onChangeText={subject => this.setState({subject})}
                onSubmitEditing={event => this.refs.body.focus()}
                value={this.state.subject}
              />
            </View>
            <View style={[styles.addViewSpacing, styles.submitHeight]}>
              <TextInput
                ref="body"
                style={[styles.fullWidth, styles.fullHeight, styles.font16, styles.paddingBottom10]}
                placeholder="Describe your prayer request here. We recommend including as much detail as you are comfortable with. There is no character limit."
                placeholderTextColor="#555"
                keyboardType="default"
                multiline={true}
                onChangeText={body => this.setState({body})}
                onContentSizeChange={event => {
                  this.setState({bodyHeight: event.nativeEvent.contentSize.height})
                }}
                value={this.state.body}
                numberOfLines={4}
              />
            </View>
            <View style={[styles.center, styles.addViewSpacing, styles.fullWidth]}>
              <TouchableOpacity
                onPress={this.submitPrayer}
                style={[styles.button, styles.halfWidth]}
              >
                <Text style={[styles.buttonText]}>Send</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
    )
  }
}
