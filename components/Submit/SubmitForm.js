import React from 'react'
import axios from 'axios'
import { View, Text, TouchableOpacity, Keyboard, TextInput, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ROOT_URL from '../../config'
import ss from '../StyleSheet'

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
      <SafeAreaView style={ss.invisiContainer}>
        <View style={[ss.flex1, ss.padding15]}>
          { this.state.prayerSent
            ? <View style={ss.addViewSpacing}>
                <Text style={[ss.header, ss.centerText]}>prayer successfully submitted</Text>
              </View>
            : <View style={ss.addViewSpacing}>
                <Text style={[ss.header, ss.centerText]}>SUBMIT A PRAYER</Text>
              </View> }
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled">
            <View style={[ss.addViewSpacing, ss.darkBottomBorder]}>
              <TextInput
                style={[ss.fullWidth, ss.subHeader, ss.paddingBottom10]}
                placeholder="Enter prayer subject"
                placeholderTextColor="#555"
                keyboardType="default"
                onChangeText={subject => this.setState({subject})}
                onSubmitEditing={() => this.body.focus()}
                value={this.state.subject}
              />
            </View>
            <View style={[ss.addViewSpacing, ss.submitHeight]}>
              <TextInput
                ref={ref => { this.body = ref }}
                style={[ss.fullWidth, ss.fullHeight, ss.body, ss.paddingBottom10]}
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
            <View style={[ss.center, ss.addViewSpacing, ss.fullWidth]}>
              <TouchableOpacity
                onPress={this.submitPrayer}
                style={[ss.button, ss.halfWidth]}
              >
                <Text style={[ss.buttonText]}>send</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
    )
  }
}
