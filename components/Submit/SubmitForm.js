import React from 'react'
import axios from 'axios'
import { View, Text, TouchableOpacity, Keyboard, TextInput, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { fetchUserPrayers } from '../../store'
import ROOT_URL from '../../config'
import ss from '../StyleSheet'

class SubmitForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subject: null,
      body: null,
      prayerSent: false,
      bodyHeight: null,
      errorMessage: null,
    }
    this.submitPrayer = this.submitPrayer.bind(this)
  }

  submitPrayer() {
    if (this.state.subject && this.state.body) {
      Keyboard.dismiss()
      axios.post(`${ROOT_URL}/api/prayers`, {
        userId: this.props.userId,
        subject: this.state.subject,
        body: this.state.body,
        jwToken: this.props.jwToken
      })
      .then(() => {
        this.setState({
          subject: null,
          body: null,
          prayerSent: true,
          errorMessage: null,
        })
        this.props.refreshUserPrayers(this.props.userId)
        setTimeout(() => this.setState({prayerSent: false}), 10000)
      })
      .catch(console.error)
    } else {
      this.setState({ errorMessage: 'your prayer needs both a subject and a body'})
    }
  }

  render() {
    return (
      <SafeAreaView style={ss.invisiContainer}>
        <View style={[ss.flex1, ss.padding15]}>
          { this.state.errorMessage
          ? <View style={[ss.center, ss.paddingBottom10]}>
              <Text style={[ss.header]}>{this.state.errorMessage}</Text>
            </View>
          : <View>
            { this.state.prayerSent
            ? <View style={[ss.center, ss.paddingBottom10]}>
                <Text style={[ss.header]}>prayer successfully submitted</Text>
              </View>
            : <View style={[ss.center, ss.paddingBottom10]}>
                <Text style={[ss.header]}>SUBMIT A PRAYER</Text>
              </View> }
            </View>
          }
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

const mapState = state => ({
  userId: state.auth.userId,
  jwToken: state.auth.jwToken
})

const mapDispatch = dispatch => ({
  refreshUserPrayers(userId) {
    dispatch(fetchUserPrayers(userId))
  }
})

export default connect(mapState, mapDispatch)(SubmitForm)
