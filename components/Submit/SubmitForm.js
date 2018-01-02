import React from 'react'
import axios from 'axios'
import { View, Text, TouchableOpacity, Keyboard, TextInput, SafeAreaView } from 'react-native'
import IP_ADDRESS from '../../config'
import styles from '../StyleSheet'

export default class SubmitForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subject: null,
      body: null,
      prayerSent: false,
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
    })
    .catch(console.error)
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.cover}>
          <View style={styles.addPadding}>
            { this.state.prayerSent
              ? <Text>Your prayer has been submitted</Text>
              : null }
            <Text>Subject</Text>
            <TextInput
              placeholder="Write the subject of your prayer here"
              placeholderTextColor="#777"
              keyboardType="default"
              onChangeText={subject => this.setState({subject})}
              value={this.state.subject}
            />
            <Text>Body</Text>
            <TextInput
              style={styles.flex1}
              placeholder="Describe your prayer request here. We recommend providing as much detail as you are comfortable with, as it will help the people that take up your prayer request."
              placeholderTextColor="#777"
              keyboardType="default"
              multiline={true}
              onChangeText={body => this.setState({body})}
              value={this.state.body}
            />
            <TouchableOpacity
              onPress={this.submitPrayer}
            >
              <Text>Submit Prayer</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    )
  }
}
