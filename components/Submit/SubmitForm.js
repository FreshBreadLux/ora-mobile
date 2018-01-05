import React from 'react'
import axios from 'axios'
import { View, Text, TouchableOpacity, Keyboard, TextInput, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import IP_ADDRESS from '../../config'
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

  submitPrayer() {
    Keyboard.dismiss()
    axios.post(`http://${IP_ADDRESS}:8080/api/prayers`, {
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
      <SafeAreaView style={styles.cover}>
        <View style={styles.addPadding}>
          <KeyboardAwareScrollView
            contentContainerStyle={styles.flex1}>
            { this.state.prayerSent
              ? <View style={styles.addViewSpacing}>
                  <Text style={styles.subject}>Your prayer has been submitted</Text>
                </View>
              : <View style={styles.addViewSpacing}>
                  <Text style={styles.subject}>Submit a prayer</Text>
                </View> }
            <View style={styles.addViewSpacing}>
              <Text style={styles.label}>Subject</Text>
              <TextInput
                style={styles.box}
                placeholder="Write the subject of your prayer here"
                placeholderTextColor="#555"
                keyboardType="default"
                onChangeText={subject => this.setState({subject})}
                onSubmitEditing={event => this.refs.body.focus()}
                value={this.state.subject}
              />
            </View>
            <View style={styles.addViewSpacing}>
              <Text style={styles.label}>Body</Text>
              <TextInput
                ref="body"
                style={[styles.box, { height: Math.min(Math.max(this.state.bodyHeight, 100), 200) }]}
                placeholder="Describe your prayer request here. We recommend using as much detail as you are comfortable with. There is no space limit."
                placeholderTextColor="#555"
                keyboardType="default"
                multiline={true}
                onChangeText={body => this.setState({body})}
                onContentSizeChange={event => {
                  this.setState({bodyHeight: event.nativeEvent.contentSize.height})
                }}
                value={this.state.body}
              />
            </View>
            <View style={[styles.center, styles.addViewSpacing]}>
              <TouchableOpacity
                onPress={this.submitPrayer}
                style={{padding: 10}}
              >
                <Text style={styles.buttonText}>Send</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
    )
  }
}
